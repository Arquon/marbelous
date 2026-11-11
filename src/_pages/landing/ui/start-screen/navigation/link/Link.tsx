import Link from "next/link";
import type { ReactNode } from "react";

interface LinkProps {
   href: string;
   children: ReactNode;
}

export const NavigationLink = ({ children, href }: LinkProps) => {
   return (
      <li>
         <Link className="text-white text-2xl font-light" href={href}>
            {children}
         </Link>
      </li>
   );
};
