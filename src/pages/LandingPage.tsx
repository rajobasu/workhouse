import React from "react";
import styled from "styled-components";
import {
  Button,
  FlexColumn,
  FlexRow,
  margins,
  Text,
  WhiteBaseContainer,
} from "../css/css";
import logo from "../res/images/logo.png";
import tagline from "../res/images/tagline_white.jpeg";

export const LandingPage: React.FC = () => {
  return (
    <BackgroundContainer
      style={{
        margin: 0,
        paddingTop: 0,
        paddingBottom: "-20px",
        // backgroundImage: `url(${background})`,
        backgroundColor: "black",
        backgroundSize: "100%",
        display: "block",
        verticalAlign: "bottom",
      }}
    >
      <FlexColumn style={{ marginTop: margins.size5 }}>
        <Logo src={logo} />
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
              Unfortunately,not everyone has a decent home to live in!
            </Descriptor>
            <Descriptor>
              Everytime you workout, we match your effort in donations!
            </Descriptor>
            <Descriptor>
              Donate and volunteer to promote decent habitat for all!
            </Descriptor>
            <Descriptor> Earn points and NFTs by helping others!</Descriptor>
          </FlexColumn>
        </FlexRow>

        <SessionButton>
          <Text>Start a Session!</Text>
        </SessionButton>
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

const Descriptor = styled(Text)`
  align-content: start;
  align-items: start;
  text-align: start;
  font-weight: bold;
  margin-top: ${margins.size1};
  margin-bottom: ${margins.size1};
  justify-content: left;
  color: white;
  width: 100%;
`;

const SessionButton = styled(Button)`
  margin-top: ${margins.size6};
  width: 300px;
`;
