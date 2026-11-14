"use client";

import type { ReactNode } from "react";
import { useLayoutEffect, useRef } from "react";

interface AppearProps {
   children: ReactNode;
   threshold?: number;
}

export const Appear = ({ children, threshold = 0 }: AppearProps) => {
   const containerRef = useRef<HTMLDivElement>(null);

   useLayoutEffect(() => {
      const element = containerRef.current;
      if (!element) return;

      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  element.style.opacity = "1";
                  observer.disconnect();
               }
            });
         },
         { threshold },
      );

      observer.observe(element);

      return () => observer.disconnect();
   }, [threshold]);

   return (
      <div className="opacity-0 transition-opacity duration-500" ref={containerRef}>
         {children}
      </div>
   );
};
