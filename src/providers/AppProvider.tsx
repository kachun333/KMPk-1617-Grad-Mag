import React, { PropsWithChildren } from "react";
import AppTitleProvider from "./app-title/AppTitleProvider";
import AppThemeProvider from "./theme/AppThemeProvider";

const AppProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <AppThemeProvider>
      <AppTitleProvider>{children}</AppTitleProvider>
    </AppThemeProvider>
  );
};

export default AppProvider;
