import { Container } from "@/shared/ui/container/Container";
import { Socials } from "./socials/Socials";
import { Logo } from "@/shared/ui";

interface FooterProps {}

export const Footer = ({}: FooterProps) => {
   return (
      <footer className="bg-dark pt-15 pb-20">
         <Container className="flex flex-col items-center">
            <Socials />
            <p className="max-w-xl text-center text-white font-semibold text-[26px] leading-[1.23] mb-12">
               Для заказа напишите в Телеграм кликнув по иконке или на почту ниже
            </p>
            <div className="text-white text-lg font-light mb-20">marbelous.store@yandex.ru</div>
            <Logo className="w-[300px]" />
         </Container>
      </footer>
   );
};
