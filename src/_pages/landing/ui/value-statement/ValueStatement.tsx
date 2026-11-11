import { Container } from "@/shared/ui/container/Container";

interface ValueStatementProps {}

export const ValueStatement = ({}: ValueStatementProps) => {
   return (
      <section className="pt-45 pb-64 bg-grey max-xl:pt-38 max-xl:pb-54 max-md:pt-24 max-md:pb-36 max-md:scroll-mt-22" id="about">
         <Container className="max-w-[60rem] max-xl:max-w-[50rem] max-sm:max-w-[30rem]">
            <p className="text-center text-block text-3xl font-light leading-[1.45] max-xl:text-[1.63rem] max-sm:text-xl">
               Ароматы Marbelous становятся частью особенной атмосферы дома. <br />
               С&nbsp;любовью к&nbsp;деталям мы&nbsp;вручную создаём ароматические свечи и&nbsp;диффузоры, которые наполняют пространство уютом,
               гармонией и&nbsp;приятными эмоциями. Наша цель&nbsp;&mdash; сделать каждый момент немного теплее, а&nbsp;ваш дом&nbsp;&mdash; местом,
               куда всегда хочется возвращаться.
            </p>
         </Container>
      </section>
   );
};
