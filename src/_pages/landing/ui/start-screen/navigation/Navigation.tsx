import { LogoLink } from "@/shared/ui";
import { NavigationLink } from "./link/Link";

interface NavigationProps {}

export const Navigation = ({}: NavigationProps) => {
   return (
      <header className="h-37.5 display flex items-center justify-center">
         <nav>
            <ul className="flex gap-8.5 items-center">
               <NavigationLink href="/#about">О нас</NavigationLink>
               <NavigationLink href="/#catalog">Каталог</NavigationLink>
               <li className="px-4">
                  <LogoLink className="w-[200px]" />
               </li>
               <NavigationLink href="/care">Уход</NavigationLink>
               <NavigationLink href="/#delivery">Доставка</NavigationLink>
            </ul>
         </nav>
      </header>
   );
};
