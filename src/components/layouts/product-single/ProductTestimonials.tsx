"use client";

import { Button } from "@/components/ui/button";
import { useTestimonial } from "@/context/TestimonialContext";
import { testimonialsSchema } from "@/lib/validations";
import { ITestimonials } from "@/types/product-types";
import { getTestimonials } from "@/types/utils/api";
import { useEffect, useId, useState } from "react";
import ProductDialog from "./ProductDialog";
import ProductRaiting from "./ProductRaiting";

const ProductTestimonials = () => {
  const { testimanials, addTestimonial } = useTestimonial();
  const [testimonialsData, setTestimonialsData] = useState<
    ITestimonials[] | []
  >([]);
  const [displayState, setDisplayState] = useState<ITestimonials[]>([]);
  const [isLoading, setLoading] = useState(false);
  const customId = useId();

  const schema = testimonialsSchema;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getTestimonials();
        setTestimonialsData(data);
      } catch (error) {
        console.log("Can not fetch testimonials:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (testimonialsData.length) {
      setDisplayState([...testimanials, ...testimonialsData]);
    } else {
      setDisplayState(testimonialsData);
    }
  }, [testimanials, testimonialsData]);

  const handleSaveComment = (data: {
    name: string;
    comment: string;
    raiting: string;
  }) => {
    try {
      const testimonial: ITestimonials = {
        id: customId,
        date: new Date().toISOString(),
        name: data.name,
        respond: data.comment,
        raiting: data.raiting,
      };
      console.log(testimonial);
      addTestimonial(testimonial);
    } catch (error) {
      console.log("Error:", error);
      return { success: false };
    }
  };

  if (isLoading) {
    return (
      <div className="p-3 not-last:border-b sm:p-5 md:space-y-2">
        Заватажуєтся ...
      </div>
    );
  }

  return (
    <>
      <div className="flex">
        <div className="flex-1 space-y-1 md:space-y-4">
          <h2
            id="reviews"
            className="scroll-mt-20 text-2xl font-semibold md:scroll-mt-24 md:text-3xl"
          >
            Відгуки{" "}
            <b className="text-accent-foreground font-semibold">
              {displayState.length > 0 ? displayState.length : ""}
            </b>
          </h2>
          <div className="space-y-1 min-[690px]:flex">
            <p className="mr-4 line-clamp-2 font-semibold">
              Загальний рейтинг товару:
            </p>
            <div className="flex gap-1.5">
              <ProductRaiting
                size="lg"
                raiting={Math.floor(
                  displayState.reduce((acc, el) => acc + +el.raiting, 0) /
                    displayState.length,
                )}
              />
            </div>
          </div>
        </div>
        <div>
          <ProductDialog
            title="Залиште свій відгук"
            formFeilds={{ name: "", comment: "", raiting: "5" }}
            onSubmit={(data: {
              name: string;
              comment: string;
              raiting: string;
            }) => handleSaveComment(data)}
            schemaValid={schema}
          >
            <Button
              variant="outline"
              size="lg"
              className="cursor-pointer rounded-none"
            >
              Залишити відгук
            </Button>
          </ProductDialog>
          {/* <ProductDialog
            formFeilds={{ name: "", comment: "", raiting: "5" }}
            hadleSubmit={handleSaveComment}
            schemaValid={testimonialsSchema}
            title="Залиште свій відгук"
          >
            <Button
              variant="outline"
              size={"lg"}
              className="cursor-pointer rounded-none"
            >
              Залишити відгук
            </Button>
          </ProductDialog> */}
        </div>
      </div>

      <ul className="border">
        {displayState.map(
          ({ id, date, name, raiting, respond }: ITestimonials, i) => (
            <li
              key={`${id}${i}`}
              className="space-y-1 p-3 not-last:border-b sm:p-5 md:space-y-2"
            >
              <div className="flex gap-4">
                <div className="flex-1 items-center min-[620px]:flex">
                  <p className="text-lg font-semibold min-[620px]:mr-3 md:text-xl">
                    {name}
                  </p>
                  <span className="text-gray-main text-xs md:text-sm">
                    {date}
                  </span>
                </div>
                <ProductRaiting size="sm" raiting={raiting} />
              </div>
              <p className="text-sm md:text-base">{respond}</p>
            </li>
          ),
        )}
      </ul>
    </>
  );
};

export default ProductTestimonials;
