import type { CustomComponentProps } from "@/shared/lib";
import type { ElementType } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonOwnProps<E extends ElementType> {
   as?: E;
}

type ButtonProps<E extends ElementType> = CustomComponentProps<E, ButtonOwnProps<E>>;

const defaultTag = "button";

export const Button = <E extends ElementType = typeof defaultTag>({ as, className: propsClassName, ...restProps }: ButtonProps<E>) => {
   const Tag = as ?? defaultTag;

   const defaultClassName = "px-15 py-4 rounded-full text-white text border-2 border-white font-semibold max-lg:px-10";

   const className = twMerge(defaultClassName, propsClassName);

   return <Tag {...restProps} className={className} />;
};
