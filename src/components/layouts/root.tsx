import { Outlet } from "react-router-dom";
import Header from "../ui/header";
import Footer from "../ui/footer";
import { useAppSelector } from "@/redux/hooks";
import { selectUser, setUser } from "@/redux/features/user.slice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthChange } from "@/firebase/authService";

const Root = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthChange((currentUser) => {
      if (!user && currentUser) {
        dispatch(
          setUser({
            id: currentUser.uid,
            name: currentUser.displayName,
            email: currentUser.email,
            image: currentUser.photoURL,
            createdAt: currentUser.metadata.creationTime,
            lastSignInTime: currentUser.metadata.lastSignInTime,
          })
        );
      }
    });

    return () => unsubscribe();
  }, [dispatch, user]);

  console.log(user);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
