import { styled } from "@mui/material/styles";
import React from "react";

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

function Banner() {
  /**
   * TODO: add banner img to /src/assets
   */
  const banner = "";

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
