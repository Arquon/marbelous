import { Button } from "@/shared/ui";
import Link from "next/link";

interface CatalogBannerProps {}

export const CatalogBanner = ({}: CatalogBannerProps) => {
   return (
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-9 pt-7">
         <p className="text-white text-[42px] font-bold tracking-wide">Уют созданный вручную</p>
         <Button as={Link} href="/#furniture">
            Каталог
         </Button>
      </div>
   );
};
