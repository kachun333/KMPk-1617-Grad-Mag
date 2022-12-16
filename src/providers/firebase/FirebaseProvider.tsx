import React, { PropsWithChildren } from "react";
import FirebaseContext, { firebaseContextValue } from "./FirebaseContext";

const FirebaseProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <FirebaseContext.Provider value={firebaseContextValue}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
