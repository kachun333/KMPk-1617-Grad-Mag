import { styled } from "@mui/material/styles";

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
  /* allow swipe left & right to navigate */
  touchAction: "pan-y",
  [theme.breakpoints.down("md")]: {
    minWidth: "100%",
  },
}));
