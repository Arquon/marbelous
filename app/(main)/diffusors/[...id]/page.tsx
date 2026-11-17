import { diffusorService } from "@/entities/diffusor";
import { DiffusorContent } from "@/pages/diffusor/ui/DiffusorContent";
import { Container } from "@/shared/ui";
import { Suspense } from "react";

type Props = {
   params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
   const diffusors = await diffusorService.getAllDiffusors();

   return diffusors.map((diffusor) => ({
      id: [String(diffusor.id)],
   }));
}

export async function generateMetadata({ params }: Props) {
   const { id } = await params;
   const diffusorDetailed = await diffusorService.getDetailedDiffusor(+id);

   if (!diffusorDetailed)
      return {
         title: "Товар не найден",
      };

   return {
      title: diffusorDetailed.name,
   };
}

const DiffusorPage = ({ params }: Props) => {
   return (
      <section className="pt-28 pb-50 max-lg:pt-20 max-lg:pb-35 max-sm:pt-15 max-sm:pb-20">
         <Container className="max-lg:max-w-4xl">
            <Suspense fallback={null}>
               <DiffusorContent params={params} />
            </Suspense>
         </Container>
      </section>
   );
};

export default DiffusorPage;
