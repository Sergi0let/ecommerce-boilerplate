"use client";

import Checkicon from "@/components/icons/Checkicon";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { ReactNode, useState } from "react";
import { FieldValues } from "react-hook-form";
import { ZodType } from "zod";
import ProductForm from "./ProductForm";

const ProductModalThanks = ({ message }: { message: string }) => {
  return (
    <>
      <div className="mb-5 flex justify-center">
        <Checkicon className="size-16" />
      </div>
      <DialogTitle className="text-center text-2xl font-semibold">
        {message}
      </DialogTitle>
      <DialogDescription className="font-base px-6 text-center">
        Ми цінуємо ваш внесок.
      </DialogDescription>
    </>
  );
};

interface Props<T extends FieldValues> {
  title: string;
  backdropClass?: string;
  className?: string;
  children: ReactNode;
  schemaValid: ZodType<T>;
  formFeilds: T;
  onSubmit: (data: T) => void;
}

const ProductDialog = <T extends FieldValues>({
  title = "Заголовок модального вікна",
  backdropClass,
  children,
  formFeilds,
  onSubmit,
  schemaValid,
  className = "",
}: Props<T>) => {
  const [isGreat, setIsGreat] = useState(false);

  const formSubmitting = (data: T) => {
    try {
      onSubmit(data);
      setIsGreat(true);
      return { success: true };
    } catch (error) {
      console.log("Error:", error);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogOverlay className={backdropClass} />
      <DialogContent
        className={cn(
          "dialog-content !w-full rounded-none border-none p-8 md:max-w-md",
          className,
        )}
      >
        <DialogHeader>
          {isGreat ? (
            <ProductModalThanks message={"Тут буде вітання та дякую"} />
          ) : (
            <>
              <DialogTitle className="text-center text-2xl font-semibold">
                {title}
              </DialogTitle>
              <DialogDescription className="font-base px-6 text-center">
                Залиште своє ім’я та номер телефону, і ми зателефонуємо вам для
                оформлення замовлення
              </DialogDescription>
            </>
          )}
        </DialogHeader>
        <div className="flex flex-col space-x-2">
          <div className="grid flex-1 gap-2">
            {!isGreat && (
              <ProductForm
                schema={schemaValid}
                defaultValues={formFeilds}
                onSubmit={formSubmitting}
              />
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDialog;
