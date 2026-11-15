export interface DiffusorPreview {
   id: number;
   name: string;
   description: string;
   price: number;
   currency: string;
   image: string;
}

interface BuyoutOption {
   size: string;
   price: number;
}

export interface DiffusorDetailed {
   id: number;
   name: string;
   description: string[];
   buyoutOptions: BuyoutOption[];
   currency: string;
   images: string[];
}
