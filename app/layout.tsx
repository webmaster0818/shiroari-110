import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shiroari-110-deploy.pages.dev"),
  alternates: { canonical: "/" },
  twitter: {
    card: "summary_large_image",
  },
  title: {
    default: "シロアリ110番｜シロアリ駆除業者の比較・口コミランキング",
    template: "%s｜シロアリ110番",
  },
  description:
    "シロアリ被害から大切な住まいを守る。全国対応のシロアリ駆除業者を比較・口コミで徹底解説。無料現地調査から対応可能な優良業者をご紹介します。",
  keywords: ["シロアリ駆除", "シロアリ業者", "シロアリ対策", "白アリ", "防蟻処理"],
  openGraph: {
    siteName: "シロアリ110番",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className={notoSansJP.className}>
        <SiteHeader />
        <main className="min-h-screen">
          {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"name\":\"シロアリ110番\",\"url\":\"https://shiroari-110-deploy.pages.dev/\",\"logo\":\"https://shiroari-110-deploy.pages.dev/favicon.ico\",\"publisher\":{\"@type\":\"Organization\",\"name\":\"株式会社MediaX\",\"url\":\"https://mediax.biz\"},\"sameAs\":[\"https://shiroari-110-deploy.pages.dev/about/\"]}" }}
        />
        
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
