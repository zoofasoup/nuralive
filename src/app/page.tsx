import Navbar from "@/components/Navbar";
import PromoTicker from "@/components/PromoTicker";
import HeroCarousel from "@/components/landing/HeroCarousel";
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
import MarketplaceGallery from "@/components/landing/MarketplaceGallery";
import Testimonials from "@/components/landing/Testimonials";
import Faq from "@/components/landing/Faq";
import Footer from "@/components/landing/Footer";
import FloatingCTA from "@/components/landing/FloatingCTA";

export default function Home() {
  return (
    <>
      <PromoTicker />
      <Navbar />
      <main>
        <HeroCarousel />
        {/* Carousel headline lives inside a photo, so it can't be read by
            search engines or screen readers - this keeps exactly one real
            H1 on the page without visually repeating the graphic. */}
        <h1 className="sr-only">
          NurAlive - Tetes Herbal Habbatussauda &amp; Zaitun untuk Napas Lega
          Sekeluarga
        </h1>
        <UrgencyBar />
        <TrustBar />
        <Problem />
        <ForWho />
        <Pricing />
        <MarketplaceGallery />
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
