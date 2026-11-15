"use client";

import { ArrowIcon } from "@/shared/assets";

interface ArrowProps {}

export const Arrow = ({}: ArrowProps) => {
   const onClick = () => {
      const anchorElement = document.getElementById("about");

      if (!anchorElement) return;

      anchorElement.scrollIntoView({ behavior: "smooth" });
   };

   return (
      <div
         className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer hover:opacity-75 transition-opacity duration-100"
         onClick={onClick}
      >
         <ArrowIcon className="w-10" />
      </div>
   );
};
