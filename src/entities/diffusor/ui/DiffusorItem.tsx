import Image from "next/image";
import type { DiffusorPreview } from "../model/type";

interface DiffusorItemProps {
   diffusor: DiffusorPreview;
   sizes?: string;
}

export const DiffusorItem = ({ diffusor, sizes = "(max-width: 640px) 100vw, (max-width: 1024) 50vw, 33vw" }: DiffusorItemProps) => {
   const { name, description, price, image } = diffusor;

   return (
      <div className="flex flex-col text-center">
         <div className="w-full aspect-[360/370] relative mb-5">
            <Image src={image} alt={name} fill className="object-cover" sizes={sizes} />
         </div>
         <span className="mb-2 font-bold text-xl">{name}</span>

         <p className="mb-3 font-light text-sm">{description}</p>

         <span>
            {price} <span>р.</span>
         </span>
      </div>
   );
};
