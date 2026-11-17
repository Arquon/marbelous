export interface DiffusorPreview {
   id: number;
   name: string;
   description: string;
   price: number;
   image: string;
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
   images: string[];
}
