import { ThemeProvider } from "@emotion/react";
import createTheme from "@mui/material/styles/createTheme";
import React, { PropsWithChildren, useMemo } from "react";
import theme from "./theme.constants";

const AppThemeProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const muiTheme = useMemo(() => createTheme(theme), []);
  return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
