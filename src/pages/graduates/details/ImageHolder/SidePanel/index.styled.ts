import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Panel = styled("div", {
  shouldForwardProp: (prop) => prop !== "isLeft" && prop !== "isRight",
})<{ isLeft: boolean; isRight: boolean }>(({ isLeft, isRight }) => ({
  position: "absolute",
  left: isLeft ? 0 : "80%",
  right: isRight ? 0 : "80%",
  top: 0,
  bottom: 0,
  cursor: "pointer",
}));

export const FAB = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "isLeft" && prop !== "isRight",
})<{ isLeft: boolean; isRight: boolean }>(({ theme, isLeft, isRight }) => ({
  position: "absolute",
  left: isLeft ? theme.spacing(3) : undefined,
  right: isRight ? theme.spacing(3) : undefined,
  bottom: "50%",
  background: theme.palette.common.white,
  "&:hover": {
    background: theme.palette.common.white,
  },
}));
