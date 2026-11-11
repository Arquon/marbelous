import { StartScreenImage } from "@/shared/assets";
import Image from "next/image";

interface BackgroundProps {}

export const Background = ({}: BackgroundProps) => {
   return (
      <div className="absolute inset-0 -z-10">
         <Image src={StartScreenImage} alt="background" className="object-cover" fill priority sizes="100vw" />
         <div className="absolute inset-0 bg-linear-to-b from-black/80 to-black/20" />
      </div>
   );
};
