import { Delivery } from "@/pages/landing/ui/Delivery/Delivery";
import { Diffusors } from "@/pages/landing/ui/Diffusors/Diffusors";
import { StartScreen } from "@/pages/landing/ui/StartScreen/StartScreen";
import { ValueStatement } from "@/pages/landing/ui/ValueStatement/ValueStatement";
import { Footer } from "@/widgets/footer/ui/Footer";

export default function Home() {
   return (
      <div className="">
         <StartScreen />
         <ValueStatement />
         <Diffusors />
         <Delivery />
         <Footer />
      </div>
   );
}
