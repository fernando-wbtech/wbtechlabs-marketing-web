import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 selection:bg-emerald-500/30">
      <HeroSection />
      <ServicesSection />
    </main>
  );
}