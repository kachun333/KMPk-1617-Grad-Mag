import React, { Component, Fragment } from "react";
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
import { NavLink } from "react-router-dom";
import i18n from "../i18n";
import { withTranslation } from "react-i18next";
import Logo from "../resources/Images/e3tLogo.svg";

// component level styling using withStyles
const styles = {
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
};
export class NavbarMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedLanguage: null,
      anchor: null
    };
    this.handleOpenMenu = this.handleOpenMenu.bind(this);
    this.handleCloseMenu = this.handleCloseMenu.bind(this);
    this.handleOpenLanguageSelector = this.handleOpenLanguageSelector.bind(
      this
    );
    this.handleCloseLanguageSelector = this.handleCloseLanguageSelector.bind(
      this
    );
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }
  handleOpenMenu = () => {
    this.setState({
      isOpen: true
    });
  };
  handleCloseMenu = () => {
    this.setState({
      isOpen: false
    });
  };
  handleOpenLanguageSelector = e => {
    this.setState({
      anchor: e.currentTarget
    });
  };
  handleCloseLanguageSelector = () => {
    this.setState({
      anchor: null
    });
  };
  handleLanguageChange = language => {
    this.setState({
      anchor: null
    });
    i18n.changeLanguage(language);
  };
  render() {
    const [ t, classes ] = this.props;
    return (
      <Fragment>
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
              <img className={classes.fill} alt="" src={Logo} />
            </IconButton>
            {/* the menu icon */}
            <IconButton onClick={this.handleOpenMenu}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
        {/* the side navigavtion menu */}
        <Drawer
          anchor="right"
          open={this.state.isOpen}
          onClose={this.handleCloseMenu}
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
            <IconButton onClick={this.handleCloseMenu}>
              <ArrowForward />
            </IconButton>

            <Button onClick={this.handleOpenLanguageSelector}>
              <Translate />
              <ArrowDropDown />
            </Button>
            <Menu
              anchorEl={this.state.anchor}
              open={Boolean(this.state.anchor)}
              onClose={this.handleCloseLanguageSelector}
            >
              <MenuItem
                component={Button}
                onClick={() => this.handleLanguageChange("en")}
              >
                English
              </MenuItem>
              <MenuItem
                component={Button}
                onClick={() => this.handleLanguageChange("ch")}
                className={classes.fillWidth}
              >
                中文
              </MenuItem>
            </Menu>
          </Box>
          <Tabs orientation="vertical" className={classes.menu}>
            <Tab
              label={t("home")}
              component={NavLink}
              exact
              to="/"
              activeClassName={classes.active}
              onClick={this.handleCloseMenu}
            />
            {/* TODO bring back tabs for mobile */}
            {/* <Tab
                label="Events"
                component={NavLink}
                to="/events"
                activeClassName={classes.active}
                onClick={this.handleCloseMenu}
              /> */}
            {/* <Tab
                label="Incubator"
                component={NavLink}
                to="/incubator"
                activeClassName={classes.active}
                onClick={this.handleCloseMenu}
              /> */}
            <Tab
              label={t("ecosystem")}
              component={NavLink}
              to="/ecosystem"
              activeClassName={classes.active}
              onClick={this.handleCloseMenu}
            />
            <Tab
              label={t("blockchain")}
              component={NavLink}
              to="/blockchain"
              activeClassName={classes.active}
              onClick={this.handleCloseMenu}
            />
            {/* <Tab
                label="Media"
                component={NavLink}
                to="/media"
                activeClassName={classes.active}
                onClick={this.handleCloseMenu}
              /> */}
            <Tab
              label={t("our team")}
              component={NavLink}
              to="/ourteam"
              activeClassName={classes.active}
              onClick={this.handleCloseMenu}
            />
            {/*<Tab*/}
              {/*label={t("event")}*/}
              {/*component={NavLink}*/}
              {/*to="/events"*/}
              {/*activeClassName={classes.active}*/}
              {/*onClick={this.handleCloseMenu}*/}
            {/*/>*/}
            <Tab
              label={t("media")}
              component={NavLink}
              to="/media"
              activeClassName={classes.active}
              onClick={this.handleCloseMenu}
            />
            <Tab
              label={t("contact us")}
              component={NavLink}
              to="/contactus"
              activeClassName={classes.active}
              onClick={this.handleCloseMenu}
            />
          </Tabs>
        </Drawer>
      </Fragment>
    );
  }
}

export default withStyles(styles)(withTranslation()(NavbarMobile));
