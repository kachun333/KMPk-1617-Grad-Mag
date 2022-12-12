import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import makeStyles from "@mui/material/styles/makeStyles";
import { useFirebase } from "react-redux-firebase";

const PREFIX = "Banner";

const classes = {
  bannerBox: `${PREFIX}-bannerBox`,
  banner: `${PREFIX}-banner`,
};

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled("div")(({ theme }) => ({
  [`& .${classes.bannerBox}`]: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
      height: "calc(100vh - 64px)",
      // height: "calc(100vw - 280px)",
      overflow: "hidden",
      width: "100%",
    },
  },

  [`& .${classes.banner}`]: {
    width: "100%",
  },
}));

function Banner(props) {
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
    <Root>
      {banner ? (
        <div className={classes.bannerBox}>
          <img className={classes.banner} src={banner} alt="banner" />
        </div>
      ) : null}
    </Root>
  );
}

export default Banner;
