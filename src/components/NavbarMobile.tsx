import React, { useState, useEffect, Fragment } from "react";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForward from "@mui/icons-material/ArrowForward";
import Person from "@mui/icons-material/Person";
import Group from "@mui/icons-material/Group";
import Book from "@mui/icons-material/Book";
import LiveTv from "@mui/icons-material/LiveTv";
import VerifiedUser from "@mui/icons-material/VerifiedUser";
import ExitToApp from "@mui/icons-material/ExitToApp";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import { setAppTitle } from "../store/actions/appActions";
import Logo from "../assets/images/logo.png";
import DefaultAvatar from "../assets/images/favicon.png";
const PREFIX = "NavbarMobile";

const classes = {
  appbar: `${PREFIX}-appbar`,
  logo: `${PREFIX}-logo`,
  appTitle: `${PREFIX}-appTitle`,
  avatar: `${PREFIX}-avatar`,
  login: `${PREFIX}-login`,
  drawerPaper: `${PREFIX}-drawerPaper`,
  active: `${PREFIX}-active`,
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

  [`& .${classes.active}`]: {
    borderLeft: `3px solid ${theme.palette.primary.main}`,
  },

  [`& .${classes.icon}`]: {
    marginLeft: theme.spacing(2),
  },
}));

function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const verified = useSelector((state) => state.firebase.profile.verified);
  const isLoggedin = useSelector((state) => state.firebase.auth.uid);
  const avatar = useSelector((state) => state.firebase.profile.avatarUrl);
  // set AppBar Title
  const dispatch = useDispatch();
  const appTitle = useSelector((state) => state.app.appTitle);
  const location = useLocation();
  const currentUrl = location.pathname;
  useEffect(() => {
    dispatch(setAppTitle(currentUrl));
  }, [currentUrl, dispatch]);

  const handleOpenMenu = () => {
    setIsOpen(true);
  };
  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const firebase = useFirebase();
  const handleLogout = () => {
    firebase.logout();
    setIsOpen(false);
  };
  return (
    <Root>
      <Toolbar className={classes.appbar}>
        <Button id="logo" component={NavLink} to="/">
          <img alt="logo" src={Logo} className={classes.logo} />
        </Button>
        <Typography variant="h5" className={classes.appTitle}>
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
          {isLoggedin ? (
            <Avatar
              alt="me"
              src={avatar || DefaultAvatar}
              className={classes.avatar}
            />
          ) : (
            <Button
              className={classes.login}
              component={NavLink}
              to="/auth/login"
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          )}
        </Box>
        <List>
          <ListItem
            component={NavLink}
            exact
            to="/graduates"
            activeClassName={classes.active}
            onClick={handleCloseMenu}
            button
          >
            <ListItemIcon className={classes.icon}>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Graduates" />
          </ListItem>
          <ListItem
            component={NavLink}
            exact
            to="/lecturers"
            activeClassName={classes.active}
            onClick={handleCloseMenu}
            button
          >
            <ListItemIcon className={classes.icon}>
              <Group />
            </ListItemIcon>
            <ListItemText primary="Lecturers" />
          </ListItem>
          <ListItem
            component={NavLink}
            exact
            to="/videos"
            activeClassName={classes.active}
            onClick={handleCloseMenu}
            button
          >
            <ListItemIcon className={classes.icon}>
              <LiveTv />
            </ListItemIcon>
            <ListItemText primary="KMPk TV" />
          </ListItem>
          <ListItem
            component={NavLink}
            exact
            to="/magazine"
            activeClassName={classes.active}
            onClick={handleCloseMenu}
            button
          >
            <ListItemIcon className={classes.icon}>
              <Book />
            </ListItemIcon>
            <ListItemText primary="Magazine" />
          </ListItem>
          {!verified && isLoggedin ? (
            <ListItem
              component={NavLink}
              exact
              to="/auth/verify"
              activeClassName={classes.active}
              onClick={handleCloseMenu}
              button
            >
              <ListItemIcon className={classes.icon}>
                <VerifiedUser />
              </ListItemIcon>
              <ListItemText primary="Verify" />
            </ListItem>
          ) : null}
          {isLoggedin ? (
            <ListItem onClick={handleLogout} button>
              <ListItemIcon className={classes.icon}>
                <ExitToApp />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          ) : null}
        </List>
      </Drawer>
    </Root>
  );
}

export default NavbarMobile;
