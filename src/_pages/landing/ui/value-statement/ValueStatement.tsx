import { Container } from "@/shared/ui/container/Container";

interface ValueStatementProps {}

export const ValueStatement = ({}: ValueStatementProps) => {
   return (
      <section className="pt-45 pb-64 bg-grey">
         <Container className="max-w-[960px]">
            <p className="text-center text-block text-3xl font-light leading-[1.45]">
               Ароматы Marbelous становятся частью особенной атмосферы дома. <br />
               С&nbsp;любовью к&nbsp;деталям мы&nbsp;вручную создаём ароматические свечи и&nbsp;диффузоры, которые наполняют пространство уютом,
               гармонией и&nbsp;приятными эмоциями. Наша цель&nbsp;&mdash; сделать каждый момент немного теплее, а&nbsp;ваш дом&nbsp;&mdash; местом,
               куда всегда хочется возвращаться.
            </p>
         </Container>
      </section>
   );
};
