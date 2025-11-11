// generated with Cursor + agents.md — reviewed by Christian Oscar Papa

import { siteConfig } from "@/lib/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Clases de tenis en Buenos Aires | JuegoTenis – Caballito y Núñez",
    template: "%s | JuegoTenis",
  },
  description: siteConfig.description,
  keywords: [
    "clases de tenis",
    "tenis Buenos Aires",
    "escuela de tenis",
    "tenis Caballito",
    "tenis Núñez",
    "clases de tenis adultos",
    "clases de tenis niños",
    "escuela infantil tenis",
  ],
  authors: [{ name: "JuegoTenis" }],
  creator: "JuegoTenis",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteConfig.url,
    title: "Clases de tenis en Buenos Aires | JuegoTenis",
    description: siteConfig.description,
    siteName: "JuegoTenis",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clases de tenis en Buenos Aires | JuegoTenis",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
