import type { Metadata } from "next";
import { Parkinsans, SN_Pro } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { BRAND } from "@/lib/config";

const parkinsans = Parkinsans({
  variable: "--font-parkinsans",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const snPro = SN_Pro({
  variable: "--font-sn-pro",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${BRAND.domain}`),
  title: {
    default: `${BRAND.name} - Tetes Herbal Habbatussauda & Zaitun untuk Keluarga`,
    template: `%s - ${BRAND.name}`,
  },
  description:
    "Suplemen tetes herbal berbasis minyak habbatussauda dan zaitun extra virgin. Membantu meredakan batuk dan memelihara daya tahan tubuh sekeluarga. Kirim seluruh Indonesia, COD tersedia.",
  openGraph: {
    title: `${BRAND.name} - Tetes Herbal untuk Napas Lega Sekeluarga`,
    description:
      "Membantu meredakan batuk & memelihara daya tahan tubuh. Habbatussauda + zaitun extra virgin.",
    locale: "id_ID",
    type: "website",
  },
  other: {
    "facebook-domain-verification": "10k2y16381iwz7o5ekp5pxag05rcav",
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${parkinsans.variable} ${snPro.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <div
          aria-hidden
          style={{ display: "none" }}
          dangerouslySetInnerHTML={{
            __html: `<!--
THESIS: Trust earned through clarity, not a jamu-nostalgia costume - a clean
modern supplement shelf, not a poster.
OWN-WORLD: warm paper ground, deep forest green + burnt clay accent, flat
solid fills (no gradients), Parkinsans display / SN Pro body, drawn line
icons only (no emoji, no eyebrows, no card-for-everything).
STORY: a busy Indonesian parent sees one small bottle that covers the whole
family, trusts the two-ingredient simplicity, and picks a channel
(Shopee/Tokopedia/Website/WhatsApp) to buy from.
FIRST VIEWPORT: headline + subcopy + two actions on the left, real product
photo on the right, on a plain paper ground - no gradient, no floating
badge soup.
FORM: canon (standing exit chosen over the assigned "Iklan Jamu Jadul"
direction), quality bar ritual.com, seed key d8ef2600.
FINISH: unreviewed and undocumented is unfinished; this build ends with the
finish review, the verdict, and DESIGN.md.
-->`,
          }}
        />
        {children}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');`}
            </Script>
          </>
        )}
        {META_PIXEL_ID && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
              document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');`}
          </Script>
        )}
      </body>
    </html>
  );
}
