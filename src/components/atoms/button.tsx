import cn from "@/utils";
import { cva } from "class-variance-authority";

import type { VariantProps } from "class-variance-authority";
import type { IButtonProps } from "@/types";

export default function Button({
  children,
  className,
  variant,
  size,
  ...props
}: IButtonProps & VariantProps<typeof buttonVariants>) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
}

const buttonVariants = cva("rounded-md", {
  variants: {
    variant: {
      primary: "bg-white rounded-lg text-primary_blue",
      secondary: "bg-primary_green text-white",
    },
    size: {
      sm: "px-4 py-2 text-base font-black",
      md: "px-6 py-[6px] h-9 box-border",
      lg: "px-8 py-4 text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
