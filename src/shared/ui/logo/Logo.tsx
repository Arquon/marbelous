import { LogoImage } from "@/shared/assets";
import Image from "next/image";
import type { ComponentProps } from "react";

export type LogoProps = Omit<ComponentProps<typeof Image>, "src" | "alt">;

export const Logo = (props: LogoProps) => {
   return <Image {...props} src={LogoImage} alt="marbelous" />;
};
