import { diffusorService } from "@/entities/diffusor";
import { DiffusorInformation } from "./DiffusorInformation";
import { DiffusorSwiper } from "./swiper/DiffusorSwiper";
import { notFound } from "next/navigation";
import { getBlurDataURL } from "@/shared/lib/server";
import { createSupabaseClient } from "@/shared/api";

type Props = {
   params: Promise<{ id: string }>;
};
export const DiffusorContent = async ({ params }: Props) => {
   const { id } = await params;

   const diffusorDetailed = await diffusorService.getDetailedDiffusor(+id);

   if (!diffusorDetailed) {
      notFound();
   }

   const shouldUploadBlur = diffusorDetailed.images.some((image) => !image.blurDataURL);

   const diffusorImages = await Promise.all(
      diffusorDetailed.images.map(async (image) => ({
         src: image.src,
         blurDataURL: image.blurDataURL ?? (await getBlurDataURL({ src: image.src })),
      })),
   );

   if (shouldUploadBlur) {
      const supabase = await createSupabaseClient();
      await supabase.from("diffusors").update({ images: diffusorImages }).eq("id", +id);
   }

   return (
      <div className="flex gap-10 max-lg:flex-col">
         <DiffusorSwiper images={diffusorImages} />
         <DiffusorInformation diffusor={diffusorDetailed} />
      </div>
   );
};
