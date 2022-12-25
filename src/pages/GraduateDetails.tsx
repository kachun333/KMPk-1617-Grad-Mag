import ArrowBack from "@mui/icons-material/ArrowBack";
import Cake from "@mui/icons-material/Cake";
import Domain from "@mui/icons-material/Domain";
import Email from "@mui/icons-material/Email";
import PanTool from "@mui/icons-material/PanTool";
import LocalFlorist from "@mui/icons-material/People";
import Phone from "@mui/icons-material/Phone";
import Sms from "@mui/icons-material/Sms";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { Link } from "react-router-dom";
import ImageHolder from "./graduates/components/ImageHolder";
import { GraduateData } from "./graduates/Graduates";

const PREFIX = "GraduateDetails";

const classes = {
  container: `${PREFIX}-container`,
  imageBox: `${PREFIX}-imageBox`,
  toolbar: `${PREFIX}-toolbar`,
  icon: `${PREFIX}-icon`,
  image: `${PREFIX}-image`,
  list: `${PREFIX}-list`,
  listHeader: `${PREFIX}-listHeader`,
  nestedListItem: `${PREFIX}-nestedListItem`,
};

const StyledBox = styled(Box)(({ theme }) => ({
  [`&.${classes.container}`]: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      height: "100vh",
    },
  },

  [`& .${classes.imageBox}`]: {
    position: "relative",
    margin: "auto 0",
    backgroundPositionX: "center",
    backgroundPositionY: "center",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.up("md")]: {
      height: "100vh",
      display: "flex",
      minHeight: "calc(100vh - 64px)",
      overflow: "hidden",
    },
  },

  [`& .${classes.toolbar}`]: {
    position: "absolute",
    left: 0,
    right: 0,
    justifyContent: "space-between",
    background: "transparent",
    boxShadow: "none",
  },

  [`& .${classes.icon}`]: {
    color: "#FFF",
  },

  [`& .${classes.image}`]: {
    maxWidth: "100%",
    [theme.breakpoints.up("md")]: {
      maxWidth: "fit-content",
      maxHeight: "calc(100vh - 64px)",
    },
  },

  [`& .${classes.list}`]: {
    height: "100%",
    padding: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      flex: 1,
      minWidth: "400px",
      height: "calc(100vh - 64px)",
      overflow: "auto",
    },
  },

  [`& .${classes.listHeader}`]: {
    margin: `${theme.spacing(2)} ${theme.spacing(5)}`,
  },

  [`& .${classes.nestedListItem}`]: {
    padding: `0 ${theme.spacing(4)}`,
  },
}));

function GraduateDetails() {
  // TODO: refactor and fix this
  const isVerified = false;
  const graduate: GraduateData | null = null as GraduateData | null;

  return (
    <StyledBox className={classes.container}>
      <Box id="graduate-image" className={classes.imageBox}>
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" aria-label="close" size="large">
            <Link to="/graduates">
              <ArrowBack className={classes.icon} />
            </Link>
          </IconButton>
        </Toolbar>
        {graduate?.name && (
          <ImageHolder className={classes.image} graduateName={graduate.name} />
        )}
      </Box>
      <Box className={classes.list}>
        <Box id="graduate-name" className={classes.listHeader}>
          <Typography variant="h4">{graduate?.name_ch ?? ""}</Typography>
          <Typography variant="subtitle1">{graduate?.name ?? ""}</Typography>
        </Box>
        <List>
          {isVerified && (
            <>
              <ListItem id="graduate-phone">
                <ListItemIcon>
                  <Phone />
                </ListItemIcon>
                <ListItemText
                  primary="Phone"
                  secondary={graduate?.phone ?? ""}
                />
              </ListItem>
              <ListItem id="graduate-email">
                <ListItemIcon>
                  <Email />
                </ListItemIcon>
                <ListItemText
                  primary="Email"
                  secondary={graduate?.email ?? ""}
                />
              </ListItem>
              <ListItem id="graduate-birthday">
                <ListItemIcon>
                  <Cake />
                </ListItemIcon>
                <ListItemText
                  primary="Birthday"
                  secondary={
                    graduate?.birthday
                      ? new Date(graduate.birthday).toDateString()
                      : ""
                  }
                />
              </ListItem>
              <ListItem id="graduate-tutorial">
                <ListItemIcon>
                  <Domain />
                </ListItemIcon>
                <ListItemText
                  primary="Tutorial Class"
                  secondary={graduate?.tutorial ?? ""}
                />
              </ListItem>
            </>
          )}
          <ListItem id="graduate-one_liner">
            <ListItemIcon>
              <PanTool />
            </ListItemIcon>
            <ListItemText
              primary="One Liner"
              secondary={graduate?.one_liner ?? ""}
            />
          </ListItem>
          <ListItem id="graduate-message-title">
            <ListItemIcon>
              <Sms />
            </ListItemIcon>
            <ListItemText primary="Message" />
          </ListItem>
          <ListItem id="graduate-message-content">
            <ListItemText secondary={graduate?.message ?? ""} />
          </ListItem>
          <ListItem id="graduate-describe_me">
            <ListItemIcon>
              <LocalFlorist />
            </ListItemIcon>
            <ListItemText primary="Describe me" />
          </ListItem>
          <List component="div" disablePadding>
            {graduate?.describe_me &&
              graduate.describe_me.map((description, i) => (
                // there is a risk for key collision
                // eslint-disable-next-line react/no-array-index-key
                <ListItem key={`graduate-describe_me-${i}`}>
                  <ListItemText secondary={description} />
                </ListItem>
              ))}
          </List>
        </List>
      </Box>
    </StyledBox>
  );
}

export default GraduateDetails;
