import React, { createContext, useContext, useEffect, useState } from "react";
import { emptyUser, PostUserInfoPayload, UserProfile } from "./Models";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from "../Firebase_config";
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


//used for user login 
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
//used to get user profile
const db = getFirestore();

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
  const [userAcc, setUserAcc] = useState<any>()  
  const [user, setUser] = useState<UserProfile | any>(emptyUser);
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

  const fetchUser = async () => {
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
      .then( async (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if(credential) {
            const token = credential.accessToken;
            //console.log("token -> " + token)
        }

        if(result.user && result.user.email && result.user.displayName) {
            const email = result.user.email
            const displayName = result.user.displayName
            const userRef = doc(db, "users", email);
            const docSnap = await getDoc(userRef);
            if(docSnap.exists()) {
                console.log('Existing user: ' + docSnap.data())
                setUser(docSnap.data());
            } else {
                console.log("new user")
                const userProfileData: UserProfile = {
                            name: displayName,
                            email: email,
                            points: 0,
                            verified: 1
                };
                await setDoc(doc(db, "users", email), userProfileData);
                setUser(userProfileData)
            }
            setUserAcc(result.user)
        }
      }).catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage)
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
