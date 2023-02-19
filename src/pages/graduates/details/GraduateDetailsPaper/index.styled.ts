import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

export const StyledPaper = styled(Paper)(({ theme }) => ({
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
