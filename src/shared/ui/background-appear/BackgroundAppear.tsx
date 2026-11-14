"use client";

import type { ReactNode } from "react";
import { useRef, useEffect } from "react";

interface BackgroundAppearProps {
   children: ReactNode;
}

export const BackgroundAppear = ({ children }: BackgroundAppearProps) => {
   const divRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (!divRef.current) return;

      const element = divRef.current;

      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               console.log({ entry });
               if (entry.isIntersecting) {
                  element.style.opacity = "0";
                  observer.disconnect();
               }
            });
         },
         { threshold: 0.2 },
      );

      observer.observe(element);

      return () => observer.disconnect();
   }, []);

   return (
      <>
         {children}
         <div className="absolute inset-0 bg-black transition-opacity duration-700 ease-out" ref={divRef} />
      </>
   );
};
