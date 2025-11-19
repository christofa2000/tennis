// generated with Cursor + agents.md — reviewed by Christian Oscar Papa

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { metadata as siteMetadata } from "./metadata";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={montserrat.variable}>
      <body
        className={`${montserrat.variable} font-sans antialiased`}
        style={{ fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
