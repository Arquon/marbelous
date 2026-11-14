import { Appear } from "@/shared/ui";
import type { ReactNode } from "react";

interface RuleItemProps {
   heading: string;
   children: ReactNode;
   number: number;
}

export const RuleItem = ({ heading, children, number }: RuleItemProps) => {
   return (
      <Appear threshold={0.3}>
         <h4 className="text-xl mb-1 font-light max-md:text-lg">
            {number}. <span className="font-bold">{heading}</span>
         </h4>
         <div className="text-xl font-light max-md:text-base">{children}</div>
      </Appear>
   );
};
