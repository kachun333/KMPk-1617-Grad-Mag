import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import ImageRenderer from "pages/graduates/components/card/ImageRenderer";

export const ImageToolbar = styled(Toolbar)({
  position: "absolute",
  top: 0,
});

export const ImageHolder = styled(ImageRenderer)(({ theme }) => ({
  alignItems: "center",
  /* preserve aspect ratio */
  maxWidth: "100%",
  maxHeight: "100%",
  /* vertical & horizontal align */
  margin: "auto",
  [theme.breakpoints.down("md")]: {
    /* vertical align only */
    margin: "0 auto",
  },
}));