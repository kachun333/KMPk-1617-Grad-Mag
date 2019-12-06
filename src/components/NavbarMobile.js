import React, { useState, Fragment } from "react";
import {
  Drawer,
  Tabs,
  Tab,
  IconButton,
  Toolbar,
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
  ArrowDropDown
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

// component level styling using withStyles
const useStyles = makeStyles({
  fill: {
    width: "100%",
    height: "100%"
  },
  fitWidth: {
    width: "100%",
    maxWidth: "100vw"
  },
  logo: {
    width: "10vh",
    height: "10vh"
  },
  menu: {
    width: "30vh"
  },
  active: {
    borderLeft: "3px solid #aa00ff"
  },
  button: {
    background: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%);",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(107, 255, 228, 0.3)",
    color: "white",
    height: 48,
    padding: "0 30px"
  },
  float: {
    position: "absolute",
    zIndex: 2,
    width: "100%",
    maxWidth: "100vw"
  }
});

function NavbarMobile() {
  
  const [isOpen, setIsOpen] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [anchor, setAnchor] = useState(null);
  const classes = useStyles();
  // const [t, i18n] = useTranslation();
  
  const handleOpenMenu = () => {
    setIsOpen(true)
  };
  const handleCloseMenu = () => {
    setIsOpen(false)
  };
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
      <Fragment>
        <Toolbar>
          <Box
            className={classes.fitWidth}
            display="flex"
            flexDirection="row"
            flexWrap="nowrap"
            alignItems="center"
            justifyContent="space-between"
          >
            {/* the logo */}
            <IconButton className={classes.logo} component={NavLink} to="/">
              <img className={classes.fill} alt="" src="#" />
            </IconButton>
            {/* the menu icon */}
            <IconButton onClick={handleOpenMenu}>
              <MenuIcon />
            </IconButton>
          </Box>
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
                onClick={() => handleLanguageChange("en")}
              >
                English
              </MenuItem>
              <MenuItem
                component={Button}
                onClick={() => handleLanguageChange("ch")}
                className={classes.fillWidth}
              >
                中文
              </MenuItem>
            </Menu>
          </Box>
          <Tabs orientation="vertical" className={classes.menu}>
            <Tab
            label = "home"
              // label={t("home")}
              component={NavLink}
              exact
              to="/"
              activeClassName={classes.active}
              onClick={handleCloseMenu}
            />
            <Tab
            label="media"
              // label={t("media")}
              component={NavLink}
              to="/media"
              activeClassName={classes.active}
              onClick={handleCloseMenu}
            />
          </Tabs>
        </Drawer>
      </Fragment>
    );
  }

export default NavbarMobile;
