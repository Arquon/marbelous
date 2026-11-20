import type { ComponentProps, ElementType } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ObjectType = Record<PropertyKey, any>;

export type CustomComponentProps<E extends ElementType, OwnProps extends ObjectType> = Omit<ComponentProps<E>, keyof OwnProps> & OwnProps;

export type ImageWithBlurDataURL = {
   src: string;
   blurDataURL?: string;
};
