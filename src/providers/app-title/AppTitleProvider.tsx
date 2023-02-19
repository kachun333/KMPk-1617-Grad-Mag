import React, { PropsWithChildren, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { getAppTitle, setDocumentTitle } from "./app-title.utils";
import AppTitleContext, { AppTitleContextValue } from "./AppTitleContext";

const AppTitleProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const location = useLocation();

  const appTitleContextValue: AppTitleContextValue = useMemo(() => {
    return {
      appTitle: getAppTitle(location.pathname),
    };
  }, [location.pathname]);

  useEffect(() => {
    setDocumentTitle(appTitleContextValue.appTitle);
  }, [appTitleContextValue.appTitle]);

  return (
    <AppTitleContext.Provider value={appTitleContextValue}>
      {children}
    </AppTitleContext.Provider>
  );
};

export default AppTitleProvider;
