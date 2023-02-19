import { styled } from "@mui/material/styles";

export const GraduateDetailsImageBox = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
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
