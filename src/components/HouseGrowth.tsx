import { FlexColumn } from "../css/css";
import styled from "styled-components";
import React from "react";
import { HouseAnimation } from "./HouseAnimation";
import { ProgressBar } from "./ProgressBar";

interface Props {
  progressValue: number;
  targetValue: number;
}

export const HouseGrowth: React.FC<Props> = ({
  progressValue,
  targetValue,
}) => {
  return (
    <Container>
      <HouseAnimation progressValue={progressValue} targetValue={targetValue} />
      <ProgressBar progressValue={progressValue} targetValue={targetValue} />
    </Container>
  );
};

const Container = styled(FlexColumn)`
  width: 100px;
`;
