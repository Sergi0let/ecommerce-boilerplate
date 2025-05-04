import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const ProductItem = ({ children, className = "" }: Props) => {
  return (
    <div
      className={cn(
        "bg-background relative space-y-3 border px-4 py-5 md:space-y-4 md:p-7",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default ProductItem;
