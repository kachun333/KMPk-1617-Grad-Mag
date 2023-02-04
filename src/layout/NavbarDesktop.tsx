import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Logo from "assets/images/logo.webp";
import useAppTitle from "providers/app-title/useAppTitle";
import React from "react";
import { NavLink } from "react-router-dom";

const PREFIX = "NavbarDesktop";

const classes = {
  appbar: `${PREFIX}-appbar`,
  logo: `${PREFIX}-logo`,
  appTitle: `${PREFIX}-appTitle`,
  tab: `${PREFIX}-tab`,
  login: `${PREFIX}-login`,
};

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  [`&.${classes.appbar}`]: {
    width: "100%",
    maxWidth: "100vw",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
  },

  [`& .${classes.logo}`]: {
    height: "40px",
  },

  [`& .${classes.appTitle}`]: {
    margin: `0 ${theme.spacing(2)}`,
    flexGrow: 1,
  },

  [`& .${classes.tab}.active`]: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },

  [`& .${classes.tab}`]: {
    margin: `0 ${theme.spacing(0.5)}`,
    minWidth: "60px",
  },

  [`& .${classes.login}`]: {
    margin: `0 ${theme.spacing(1.5)}`,
  },
}));

function NavbarDesktop() {
  const { appTitle } = useAppTitle();

  return (
    <StyledToolbar className={classes.appbar}>
      <Button id="logo" component={NavLink} to="/">
        <img alt="logo" src={Logo} className={classes.logo} />
      </Button>
      <Typography noWrap variant="h6" className={classes.appTitle}>
        {appTitle}
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="nowrap"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Box>
          <Button component={NavLink} to="/graduates" className={classes.tab}>
            graduates
          </Button>
          <Button component={NavLink} to="/videos" className={classes.tab}>
            KMPk TV
          </Button>
        </Box>
      </Box>
    </StyledToolbar>
  );
}

export default NavbarDesktop;
