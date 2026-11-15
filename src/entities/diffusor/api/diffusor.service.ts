import diffusors from "../mocks/diffusors.json";
import diffusorDetailed from "../mocks/diffusorDetailed.json";
import type { DiffusorDetailed } from "../model/type";

export const diffusorService = {
   getAllDiffusors: async () => {
      return diffusors;
   },
   getDetailedDiffusor: async (id: number): Promise<DiffusorDetailed> => {
      return diffusorDetailed;
   },
};
