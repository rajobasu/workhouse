import React from "react";
import { Button, FlexColumn, FlexRow, Text } from "../css/css";
import { HouseGrowth } from "../components/HouseGrowth";

export const SessionPage: React.FC = () => {
  return (
    <FlexColumn>
      <HouseGrowth progressValue={1} targetValue={2} />
      <FlexRow>
        <Button>
          <Text>Start</Text>
        </Button>
        <Button>
          <Text>Stop</Text>
        </Button>
      </FlexRow>
    </FlexColumn>
  );
};
