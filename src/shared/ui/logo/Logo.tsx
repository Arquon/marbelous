import { LogoImage } from "@/shared/assets";
import type { ComponentProps } from "react";

export type LogoProps = ComponentProps<"svg">;

export const Logo = (props: LogoProps) => {
   return <LogoImage width={200} {...props} />;
};
