import { Outlet } from "react-router";
import { Navigation } from "@/app/components/Navigation";
import { MobileNav } from "@/app/components/MobileNav";
import { WhatsAppButton } from "@/app/components/WhatsAppButton";
import { Footer } from "@/app/components/Footer";
import { ScrollToTop } from "@/app/components/ScrollToTop";

export function Layout() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navigation />
      <main className="pb-20 md:pb-8">
        <Outlet />
      </main>
      <Footer />
      <MobileNav />
      <WhatsAppButton />
    </div>
  );
}