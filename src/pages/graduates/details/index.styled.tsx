import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

export const GraduateDetailsPaper = styled(Paper)(({ theme }) => ({
  position: "fixed",
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 1101, // higher than AppBar
  display: "flex",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const GraduateDetailsImageBox = styled("div")(({ theme }) => ({
  position: "relative",
  height: "100%",
  [theme.breakpoints.up("md")]: {
    flexGrow: 1,
  },
}));

export const GraduateDetailsInfoBox = styled("div")(({ theme }) => ({
  maxWidth: 360,
  height: "100%",
  overflowY: "auto",
  [theme.breakpoints.down("md")]: {
    minWidth: "100%",
  },
}));
