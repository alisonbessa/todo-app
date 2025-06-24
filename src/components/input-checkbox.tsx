import { cva, cx, type VariantProps } from "class-variance-authority";
import Icon from "./icon";
import CheckIcon from "@/assets/icons/check.svg?react";

export const inputCheckboxWrapperVariants = cva(`
  inline-flex items-center justify-center relative
  group
`);

export const inputCheckboxVariants = cva(
  `
  appearance-none peer flex items-center justify-center cursor-pointer
  border-2 border-solid transition overflow-hidden
  border-green-base hover:border-green-dark hover:bg-green-dark/20
  checked:border-green-base checked:bg-green-base
  group-hover:border-green-dark group-hover:bg-green-dark
  `,
  {
    variants: {
      size: {
        md: "w-5 h-5 rounded-sm",
      },
      disabled: {
        true: "pointer-events-none",
      },
    },
    defaultVariants: {
      size: "md",
      disabled: false,
    },
  }
);

export const inputCheckboxIconVariants = cva(
  `
  absolute top-1/2 left-1 -translate-y-1/2
  hidden peer-checked:block fill-white
  transition-opacity duration-200
  `,
  {
    variants: {
      size: {
        md: "w-3 h-3",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

interface InputCheckboxProps
  extends VariantProps<typeof inputCheckboxVariants>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {}

export default function InputCheckbox({
  className,
  size,
  disabled,
  ...props
}: InputCheckboxProps) {
  return (
    <label className={cx(inputCheckboxWrapperVariants({ className }))}>
      <input
        type="checkbox"
        className={cx(inputCheckboxVariants({ size, disabled }), className)}
        {...props}
      >
        <Icon
          svg={CheckIcon}
          className={cx(inputCheckboxIconVariants({ size }))}
        />
      </input>
    </label>
  );
}
