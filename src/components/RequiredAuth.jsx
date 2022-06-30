import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Navigate, useLocation } from "react-router-dom";

export const RequiredAuth = ({ children }) => {
  const location = useLocation();

  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  console.log(isAuth, "isAuth");
  if (isAuth) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
};
