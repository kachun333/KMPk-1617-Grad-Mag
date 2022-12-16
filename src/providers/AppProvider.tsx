import React, { PropsWithChildren } from "react";
import AppTitleProvider from "./app-title/AppTitleProvider";
import AuthProvider from "./auth/AuthProvider";
import FirebaseProvider from "./firebase/FirebaseProvider";

const AppProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <FirebaseProvider>
      <AuthProvider>
        <AppTitleProvider>{children}</AppTitleProvider>
      </AuthProvider>
    </FirebaseProvider>
  );
};

export default AppProvider;
