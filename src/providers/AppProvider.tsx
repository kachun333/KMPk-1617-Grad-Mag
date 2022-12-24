import React, { PropsWithChildren } from "react";
import AppTitleProvider from "./app-title/AppTitleProvider";
import AuthProvider from "./auth/AuthProvider";
import FirebaseProvider from "./firebase/FirebaseProvider";
import AppThemeProvider from "./theme/AppThemeProvider";

const AppProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <FirebaseProvider>
      <AuthProvider>
        <AppThemeProvider>
          <AppTitleProvider>{children}</AppTitleProvider>
        </AppThemeProvider>
      </AuthProvider>
    </FirebaseProvider>
  );
};

export default AppProvider;
