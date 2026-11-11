import { DiffusorItem, diffusorService } from "@/entities/diffusor";
import { Container } from "@/shared/ui/container/Container";

interface DiffusorsProps {}

export const Diffusors = async ({}: DiffusorsProps) => {
   const diffusors = await diffusorService.getAllDiffusors();

   return (
      <section className="pt-10 pb-56">
         <Container>
            <h2 className="font-semibold text-[42px] text-center mb-21 uppercase">Диффузоры</h2>
            <div className="grid grid-cols-3 gap-x-10 gap-y-27">
               {diffusors.map((diffusor) => (
                  <DiffusorItem key={diffusor.id} diffusor={diffusor} />
               ))}
            </div>
         </Container>
      </section>
   );
};
