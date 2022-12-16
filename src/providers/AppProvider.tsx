import React, { PropsWithChildren } from "react";
import FirebaseProvider from "./firebase/FirebaseProvider";

const AppProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return <FirebaseProvider>{children}</FirebaseProvider>;
};

export default AppProvider;
