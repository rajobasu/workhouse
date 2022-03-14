import React from "react";
import styled from "styled-components";
import {
  FlexColumn,
  FlexRow,
  FullButton,
  margins,
  Text,
  WhiteBaseContainer,
} from "../css/css";
import logo from "../res/images/logo.png";
import tagline from "../res/images/tagline_white.jpeg";
import { useNavigate } from "react-router";
import logoText from "../res/images/logotext.png";

export const LandingPage: React.FC = () => {
  const navigator = useNavigate();
  const redirectToSessionPage = () => {
    navigator("/session");
  };
  const redirectToDashboardPage = () => {
    navigator("/dashboard");
  };

  return (
    <BackgroundContainer
      style={{
        margin: 0,
        paddingTop: 0,
        // backgroundImage: `url(${background})`,
        backgroundColor: "black",
        backgroundSize: "100%",
        display: "block",
        verticalAlign: "bottom",
      }}
    >
      <FlexColumn style={{ marginTop: margins.size5 }}>
        <FlexRow>
          <Logo src={logo} />
          <LogoText src={logoText} />
        </FlexRow>

        <FlexRow>
          <Tagline src={tagline} />
          <FlexColumn
            style={{
              textAlign: "flex-start",
              alignContent: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <Descriptor>
              The unfortunate reality is that many people don’t have the
              opportunity to feel the comfort and reassurance that a home brings
              with itself.
            </Descriptor>
            <Descriptor>
              Help us in building roofs over people’s heads and ensuring that
              genuine smiles adorn the faces of several.
            </Descriptor>
            <Descriptor style={{ fontSize: "smaller", marginTop: "15px" }}>
              Just knowing that one has a home to go back to, at the end of a
              tiring day, can bring the widest smile onto the faces of several.
              Many don’t have that luxury especially when they should. Let’s
              come together with Habitat for Humanity Singapore to tackle one of
              United Nation’s sustainable goals for 2030- poverty.
            </Descriptor>
          </FlexColumn>
        </FlexRow>

        <FlexRow>
          <SessionButton onClick={redirectToDashboardPage}>
            <Text>Go to your dashboard!</Text>
          </SessionButton>
          <SessionButton onClick={redirectToSessionPage}>
            <Text>Start a Workout Session!</Text>
          </SessionButton>
        </FlexRow>
      </FlexColumn>
    </BackgroundContainer>
  );
};

const BackgroundContainer = styled(WhiteBaseContainer)`
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  border: 2px solid black;
  overflow: hidden;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
`;

const Tagline = styled.img`
  width: 400px;
  height: 200px;
`;
const LogoText = styled.img`
  width: 80%;
  height: 100px;
`;

const Descriptor = styled(Text)`
  align-content: start;
  align-items: start;
  text-align: start;
  margin-top: ${margins.size1};
  margin-bottom: ${margins.size1};
  justify-content: left;
  color: white;
  width: 500px;
`;

const SessionButton = styled(FullButton)`
  margin-top: ${margins.size6};
  width: 600px;
  height: 100%;
  margin-right: ${margins.size3};
  margin-left: ${margins.size3};
`;
