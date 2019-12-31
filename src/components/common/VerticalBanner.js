import React, { useState } from "react";
import makeStyles from '@material-ui/core/styles/makeStyles';
import { useFirebase } from 'react-redux-firebase';

const useStyles = makeStyles((theme) => ({
  bannerBox: {
    [theme.breakpoints.up('md')]: {
      display: "flex",
      alignItems: "center",
      minHeight: "calc(100vh - 64px)",
      width: "60vw",
      overflow: "hidden",
    }
  },
  banner: {
    width: "100%",
    height: "100%",
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
        (<div className={classes.bannerBox}>
          <img className={classes.banner} src={banner} alt="banner"></img>
        </div>)
          :
          null
        }
    </>
  );
}

export default VerticalBanner;