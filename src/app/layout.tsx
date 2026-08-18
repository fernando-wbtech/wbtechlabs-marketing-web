import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Configuración B2B para la barra del navegador en móviles (Dark Mode)
export const viewport: Viewport = {
  themeColor: "#09090b",
};

// Tarjeta de Presentación Digital y SEO Global
export const metadata: Metadata = {
  title: "WB Tech Labs | Ingeniería Electrónica y Ciberseguridad B2B",
  description: "Firma global de arquitectura Edge, mantenimiento predictivo (PdMaaS), ciberseguridad IoT y optimización automotriz B2B.",
  keywords: [
    "IoT", 
    "Edge AI", 
    "Ciberseguridad", 
    "ECU Tuning", 
    "Mantenimiento Predictivo", 
    "Hardware Security"
  ],
  openGraph: {
    title: "WB Tech Labs | Arquitectura para la Industria Crítica",
    description: "Diseñamos, aseguramos y optimizamos infraestructura tecnológica Edge e IoT.",
    url: "https://wbtechlabs.com",
    siteName: "WB Tech Labs",
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950">
        {children}
      </body>
    </html>
  );
}