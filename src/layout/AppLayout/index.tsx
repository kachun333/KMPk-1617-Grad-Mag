import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Hidden from "@mui/material/Hidden";
import Toolbar from "@mui/material/Toolbar";
import HideOnScroll from "components/common/HideOnScroll";
import ShowOnScroll from "components/common/ShowOnScroll";
import AppFab from "layout/AppFab";
import Footer from "layout/Footer";
import NavbarDesktop from "layout/NavbarDesktop";
import NavbarMobile from "layout/NavbarMobile";
import AppProvider from "providers/AppProvider";
import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import * as S from "./index.styled";

const AppLayout: React.FC = () => {
  return (
    <AppProvider>
      <CssBaseline />
      <ScrollRestoration />
      <HideOnScroll>
        <AppBar color="inherit">
          <Hidden mdDown>
            <NavbarDesktop />
          </Hidden>
          <Hidden mdUp>
            <NavbarMobile />
          </Hidden>
        </AppBar>
      </HideOnScroll>
      {/* blank space under appbar & above banner */}
      <Toolbar />
      <S.OutletContainer>
        <Outlet />
      </S.OutletContainer>
      <Footer />
      <ShowOnScroll>
        <AppFab />
      </ShowOnScroll>
    </AppProvider>
  );
};

export default AppLayout;
