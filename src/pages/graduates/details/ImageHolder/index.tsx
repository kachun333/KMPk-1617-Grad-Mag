import ArrowBack from "@mui/icons-material/ArrowBack";
import { ContainedIconButton, Link } from "components/styled";
import { Graduate } from "pages/graduates/graduates.interface";
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./index.styled";

interface ImageHolderProps {
  graduate: Graduate;
}

const ImageHolder: React.FC<ImageHolderProps> = ({ graduate }) => {
  const navigate = useNavigate();
  const ref = useRef<HTMLImageElement>(null);
  const hammerManagerRef = useRef<HammerManager | null>(null);

  useEffect(() => {
    if (!ref.current) return () => undefined;
    const mc = new Hammer.Manager(ref.current);
    mc.add(new Hammer.Swipe({ direction: Hammer.DIRECTION_DOWN }));
    hammerManagerRef.current = mc;
    return () => mc.destroy();
  }, []);

  useEffect(() => {
    if (!hammerManagerRef.current) return () => undefined;
    const hammer = hammerManagerRef.current;
    hammer.on("swipedown", (e) => {
      if (e.pointerType !== "mouse") {
        navigate(`/graduates`, { preventScrollReset: true });
      }
    });
    return () => hammer.off("swipedown");
  }, [navigate]);

  return (
    <>
      <S.ImageToolbar>
        <Link to="/graduates" preventScrollReset>
          <ContainedIconButton edge="start" aria-label="close" size="small">
            <ArrowBack />
          </ContainedIconButton>
        </Link>
      </S.ImageToolbar>
      <S.StyledGraduateImage
        graduateName={graduate.name}
        imgProps={{
          ref,
          sizes: "(min-width: 600px) calc(100vw - 360px), 100vw",
        }}
      />
    </>
  );
};

export default ImageHolder;
