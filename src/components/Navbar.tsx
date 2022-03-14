import React from "react";
import { Button, colors, FlexRow, Text } from "../css/css";
import { useUser } from "../context/AppContext";
import { LoginButton } from "../pages/Login";
import styled from "styled-components";
import { useNavigate } from "react-router";

export const Navbar: React.FC = () => {
  const user = useUser();
  const navigator = useNavigate();
  return (
    <FlexRow
      style={{
        position: "absolute",
        top: 0,
        width: "100vw",
        height: "30px",
        paddingTop: "-10px",
        justifyContent: "space-between",
        backgroundColor: "#231f1f",
        borderBottom: "2px solid orange",
        margin: 0,
        overflow: "hidden",
      }}
    >
      <FlexRow style={{ padding: 0, margin: 0 }}>
        <Text
          style={{ fontWeight: "bolder", color: colors.white, padding: "10px" }}
        >
          {user.name || "Login To Continue"}
        </Text>
      </FlexRow>
      <FlexRow style={{ padding: 0, margin: 0 }}>
        {user.verified === 1 && (
          <>
            <RoundButton onClick={() => navigator("/")}>L</RoundButton>
            <RoundButton onClick={() => navigator("/dashboard")}>D</RoundButton>
            <RoundButton onClick={() => navigator("/session")}>S</RoundButton>
            <RoundButton onClick={() => navigator("/volunteer")}>V</RoundButton>
          </>
        )}
        <LoginButton />
      </FlexRow>
    </FlexRow>
  );
};

const RoundButton = styled(Button)`
  border-radius: 50%;
  text-align: center;
  width: 40px;
  height: 40px;
`;
