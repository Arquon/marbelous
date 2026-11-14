"use client";

import { useNavigationLink } from "@/shared/lib";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

interface NavigationLinkProps {
   children: ReactNode;
   href: string;
   exact?: boolean;
}

export const NavigationLink = ({ href, children, exact = true }: NavigationLinkProps) => {
   const { onClick } = useNavigationLink({ href });

   const pathName = usePathname();

   const isActive = exact ? pathName === href : pathName.startsWith(href);

   const className = clsx("uppercase text-sm font-medium tracking-[0.125rem] text-white", isActive && "opacity-70");

   return (
      <Link href={href} onClick={onClick} className={className}>
         {children}
      </Link>
   );
};
