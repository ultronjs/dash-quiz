import { Navigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

export const RequireAuth = ({ children }) => {
  const { currentUser } = useAuth()
  return currentUser !== null ? children : <Navigate to="/login" replace />;
};
