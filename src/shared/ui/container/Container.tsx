import type { CustomComponentProps } from "@/shared/lib";
import type { ElementType } from "react";
import { twMerge } from "tailwind-merge";

const DefaultTag = "div";
interface ContainerOwnProps<E extends ElementType> {
   as?: E;
}

export type ContainerProps<E extends ElementType> = CustomComponentProps<E, ContainerOwnProps<E>>;

export const Container = <E extends ElementType = typeof DefaultTag>({ className: propsClassName, as, ...restProps }: ContainerProps<E>) => {
   const ownClassName = "max-w-[1200px] mx-auto px-5 w-full";
   const className = twMerge(ownClassName, propsClassName);

   const TagName = as || DefaultTag;

   return <TagName className={className} {...restProps} />;
};
