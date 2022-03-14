import React from "react";
import {
  colors,
  FlexColumn,
  FullButton,
  margins,
  Text,
  WhiteBaseContainer,
} from "../css/css";
import { getUserLevel } from "../util/util";
import { useUser } from "../context/AppContext";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const Dashboard: React.FC = () => {
  const user = useUser();
  const navigator = useNavigate();
  const progressScore = user.points + 130;
  const nextMileStone = getUserLevel(progressScore)!!;

  return (
    <WhiteBaseContainer
      style={{
        backgroundColor: colors.black,
        padding: 0,
        marginTop: margins.size4,
        justifyContent: "space-between",
      }}
    >
      <FlexColumn
        style={{
          justifyContent: "space-between",
          padding: 0,
          marginTop: margins.size5,
        }}
      >
        <WhiteText>Dashboard</WhiteText>
        <PostIt>
          <Text>
            Welcome to your dashboard,{" "}
            <span style={{ fontWeight: "bolder" }}>{user.name}</span>
          </Text>
          <Text>
            You are currently at level{" "}
            <span style={{ fontWeight: "bolder" }}>{nextMileStone.level}</span>,
            and need{" "}
            <span style={{ fontWeight: "bolder" }}>
              {nextMileStone.targetScore - progressScore}
            </span>{" "}
            to get to the next milestone.
          </Text>
        </PostIt>
        <FullButton onClick={() => navigator("/metamask")}>
          Check out your NFTs!
        </FullButton>
      </FlexColumn>
    </WhiteBaseContainer>
  );
};

const WhiteText = styled(Text)`
  width: 500px;
  min-width: 500px;
  color: ${colors.white};
  font-size: 80px;
  font-weight: bolder;
`;

const PostIt = styled.div`
  height: 300px;
  width: 500px;
  border-radius: 15px;
  background-color: ${colors.white};
  margin: 0;
`;
