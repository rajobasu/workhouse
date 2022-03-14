import React, { useEffect, useState } from "react";
import {
  FlexColumn,
  FlexRow,
  FullButton,
  Text,
  WhiteBaseContainer,
} from "../css/css";
import { HouseGrowth } from "../components/HouseGrowth";
import { useNotifContext } from "../context/notif-context";
import { WorkoutInfoModal } from "../components/WorkoutInfoModal";
import { useAppContext, useUser } from "../context/AppContext";
import { getUserLevel } from "../util/util";

function getRandomInt(max) {
  return Math.random() * max;
}

export const SessionPage: React.FC = () => {
  const user = useUser();
  const [progressValue, setProgressValue] = useState(user.points); // we will also get this from the user level
  const nextTarget = getUserLevel(user.points)?.targetScore!!;
  const [targetValue, setTargetValue] = useState(nextTarget); // we ideally get this from the user level
  const [initialProgress, setInitialProgress] = useState(0);
  const [sessionInProgress, setSessionInProgress] = useState(false);
  const [currentInterval, setCurrentInterval] = useState<
    NodeJS.Timer | undefined
  >(undefined);
  const { showNotif } = useNotifContext();
  const [showInfoModal, setShowInfoModal] = useState(false);

  const { updateUser, fetchUser } = useAppContext();

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

  const stopButtonClicked = async () => {
    if (!sessionInProgress) {
      return;
    }
    showNotif({
      level: "success",
      message: "Your session has ended",
    });
    setSessionInProgress(false);
    // we do a bunch of other stuff here.
    await updateUser({ points: Math.floor(progressValue * 100) / 100 });
    await fetchUser();
    setShowInfoModal(true);
  };

  const closeInfoModal = () => {
    setShowInfoModal(false);
  };

  const updateTarget = () => {
    const newValue = (targetValue) => targetValue * 10;
    setTargetValue(newValue);
  };

  useEffect(() => {
    if (progressValue >= targetValue) {
      console.log("how can this be?");
      updateTarget();
    }
  }, [progressValue, targetValue]);

  const updateProgress = () => {
    console.log("trying to update");
    const newValue = (progressValue) => progressValue + 0.2 + getRandomInt(1);
    setProgressValue(newValue);
  };

  useEffect(() => {
    console.log("we are getting a timer hit");
    console.log(progressValue);
  }, [progressValue]);

  useEffect(() => {
    console.log(sessionInProgress);
    console.log(currentInterval);
    if (sessionInProgress && currentInterval === undefined) {
      // new session is started
      console.log("this is first");
      const intervalId = setInterval(updateProgress, 1000);
      setCurrentInterval(intervalId);
    } else if (!sessionInProgress && currentInterval !== undefined) {
      // last session is stopped
      console.log("this was also called??");
      if (currentInterval) {
        clearInterval(currentInterval);
      }
    }
  }, [sessionInProgress, currentInterval]);

  useEffect(() => {
    if (!sessionInProgress) {
      setCurrentInterval(undefined);
    }
  }, [sessionInProgress]);

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
        <Text style={{ fontWeight: "bolder", fontSize: "xxx-large" }}>
          Start your workout Session!
        </Text>
        <HouseGrowth progressValue={progressValue} targetValue={targetValue} />

        <FlexRow>
          <FullButton onClick={startButtonClicked}>
            <Text>Start</Text>
          </FullButton>
          <FullButton onClick={stopButtonClicked}>
            <Text>Stop</Text>
          </FullButton>
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
