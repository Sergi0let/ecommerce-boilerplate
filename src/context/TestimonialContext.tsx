"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ITestimonials } from "@/types/product-types";

import { createContext, ReactNode, useContext } from "react";

type ResponsesContextType = {
  addTestimonial: (data: ITestimonials) => void;
  testimanials: ITestimonials[];
};

const TestimonialContext = createContext({} as ResponsesContextType);

export function TestimonialProvider({ children }: { children: ReactNode }) {
  const [testimanials, setTestimonials] = useLocalStorage<ITestimonials[]>(
    "respond-data",
    [],
  );

  const addTestimonial = (data: ITestimonials) => {
    return setTestimonials((prev) => [...prev, data]);
  };
  return (
    <TestimonialContext.Provider value={{ addTestimonial, testimanials }}>
      {children}
    </TestimonialContext.Provider>
  );
}

export function useTestimonial() {
  return useContext(TestimonialContext);
}
