import React, { useEffect, useState } from "react";
import {
  Button,
  FlexColumn,
  FlexRow,
  Text,
  WhiteBaseContainer,
} from "../css/css";
import { HouseGrowth } from "../components/HouseGrowth";
import { useNotifContext } from "../context/notif-context";
import { WorkoutInfoModal } from "../components/WorkoutInfoModal";

function getRandomInt(max) {
  return Math.random() * max;
}

export const SessionPage: React.FC = () => {
  const [progressValue, setProgressValue] = useState(0); // we will also get this from the user level
  const [targetValue, setTargetValue] = useState(100); // we ideally get this from the user level
  const [initialProgress, setInitialProgress] = useState(0);
  const [sessionInProgress, setSessionInProgress] = useState(false);
  const [currentInterval, setCurrentInterval] = useState<
    NodeJS.Timer | undefined
  >(undefined);
  const { showNotif } = useNotifContext();
  const [showInfoModal, setShowInfoModal] = useState(false);

  const startButtonClicked = () => {
    if (sessionInProgress) {
      return;
    }

    showNotif({
      level: "success",
      message: "New session has been started",
    });
    setSessionInProgress(true);
    setInitialProgress(progressValue);
  };

  const stopButtonClicked = () => {
    if (!sessionInProgress) {
      return;
    }
    showNotif({
      level: "success",
      message: "Your session has ended",
    });
    setSessionInProgress(false);
    // we do a bunch of other stuff here.
    setShowInfoModal(true);
  };

  const closeInfoModal = () => {
    setShowInfoModal(false);
  };

  const updateProgress = () => {
    const newValue = (progressValue) => progressValue + 0.2 + getRandomInt(1);
    setProgressValue(newValue);
  };

  useEffect(() => {
    console.log("we are getting a timer hit");
    console.log(progressValue);
  }, [progressValue]);

  useEffect(() => {
    if (sessionInProgress && currentInterval === undefined) {
      // new session is started
      const intervalId = setInterval(updateProgress, 1000);
      setCurrentInterval(intervalId);
      return () => clearInterval(intervalId);
    } else if (!sessionInProgress && currentInterval !== undefined) {
      // last session is stopped
      if (currentInterval) {
        clearInterval(currentInterval);
        setCurrentInterval(undefined);
      }
    }
  }, [sessionInProgress, currentInterval]);

  return (
    <WhiteBaseContainer>
      <FlexColumn
        style={{
          maxWidth: "500px",
          minHeight: "400px",
          maxHeight: "inherit",
          margin: "auto",
        }}
      >
        <HouseGrowth progressValue={progressValue} targetValue={targetValue} />

        <FlexRow>
          <Button onClick={startButtonClicked}>
            <Text>Start</Text>
          </Button>
          <Button onClick={stopButtonClicked}>
            <Text>Stop</Text>
          </Button>
        </FlexRow>
      </FlexColumn>
      {showInfoModal && (
        <WorkoutInfoModal
          handleClose={closeInfoModal}
          showModal={showInfoModal}
          actualCaloriesBurned={progressValue - initialProgress}
        />
      )}
    </WhiteBaseContainer>
  );
};
