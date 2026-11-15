import { DesktopNavigation } from "./desktop/DesktopNavigation";
import { MobileNavigation } from "./mobile/MobileNavigation";

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
   return (
      <header className="pt-17.5 relative">
         <div className="fixed top-0 h-17.5 w-full z-2">
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
