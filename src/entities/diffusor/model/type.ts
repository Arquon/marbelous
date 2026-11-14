export interface DiffusorPreview {
   id: number;
   name: string;
   description: string;
   price: number;
   currency: string;
   image: string;
}

enum DiffusorSize {
   SMALL = "100мл",
   MEDIUM = "200мл",
}
export interface DiffusorDetailed {
   id: number;
   name: string;
   description: string[];
   price: number;
   currency: string;
   size: DiffusorSize;
   images: string[];
}
