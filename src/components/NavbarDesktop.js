import React, { useState, useEffect } from "react";
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import makeStyles from "@material-ui/styles/makeStyles";
// import Translate from '@material-ui/icons/Translate';
// import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
// import Brightness4 from '@material-ui/icons/Brightness4';
// import Brightness7 from '@material-ui/icons/Brightness7';
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import Logo from '../assets/images/logo.png';
import DefaultAvatar from '../assets/images/favicon.png';
import { useFirebase } from 'react-redux-firebase';
import { useHistory } from "react-router-dom";

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
  active: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },
  tab: {
    margin: `0 ${theme.spacing(0.5)}px`,
    minWidth: "60px"
  },
  login: {
    margin: `0 ${theme.spacing(1.5)}px`,
  }
}));

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function NavbarDesktop() {

  const isLoggedin = useSelector(state => state.firebase.auth.uid);
  const avatar = useSelector(state => state.firebase.profile.avatarUrl);
  //set AppBar Title
  const [title, setTitle] = useState("三年之约 Our Promise");
  const location = useLocation();
  useEffect(() => {
    let newTitle = capitalizeFirstLetter(location.pathname.split("/")[1]);
    if (newTitle) {
      setTitle(newTitle);
    }
  }, [location])

  const [avatarMenu, setAvatarMenu] = useState(null);
  const classes = useStyles();

  const firebase = useFirebase();
  const handleLogout = () => {
    setAvatarMenu(null);
    firebase.logout();
  };
  return (
    <Toolbar
      className={classes.appbar}>
      <Button id="logo" component={NavLink} to="/">
        <img alt="logo" src={Logo} className={classes.logo} />
      </Button>
      <Typography variant="h5" className={classes.title}>
        {title}
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="nowrap"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Box>
          <Button
            component={NavLink}
            exact
            to="/"
            activeClassName={classes.active}
            className={classes.tab}
          >
            home
          </Button>
          <Button
            component={NavLink}
            to="/graduates"
            activeClassName={classes.active}
            className={classes.tab}
          >
            graduates
          </Button>
          <Button
            component={NavLink}
            to="/committee"
            activeClassName={classes.active}
            className={classes.tab}
          >
            committee
          </Button>
          {/* <IconButton>
            <Brightness7 />
          </IconButton>
          <Button onClick={(e) => { setLanguageMenu(e.currentTarget) }}>
            <Translate />
            <ArrowDropDown />
          </Button>
          <Menu
            anchorEl={languageMenu}
            open={Boolean(languageMenu)}
            onClose={() => { setLanguageMenu(null) }}
          >
            <MenuItem
              component={Button}
              onClick={() => handleLanguageChange("ch")}
            >
              中文
                </MenuItem>
            <MenuItem
              component={Button}
              onClick={() => handleLanguageChange("en")}
            >
              English
                </MenuItem>
          </Menu> */}
          {isLoggedin ? (
            <>
              <IconButton onClick={(e) => { setAvatarMenu(e.currentTarget) }}>
                <Avatar alt="me" src={avatar || DefaultAvatar} />
              </IconButton>
              <Menu
                anchorEl={avatarMenu}
                open={Boolean(avatarMenu)}
                onClose={() => { setAvatarMenu(null) }}
              >
                <VerifyMenuItem />
                <MenuItem
                  component={Button}
                  onClick={handleLogout}
                >
                  Logout
                </MenuItem>
              </Menu>
            </>
          ) :
            <Button className={classes.login} component={NavLink} to="/auth/login" variant="contained" color="primary" >
              Login
            </Button>
          }
        </Box>
      </Box>
    </Toolbar>
  );
}

function VerifyMenuItem() {
  const history = useHistory();
  const verified = useSelector(state => state.firebase.profile.verified);
  return (
    <>
      {
        verified ?
          null :
          <MenuItem
            component={Button}
            onClick={() => { history.push("/auth/verify") }}
          >
            Verify
        </MenuItem>
      }
    </>
  );
}

export default NavbarDesktop;
