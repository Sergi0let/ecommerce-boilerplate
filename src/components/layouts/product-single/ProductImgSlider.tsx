"use client";

import { cn } from "@/lib/utils";
import { Options, Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/splide/css";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

interface Props {
  images: string[];
  productTitle: string;
  className?: string;
}

const ProductImgSlider = ({ images, productTitle, className }: Props) => {
  const mainRef = useRef<Splide>(null);
  const thumbsRef = useRef<Splide>(null);

  // Синхронізація основної каруселі та мініатюр
  useEffect(() => {
    const main = mainRef.current;
    const thumbs = thumbsRef.current;

    if (main && thumbs && thumbs.splide) {
      main.sync(thumbs.splide);
    }

    return () => {
      if (main?.splide && thumbs?.splide) {
        main.splide.destroy();
        thumbs.splide.destroy();
      }
    };
  }, []);

  // Налаштування основної каруселі
  const mainOptions: Options = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    gap: "1rem",
    pagination: false, // Увімкнено за замовчуванням (для мобільних)
    height: "auto",
    arrows: false,
    breakpoints: {
      768: {
        pagination: true, // Вимкнути пагінацію на md і вище
      },
    },
  };

  // Налаштування каруселі мініатюр
  const thumbsOptions: Options = {
    type: "slide",
    rewind: true,
    gap: "0.5rem",
    pagination: false,
    fixedWidth: 80,
    fixedHeight: 80,
    cover: true,
    focus: "center",
    isNavigation: true,
    arrows: false,
    breakpoints: {
      768: { fixedWidth: 60, fixedHeight: 45 },
    },
  };

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

  // Функції для навігації мініатюр
  const goPrev = () => {
    if (thumbsRef.current?.splide) {
      thumbsRef.current.splide.go("<");
    }
  };

  const goNext = () => {
    if (thumbsRef.current?.splide) {
      thumbsRef.current.splide.go(">");
    }
  };

  return (
    <div className={cn("space-y-6", className)}>
      {/* Основна карусель */}
      <Splide
        options={mainOptions}
        ref={mainRef}
        aria-labelledby="product-image-carousel"
      >
        {images.map((image, index) => (
          <SplideSlide key={index}>
            <div className="zoomable relative aspect-square w-full">
              <Zoom>
                {image ? (
                  <Image
                    src={image}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain object-center"
                    alt={`${productTitle} - зображення ${index + 1}`}
                    priority={index === 0}
                  />
                ) : null}
              </Zoom>
            </div>
          </SplideSlide>
        ))}
      </Splide>

      {/* Карусель мініатюр (видима на md і вище) */}
      {images.length > 1 && (
        <div className="relative">
          <Splide
            options={thumbsOptions}
            ref={thumbsRef}
            aria-label={`Мініатюри для каруселі зображень ${productTitle}`}
            className={cn(
              "product-page__thumbnails bg-background hidden px-3 md:block xl:px-5",
            )}
          >
            {images.map((image, index) => (
              <SplideSlide key={index}>
                <div className="relative h-full w-full">
                  <Image
                    src={image}
                    fill
                    sizes="80px"
                    className="object-cover"
                    alt={`${productTitle} - мініатюра ${index + 1}`}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
              </SplideSlide>
            ))}
          </Splide>

          <button
            onClick={goPrev}
            className="hover:text-red-main absolute top-1/2 -left-2 z-10 hidden size-10 -translate-y-1/2 cursor-pointer items-center justify-start rounded-full transition-colors md:flex"
            aria-label="Попередня мініатюра"
          >
            <svg
              className="stroke-blue-main group-hover:stroke-green-main transition-colors"
              width="9"
              height="16"
              viewBox="0 0 9 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 15L0.999999 8L8 1"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={goNext}
            className="group absolute top-1/2 -right-2 z-10 hidden size-10 -translate-y-1/2 cursor-pointer items-center justify-end rounded-full transition-colors md:flex"
            aria-label="Наступна мініатюра"
          >
            <svg
              className="stroke-blue-main group-hover:stroke-green-main transition-colors"
              width="9"
              height="16"
              viewBox="0 0 9 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L8 8L1 15"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductImgSlider;

/*
  const slideRefs = useRef<HTMLDivElement[]>([]);

  const handleZoom = (e: React.MouseEvent, index: number) => {
    const currElement = slideRefs.current[index];
    if (!currElement) return;

    currElement.style.setProperty("--zoom-display", "block");

    const rect = currElement.getBoundingClientRect();
    const xPos = (((e.clientX - rect.left) / rect.width) * 100).toFixed(2);
    const yPos = (((e.clientY - rect.top) / rect.height) * 100).toFixed(2);

    currElement.style.setProperty("--zoom-x", `${xPos}%`);
    currElement.style.setProperty("--zoom-y", `${yPos}%`);
  };

  const handleZoomOut = (index: number) => {
    const currElement = slideRefs.current[index];
    if (!currElement) return;

    currElement.style.setProperty("--zoom-display", "none");
  };
  const handleTouchZoom = (
    e: React.TouchEvent<HTMLDivElement>,
    index: number,
  ) => {
    const currElement = slideRefs.current[index];
    if (!currElement || e.touches.length !== 1) return;

    const touch = e.touches[0];
    const rect = currElement.getBoundingClientRect();

    const xPos = (((touch.clientX - rect.left) / rect.width) * 100).toFixed(2);
    const yPos = (((touch.clientY - rect.top) / rect.height) * 100).toFixed(2);

    currElement.style.setProperty("--zoom-display", "block");
    currElement.style.setProperty("--zoom-x", `${xPos}%`);
    currElement.style.setProperty("--zoom-y", `${yPos}%`);
  };
                ref={(el) => el && (slideRefs.current[index] = el)}
              style={{
                ["--zoom-display" as string]: "none",
                ["--zoom-url" as string]: `url(${image})`,
                ["--zoom-x" as string]: "0%",
                ["--zoom-y" as string]: "0%",
              }}
              onMouseMove={(e) => handleZoom(e, index)}
              onMouseLeave={() => handleZoomOut(index)}
              onTouchMove={(e) => handleTouchZoom(e, index)}
              onTouchEnd={() => handleZoomOut(index)}


              // Css
                .slider-zoom::after {
    cursor: pointer;
    display: var(--zoom-display);
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    background-image: var(--zoom-url);
    background-size: 200%;
    background-repeat: no-repeat;
    background-position: var(--zoom-x) var(--zoom-y);
    pointer-events: none;
  }
              */
