"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import { useRef, useState } from "react";
import { SwiperGallery } from "./SwiperGallery";
import { SwiperNavigation } from "./SwiperNavigation";

import type SwiperInstance from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

interface DiffusorSwiperProps {
   images: string[];
}

export const DiffusorSwiper = ({ images }: DiffusorSwiperProps) => {
   const swiperRef = useRef<SwiperInstance>(null);

   const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
   const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

   return (
      <div className="flex flex-col w-[clamp(500px,60vw,47.5rem)] shrink-0 gap-1 max-lg:w-full mx-auto">
         <Swiper
            className="w-full aspect-[4/3]"
            modules={[Navigation, EffectFade]}
            navigation={{
               nextEl,
               prevEl,
            }}
            loop
            effect="fade"
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
         >
            {images.map((img) => (
               <SwiperSlide className="relative w-full" key={img}>
                  <Image src={img} fill sizes="(max-width: 1024px) 100vw, 760px" className="object-cover" alt="Diffusor" loading="eager" />
               </SwiperSlide>
            ))}

            <SwiperNavigation direction="prev" setElement={setPrevEl} />
            <SwiperNavigation direction="next" setElement={setNextEl} />
         </Swiper>

         {images.length > 1 && <SwiperGallery images={images} swiperRef={swiperRef} />}
      </div>
   );
};
