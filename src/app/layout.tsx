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
    "Suplemen tetes herbal berbasis minyak habbatussauda dan zaitun extra virgin. Membantu meredakan batuk dan memelihara daya tahan tubuh sekeluarga. Kirim seluruh Indonesia.",
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
// Pixel ID bukan rahasia (selalu terlihat di client JS) - hardcode sebagai
// default supaya aktif tanpa bergantung pada env var di dashboard hosting.
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "2199678544296617";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${parkinsans.variable} ${snPro.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
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
