/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

const AdminRoutes = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to='/signIn'></Navigate>
  }
  return children;
};

export default AdminRoutes;
