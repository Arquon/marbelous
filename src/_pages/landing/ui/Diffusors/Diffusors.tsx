import { DiffusorItem, diffusorService } from "@/entities/diffusor";
import { Container } from "@/shared/ui/container/Container";

interface DiffusorsProps {}

export const Diffusors = async ({}: DiffusorsProps) => {
   const diffusors = await diffusorService.getAllDiffusors();

   return (
      <section className="pt-10 pb-56 max-md:scroll-mt-22" id="catalog">
         <Container>
            <h2 className="font-semibold text-[2.6rem] text-center mb-21 uppercase max-md:mb-15 max-sm:mb-10 max-sm:text-4xl">Диффузоры</h2>
            <div className="grid grid-cols-3 gap-x-10 gap-y-27 max-xl:gap-x-7 max-xl:gap-y-19 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-y-14">
               {diffusors.map((diffusor) => (
                  <DiffusorItem key={diffusor.id} diffusor={diffusor} />
               ))}
            </div>
         </Container>
      </section>
   );
};
