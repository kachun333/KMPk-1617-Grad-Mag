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
  const hammerManagerRef = useRef<HammerManager | null>(null);

  const currIndex = graduateId - 1;

  const goPrev = useCallback(() => {
    const prevGraduate = graduates[currIndex - 1];
    const hasPrev = !!prevGraduate;
    if (hasPrev) {
      navigate(`/graduates/${prevGraduate.id}`, {
        preventScrollReset: true,
      });
    }
  }, [currIndex, graduates, navigate]);

  const goNext = useCallback(() => {
    const nextGraduate = graduates[currIndex + 1];
    const hasNext = !!nextGraduate;
    if (hasNext) {
      navigate(`/graduates/${nextGraduate.id}`, {
        preventScrollReset: true,
      });
    }
  }, [currIndex, graduates, navigate]);

  useEffect(() => {
    if (!ref.current) return () => undefined;
    // @ts-expect-error https://github.com/hammerjs/hammerjs.github.io/blob/master/tips.md#i-cant-select-my-text-anymore
    delete Hammer.defaults.cssProps.userSelect;
    const mc = new Hammer.Manager(ref.current);
    mc.add(
      new Hammer.Swipe({
        direction: Hammer.DIRECTION_HORIZONTAL,
        threshold: 2,
        velocity: 0.1,
      })
    );
    hammerManagerRef.current = mc;
    return () => mc.destroy();
  }, []);

  useEffect(() => {
    if (!hammerManagerRef.current) return () => null;
    const hammer = hammerManagerRef.current;
    hammer.on("swipeleft", (e) => e.pointerType !== "mouse" && goNext());
    hammer.on("swiperight", (e) => e.pointerType !== "mouse" && goPrev());
    return () => {
      hammer.off("swipeleft");
      hammer.off("swiperight");
    };
  }, [goNext, goPrev]);

  return <S.StyledPaper ref={ref}>{children}</S.StyledPaper>;
};

export default GraduateDetailsPaper;
