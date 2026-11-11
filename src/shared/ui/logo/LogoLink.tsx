import Link from "next/link";
import type { LogoProps } from "./Logo";
import { Logo } from "./Logo";

interface LogoLinkProps extends LogoProps {}

export const LogoLink = (props: LogoLinkProps) => {
   return (
      <Link href="/">
         <Logo {...props} />
      </Link>
   );
};
