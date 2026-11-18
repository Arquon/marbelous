import Image from "next/image";
import type { RefObject } from "react";
import type Swiper from "swiper";

interface SwiperGalleryProps {
   images: string[];
   swiperRef: RefObject<Swiper | null>;
}

export const SwiperGallery = ({ images, swiperRef }: SwiperGalleryProps) => {
   const onSlideSelect = (img: string) => {
      if (!swiperRef.current) return;
      const index = images.findIndex((image) => image === img);

      if (index === -1) return;

      swiperRef.current.slideTo(index);
   };

   return (
      <div className="flex gap-1">
         {images.map((image) => (
            <div
               className="w-15 h-15 relative cursor-pointer transition-opacity duration-100 hover:opacity-70"
               key={image}
               onClick={() => onSlideSelect(image)}
            >
               <Image src={image} alt="Diffusor" fill sizes="100px" className="object-cover" loading="eager" />
            </div>
         ))}
      </div>
   );
};
