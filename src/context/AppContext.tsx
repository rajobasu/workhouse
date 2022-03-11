import React, { createContext, useContext, useEffect, useState } from "react";
import { emptyUser, PostUserInfoPayload, UserProfile } from "./Models";

const noop = () => {
  console.error("App context provider not presented");
  return Promise.reject();
};

const AppContext = createContext<{
  user: UserProfile | undefined;
  updateUser: (userInfo: PostUserInfoPayload) => Promise<UserProfile>;
  fetchUser: () => Promise<UserProfile>;
}>({
  user: undefined,
  updateUser: noop,
  fetchUser: noop,
});

export const useAppContext = () => useContext(AppContext);
export const useUser = () => {
  const { user } = useContext(AppContext);
  return user || emptyUser;
};

export const AppProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserProfile>(emptyUser);
  useEffect(() => {});

  const fetchUser = () => {
    setUser(emptyUser);
    return Promise.reject(); // TODO this needs to be updated
  };
  const updateUser = (newUserInfo: PostUserInfoPayload) => {
    setUser(emptyUser);
    return Promise.reject(); // TODO this needs to be updated
  };

  return (
    <AppContext.Provider value={{ user, updateUser, fetchUser }}>
      {children}
    </AppContext.Provider>
  );
};
