import { useEffect } from "react";
import { useOutlet } from "react-router-dom";

/**
 * prevent document.body from scrolling when has child route
 * if otherwise, scrolling in position `fixed` will scroll body too
 *
 * Reference:
 * https://stackoverflow.com/a/9280412
 */
function usePreventBodyScrollOutlet() {
  const outletElement = useOutlet();

  useEffect(() => {
    if (outletElement) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "visible";
  }, [outletElement]);

  return outletElement;
}

export default usePreventBodyScrollOutlet;
