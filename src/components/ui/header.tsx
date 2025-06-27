import { FileText, LogOutIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./button";
import { useAppSelector } from "@/redux/hooks";
import { clearUser, selectUser } from "@/redux/features/user.slice";
import { useDispatch } from "react-redux";
import { logout } from "@/firebase/authService";

const Header = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await logout();
    dispatch(clearUser());
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <FileText className="h-8 w-8 text-blue-600" />
            <Link to="/" className="ml-2 text-2xl font-bold text-gray-900">
              ResumeBuilder
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/register">
              <Button>Get Started</Button>
            </Link>
            {user && (
              <Button onClick={handleLogout}>
                <LogOutIcon />
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
