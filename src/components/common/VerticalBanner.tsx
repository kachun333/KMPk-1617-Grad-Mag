import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import makeStyles from "@mui/material/styles/makeStyles";
import Box from "@mui/material/Box";
import { useFirebase } from "react-redux-firebase";

const PREFIX = "VerticalBanner";

const classes = {
  imageBox: `${PREFIX}-imageBox`,
  image: `${PREFIX}-image`,
};

const StyledBox = styled(Box)(({ theme }) => ({
  [`&.${classes.imageBox}`]: {
    margin: "auto 0",
    [theme.breakpoints.up("md")]: {
      height: "100vh",
      display: "flex",
      minHeight: "calc(100vh - 64px)",
      // overflow: "hidden",
    },
  },

  [`& .${classes.image}`]: {
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

  return (
    <StyledBox className={classes.imageBox}>
      {banner ? (
        <img className={classes.image} src={banner} alt="banner" />
      ) : null}
    </StyledBox>
  );
}

export default VerticalBanner;
