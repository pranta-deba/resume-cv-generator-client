import { selectUser } from "@/redux/features/user.slice";
import { useAppSelector } from "@/redux/hooks";
import { Navigate, useLocation } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
  const user = useAppSelector(selectUser);
  const location = useLocation();

  return user ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" replace={true} state={location.pathname} />
  );
};

export default ProtectedRoute;
