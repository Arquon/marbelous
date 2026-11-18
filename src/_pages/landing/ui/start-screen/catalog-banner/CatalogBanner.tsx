"use client";

import { useNavigationLink } from "@/shared/lib";
import { Button } from "@/shared/ui";
import Link from "next/link";

interface CatalogBannerProps {}

export const CatalogBanner = ({}: CatalogBannerProps) => {
   const { onClick } = useNavigationLink({ href: "/#catalog" });

   return (
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-full justify-center gap-9 pt-7 px-8 max-sm:px-4">
         <h2 className="text-white text-[2.63rem] font-bold tracking-wide text-center max-lg:text-6xl max-md:text-5xl max-sm:text-4xl">
            Уют созданный вручную
         </h2>
         <Button as={Link} href="/#catalog" onClick={onClick}>
            Каталог
         </Button>
      </div>
   );
};
