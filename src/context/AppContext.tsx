import React, { createContext, useContext, useEffect, useState } from "react";
import { emptyUser, PostUserInfoPayload, UserProfile } from "./Models";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from "../Firebase_config";

//used for user login 
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const noop = () => {
  console.error("App context provider not presented");
  return Promise.reject();
};

const AppContext = createContext<{
  user: UserProfile | undefined;
  updateUser: (userInfo: PostUserInfoPayload) => Promise<UserProfile>;
  fetchUser: () => Promise<UserProfile>;
  login: () => void;
  logout: () => void;
  userAcc: any | undefined
}>({
  user: undefined,
  updateUser: noop,
  fetchUser: noop,
  login: () => {},
  logout: () => {},
  userAcc: null
});

export const useAppContext = () => useContext(AppContext);
export const useUser = () => {
  const { user } = useContext(AppContext);
  return user || emptyUser;
};

export const AppProvider: React.FC = ({ children }) => {
  const [userAcc, setUserAcc] = useState<any>(null)  
  const [user, setUser] = useState<UserProfile>(emptyUser);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
            setUserAcc(user)
            console.log("curr user:" + user.displayName)
        } else {
            setUserAcc(null)
            console.log("no user")
        }
        setLoading(false)
    })
    return unsubscribe
  }, [])

  const fetchUser = () => {
    setUser(emptyUser);
    return Promise.reject(); // TODO this needs to be updated
  };
  const updateUser = (newUserInfo: PostUserInfoPayload) => {
    setUser(emptyUser);
    return Promise.reject(); // TODO this needs to be updated
  };
//Google signin with pop-up, setting user as the returned O-Auth token
  const login = () => {
      signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if(credential) {
            const token = credential.accessToken;
            //console.log("token -> " + token)
        }
        if(result.user) {
            setUserAcc(result.user);
            
        }
      }).catch((error) => {
        const errorMessage = error.message;
      }); 
  }

  const logout = () => {
    auth.signOut()
  }

  return (
    <AppContext.Provider value={{ user, updateUser, fetchUser, login, logout, userAcc}}>
      {! loading && children}
    </AppContext.Provider>
  );
};
