import { Delivery } from "@/pages/landing";
import { Diffusors } from "@/pages/landing";
import { StartScreen } from "@/pages/landing";
import { ValueStatement } from "@/pages/landing";

export default function Home() {
   return (
      <>
         <StartScreen />
         <ValueStatement />
         <Diffusors />
         <Delivery />
      </>
   );
}
