import Share from "@mui/icons-material/Share";
import { IconButtonProps } from "@mui/material";
import { APP_NAME } from "global.constants";
import * as S from "pages/graduates/details/ImageHolder/index.styled";
import React from "react";

interface ShareProps {
  graduateUrl: string;
  graduateText: string;
  iconBtnProps: IconButtonProps;
}

const ShareButton: React.FC<ShareProps> = ({
  graduateUrl,
  graduateText,
  iconBtnProps,
}) => {
  const data: ShareData = {
    title: APP_NAME,
    url: graduateUrl,
    text: graduateText,
  };

  const hasWebShare = !!navigator && !!navigator.share;
  const canShareData = hasWebShare && !!navigator.canShare?.(data);

  function onShare() {
    navigator.share(data);
  }

  if (!canShareData) return null;
  return (
    <S.ImageToolbarIconButton onClick={onShare} {...iconBtnProps}>
      <Share />
    </S.ImageToolbarIconButton>
  );
};

export default ShareButton;
