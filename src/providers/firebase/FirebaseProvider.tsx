import { initializeApp } from "firebase/app";
import React, { PropsWithChildren, useMemo } from "react";
import { FIREBASE_CONFIG } from "./firebase.constants";
import FirebaseContext, { FirebaseContextValue } from "./FirebaseContext";

const FirebaseProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const firebaseContextValue: FirebaseContextValue = useMemo(() => {
    return {
      app: initializeApp(FIREBASE_CONFIG),
    };
  }, []);

  return (
    <FirebaseContext.Provider value={firebaseContextValue}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
