import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useSelector, useDispatch } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import DefaultAvatar from "../assets/images/favicon.png";
import { setAppTitle } from "../store/actions/appActions";

const PREFIX = "NavbarDesktop";

const classes = {
  appbar: `${PREFIX}-appbar`,
  logo: `${PREFIX}-logo`,
  appTitle: `${PREFIX}-appTitle`,
  active: `${PREFIX}-active`,
  tab: `${PREFIX}-tab`,
  login: `${PREFIX}-login`,
};

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  [`&.${classes.appbar}`]: {
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

  [`& .${classes.active}`]: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },

  [`& .${classes.tab}`]: {
    margin: `0 ${theme.spacing(0.5)}`,
    minWidth: "60px",
  },

  [`& .${classes.login}`]: {
    margin: `0 ${theme.spacing(1.5)}`,
  },
}));

function NavbarDesktop() {
  const navigate = useNavigate();

  const isLoggedin = useSelector((state) => state.firebase.auth.uid);
  const verified = useSelector((state) => state.firebase.profile.verified);
  const avatar = useSelector((state) => state.firebase.profile.avatarUrl);
  const [avatarMenu, setAvatarMenu] = useState(null);
  // set AppBar Title
  const dispatch = useDispatch();
  const appTitle = useSelector((state) => state.app.appTitle);
  const location = useLocation();
  const currentUrl = location.pathname;
  useEffect(() => {
    dispatch(setAppTitle(currentUrl));
  }, [currentUrl, dispatch]);
  // Handle Logout
  const firebase = useFirebase();
  const handleLogout = () => {
    setAvatarMenu(null);
    firebase.logout();
  };
  return (
    <StyledToolbar className={classes.appbar}>
      <Button id="logo" component={NavLink} to="/">
        <img alt="logo" src={Logo} className={classes.logo} />
      </Button>
      <Typography variant="h6" className={classes.appTitle}>
        {appTitle}
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
            to="/graduates"
            activeClassName={classes.active}
            className={classes.tab}
          >
            graduates
          </Button>
          <Button
            component={NavLink}
            to="/lecturers"
            activeClassName={classes.active}
            className={classes.tab}
          >
            lecturers
          </Button>
          <Button
            component={NavLink}
            to="/videos"
            activeClassName={classes.active}
            className={classes.tab}
          >
            KMPk TV
          </Button>
          <Button
            component={NavLink}
            to="/magazine"
            activeClassName={classes.active}
            className={classes.tab}
          >
            Magazine
          </Button>
          {isLoggedin ? (
            <>
              <IconButton
                onClick={(e) => {
                  setAvatarMenu(e.currentTarget);
                }}
                size="large"
              >
                <Avatar alt="me" src={avatar || DefaultAvatar} />
              </IconButton>
              <Menu
                anchorEl={avatarMenu}
                open={Boolean(avatarMenu)}
                onClose={() => {
                  setAvatarMenu(null);
                }}
              >
                {verified ? null : (
                  <MenuItem
                    component={Button}
                    onClick={() => {
                      navigate("/auth/verify");
                    }}
                  >
                    Verify
                  </MenuItem>
                )}
                <MenuItem component={Button} onClick={handleLogout}>
                  Logout
                </MenuItem>
              </Menu>
            </>
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
      </Box>
    </StyledToolbar>
  );
}

export default NavbarDesktop;
