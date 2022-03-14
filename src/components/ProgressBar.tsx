import React from "react";
import styled from "styled-components";
import { colors, margins } from "../css/css";

interface Props {
  progressValue: number;
  targetValue: number;
}

export const ProgressBar: React.FC<Props> = ({
  progressValue,
  targetValue,
}) => {
  return (
    <Container style={{ marginTop: margins.size3 }}>
      <Background />
      <Progress percent={(progressValue * 100.0) / targetValue} />
    </Container>
  );
};
const Container = styled.div`
  height: 10px;
  width: 100%;
  position: relative;
`;

const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
  transition: width 1s ease-in-out;
`;

const Background = styled(BaseBox)`
  background: white;
  width: 100%;
`;

const Progress = styled(BaseBox)`
  background: ${colors.lightGreen};
  width: ${({ percent }) => percent}%;
`;
