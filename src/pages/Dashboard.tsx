import React from "react";
import { FlexColumn, Text, WhiteBaseContainer } from "../css/css";
import { getUserLevel } from "../util/util";

export const Dashboard: React.FC = () => {
  //const user = useUser();
  const name = "Rajarshi Basu";
  const progressScore = 800;
  const nextMileStone = getUserLevel(progressScore)!!;

  return (
    <WhiteBaseContainer>
      <FlexColumn>
        <Text>{name}</Text>
        <Text>Progress score till now is {progressScore}</Text>
        <Text>
          Next milestone is {nextMileStone.level}, and for that you need{" "}
          {nextMileStone.targetScore - progressScore} more points
        </Text>
      </FlexColumn>
    </WhiteBaseContainer>
  );
};
