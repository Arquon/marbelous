import type { CustomComponentProps } from "@/shared/lib";
import type { ElementType } from "react";

interface ContainerOwnProps<E extends ElementType> {
   as?: E;
}

export type ContainerProps<E extends ElementType> = CustomComponentProps<E, ContainerOwnProps<E>>;
