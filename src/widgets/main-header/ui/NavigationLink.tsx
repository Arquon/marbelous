"use client";

import { useNavigationLink } from "@/shared/lib";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense, type ReactNode } from "react";

interface NavigationLinkProps {
   children: ReactNode;
   href: string;
   exact?: boolean;
}

interface ClientLinkProps extends NavigationLinkProps {
   className: string;
}

const ClientLink = ({ className: propsClassName, children, href, exact }: ClientLinkProps) => {
   const { onClick } = useNavigationLink({ href });
   const pathName = usePathname();

   const isActive = exact ? pathName === href : pathName.startsWith(`${href}/`);

   const className = clsx(propsClassName, isActive && "opacity-70");

   return (
      <Link href={href} onClick={onClick} className={className}>
         {children}
      </Link>
   );
};

export const NavigationLink = ({ href, children, exact = true }: NavigationLinkProps) => {
   const className = "uppercase text-sm font-medium tracking-[0.125rem] text-white";

   return (
      <Suspense
         fallback={
            <Link href={href} className={className}>
               {children}
            </Link>
         }
      >
         <ClientLink href={href} className={className} exact={exact}>
            {children}
         </ClientLink>
      </Suspense>
   );
};
