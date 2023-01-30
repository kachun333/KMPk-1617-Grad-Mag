import ArrowForward from "@mui/icons-material/ArrowForward";
import LiveTv from "@mui/icons-material/LiveTv";
import MenuIcon from "@mui/icons-material/Menu";
import Person from "@mui/icons-material/Person";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Logo from "assets/images/logo.webp";
import useAppTitle from "providers/app-title/useAppTitle";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const PREFIX = "NavbarMobile";

const classes = {
  appbar: `${PREFIX}-appbar`,
  logo: `${PREFIX}-logo`,
  appTitle: `${PREFIX}-appTitle`,
  avatar: `${PREFIX}-avatar`,
  login: `${PREFIX}-login`,
  drawerPaper: `${PREFIX}-drawerPaper`,
  listItem: `${PREFIX}-listItem`,
  icon: `${PREFIX}-icon`,
};

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled("div")(({ theme }) => ({
  [`& .${classes.appbar}`]: {
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

  [`& .${classes.avatar}`]: {
    margin: theme.spacing(1),
  },

  [`& .${classes.login}`]: {
    margin: `${theme.spacing(1)} ${theme.spacing(2)}`,
  },

  [`& .${classes.drawerPaper}`]: {
    width: 220,
  },

  [`& .${classes.listItem}.active`]: {
    borderLeft: `3px solid ${theme.palette.primary.main}`,
  },

  [`& .${classes.icon}`]: {
    marginLeft: theme.spacing(2),
  },
}));

function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const { appTitle } = useAppTitle();

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <Root>
      <Toolbar className={classes.appbar}>
        <Button id="logo" component={NavLink} to="/">
          <img alt="logo" src={Logo} className={classes.logo} />
        </Button>
        <Typography noWrap variant="h6" className={classes.appTitle}>
          {appTitle}
        </Typography>
        <IconButton id="sidenav-btn" onClick={handleOpenMenu} size="large">
          <MenuIcon />
        </IconButton>
      </Toolbar>
      {/* the side navigavtion menu */}
      <Drawer
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
        open={isOpen}
        onClose={handleCloseMenu}
      >
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="nowrap"
          alignItems="center"
          justifyContent="space-between"
          mb={2}
          mt={2}
        >
          <IconButton onClick={handleCloseMenu} size="large">
            <ArrowForward />
          </IconButton>
        </Box>
        <List>
          <ListItemButton
            component={NavLink}
            to="/graduates"
            className={classes.listItem}
            onClick={handleCloseMenu}
          >
            <ListItemIcon className={classes.icon}>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Graduates" />
          </ListItemButton>
          <ListItemButton
            component={NavLink}
            to="/videos"
            className={classes.listItem}
            onClick={handleCloseMenu}
          >
            <ListItemIcon className={classes.icon}>
              <LiveTv />
            </ListItemIcon>
            <ListItemText primary="KMPk TV" />
          </ListItemButton>
        </List>
      </Drawer>
    </Root>
  );
}

export default NavbarMobile;
