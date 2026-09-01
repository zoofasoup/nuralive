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
import Footer from "@/components/landing/Footer";
import FloatingCTA from "@/components/landing/FloatingCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <UrgencyBar />
        <TrustBar />
        <Problem />
        <ForWho />
        <Pricing />
        <Ingredients />
        <Testimonials />
        <Comparison />
        <Guarantee />
        <Faq />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
