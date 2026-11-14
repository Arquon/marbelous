import clsx from "clsx";

interface BurgerMenuProps {
   toggleMenu: () => void;
   isOpen: boolean;
}

export const BurgerMenu = ({ toggleMenu, isOpen }: BurgerMenuProps) => {
   return (
      <button className="flex flex-col gap-1 cursor-pointer" onClick={toggleMenu}>
         <span className={clsx("bg-white w-5.5 h-0.5 transition-transform duration-100", isOpen && "rotate-45 translate-y-1.5")} />
         <span className={clsx("bg-white w-5.5 h-0.5", isOpen && "opacity-0")} />
         <span className={clsx("bg-white w-5.5 h-0.5 transition-transform duration-100", isOpen && "-rotate-45 -translate-y-1.5")} />
      </button>
   );
};
