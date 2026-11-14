import type { ElementType } from "react";
import { twMerge } from "tailwind-merge";
import type { ContainerProps } from "./types";

const DefaultTag = "div";

export const Container = <E extends ElementType = typeof DefaultTag>({ className: propsClassName, as, ...restProps }: ContainerProps<E>) => {
   const ownClassName = "max-w-[75rem] mx-auto px-5 w-full";
   const className = twMerge(ownClassName, propsClassName);

   const TagName = as || DefaultTag;

   return <TagName className={className} {...restProps} />;
};
