import { Container } from "@/shared/ui/container/Container";

interface DeliveryProps {}

export const Delivery = ({}: DeliveryProps) => {
   return (
      <section className="bg-light pt-31 pb-35 max-lg:pt-24 max-lg:pb-28 max-md:scroll-mt-22" id="delivery">
         <Container className="text-center">
            <h2 className="text-[2.63rem] font-semibold mb-19 uppercase max-lg:mb-15 max-lg:text-[2.23rem]">Наша доставка</h2>
            <p className="max-w-xl mx-auto text-xl font-light leading-[1.55] max-lg:text-lg">
               Доставка осуществляется через СДЭК или Почту России за счёт получателя. Бесплатная доставка при заказе от 5000 рублей.
            </p>
         </Container>
      </section>
   );
};
