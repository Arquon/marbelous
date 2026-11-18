import { DesktopNavigation } from "./desktop/DesktopNavigation";
import { MobileNavigation } from "./mobile/MobileNavigation";

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
   return (
      <header className="sticky top-0 w-full z-2">
         <div className="h-17.5 w-full">
            <div className="max-md:hidden w-full h-full">
               <DesktopNavigation />
            </div>
            <div className="md:hidden w-full h-full">
               <MobileNavigation />
            </div>
         </div>
      </header>
   );
};
