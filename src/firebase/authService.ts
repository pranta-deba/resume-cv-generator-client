import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth } from "./config";
import type { User } from "firebase/auth";

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

export const loginWithEmail = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const registerWithEmail = async (
  name: string,
  email: string,
  password: string,
  photoURL: string = ""
): Promise<User> => {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  if (result.user) {
    await updateProfile(result.user, {
      displayName: name,
      photoURL: photoURL,
    });
  }
  return result.user;
};

export const logout = () => {
  return signOut(auth);
};

export const onAuthChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};
