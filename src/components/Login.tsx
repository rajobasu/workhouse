import React, {useEffect, useState} from "react";
import { WhiteBaseContainer } from "../css/css";
import {useAppContext} from "../context/AppContext"

export const Login: React.FC = () => {

  const { login } = useAppContext();

  async function handleLogin(e) {
    e.preventDefault();
    login();
  }

  return (
    <WhiteBaseContainer>
      <button onClick={handleLogin}>
          <span>Login</span>
      </button>
    </WhiteBaseContainer>
  );
};
