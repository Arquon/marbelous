import { StartScreenImage } from "@/shared/assets";
import { BackgroundAppear } from "@/shared/ui";
import Image from "next/image";

interface BackgroundProps {}

export const Background = ({}: BackgroundProps) => {
   return (
      <div className="absolute inset-0 -z-10 pointer-events-none">
         <BackgroundAppear>
            <Image src={StartScreenImage} alt="background" className="object-cover" fill priority sizes="100vw" loading="eager" placeholder="blur" />
            <div className="absolute inset-0 bg-linear-to-b from-black/80 to-black/20" />
         </BackgroundAppear>
      </div>
   );
};
