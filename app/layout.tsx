import type { Metadata } from "next";
import { Karla, Teko } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/lib/site";
import "./globals.css";

const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.fullName} · Santa Catarina`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "parque de trampolines",
    "Jump House",
    "Santa Catarina",
    "fiestas infantiles Monterrey",
    "trampoline park Nuevo León",
    "Plaza Santa Catarina",
  ],
  openGraph: {
    title: `${site.fullName} · ${site.city}`,
    description: site.description,
    locale: site.locale,
    type: "website",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 675 }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.fullName,
    description: site.description,
    images: ["/images/hero.jpg"],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-MX"
      className={`${teko.variable} ${karla.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-void text-ink">
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
