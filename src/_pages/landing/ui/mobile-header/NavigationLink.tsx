"use client";

import { useNavigationLink } from "@/shared/lib";
import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";

interface LinkProps {
   href: string;
   children: ReactNode;
   onClick?: () => void;
}

export const NavigationLink = ({ children, href, onClick: onClickProps }: LinkProps) => {
   const { onClick: onClickHook } = useNavigationLink({ href });

   const onClick = (event: MouseEvent) => {
      onClickHook(event);
      if (onClickProps) onClickProps();
   };

   return (
      <Link className="text-white text-2xl font-light" href={href} onClick={onClick}>
         {children}
      </Link>
   );
};
