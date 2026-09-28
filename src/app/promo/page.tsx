import type { Metadata } from "next";
import PromoLanding from "@/components/promo/PromoLanding";
import { PROMO_ANGLES } from "@/lib/promo-angles";

// URL lama dari kreatif Meta yang sudah beredar. Situs ini static export,
// jadi tidak ada redirect server - halaman ini tetap dirender agar traffic
// iklan lama tidak mendarat di 404, memakai angle pernapasan seperti versi
// aslinya. Kampanye baru arahkan ke /promo/napas atau /promo/imun.
const ANGLE = PROMO_ANGLES.napas;

export const metadata: Metadata = {
  title: ANGLE.metaTitle,
  description: ANGLE.metaDescription,
  robots: { index: false, follow: false },
};

export default function PromoPage() {
  return <PromoLanding angle={ANGLE} />;
}
