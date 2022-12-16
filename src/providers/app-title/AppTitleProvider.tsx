import React, { PropsWithChildren, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { getAppTitle } from "./app-title.utils";
import AppTitleContext, { AppTitleContextValue } from "./AppTitleContext";

const FirebaseProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const location = useLocation();

  const appTitleContextValue: AppTitleContextValue = useMemo(() => {
    return {
      appTitle: getAppTitle(location.pathname),
    };
  }, [location.pathname]);

  useEffect(() => {
    document.title = appTitleContextValue.appTitle;
  }, [appTitleContextValue.appTitle]);

  return (
    <AppTitleContext.Provider value={appTitleContextValue}>
      {children}
    </AppTitleContext.Provider>
  );
};

export default FirebaseProvider;
