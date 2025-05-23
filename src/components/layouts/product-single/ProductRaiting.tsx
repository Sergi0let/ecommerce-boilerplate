import { cn } from "@/lib/utils";

interface Props {
  raiting: string | number;
  size: "sm" | "lg";
}

const Staricon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      fill="#FFA900"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15.958 6.137a.85.85 0 00-.731-.584l-4.619-.42L8.783.86a.85.85 0 00-1.565 0L5.393 5.134l-4.62.419A.852.852 0 00.29 7.04l3.491 3.061-1.03 4.534a.85.85 0 001.266.92L8 13.174l3.982 2.382a.85.85 0 001.266-.92l-1.03-4.534 3.492-3.061a.852.852 0 00.248-.904z" />
    </svg>
  );
};

const ProductRaiting = ({ raiting, size }: Props) => {
  return (
    <div
      className={cn(
        "flex",
        { "gap-1.5": size === "lg" },
        { "gap-0.5": size === "sm" },
      )}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Staricon
          key={i}
          className={cn(
            { "size-5": size === "lg" },
            { "size-4": size == "sm" },
            { "fill-blue-light": i >= +raiting },
          )}
        />
      ))}
    </div>
  );
};

export default ProductRaiting;
