import React, { useState, useEffect, Fragment } from "react";
import {
  Drawer,
  Avatar,
  Switch,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Button,
  withStyles,
  Menu,
  MenuItem
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  ArrowForward,
  Translate,
  ArrowDropDown,
  Brightness4,
  Brightness7,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux'
import Logo from '../assets/images/logo.png';
import { useFirebase } from 'react-redux-firebase';
import { useHistory } from "react-router-dom";

// component level styling using withStyles
const useStyles = makeStyles((theme) => ({
  fill: {
    width: "100%",
    height: "100%"
  },
  appbar: {
    width: "100%",
    maxWidth: "100vw",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
  },
  logo: {
    height: "40px",
  },
  title: {
    margin: `0 ${theme.spacing(2)}px`,
    flexGrow: 1,
  },
  login: {
    margin: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
  },
  active: {
    borderLeft: `3px solid ${theme.palette.primary.main}`
  },
  float: {
    position: "absolute",
    zIndex: 2,
    width: "100%",
    maxWidth: "100vw"
  },
  tab: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "180px",
  },
  icon: {
    margin: theme.spacing(0.5),
  },
  avatar: {
    margin: theme.spacing(1),
  }
}));

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function NavbarMobile() {
  //set AppBar Title
  const [title, setTitle] = useState("Our Promise");
  const location = useLocation();
  useEffect(() => {
    let newTitle = capitalizeFirstLetter(location.pathname.split("/")[1]);
    setTitle(newTitle);
  }, [location])

  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();
  // const [t, i18n] = useTranslation();

  const handleOpenMenu = () => {
    setIsOpen(true)
  };
  const handleCloseMenu = () => {
    setIsOpen(false)
  };

  const isLoggedin = useSelector(state => state.firebase.auth.uid);
  const avatar = useSelector(state => state.firebase.profile.avatarUrl);


  // const history = useHistory();
  const firebase = useFirebase();
  const handleLogout = () => {
    firebase.logout();
    setIsOpen(false)
  };
  const handleLanguageChange = language => {
    // i18n.changeLanguage(language);
  };

  return (
    <Fragment>
      <Toolbar className={classes.appbar}>
        <IconButton id="logo" component={NavLink} to="/">
          <img alt="logo" src={Logo} className={classes.logo} />
        </IconButton>
        <Typography variant="h5" className={classes.title}>
          {title}
        </Typography>
        <IconButton id="sidenav-btn" onClick={handleOpenMenu}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
      {/* the side navigavtion menu */}
      <Drawer
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
          <IconButton onClick={handleCloseMenu}>
            <ArrowForward />
          </IconButton>
          {isLoggedin ? (
            <Avatar alt="me" src={avatar || Logo} className={classes.avatar} />
          ) :
            <Button className={classes.login} component={NavLink} to="/auth/login" variant="contained" color="primary">
              Login
            </Button>
          }
        </Box>
        <Button
          component={NavLink}
          exact
          to="/"
          activeClassName={classes.active}
          onClick={handleCloseMenu}
        >
          home
          </Button>
        <Button
          component={NavLink}
          to="/graduates"
          activeClassName={classes.active}
          className={classes.tab}
          onClick={handleCloseMenu}
        >
          graduates
          </Button>
        <Button
          component={NavLink}
          to="/committee"
          activeClassName={classes.active}
          className={classes.tab}
          onClick={handleCloseMenu}
        >
          committee
          </Button>

        {isLoggedin ? 
          (<Button
            activeClassName={classes.active}
            className={classes.tab}
            onClick={handleLogout}
          >
            logout
          </Button>)
          : null
        }
        <Typography className={classes.tab} variant="overline">
          Toggle light
        </Typography>
        <div className={classes.tab}>
          <Brightness4 className={classes.icon} />
          <Switch
            checked={true}
            // onChange={toggleTheme()}
            color="primary"
            inputProps={{ 'aria-label': 'toggle theme' }}
          />
          <Brightness7 className={classes.icon} />
        </div>
        <Typography className={classes.tab} variant="overline">
          Language
        </Typography>
        <div className={classes.tab}>
          中文
          <Switch
            checked={true}
            // onChange={toggleTheme()}
            color="primary"
            inputProps={{ 'aria-label': 'toggle theme' }}
          />
          Eng
        </div>
      </Drawer>
    </Fragment>
  );
}

export default NavbarMobile;
