import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import CompetitiveEdge from "@/components/competitive-edge";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 selection:bg-emerald-500/30">
      <HeroSection />
      <ServicesSection />
      <CompetitiveEdge />
      <Footer />
    </main>
  );
}