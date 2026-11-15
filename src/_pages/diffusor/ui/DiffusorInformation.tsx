"use client";

import type { DiffusorDetailed } from "@/entities/diffusor/model/type";
import { Select } from "@/shared/ui";
import { useState } from "react";

interface DiffusorInformationProps {
   diffusor: DiffusorDetailed;
}

export const DiffusorInformation = ({ diffusor }: DiffusorInformationProps) => {
   const [currentBuyoutOption, setCurrentBuyoutOption] = useState(diffusor.buyoutOptions[0]);

   const formattedPrice = currentBuyoutOption.price.toLocaleString("ru-Ru");

   const selectCurrentBuyoutOption = (stringPrice: string) => {
      const selectedBuyoutOption = diffusor.buyoutOptions.find((option) => option.price === +stringPrice);

      if (!selectedBuyoutOption) return;

      setCurrentBuyoutOption(selectedBuyoutOption);
   };

   return (
      <div>
         <h3 className="text-2xl font-semibold mb-4.5">{diffusor.name}</h3>
         <p className="text-xl font-semibold mb-3">{formattedPrice} р.</p>

         <Select
            label="Объем"
            options={diffusor.buyoutOptions.map((option) => ({
               id: option.price,
               label: option.size,
            }))}
            value={currentBuyoutOption.price}
            onChange={selectCurrentBuyoutOption}
         />

         <div className="flex flex-col gap-5">
            {diffusor.description.map((text, index) => (
               <p className="text-sm font-light max-lg:text-lg max-md:text-base max-sm:text-sm" key={index}>
                  {text}
               </p>
            ))}
         </div>
      </div>
   );
};
