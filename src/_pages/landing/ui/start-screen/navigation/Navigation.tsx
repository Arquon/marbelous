import { DesktopNavigation } from "./desktop/DesktopNavigation";
import { MobileNavigation } from "./mobile/MobileNavigation";

interface NavigationProps {}

export const Navigation = ({}: NavigationProps) => {
   return (
      <header className="max-md:fixed max-md:w-full max-md:h-22 max-md:z-10 max-md:flex max-md:items-center relative">
         <MobileNavigation />

         <DesktopNavigation />
      </header>
   );
};
