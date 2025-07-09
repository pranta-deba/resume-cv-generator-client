import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <FileText className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">
              ResumeBuilder
            </span>
          </div>
          <div className="flex space-x-4">
            <Link to="/auth/login">
              <button>Login</button>
            </Link>
            <Link to="/auth/register">
              <button>Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
