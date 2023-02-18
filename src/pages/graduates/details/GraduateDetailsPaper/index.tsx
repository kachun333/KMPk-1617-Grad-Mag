import Hammer from "hammerjs";
import React, { PropsWithChildren, useEffect, useRef } from "react";
import * as S from "./index.styled";

interface GraduateDetailsPaperProps {
  goPrevGraduate: () => void;
  goNextGraduate: () => void;
}

const GraduateDetailsPaper: React.FC<
  PropsWithChildren<GraduateDetailsPaperProps>
> = ({ goPrevGraduate, goNextGraduate, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const hammerManagerRef = useRef<HammerManager | null>(null);

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
    hammer.on(
      "swipeleft",
      (e) => e.pointerType !== "mouse" && goNextGraduate()
    );
    hammer.on(
      "swiperight",
      (e) => e.pointerType !== "mouse" && goPrevGraduate()
    );
    return () => {
      hammer.off("swipeleft");
      hammer.off("swiperight");
    };
  }, [goNextGraduate, goPrevGraduate]);

  return <S.StyledPaper ref={ref}>{children}</S.StyledPaper>;
};

export default GraduateDetailsPaper;
