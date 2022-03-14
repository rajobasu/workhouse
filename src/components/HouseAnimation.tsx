import React from "react";
import { margins } from "../css/css";
import styled from "styled-components";
import house1 from "../res/images/house1.png";

interface Props {
  progressValue: number;
  targetValue: number;
}

export const HouseAnimation: React.FC<Props> = ({
  progressValue,
  targetValue,
}) => {
  return <HouseImage src={house1} />;
};

const HouseImage = styled.img`
  margin-top: ${margins.size6};
  width: 50%;
  height: 50%;
  max-width: inherit;
  max-height: inherit;
`;
