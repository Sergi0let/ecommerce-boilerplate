"use client";

import { linkNavData } from "@/data/link-nav";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface Props {
  className?: string;
}
const ProductNav = ({ className }: Props) => {
  const [activeAnchor, setActiveAnchor] = useState<string>("");
  const navRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin:
        window.innerWidth < 768 ? "0px 0px -70% 0px" : "-20% 0px -20% 0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveAnchor(entry.target.id);
        }
      });
    }, observerOptions);

    linkNavData.forEach(({ anchor }) => {
      const element = document.getElementById(anchor);

      if (!element) {
        console.warn(`Element with id "${anchor}" not found`);
      } else {
        observer.observe(element);
      }
    });

    return () => {
      linkNavData.forEach(({ anchor }) => {
        const element = document.getElementById(anchor);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  // Центрування активного пункту навігації з затримкою
  useEffect(() => {
    if (window.innerWidth > 840) {
      return;
    }
    if (navRef.current) {
      const activeItem = navRef.current.querySelector(
        `a[href="#${activeAnchor}"]`,
      );
      if (activeItem) {
        // Затримка для завершення вертикальної прокрутки
        const timeoutId = setTimeout(() => {
          activeItem.scrollIntoView({ behavior: "smooth", inline: "center" });
        }, 500);
        return () => clearInterval(timeoutId);
      }
    }
  }, [activeAnchor]);

  return (
    <nav
      className={cn(
        "bg-background flex items-center justify-between overflow-hidden",
        className,
      )}
    >
      <ul
        ref={navRef}
        className="scrollbar flex flex-nowrap overflow-x-auto md:-mx-4"
      >
        {linkNavData.map(({ id, name, anchor }) => (
          <li
            key={id}
            className="group relative my-auto h-10 md:h-14"
            aria-current={activeAnchor === anchor ? "true" : "false"}
          >
            <span className="group-hover:text-background group-hover:bg-accent flex h-full cursor-pointer items-center px-3 font-semibold uppercase transition-colors duration-500 sm:px-5 md:px-8">
              <a
                className="text-sm text-nowrap md:text-base"
                href={`#${anchor}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveAnchor(anchor);
                  const element = document.getElementById(anchor);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {name}
              </a>
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ProductNav;
