import { diffusorService } from "@/entities/diffusor";
import { DiffusorInformation } from "./DiffusorInformation";
import { DiffusorSwiper } from "./swiper/DiffusorSwiper";

type Props = {
   params: Promise<{ id: string }>;
};
export const DiffusorContent = async ({ params }: Props) => {
   const { id } = await params;

   const diffusorDetailed = await diffusorService.getDetailedDiffusor(+id);

   return (
      <div className="flex gap-10 max-lg:flex-col">
         <DiffusorSwiper images={diffusorDetailed.images} />
         <DiffusorInformation diffusor={diffusorDetailed} />
      </div>
   );
};
