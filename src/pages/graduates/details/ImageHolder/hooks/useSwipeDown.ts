import { useEffect, useRef } from "react";

interface useSwipeDownProps {
  onSwipeDown: () => void;
}

function useSwipeDown<T extends Element>(
  props: useSwipeDownProps
): React.RefObject<T> {
  const { onSwipeDown } = props;
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
      if (e.pointerType !== "mouse") onSwipeDown();
    });
    return () => hammer.off("swipedown");
  }, [onSwipeDown]);

  return ref;
}

export default useSwipeDown;
