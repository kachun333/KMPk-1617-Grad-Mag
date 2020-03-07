import React, { useState, useEffect, Fragment } from "react";
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import makeStyles from "@material-ui/styles/makeStyles";
import MenuIcon from '@material-ui/icons/Menu';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Person from '@material-ui/icons/Person';
import Group from '@material-ui/icons/Group';
import Book from '@material-ui/icons/Book';
import LiveTv from '@material-ui/icons/LiveTv';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import ExitToApp from '@material-ui/icons/ExitToApp';
import { NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { useFirebase } from 'react-redux-firebase';
import { setAppTitle } from '../store/actions/appActions';
import Logo from '../assets/images/logo.png';
import DefaultAvatar from '../assets/images/favicon.png';
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
  appTitle: {
    margin: `0 ${theme.spacing(2)}px`,
    flexGrow: 1,
  },
  avatar: {
    margin: theme.spacing(1),
  },
  login: {
    margin: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
  },
  drawerPaper: {
    width: 220,
  },
  active: {
    borderLeft: `3px solid ${theme.palette.primary.main}`
  },
  icon: {
    marginLeft: theme.spacing(2)
  }
}));

function NavbarMobile() {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const verified = useSelector(state => state.firebase.profile.verified);
  const isLoggedin = useSelector(state => state.firebase.auth.uid);
  const avatar = useSelector(state => state.firebase.profile.avatarUrl);
  //set AppBar Title
  const dispatch = useDispatch();
  const appTitle = useSelector(state => state.app.appTitle);
  const location = useLocation();
  const currentUrl = location.pathname;
  useEffect(() => {
    dispatch(setAppTitle(currentUrl))
  }, [currentUrl, dispatch])

  const handleOpenMenu = () => {
    setIsOpen(true)
  };
  const handleCloseMenu = () => {
    setIsOpen(false)
  };

  const firebase = useFirebase();
  const handleLogout = () => {
    firebase.logout();
    setIsOpen(false)
  };
  return (
    <Fragment>
      <Toolbar className={classes.appbar}>
        <Button id="logo" component={NavLink} to="/">
          <img alt="logo" src={Logo} className={classes.logo} />
        </Button>
        <Typography variant="h5" className={classes.appTitle}>
          {appTitle}
        </Typography>
        <IconButton id="sidenav-btn" onClick={handleOpenMenu}>
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
          <IconButton onClick={handleCloseMenu}>
            <ArrowForward />
          </IconButton>
          {isLoggedin ?
            <>
              <Avatar alt="me" src={avatar || DefaultAvatar} className={classes.avatar} />
            </>
            :
            <Button className={classes.login} component={NavLink} to="/auth/login" variant="contained" color="primary">
              Login
            </Button>
          }
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
            <ListItemIcon className={classes.icon}><Person /></ListItemIcon>
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
            <ListItemIcon className={classes.icon}><Group /></ListItemIcon>
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
            <ListItemIcon className={classes.icon}><LiveTv /></ListItemIcon>
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
            <ListItemIcon className={classes.icon}><Book /></ListItemIcon>
            <ListItemText primary="Magazine" />
          </ListItem>
          {(!verified && isLoggedin) ?
            <ListItem
              component={NavLink}
              exact
              to="/auth/verify"
              activeClassName={classes.active}
              onClick={handleCloseMenu}
              button
            >
              <ListItemIcon className={classes.icon}><VerifiedUser /></ListItemIcon>
              <ListItemText primary="Verify" />
            </ListItem>
            : null
          }
          {isLoggedin ?
            <ListItem
              onClick={handleLogout}
              button
            >
              <ListItemIcon className={classes.icon}><ExitToApp /></ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
            : null
          }
        </List>
      </Drawer>
    </Fragment>
  );
}

export default NavbarMobile;
