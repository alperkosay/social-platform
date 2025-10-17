import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const sectionTitleVariants = cva("font-bold text-2xl mb-4", {
  variants: {
    variant: {
      default: "text-primary",
      muted: "text-muted-foreground",
      accent: "text-accent",
      subtle: "text-gray-500 dark:text-gray-400",
      underline: "underline decoration-primary",
      uppercase: "uppercase tracking-wide",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "2xl",
  },
});

function SectionTitle({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof sectionTitleVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      data-slot="button"
      className={cn(sectionTitleVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { SectionTitle, sectionTitleVariants };
