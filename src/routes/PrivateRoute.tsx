import { Navigate, useLocation } from "react-router-dom";
import { isAuth } from "./auth";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const auth = isAuth();
  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};

export default PrivateRoute;
