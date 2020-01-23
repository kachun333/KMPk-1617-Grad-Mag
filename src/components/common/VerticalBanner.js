import React, { useState } from "react";
import makeStyles from '@material-ui/core/styles/makeStyles';
import { useFirebase } from 'react-redux-firebase';

const useStyles = makeStyles((theme) => ({
  imageBox: {
    position: "relative",
    margin: "auto 0",
    backgroundPositionX: "center",
    backgroundPositionY: "center",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.up('md')]: {
      height: "100vh",
      display: "flex",
      minHeight: "calc(100vh - 64px)",
      overflow: "hidden",
    },
  },
  image: {
    maxWidth: "100%",
    [theme.breakpoints.up('md')]: {
      maxWidth: "fit-content",
      maxHeight: "calc(100vh - 64px)",
    }
  },
}));

function VerticalBanner(props) {
  //get banner from firebase
  const [banner, setBanner] = useState("");
  const firebase = useFirebase();
  const storageRef = firebase.storage().ref()
  const fileRef = storageRef.child(`banners/${props.banner}.jpg`)
  fileRef.getDownloadURL()
    .then(url => setBanner(url))
    .catch(err => console.log('Fail to load banner: ', err))
  const classes = useStyles();
  return (
    <>
      {banner ? 
        <div className={classes.imageBox}>
          <img className={classes.image} src={banner} alt="banner"></img>
        </div>
          :
          null
        }
    </>
  );
}

export default VerticalBanner;