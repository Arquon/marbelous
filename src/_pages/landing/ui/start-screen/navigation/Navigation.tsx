import { LogoLink } from "@/shared/ui";
import { NavigationLink } from "./NavigationLink";

interface NavigationProps {}

export const Navigation = ({}: NavigationProps) => {
   return (
      <header className="max-md:hidden">
         <nav className="h-37.5 display flex items-center justify-center">
            <ul className="flex gap-8.5 items-center">
               <li>
                  <NavigationLink href="/#about">О нас</NavigationLink>
               </li>
               <li>
                  <NavigationLink href="/#catalog">Каталог</NavigationLink>
               </li>
               <li className="px-4">
                  <LogoLink className="w-[12.5rem]" />
               </li>
               <li>
                  <NavigationLink href="/care">Уход</NavigationLink>
               </li>
               <li>
                  <NavigationLink href="/#delivery">Доставка</NavigationLink>
               </li>
            </ul>
         </nav>
      </header>
   );
};
