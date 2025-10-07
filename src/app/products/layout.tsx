import Footer from "@/components/footer";
import Navbar from "@/components/navbar/navbar";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
