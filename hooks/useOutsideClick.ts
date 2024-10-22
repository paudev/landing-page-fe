import { RefObject, useEffect } from "react";

const useOutsideClick = (
  handler: (event: MouseEvent) => void,
  ...refs: RefObject<HTMLElement>[]
) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (refs.some((ref) => ref.current && ref.current.contains(event.target)))
        return;
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handler]);
};

export default useOutsideClick;
