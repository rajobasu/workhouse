import React from "react";
import { Login } from "./Login";
import { useUser } from "../context/AppContext";

export const Authenticate: React.ElementType = ({ children }) => {
  const user = useUser();
  if (user.verified === 1) {
    return children;
  }

  return <Login />;
};
