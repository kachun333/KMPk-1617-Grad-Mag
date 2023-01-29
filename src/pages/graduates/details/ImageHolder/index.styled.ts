import { styled } from "@mui/material/styles";
import ImageRenderer from "pages/graduates/components/card/ImageRenderer";

export const ImageHolder = styled(ImageRenderer)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  /* vertical align */
  margin: "auto",
  /* preserve aspect ratio */
  maxWidth: "100%",
  maxHeight: "100%",
});
