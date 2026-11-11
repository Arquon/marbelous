import { Arrow } from "./arrow/Arrow";
import { Background } from "./background/Background";
import { CatalogBanner } from "./catalog-banner/CatalogBanner";
import { Navigation } from "./navigation/Navigation";

interface StartScreenProps {}

export const StartScreen = ({}: StartScreenProps) => {
   return (
      <div className="h-screen relative">
         <Background />
         <Navigation />
         <CatalogBanner />
         <Arrow />
      </div>
   );
};
