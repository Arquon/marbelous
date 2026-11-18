"use client";

import { BurgerMenu, LogoLink } from "@/shared/ui";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { NavigationLink } from "./NavigationLink";

interface NavigationProps {}

export const MobileHeader = ({}: NavigationProps) => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => setIsOpen((prev) => !prev);
   const closeMenu = () => setIsOpen(false);

   const menuClassName = clsx(
      "absolute top-full left-0 w-full transition-all origin-top duration-300 flex flex-col items-center bg-black p-5 gap-3 z-1",
      isOpen && "translate-y-0 opacity-100",
      !isOpen && "-translate-y-full opacity-0",
   );

   useEffect(() => {
      return () => {
         setIsOpen(false);
      };
   }, []);

   return (
      <header className="sticky w-full top-0 h-20 z-10 md:hidden">
         <nav className="w-full h-full">
            <div className="w-full h-full flex items-center justify-between relative z-2 bg-dark p-5">
               <LogoLink />
               <BurgerMenu toggleMenu={toggleMenu} isOpen={isOpen} />
            </div>

            <ul className={menuClassName}>
               <li>
                  <NavigationLink onClick={closeMenu} href="/#about">
                     О нас
                  </NavigationLink>
               </li>
               <li>
                  <NavigationLink onClick={closeMenu} href="/#catalog">
                     Каталог
                  </NavigationLink>
               </li>
               <li>
                  <NavigationLink onClick={closeMenu} href="/care">
                     Уход
                  </NavigationLink>
               </li>
               <li>
                  <NavigationLink onClick={closeMenu} href="/#delivery">
                     Доставка
                  </NavigationLink>
               </li>
            </ul>
         </nav>
      </header>
   );
};
