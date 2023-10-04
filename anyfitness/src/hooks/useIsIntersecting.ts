import { useState, useRef, useEffect, RefObject } from 'react';

export default function useIsIntersecting<T extends HTMLElement>(
  ref: RefObject<T>
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(false);
        } else {
          setIsIntersecting(true);
        }
      });
    });

    const el: Element = ref.current!;

    observer.observe(el);
  }, [ref]);

  return isIntersecting;
}
