"use client";

import { usePathname, useRouter } from "next/navigation";
import type { MouseEvent } from "react";

interface useNavigationLinkQueryParams {
   href: string;
}

export function useNavigationLink({ href }: useNavigationLinkQueryParams) {
   const pathName = usePathname();
   const router = useRouter();

   const onClick = (event: MouseEvent) => {
      const [hrefPath, anchor] = href.split("#");

      if (pathName !== hrefPath) {
         return;
      }

      event.preventDefault();

      const element = document.getElementById(anchor);
      if (!element) return;

      element.scrollIntoView({
         behavior: "smooth",
      });

      router.push(href, { scroll: false });
   };

   return { onClick };
}
