import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import GraduateImage from "pages/graduates/components/GraduateImage";

export const ImageToolbar = styled(Toolbar)({
  background: "linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4))",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  display: "flex",
});

export const ImageToolbarTitle = styled("div")({
  flex: 1,
});

export const ImageToolbarIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
}));

export const StyledGraduateImage = styled(GraduateImage)(({ theme }) => ({
  alignItems: "center",
  /* preserve aspect ratio */
  maxWidth: "100%",
  maxHeight: "100%",
  /* vertical & horizontal align */
  margin: "auto",
  [theme.breakpoints.down("md")]: {
    /* horizontal align only */
    margin: "0 auto",
  },
}));
