import React from "react";
import { colors, FlexRow, Text } from "../css/css";
import { useUser } from "../context/AppContext";
import { LoginButton } from "../pages/Login";

export const Navbar: React.FC = () => {
  const user = useUser();
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
      }}
    >
      <Text style={{ fontWeight: "bolder", color: colors.white }}>
        {user.name || "Login To Continue"}
      </Text>
      <LoginButton />
    </FlexRow>
  );
};
