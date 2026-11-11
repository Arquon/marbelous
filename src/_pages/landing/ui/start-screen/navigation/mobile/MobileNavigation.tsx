"use client";

import { LogoLink } from "@/shared/ui";
import { useState } from "react";
import { NavigationLink } from "./NavigationLink";
import clsx from "clsx";

interface MobileNavigationProps {}

export const MobileNavigation = ({}: MobileNavigationProps) => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => setIsOpen((prev) => !prev);
   const closeMenu = () => setIsOpen(false);

   const menuClassName = clsx(
      "absolute top-full left-0 w-full transition-transform origin-top duration-100 flex flex-col items-center bg-black p-5 gap-3 z-1",
      isOpen && "translate-y-0",
      !isOpen && "-translate-y-full",
   );

   return (
      <nav className="md:hidden w-full">
         <div className="w-full flex items-center justify-between relative z-2 bg-dark p-5">
            <LogoLink />

            <button className="flex flex-col gap-1 cursor-pointer" onClick={toggleMenu}>
               <span className={clsx("bg-white w-5.5 h-0.5 transition-transform duration-100", isOpen && "rotate-45 translate-y-1.5")} />
               <span className={clsx("bg-white w-5.5 h-0.5", isOpen && "opacity-0")} />
               <span className={clsx("bg-white w-5.5 h-0.5 transition-transform duration-100", isOpen && "-rotate-45 -translate-y-1.5")} />
            </button>
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
   );
};
