import React, { useState } from "react";
import { Toolbar, Tabs, Tab, Button, IconButton, Box, withStyles, MenuItem, Menu } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Translate, ArrowDropDown } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import "../i18n"; 
// component level styling using withStyles
const useStyles = makeStyles({
  fitWidth: {
    width: "100%",
    maxWidth: "100vw"
  },
  center: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  logo: {
    width: "10vh",
    height: "10vh"
  },
  // TODO make tabs get border color from theme
  active: {
    borderBottom: "3px solid #aa00ff"
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
  tab: {
    minWidth: "60px"
  },
  float: {
    position: "absolute",
    zIndex: 2,
    width: "100%",
    maxWidth: "100vw"
  }
});

function NavbarDesktop() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [anchor, setAnchor] = useState(null);
  // const [t, i18n] = useTranslation();
  const classes = useStyles();

  const handleOpenLanguageSelector = e => {
    setSelectedLanguage(e.currentTarget);
  };

  const handleCloseLanguageSelector = () => {
    setAnchor(null);
  };

  const handleLanguageChange = language => {
    setAnchor(null);
    // i18n.changeLanguage(language);
  };

  return (
    <Toolbar className={classes.float}>
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
          <img alt="" src="#" className={classes.fitWidth} />
        </IconButton>
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="nowrap"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Box mr={4}>
            <Tabs>
              <Tab
                label="home"
                // label={t("home")}
                component={NavLink}
                to="/"
                exact
                activeClassName={classes.active}
                className={classes.tab}
              />
              <Tab
                label="media"
                // label={t("media")}
                component={NavLink}
                to="/media"
                activeClassName={classes.active}
                className={classes.tab}
              />
            </Tabs>
          </Box>
          {/* language switch button */}
          <Box ml={4}>
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
          </Box>
        </Box>
      </Box>
    </Toolbar>
  );
}

export default NavbarDesktop;
