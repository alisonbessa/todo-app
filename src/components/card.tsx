import { cva, cx, type VariantProps } from "class-variance-authority";
import React from "react";

export const cardVariants = cva(
  `
  rounded-lg border border-solid border-gray-200
  bg-white shadow-sm
  `,
  {
    variants: {
      size: {
        none: "",
        md: "p-5",
      },
    },
    defaultVariants: {
      size: "none",
    },
  }
);

interface CardProps
  extends VariantProps<typeof cardVariants>,
    React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements;
}

export default function Card({
  className,
  size,
  children,
  as = "div",
  ...props
}: CardProps) {
  return React.createElement(
    as,
    {
      className: cx(cardVariants({ size }), className),
      ...props,
    },
    children
  );
}
