import Navbar from "@/components/Navbar";
import Hero from "@/components/landing/Hero";
import {
  UrgencyBar,
  TrustBar,
  Problem,
  Ingredients,
  ForWho,
  Comparison,
  Guarantee,
} from "@/components/landing/Sections";
import Pricing from "@/components/landing/Pricing";
import Testimonials from "@/components/landing/Testimonials";
import Faq from "@/components/landing/Faq";
import LeadMagnet from "@/components/landing/LeadMagnet";
import Footer from "@/components/landing/Footer";
import FloatingCTA from "@/components/landing/FloatingCTA";
import { getStock, ordersThisWeek } from "@/lib/db";

// Angka stok & pesanan dibaca langsung dari DB setiap request.
export const dynamic = "force-dynamic";

export default function Home() {
  const stock = getStock();
  const weekly = ordersThisWeek();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <UrgencyBar stock={stock} weeklyOrders={weekly} />
        <TrustBar />
        <Problem />
        <ForWho />
        <Pricing />
        <Ingredients />
        <Testimonials />
        <Comparison />
        <Guarantee />
        <Faq />
        <LeadMagnet />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
