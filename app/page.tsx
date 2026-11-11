import { Delivery } from "@/pages/landing";
import { Diffusors } from "@/pages/landing";
import { StartScreen } from "@/pages/landing";
import { ValueStatement } from "@/pages/landing";
import { Footer } from "@/widgets/footer";

export default function Home() {
   return (
      <main className="flex flex-col">
         <StartScreen />
         <ValueStatement />
         <Diffusors />
         <Delivery />
         <Footer />
      </main>
   );
}
