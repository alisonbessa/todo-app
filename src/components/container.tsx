import { cva, cx, type VariantProps } from "class-variance-authority";
import React from "react";

export const containerVariants = cva(
  `
    mx-auto
  `,
  {
    variants: {
      size: {
        md: "max-w-screen-md px-2",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

interface ContainerProps
  extends VariantProps<typeof containerVariants>,
    Omit<React.ComponentProps<"div">, "size"> {
  as?: keyof React.JSX.IntrinsicElements;
}

export default function Container({
  className,
  size = "md",
  children,
  as = "div",
  ...props
}: ContainerProps) {
  return React.createElement(
    as,
    {
      className: cx(containerVariants({ size }), className),
      ...props,
    },
    children
  );
}
