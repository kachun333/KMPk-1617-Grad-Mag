import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useMemo,
} from "react";
import { FirebaseApp, initializeApp } from "firebase/app";
import { FIREBASE_CONFIG } from "./firebase.constants";
import FirebaseContext, { FirebaseContextValue } from "./FirebaseContext";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const FirebaseProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const firebaseContextValue: FirebaseContextValue = useMemo(() => {
    return {
      app: initializeApp(FIREBASE_CONFIG),
    };
  }, []);

  const auth = useMemo(
    () => getAuth(firebaseContextValue.app),
    [firebaseContextValue.app]
  );

  const [user, loading, error] = useAuthState(auth);

  return (
    <FirebaseContext.Provider value={firebaseContextValue}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
