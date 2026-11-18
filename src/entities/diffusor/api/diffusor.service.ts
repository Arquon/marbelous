import { cacheTag } from "next/cache";
import type { DiffusorDetailed } from "../model/type";
import { createSupabaseClient } from "@/shared/api/client";

export const allDiffusorsTag = "diffusors";
export const detailedDiffusorTags = (id: number) => [allDiffusorsTag, `diffusor-${id}`];

export const diffusorService = {
   getAllDiffusors: async () => {
      "use cache";
      cacheTag(allDiffusorsTag);

      const supabase = await createSupabaseClient();
      const { data, error } = await supabase
         .from("diffusors")
         .select("id, name, description:preview_description, price:buyout_options->0->price, image:preview_image")
         .order("id")
         .overrideTypes<Array<{ price: number }>>();

      if (error) {
         throw error;
      }

      return data;
   },
   getDetailedDiffusor: async (id: number): Promise<DiffusorDetailed | null> => {
      "use cache";
      cacheTag(...detailedDiffusorTags(id));

      const supabase = await createSupabaseClient();
      const { data, error } = await supabase
         .from("diffusors")
         .select("id, name, description, aromaProfile:aroma_profile, aromaMood:aroma_mood, buyoutOptions:buyout_options, images")
         .eq("id", id)
         .maybeSingle()
         .overrideTypes<{ buyoutOptions: DiffusorDetailed["buyoutOptions"]; images: string[] }>();

      if (error) {
         throw error;
      }

      return data;
   },
};
