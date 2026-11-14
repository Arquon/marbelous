import { LogoLink } from "@/shared/ui";
import { NavigationLink } from "../NavigationLink";

interface DesktopNavigationProps {}

export const DesktopNavigation = ({}: DesktopNavigationProps) => {
   return (
      <div className="bg-black h-full flex items-center px-5">
         <nav>
            <ul className="flex gap-7.5">
               <li>
                  <NavigationLink href="/care">Уход</NavigationLink>
               </li>
               <li>
                  <NavigationLink href="/">Главная</NavigationLink>
               </li>
            </ul>
         </nav>
         <LogoLink className="absolute left-1/2 top-1/2 -translate-1/2 overflow-visible" width={120} />
      </div>
   );
};
