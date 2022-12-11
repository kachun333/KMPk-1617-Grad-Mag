import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import { useFirebase } from "react-redux-firebase";

const useStyles = makeStyles((theme) => ({
  imageBox: {
    margin: "auto 0",
    [theme.breakpoints.up("md")]: {
      height: "100vh",
      display: "flex",
      minHeight: "calc(100vh - 64px)",
      // overflow: "hidden",
    },
  },
  image: {
    maxWidth: "100%",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "auto",
      maxWidth: "fit-content",
      maxHeight: "calc(100vh - 64px)",
    },
  },
}));

function VerticalBanner(props) {
  // get banner from firebase
  const [banner, setBanner] = useState("");
  const firebase = useFirebase();
  const storageRef = firebase.storage().ref();
  const fileRef = storageRef.child(`banners/${props.banner}.jpg`);
  fileRef
    .getDownloadURL()
    .then((url) => setBanner(url))
    .catch((err) => console.log("Fail to load banner: ", err));
  const classes = useStyles();
  return (
    <Box className={classes.imageBox}>
      {banner ? (
        <img className={classes.image} src={banner} alt="banner" />
      ) : null}
    </Box>
  );
}

export default VerticalBanner;
