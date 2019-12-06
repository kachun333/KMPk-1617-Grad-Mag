import React, { useState } from "react";
import { Toolbar, Tabs, Tab, Button, IconButton, Box, Typography, MenuItem, Menu } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Translate, ArrowDropDown } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

// component level styling using withStyles
const useStyles = makeStyles((theme) => ({
  fitWidth: {
    width: "100%",
    maxWidth: "100vw"
  },
  logo: {
    width: "10vh",
    height: "10vh",
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  active: {
    color: theme.palette.primary.main
  },
  // button: {
  //   background: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%);",
  //   border: 0,
  //   borderRadius: 3,
  //   boxShadow: "0 3px 5px 2px rgba(107, 255, 228, 0.3)",
  //   color: "white",
  //   height: 48,
  //   padding: "0 30px"
  // },
  tab: {
    minWidth: "60px"
  },
}));
function NavbarDesktop({ onToggleDark }) {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [anchor, setAnchor] = useState(null);
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
          <img alt="" src="#" className={classes.fitWidth} />
        </IconButton>
        <Typography variant="h5" className={classes.title}>
          News
        </Typography>
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

            <Button onClick={onToggleDark}>
              Toggle Theme Type
              </Button>
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
