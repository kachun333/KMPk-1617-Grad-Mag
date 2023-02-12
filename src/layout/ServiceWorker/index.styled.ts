import { Avatar, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const initialBottom = 32;
const FABHeight = 56;
const marginTopFAB = 8;
const translateY = marginTopFAB + FABHeight;

export const StyledPaper = styled(Paper, {
  shouldForwardProp: (prop) => prop !== "show" && prop !== "hasFAB",
})<{ show: boolean; hasFAB: boolean }>(({ theme, show, hasFAB }) => {
  const opacity = show ? 1 : 0;
  const styleWithFAB = hasFAB && {
    transform: `translate(-50%, -${translateY}px)`,
    transition: `transform ${theme.transitions.duration.leavingScreen}ms ${theme.transitions.easing.sharp}`,
  };

  return {
    zIndex: 2000, // highest in App
    cursor: "pointer",
    width: 320,
    padding: `${theme.spacing(1.5)} ${theme.spacing(2)}`,
    position: "fixed",
    bottom: initialBottom,
    left: "50%",
    opacity,
    transform: "translate(-50%)",
    transition: `
      opacity ${theme.transitions.duration.enteringScreen}ms ${theme.transitions.easing.easeIn},
      transform ${theme.transitions.duration.enteringScreen}ms ${theme.transitions.easing.sharp}
    `,

    [theme.breakpoints.down("sm")]: {
      width: "95%",
      ...styleWithFAB,
    },
  };
});

export const StyledContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

export const StyledTextContainer = styled("div")({
  flex: 1,
});

export const StyledCaption = styled(Typography)({
  /* so that caption is nicely align */
  marginTop: -4,
});

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));
