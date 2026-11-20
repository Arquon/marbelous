import type { ImageWithBlurDataURL } from "@/shared/lib";

export interface DiffusorPreview {
   id: number;
   name: string;
   description: string;
   price: number;
   image: ImageWithBlurDataURL;
}

interface BuyoutOption {
   size: string;
   price: number;
}

export interface DiffusorDetailed {
   id: number;
   name: string;
   description: string;
   aromaProfile: string;
   aromaMood: string;
   buyoutOptions: BuyoutOption[];
   images: ImageWithBlurDataURL[];
}
