import { ArrowIcon } from "@/shared/assets";
import clsx from "clsx";

interface SwiperNavigationProps {
   direction: "prev" | "next";
   setElement: (ref: HTMLButtonElement | null) => void;
}

export const SwiperNavigation = ({ direction, setElement }: SwiperNavigationProps) => {
   const className = clsx(
      "absolute pt-0.5 top-1/2 -translate-y-1/2 w-7.5 h-7.5 bg-white rounded-full z-3 flex items-center justify-center cursor-pointer",
      {
         "left-5 rotate-90": direction === "prev",
         "right-5 -rotate-90": direction === "next",
      },
   );

   return (
      <button className={className} ref={setElement}>
         <ArrowIcon className="w-3 h-auto" fill="black" />
      </button>
   );
};
