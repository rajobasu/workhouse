import React, { createContext, createRef, useContext } from "react";
import NotificationSystem from "react-notification-system";
import { colors, margins, Text } from "../css/css";

const NotifContext = createContext<{
  showNotif: {
    (notif: NotificationSystem.Notification): void;
  };
}>({ showNotif: () => undefined });

export const useNotifContext = () => useContext(NotifContext);

export const NotifProvider: React.FC = ({ children }) => {
  const notifSystem = createRef<NotificationSystem.System>();
  const showNotif = (notif: NotificationSystem.Notification) => {
    if (!notifSystem.current) {
      return;
    }

    const { message: originalMessage, level } = notif;
    const notifLevel = level || "success";
    const newNotif = { ...notif, message: "", level: notifLevel };

    switch (notifLevel) {
      case "success": {
        notifSystem.current.addNotification({
          position: "tc",
          dismissible: false,
          children: <Text>{originalMessage}</Text>,
          ...newNotif,
        });
        break;
      }
      case "error": {
        notifSystem.current.addNotification({
          position: "tc",
          dismissible: false,
          children: <Text>{originalMessage}</Text>,
          ...newNotif,
        });
        break;
      }
      default: {
        notifSystem.current.addNotification({
          position: "tc",
          dismissible: false,
          ...notif,
        });
      }
    }
  };

  const notifContextValue = { showNotif };

  const styles = {
    Containers: {
      DefaultStyle: {
        width: "100%",
        maxWidth: "600px",
      },
      tc: {
        left: "40%",
        margin: `0px -200px`,
      },
    },
    NotificationItem: {
      DefaultStyle: {
        borderRadius: 10,
        display: "inline-table",
        padding: margins.size1,
        margin: "auto",
      },
      success: {
        backgroundColor: colors.lightGreen,
        border: "none",
      },
      error: {
        backgroundColor: colors.lightRed,
        border: "none",
      },
    },
  };

  return (
    <NotifContext.Provider value={notifContextValue}>
      <NotificationSystem ref={notifSystem} style={styles} />
      {children}
    </NotifContext.Provider>
  );
};
