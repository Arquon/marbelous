"use client";

import { StartScreenImage } from "@/shared/assets";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface BackgroundProps {}

export const Background = ({}: BackgroundProps) => {
   const divRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (!divRef.current) return;

      const element = divRef.current;

      const observer = new IntersectionObserver((entries) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               element.style.opacity = "0";
            }
         });
      });

      observer.observe(element);

      return () => {
         observer.disconnect();
      };
   }, []);

   return (
      <div className="absolute inset-0 -z-10">
         <Image src={StartScreenImage} alt="background" className="object-cover" fill priority sizes="100vw" />
         <div className="absolute inset-0 bg-linear-to-b from-black/80 to-black/20" />
         <div className="absolute inset-0 bg-black transition-opacity duration-700 ease-out" ref={divRef} />
      </div>
   );
};
