"use client";
import { useRef, useEffect } from "react";

interface UseParallaxQueryParams {
   speed?: number;
}

export function useParallax({ speed = 1 }: UseParallaxQueryParams) {
   const containerRef = useRef<HTMLDivElement>(null);
   const targetRef = useRef<HTMLImageElement>(null);

   useEffect(() => {
      const updateOffset = () => {
         if (!targetRef.current || !containerRef.current) return;
         const coords = containerRef.current.getBoundingClientRect();
         const windowHeight = window.innerHeight;

         const maxShift = coords.height * speed;

         const totalDistance = windowHeight + coords.height;
         const progress = (windowHeight - coords.top) / totalDistance;

         const clamped = Math.max(0, Math.min(1, progress));

         const translateY = (clamped - 0.5) * 2 * maxShift;

         targetRef.current.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0)`;
      };

      updateOffset();
      window.addEventListener("scroll", updateOffset, { capture: true, passive: true });
      window.addEventListener("resize", updateOffset, { passive: true });

      const resizeObserver = new ResizeObserver(updateOffset);
      resizeObserver.observe(document.body);

      return () => {
         window.removeEventListener("scroll", updateOffset, { capture: true });
         window.removeEventListener("resize", updateOffset);
         resizeObserver.disconnect();
      };
   }, [speed]);

   return { containerRef, targetRef };
}
