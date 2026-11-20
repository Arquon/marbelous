import Image from "next/image";
import type { DiffusorPreview } from "../model/type";
import Link from "next/link";
import { getBlurDataURL } from "@/shared/lib/server";
import { createSupabaseClient } from "@/shared/api";

interface DiffusorItemProps {
   diffusor: DiffusorPreview;
   sizes?: string;
}

export const DiffusorItem = async ({ diffusor, sizes = "(max-width: 640px) 100vw, (max-width: 1024) 50vw, 33vw" }: DiffusorItemProps) => {
   const { name, description, price, image, id } = diffusor;

   const blurDataURL = image.blurDataURL ?? (await getBlurDataURL({ src: image.src }));

   if (!image.blurDataURL) {
      const supabase = await createSupabaseClient();
      const previewImageWithBlur = {
         ...image,
         blurDataURL,
      };
      await supabase.from("diffusors").update({ preview_image: previewImageWithBlur }).eq("id", id);
   }

   return (
      <Link className="flex flex-col text-center" href={`/diffusors/${id}`}>
         <div className="w-full aspect-[360/370] relative mb-5">
            <Image src={image.src} blurDataURL={blurDataURL} placeholder="blur" alt={name} fill className="object-cover" sizes={sizes} />
         </div>
         <span className="mb-2 font-bold text-xl">{name}</span>

         <p className="mb-3 font-light text-sm">{description}</p>

         <span>
            {price} <span>р.</span>
         </span>
      </Link>
   );
};
