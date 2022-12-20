import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import React from "react";

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

interface VerticalBannerProps {
  banner: string;
  alt: string;
}

const VerticalBanner: React.FC<VerticalBannerProps> = ({ banner, alt }) => {
  return (
    <StyledBox className={classes.imageBox}>
      <img className={classes.image} src={banner} alt={alt} />
    </StyledBox>
  );
};

export default VerticalBanner;
