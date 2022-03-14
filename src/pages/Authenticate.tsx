import React from "react";
import { useUser } from "../context/AppContext";

export const Authenticate: React.ElementType = ({ children }) => {
  const user = useUser();
  console.log(
    `user name: , ${user.name} ,  ${user.email}, ${user.points}, ${user.verified}`
  );
  if (user.verified === 1) {
    return children;
  }

  return <></>;
};
