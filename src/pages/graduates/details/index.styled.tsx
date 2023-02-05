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
  /* graduate image can align center */
  display: "flex",
  /* image control will `absolute` reference here */
  position: "relative",
  /* never shrink image, to avoid flickering */
  flexShrink: 0,
  [theme.breakpoints.down("md")]: {
    /* so that details info have sufficient space to scroll */
    height: "min(calc((100vw / 3) * 2), 40vh)",
  },
  [theme.breakpoints.up("md")]: {
    flexGrow: 1,
  },
}));

export const GraduateDetailsInfoBox = styled("div")(({ theme }) => ({
  maxWidth: 360,
  paddingBottom: theme.spacing(1),
  /* allow overflow */
  height: "100%",
  overflowY: "auto",
  [theme.breakpoints.down("md")]: {
    minWidth: "100%",
  },
}));
