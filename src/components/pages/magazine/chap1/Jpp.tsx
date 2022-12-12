import React from "react";
import { styled } from "@mui/material/styles";
import MagazineNav from "../../../common/MagazineNav";

const PREFIX = "Jpp";

const classes = {
  container: `${PREFIX}-container`,
  sidebox: `${PREFIX}-sidebox`,
  title: `${PREFIX}-title`,
  help: `${PREFIX}-help`,
};

const Root = styled("div")(({ theme }) => ({
  [`&.${classes.container}`]: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      minHeight: "calc(100vh - 16px)",
    },
  },

  [`& .${classes.sidebox}`]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(2),
    height: "100%",
    [theme.breakpoints.up("md")]: {
      flex: 1,
      minWidth: "400px",
      height: "calc(100vh - 64px)",
      overflow: "auto",
    },
  },

  [`& .${classes.title}`]: {
    width: "80%",
    margin: "16px",
    [theme.breakpoints.up("md")]: {
      width: "70%",
    },
  },

  [`& .${classes.help}`]: {
    width: "100%",
  },
}));

function Jpp() {
  return (
    <Root className={classes.container}>
      <MagazineNav />
      <div className={classes.container}>hello world</div>
    </Root>
  );
}

export default Jpp;
