"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
// import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/zoom";
import { Navigation, Pagination, Thumbs, Zoom } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  images: string[];
  productTitle: string;
  className?: string;
}

const ProductImgSlider = ({ images, productTitle, className }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

  if (images.length === 0) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-gray-200 p-4",
          className,
        )}
      >
        <span className="text-gray-500">Зображення відсутні</span>
      </div>
    );
  }

  return (
    <div className={cn("space-y-6", className)}>
      {/* Основна карусель */}
      <Swiper
        modules={[Zoom, Thumbs, Navigation, Pagination]}
        zoom={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        spaceBetween={16}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        className="product-page__main-carousel"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            {/* <Zoom> */}
            <div className="swiper-zoom-container relative aspect-square w-full">
              <Image
                src={image}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain object-center"
                alt={`${productTitle} - зображення ${index + 1}`}
                priority={index === 0}
              />
            </div>
            {/* </Zoom> */}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Карусель мініатюр */}
      {images.length > 1 && (
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          spaceBetween={8}
          slidesPerView={5}
          watchSlidesProgress
          zoom={true}
          breakpoints={{
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 7 },
          }}
          className="product-page__thumbnails hidden md:block"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[80px] w-[80px] md:h-[80px] md:w-[80px]">
                <Image
                  src={image}
                  fill
                  sizes="80px"
                  className="object-cover"
                  alt={`${productTitle} - мініатюра ${index + 1}`}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default ProductImgSlider;
