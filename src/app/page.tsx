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
import RecentSalesPopup from "@/components/landing/RecentSalesPopup";
// Static mock values for urgency bar
const stock = 120;
const weekly = 85;

export default function Home() {

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
      <RecentSalesPopup />
    </>
  );
}
