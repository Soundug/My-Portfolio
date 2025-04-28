
import { useEffect, useRef } from "react";

interface UseIntersectionObserverProps {
  targetClass: string;
  visibleClass: string;
  threshold?: number;
  rootMargin?: string;
}

export const useIntersectionObserver = ({
  targetClass,
  visibleClass,
  threshold = 0.1,
  rootMargin = "0px",
}: UseIntersectionObserverProps) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(visibleClass);
        }
      });
    };

    observerRef.current = new IntersectionObserver(callback, {
      rootMargin,
      threshold,
    });

    const elements = document.querySelectorAll(`.${targetClass}`);
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        elements.forEach((el) => observerRef.current?.unobserve(el));
      }
    };
  }, [targetClass, visibleClass, threshold, rootMargin]);
};
