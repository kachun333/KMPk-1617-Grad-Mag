import { Typography } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import React, { useEffect, useState } from "react";
import useServiceWorker from "./hooks/useServiceWorker";
import { HAS_UPDATE_SNACKBAR, UPDATING_SNACKBAR } from "./index.constants";
import * as S from "./index.styled";

const ServiceWorker: React.FC = () => {
  const trigger = useScrollTrigger();
  const { isLoading, hasUpdate, updateApp } = useServiceWorker();
  const [showUpdatePrompt, setShowUpdatePrompt] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setShowUpdatePrompt(hasUpdate), 500);
    return () => clearTimeout(id);
  }, [hasUpdate]);

  if (!hasUpdate) return null;
  const snackbarObj = isLoading ? UPDATING_SNACKBAR : HAS_UPDATE_SNACKBAR;
  return (
    <S.StyledPaper
      show={showUpdatePrompt}
      hasFAB={trigger}
      onClick={updateApp}
      elevation={10}
    >
      <S.StyledContainer>
        <S.StyledTextContainer>
          <Typography variant="h6">{snackbarObj.title}</Typography>
          <Typography variant="caption" component="div">
            {snackbarObj.caption}
          </Typography>
        </S.StyledTextContainer>
        {snackbarObj.avatar}
      </S.StyledContainer>
    </S.StyledPaper>
  );
};

export default ServiceWorker;
