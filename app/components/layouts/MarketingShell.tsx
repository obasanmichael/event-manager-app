import { Footer } from "@/app/components/marketing/Footer";
import Navbar from "@/app/components/marketing/Navbar";

export function MarketingShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
