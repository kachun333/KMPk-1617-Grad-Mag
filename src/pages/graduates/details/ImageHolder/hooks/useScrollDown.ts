import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function useScrollDown<T extends Element>(): React.RefObject<T> {
  const navigate = useNavigate();
  const ref = useRef<T | null>(null);
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

  return ref;
}

export default useScrollDown;
