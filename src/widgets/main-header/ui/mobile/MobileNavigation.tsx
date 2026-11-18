"use client";

import { BurgerMenu, LogoLink } from "@/shared/ui";
import { useEffect, useState } from "react";
import { NavigationLink } from "../NavigationLink";
import clsx from "clsx";

interface MobileNavigationProps {}

export const MobileNavigation = ({}: MobileNavigationProps) => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => setIsOpen((prev) => !prev);

   const menuClassName = clsx(
      "absolute top-full left-0 w-full transition-all origin-top duration-300 flex flex-col items-center bg-black p-5 gap-3 -z-1",
      isOpen && "translate-y-0 opacity-100",
      !isOpen && "-translate-y-full opacity-0",
   );

   useEffect(() => {
      return () => {
         setIsOpen(false);
      };
   }, []);

   return (
      <nav className="w-full h-full">
         <div className="w-full h-full flex justify-between items-center bg-black px-5">
            <LogoLink width={80} />
            <BurgerMenu toggleMenu={toggleMenu} isOpen={isOpen} />
         </div>

         <ul className={menuClassName}>
            <li>
               <NavigationLink href="/care">Уход</NavigationLink>
            </li>
            <li>
               <NavigationLink href="/">Главная</NavigationLink>
            </li>
         </ul>
      </nav>
   );
};
