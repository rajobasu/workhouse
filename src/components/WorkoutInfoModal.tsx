import React from "react";
import { Modal } from "../Modal";
import { Button, FlexColumn, FlexRow, Text } from "../css/css";
import { useNavigate } from "react-router-dom";

interface Props {
  handleClose: () => void;
  showModal: boolean;
  actualCaloriesBurned: number;
}

export const WorkoutInfoModal: React.FC<Props> = ({
  handleClose,
  showModal,
  actualCaloriesBurned,
}) => {
  const caloriesBurned = Math.floor(actualCaloriesBurned * 100) / 100;
  const targetValueForPaintJob = 40;
  const numNeeded = Math.floor(targetValueForPaintJob / caloriesBurned);
  const donationMatched = Math.floor(caloriesBurned * 100) / 10000;
  const navigator = useNavigate();

  return (
    <Modal handleClose={handleClose} showModal={showModal}>
      <FlexColumn>
        <Text bold>Habitat for All</Text>
        <Text>
          Congrats! You have burnt{" "}
          <span style={{ fontWeight: "bold" }}>{caloriesBurned} </span> calories
          in this workout session.
        </Text>
        <Text>
          Instead of {numNeeded} such sessions, you could have volunteered to
          paint someone's home and burned the same number of calories in total.
        </Text>
        <Text>
          Instead of volunteering, you can also donate{" "}
          <span style={{ fontWeight: "bold" }}> directly</span> to Habitat for
          Singapore's Website. Not only that, we will also donate SGD $
          {donationMatched} for the cause!
        </Text>
        <FlexRow>
          <Button onClick={() => {window.location.href = 'https://give.asia/charity/habitat_for_humanity_singapore'}}>
            <Text>Donate!</Text>
          </Button>
          <Button onClick={() => navigator("/volunteer")}>
            <Text> Volunteer! </Text>
          </Button>
        </FlexRow>
      </FlexColumn>
    </Modal>
  );
};
