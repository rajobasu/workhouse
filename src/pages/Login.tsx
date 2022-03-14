import React from "react";
import { Button, WhiteBaseContainer } from "../css/css";
import { useAppContext } from "../context/AppContext";

export const Login: React.FC = () => {
  return (
    <WhiteBaseContainer>
      <LoginButton />
    </WhiteBaseContainer>
  );
};

export const LoginButton: React.FC = () => {
  const { login, user, logout, fetchUser } = useAppContext();

  async function handleLogin(e) {
    e.preventDefault();
    if (user.verified === 1) {
      logout();
    } else {
      login();
    }
    await Promise.all([fetchUser()]);
  }

  return (
    <Button onClick={handleLogin} style={{ maxWidth: "200px", margin: 0 }}>
      {user.verified === -1 && <span>Login</span>}
      {user.verified === 1 && <span>Logout</span>}
    </Button>
  );
};
