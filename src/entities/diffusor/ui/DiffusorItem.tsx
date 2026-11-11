import Image from "next/image";
import type { DiffusorPreview } from "../model/type";

interface DiffusorItemProps {
   diffusor: DiffusorPreview;
}

export const DiffusorItem = ({ diffusor }: DiffusorItemProps) => {
   const { name, description, price, image } = diffusor;

   return (
      <div className="flex flex-col text-center">
         <div className="w-[360px] h-[370px] relative mb-5">
            <Image src={image} alt={name} fill objectFit="cover" />
         </div>
         <span className="mb-2 font-bold text-xl">{name}</span>

         <p className="mb-3 font-light text-sm">{description}</p>

         <span>
            {price} <span>р.</span>
         </span>
      </div>
   );
};
