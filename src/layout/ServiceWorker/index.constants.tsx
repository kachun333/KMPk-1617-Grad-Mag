import RocketLaunch from "@mui/icons-material/RocketLaunch";
import { CircularProgress } from "@mui/material";
import React from "react";
import * as S from "./index.styled";

interface SnackbarObj {
  avatar: React.ReactNode;
  title: string;
  caption: string;
}

export const HAS_UPDATE_SNACKBAR: SnackbarObj = {
  avatar: (
    <S.StyledAvatar alt="update app icon">
      <RocketLaunch />
    </S.StyledAvatar>
  ),
  title: "Update Available",
  caption: "Click here for updates",
};

export const UPDATING_SNACKBAR: SnackbarObj = {
  avatar: <CircularProgress />,
  title: "Updating",
  caption: "Just a moment...",
};
