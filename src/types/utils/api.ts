import { products, testimonialsData } from "@/data/products";

export const getProductById = async (id: string) => {
  await new Promise((res) => setTimeout(res, 200));

  return products.find((product) => product.id === id);
};

export const getTestimonials = async () => {
  await new Promise((res) => setTimeout(res, 2000));

  return testimonialsData;
};
