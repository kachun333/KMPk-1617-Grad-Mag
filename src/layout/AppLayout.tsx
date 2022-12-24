import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Hidden from "@mui/material/Hidden";
import Toolbar from "@mui/material/Toolbar";
import HideOnScroll from "components/common/HideOnScroll";
import ShowOnScroll from "components/common/ShowOnScroll";
import AppProvider from "providers/AppProvider";
import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import AppFab from "./AppFab";
import Footer from "./Footer";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const AppLayout: React.FC = () => {
  return (
    <AppProvider>
      <CssBaseline />
      <ScrollRestoration />
      <HideOnScroll>
        <AppBar color="inherit">
          <Hidden smDown>
            <NavbarDesktop />
          </Hidden>
          <Hidden mdUp>
            <NavbarMobile />
          </Hidden>
        </AppBar>
      </HideOnScroll>
      {/* blank space under appbar & above banner */}
      <Toolbar />
      <Outlet />
      <Footer />
      <ShowOnScroll>
        <AppFab />
      </ShowOnScroll>
    </AppProvider>
  );
};

export default AppLayout;
