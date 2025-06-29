import Breadcrumbs from "../features/Breadcrumbs";
import Footer from "../features/footer/Footer";
import Header from "../features/header/Header";
import Sidebar from "../features/Sidebar";

type Props = { children: React.ReactNode };

export default function HomeLayout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Breadcrumbs />
      <Sidebar open={false} onClose={()=>{}} />
      <main className="flex-1 px-4 py-6">{children}</main>
      <Footer />
    </div>
  );
}