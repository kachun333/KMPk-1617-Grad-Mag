import React from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import MagazineNav from "../../../common/MagazineNav";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      minHeight: "calc(100vh - 16px)",
    },
  },
  sidebox: {
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
  title: {
    width: "80%",
    margin: "16px",
    [theme.breakpoints.up("md")]: {
      width: "70%",
    },
  },
  help: {
    width: "100%",
  },
}));
function Jpp() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <MagazineNav />
      <div className={classes.container}>hello world</div>
    </div>
  );
}

export default Jpp;
