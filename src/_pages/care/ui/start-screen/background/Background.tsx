import { CareImage } from "@/shared/assets";
import { BackgroundAppear } from "@/shared/ui";
import Image from "next/image";

interface BackgroundProps {}

export const Background = ({}: BackgroundProps) => {
   return (
      <div className="absolute inset-0 -z-10 pointer-events-none md:[clip-path:inset(0)]">
         <div className="md:fixed md:inset-0">
            <BackgroundAppear>
               <Image src={CareImage} alt="care" className="object-cover" fill sizes="100vw" placeholder="blur" loading="eager" />
               <div className="absolute inset-0 bg-black opacity-40" />
            </BackgroundAppear>
         </div>
      </div>
   );
};
