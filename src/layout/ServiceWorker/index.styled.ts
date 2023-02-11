import { Avatar, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const FABHeight = 56;
export const StyledPaper = styled(Paper)(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(3),
  left: "50%",
  transform: "translateX(-50%)",
  padding: `${theme.spacing(1.5)} ${theme.spacing(2)}`,
  width: 320,
  cursor: "pointer",

  [theme.breakpoints.only("xs")]: {
    bottom: 20 + FABHeight + 20,
    width: "96%",
  },
}));

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

export const StyledContainer = styled("div")({
  display: "flex",
  columnGap: 16,
  alignItems: "center",
});

export const StyledCaption = styled(Typography)({
  /* so that caption is nicely align */
  marginTop: -4,
});
