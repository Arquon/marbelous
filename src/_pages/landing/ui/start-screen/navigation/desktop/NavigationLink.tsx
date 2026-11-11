"use client";

import { useNavigationLink } from "@/widgets/navigation";
import Link from "next/link";
import type { ReactNode } from "react";

interface LinkProps {
   href: string;
   children: ReactNode;
}

export const NavigationLink = ({ children, href }: LinkProps) => {
   const { onClick } = useNavigationLink({ href });

   return (
      <Link className="text-white text-2xl font-light" href={href} onClick={onClick}>
         {children}
      </Link>
   );
};
