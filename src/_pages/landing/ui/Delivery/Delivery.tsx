import { Container } from "@/shared/ui/container/Container";

interface DeliveryProps {}

export const Delivery = ({}: DeliveryProps) => {
   return (
      <section className="bg-grey pt-31 pb-35">
         <Container className="text-center">
            <h2 className="text-[42px] font-semibold mb-19 uppercase">Наша доставка</h2>
            <p className="max-w-xl mx-auto text-xl font-light leading-[1.55]">
               Доставка осуществляется через СДЭК или Почту России за счёт получателя. Бесплатная доставка при заказе от 5000 рублей.
            </p>
         </Container>
      </section>
   );
};
