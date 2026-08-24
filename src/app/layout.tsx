import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import JsonLd from "@/components/json-ld"; // <-- INYECCIÓN DEL SCHEMA B2B
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

// Tarjeta de Presentación Digital corporativa y SEO B2B (Actualizado a 6 pilares)
export const metadata: Metadata = {
  metadataBase: new URL("https://wbtechlabs.com"),
  title: "WB Tech Labs | Ingeniería, Automatización y Consultoría Deep Tech",
  description: "Construyendo arquitecturas seguras y escalables para el sector industrial y automotriz. Integramos ecosistemas Edge-to-Cloud, control industrial remoto (SCADA/PLC) y Mantenimiento Predictivo (PdMaaS).",
  keywords: [
    "Edge AI", 
    "Ciberseguridad IoT", 
    "Cloud Architecture", 
    "ECU Tuning", 
    "Automatización PLC", 
    "Consultoría I+D",
    "Mantenimiento Predictivo"
  ],
  openGraph: {
    title: "WB Tech Labs | Ingeniería B2B de Alto Rendimiento",
    description: "Deep Tech B2B: Mantenimiento Predictivo, Seguridad Edge, SCADA y Optimización de Hardware.",
    url: "https://wbtechlabs.com",
    siteName: "WB Tech Labs",
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WB Tech Labs | Ingeniería B2B de Alto Rendimiento",
    description: "Construyendo arquitecturas seguras y escalables para la industria crítica.",
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
        <JsonLd /> {/* <-- DECLARACIÓN DE AUTORIDAD CORPORATIVA INVISIBLE AL USUARIO */}
        {children}
        <Analytics />
      </body>
    </html>
  );
}