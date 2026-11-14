import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/main-header";

const Layout = ({ children }: LayoutProps<"/">) => {
   return (
      <div className="flex flex-col min-h-screen">
         <Header />
         <main className="flex flex-col grow">{children}</main>
         <Footer />
      </div>
   );
};

export default Layout;
