import type { CustomComponentProps } from "@/shared/lib";
import type { ChangeEvent, ReactNode } from "react";

interface Option<T extends number | string> {
   id: T;
   label: ReactNode;
}

interface SelectOwnProps<T extends number | string> {
   options: Option<T>[];
   value: string | number;
   label: ReactNode;
   onChange: (id: string) => void;
}

type SelectProps<T extends number | string> = CustomComponentProps<"select", SelectOwnProps<T>>;

export const Select = <T extends number | string>({ options, label, value, onChange: onChangeProps, ...restProps }: SelectProps<T>) => {
   const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
      onChangeProps(event.target.value);
   };

   return (
      <label>
         <p className="text-sm font-light">{label}</p>
         <select name="" id="" {...restProps} value={value} onChange={onChange}>
            {options.map((option) => (
               <option key={option.id} value={option.id}>
                  {option.label}
               </option>
            ))}
         </select>
      </label>
   );
};
