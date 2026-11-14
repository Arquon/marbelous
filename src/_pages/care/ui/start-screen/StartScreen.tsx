import { Background } from "./background/Background";

interface StartScreenProps {}

export const StartScreen = ({}: StartScreenProps) => {
   return (
      <>
         <section className="relative h-screen flex items-center justify-center">
            <Background />
            <h1 className="text-white text-[5.125rem] tracking-[0.125rem] font-semibold pb-4 text-center max-lg:text-6xl max-md:text-5xl max-sm:text-4xl">
               Инструкция по уходу
            </h1>
         </section>
      </>
   );
};
