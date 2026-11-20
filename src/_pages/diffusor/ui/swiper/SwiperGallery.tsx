import type { ImageWithBlurDataURL } from "@/shared/lib";
import Image from "next/image";
import type { RefObject } from "react";
import type Swiper from "swiper";

interface SwiperGalleryProps {
   images: ImageWithBlurDataURL[];
   swiperRef: RefObject<Swiper | null>;
}

export const SwiperGallery = ({ images, swiperRef }: SwiperGalleryProps) => {
   const onSlideSelect = (img: string) => {
      if (!swiperRef.current) return;
      const index = images.findIndex((imageObj) => imageObj.src === img);

      if (index === -1) return;

      swiperRef.current.slideTo(index);
   };

   return (
      <div className="flex gap-1">
         {images.map((image) => (
            <div
               className="w-15 h-15 relative cursor-pointer transition-opacity duration-100 hover:opacity-70"
               key={image.src}
               onClick={() => onSlideSelect(image.src)}
            >
               <Image
                  src={image.src}
                  blurDataURL={image.blurDataURL}
                  placeholder="blur"
                  alt="Diffusor"
                  fill
                  sizes="100px"
                  className="object-cover"
                  loading="eager"
               />
            </div>
         ))}
      </div>
   );
};
