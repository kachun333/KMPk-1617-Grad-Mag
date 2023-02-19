import { useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import * as S from "./index.styled";

interface SidePanelProps {
  onClick: () => void;
  fabIcon: React.ReactNode;
  direction: "left" | "right";
}

const SidePanel: React.FC<SidePanelProps> = ({
  onClick,
  fabIcon,
  direction,
}) => {
  const isHandheldDevice = useMediaQuery("(pointer:none), (pointer:coarse)");
  const [isHovering, setIsHovering] = useState(false);

  const isLeft = direction === "left";
  const isRight = direction === "right";

  function onMouseOver() {
    if (!isHovering) setIsHovering(true);
  }

  function onMouseLeave() {
    if (isHovering) setIsHovering(false);
  }

  if (isHandheldDevice) return null;
  return (
    <S.Panel
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      isLeft={isLeft}
      isRight={isRight}
    >
      {isHovering && (
        <S.FAB isLeft={isLeft} isRight={isRight}>
          {fabIcon}
        </S.FAB>
      )}
    </S.Panel>
  );
};

export default SidePanel;
