import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useAppTitle from "providers/app-title/useAppTitle";
import useAuth from "providers/auth/useAuth";
import useFirebase from "providers/firebase/useFirebase";
import React, { useState } from "react";
import { useSignOut } from "react-firebase-hooks/auth";
import { NavLink, useNavigate } from "react-router-dom";
import DefaultAvatar from "../assets/images/favicon.png";
import Logo from "../assets/images/logo.png";

const PREFIX = "NavbarDesktop";

const classes = {
  appbar: `${PREFIX}-appbar`,
  logo: `${PREFIX}-logo`,
  appTitle: `${PREFIX}-appTitle`,
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

  [`& .${classes.tab}.active`]: {
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

  const [avatarMenu, setAvatarMenu] = useState<Element | null>(null);
  const { auth } = useFirebase();
  const [signOut] = useSignOut(auth);
  const { isVerified, isLoggedin, avatar } = useAuth();
  const { appTitle } = useAppTitle();

  const handleLogout = () => {
    setAvatarMenu(null);
    signOut();
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
          <Button component={NavLink} to="/graduates" className={classes.tab}>
            graduates
          </Button>
          <Button component={NavLink} to="/lecturers" className={classes.tab}>
            lecturers
          </Button>
          <Button component={NavLink} to="/videos" className={classes.tab}>
            KMPk TV
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
                {isVerified ? null : (
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
