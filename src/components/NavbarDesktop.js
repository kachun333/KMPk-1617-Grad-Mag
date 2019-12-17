import React, { useState, useCallback, useEffect  } from "react";
import { Toolbar, Tabs, Tab, Avatar, Button, IconButton, Box, Typography, MenuItem, Menu } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Translate, ArrowDropDown, Brightness4, Brightness7 } from "@material-ui/icons";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch  } from 'react-redux';
import { setTitle } from '../store/actions/appActions'
import Logo from '../assets/images/logo.png';

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
  // const { title } = useSelector(state => state.app)
  // const dispatch = useDispatch();
  // const incrementCounter = useCallback(
  //   () => dispatch(setTitle("asdf")),
  //   [dispatch]
  // );
  const [title, setTitle] = useState("Our Promise");
  const location = useLocation();
  useEffect(() => {
    let newTitle = capitalizeFirstLetter(location.pathname.split("/")[1]);
    setTitle(newTitle);
  }, [location])

  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [anchor, setAnchor] = useState(null);
  const [isLoggedin, setIsLoggedin] = useState(false);
  // const [t, i18n] = useTranslation();
  const classes = useStyles();


  const handleOpenLanguageSelector = e => {
    setAnchor(e.currentTarget);
  };
  const handleCloseLanguageSelector = () => {
    setAnchor(null);
  };
  const handleLanguageChange = language => {
    setAnchor(null);
    // i18n.changeLanguage(language);
  };

  return (
    <Toolbar 
    className={classes.appbar}>
        <Button id="logo" component={NavLink} to="/">
          <img alt="logo" src={Logo} className={classes.logo} />
        </Button>
        <Typography variant="h5" className={classes.title}>
          {title? title: 'Our Promise'}
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
            <IconButton>
              <Brightness7 />
            </IconButton>
            <Button onClick={handleOpenLanguageSelector}>
              <Translate />
              <ArrowDropDown />
            </Button>
            <Menu
              anchorEl={anchor}
              open={Boolean(anchor)}
              onClose={handleCloseLanguageSelector}
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
            </Menu>
            {isLoggedin ? (
            <IconButton>
              <Avatar alt="me" src={Logo} />
            </IconButton>
            ) : 
            <Button className={classes.login} component={NavLink} to="/login"  variant="contained" color="primary" >
              Login
            </Button>
            }
          </Box>
        </Box>
    </Toolbar>
  );
}

export default NavbarDesktop;
