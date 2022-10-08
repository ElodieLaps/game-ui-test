import { useEffect, useRef, RefObject, useCallback } from "react";

type ReturnType = [RefObject<any>, (callback: () => void) => void];

export const useClickOutWithExcludedElement = (
  excludedElementSelector?: string
): ReturnType => {
  const ref = useRef<any>();
  const callbackRef = useRef(() => {});
  const excludedElementSelectorId = excludedElementSelector
    ? `#${excludedElementSelector}`
    : undefined;

  const callback = useCallback((handler: () => void) => {
    callbackRef.current = handler;
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (excludedElementSelectorId) {
        const excludedElement = document.querySelector(
          excludedElementSelectorId
        ) as Element;
        if (excludedElement?.contains(event.target as Element)) return;
      }

      if (!!ref.current && !ref.current?.contains(event.target)) {
        callbackRef.current();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [excludedElementSelectorId]);

  return [ref, callback];
};
