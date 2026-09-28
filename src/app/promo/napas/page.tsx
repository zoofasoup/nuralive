import type { Metadata } from "next";
import PromoLanding from "@/components/promo/PromoLanding";
import { PROMO_ANGLES } from "@/lib/promo-angles";

const ANGLE = PROMO_ANGLES.napas;

export const metadata: Metadata = {
  title: ANGLE.metaTitle,
  description: ANGLE.metaDescription,
  robots: { index: false, follow: false },
};

export default function PromoNapasPage() {
  return <PromoLanding angle={ANGLE} />;
}
