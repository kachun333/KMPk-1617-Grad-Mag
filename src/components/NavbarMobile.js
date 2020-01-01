import React, { useState, useEffect, Fragment } from "react";
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import makeStyles from "@material-ui/styles/makeStyles";
import MenuIcon from '@material-ui/icons/Menu';
import ArrowForward from '@material-ui/icons/ArrowForward';
// import  Menu as MenuIcon from '@material-ui/icons/Translate';
// import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
// import Brightness4 from '@material-ui/icons/Brightness4';
// import Brightness7 from '@material-ui/icons/Brightness7';
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux'
import Logo from '../assets/images/logo.png';
import DefaultAvatar from '../assets/images/favicon.png';
import { useFirebase } from 'react-redux-firebase';

// component level styling using withStyles
const useStyles = makeStyles((theme) => ({
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
  const verified = useSelector(state => state.firebase.profile.verified);
  //set AppBar Title
  const [title, setTitle] = useState("Our Promise");
  const location = useLocation();
  useEffect(() => {
    let newTitle = capitalizeFirstLetter(location.pathname.split("/")[1]);
    setTitle(newTitle);
  }, [location])

  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();

  const handleOpenMenu = () => {
    setIsOpen(true)
  };
  const handleCloseMenu = () => {
    setIsOpen(false)
  };

  const isLoggedin = useSelector(state => state.firebase.auth.uid);
  const avatar = useSelector(state => state.firebase.profile.avatarUrl);

  const firebase = useFirebase();
  const handleLogout = () => {
    firebase.logout();
    setIsOpen(false)
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
            <Avatar alt="me" src={avatar || DefaultAvatar} className={classes.avatar} />
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
        {!verified ? 
          (<Button
            component={NavLink}
            to="/auth/verify"
            activeClassName={classes.active}
            className={classes.tab}
            onClick={handleCloseMenu}
          >
            verify
          </Button>)
          : null
        }
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
        {/* <Typography className={classes.tab} variant="overline">
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
        </div> */}
      </Drawer>
    </Fragment>
  );
}

export default NavbarMobile;
