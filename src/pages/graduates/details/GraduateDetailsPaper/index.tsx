import Hammer from "hammerjs";
import { Graduate } from "pages/graduates/graduates.interface";
import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./index.styled";

interface GraduateDetailsPaperProps {
  graduateId: number;
  graduates: Graduate[];
}

const GraduateDetailsPaper: React.FC<
  PropsWithChildren<GraduateDetailsPaperProps>
> = ({ graduateId, graduates, children }) => {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);

  const currIndex = graduateId - 1;

  const goPrev = useCallback(() => {
    const prevGraduate = graduates[currIndex - 1];
    const hasPrev = !!prevGraduate;
    if (hasPrev) navigate(`/graduates/${prevGraduate.id}`);
  }, [currIndex, graduates, navigate]);

  const goNext = useCallback(() => {
    const nextGraduate = graduates[currIndex + 1];
    const hasNext = !!nextGraduate;
    if (hasNext) navigate(`/graduates/${nextGraduate.id}`);
  }, [currIndex, graduates, navigate]);

  useEffect(() => {
    if (!ref.current) return () => null;
    const hammer = new Hammer(ref.current);
    hammer.on("swipeleft", () => goNext());
    hammer.on("swiperight", () => goPrev());
    return () => {
      hammer.off("swipeleft");
      hammer.off("swiperight");
      hammer.destroy();
    };
  }, [goNext, goPrev]);

  return <S.StyledPaper ref={ref}>{children}</S.StyledPaper>;
};

export default GraduateDetailsPaper;
