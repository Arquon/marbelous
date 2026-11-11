import diffusors from "../mocks/diffusors.json";

export const diffusorService = {
   getAllDiffusors: async () => {
      return diffusors;
   },
};
