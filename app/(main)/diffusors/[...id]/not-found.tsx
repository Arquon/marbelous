import { Container } from "@/shared/ui";

interface NotFoundProps {}

const NotFound = ({}: NotFoundProps) => {
   return (
      <Container className="flex items-center grow justify-center">
         <h2 className="text-3xl font-medium">Товар не найден</h2>
      </Container>
   );
};

export default NotFound;
