import { MobileHeader } from "@/pages/landing/ui/mobile-header/MobileHeader";
import { Footer } from "@/widgets/footer";

const Layout = ({ children }: LayoutProps<"/">) => {
   return (
      <div className="flex flex-col min-h-screen">
         <MobileHeader />
         <main className="flex flex-col grow">{children}</main>
         <Footer />
      </div>
   );
};

export default Layout;
