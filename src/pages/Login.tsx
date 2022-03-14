import React from "react";
import { WhiteBaseContainer } from "../css/css";
import { useAppContext } from "../context/AppContext";

export const Login: React.FC = () => {
  const { login, userAcc, logout } = useAppContext();

  async function handleLogin(e) {
    e.preventDefault();
    if (userAcc) {
      logout();
    } else {
      login();
    }
  }

  return (
    <WhiteBaseContainer>
      <button onClick={handleLogin}>
        {!userAcc && <span>Login</span>}
        {userAcc && <span>Logout</span>}
      </button>
    </WhiteBaseContainer>
  );
};
