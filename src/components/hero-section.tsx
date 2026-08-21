import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ShieldCheck, Cpu, Cloud, Settings, Factory, GraduationCap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-zinc-950 overflow-hidden font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3f3f4633_1px,transparent_1px),linear-gradient(to_bottom,#3f3f4633_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
      <div className="absolute top-0 inset-x-0 h-40 bg-linear-to-b from-zinc-800/20 to-transparent pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        
        {/* Eyebrow Badge Actualizado */}
        <Badge variant="outline" className="border-zinc-700/80 text-zinc-300 mb-8 py-1.5 px-4 bg-zinc-900/50 backdrop-blur-md">
          <ShieldCheck className="w-4 h-4 mr-2 text-emerald-500" />
          <span className="tracking-wide text-xs uppercase font-semibold">
            Ingeniería, Automatización y Consultoría Deep Tech
          </span>
        </Badge>
        
        {/* Titular Principal */}
        <h1 className="max-w-4xl text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-zinc-100 mb-6 leading-[1.1]">
          Arquitectura de Alto Rendimiento para la{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-zinc-300 to-zinc-600">
            Industria Crítica
          </span>
        </h1>
        
        {/* Subtítulo Refinado (Sin redundancias) */}
        <p className="max-w-2xl text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed font-light">
          Diseñamos, automatizamos y protegemos infraestructura crítica. Integramos ecosistemas Edge-to-Cloud, control industrial remoto (SCADA/PLC) y consultoría de I+D para garantizar tolerancia a fallos cero en sus operaciones.
        </p>
        
        {/* Botones de Acción (Ambos 100% funcionales) */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a href="https://wa.me/51961482749?text=Hola%20Fernando,%20estoy%20interesado%20en%20los%20servicios%20de%20WB%20Tech%20Labs.%20Me%20gustar%C3%ADa%20agendar%20una%20auditor%C3%ADa%20t%C3%A9cnica." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button size="lg" className="w-full bg-zinc-100 text-zinc-950 hover:bg-zinc-300 font-semibold h-12 px-8 rounded-md transition-colors">
              Agendar Consultoría
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
          
          {/* Botón Explorar Soluciones Activado */}
          <a href="#servicios" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white font-medium h-12 px-8 bg-zinc-900/30 rounded-md transition-colors">
              Explorar Soluciones
            </Button>
          </a>
        </div>

        {/* 6 Pilares Técnicos Inferiores */}
        <div className="mt-20 pt-8 border-t border-zinc-800/50 w-full max-w-5xl flex flex-wrap justify-center gap-x-8 gap-y-4 opacity-80">
           <div className="flex items-center text-zinc-400 gap-2 text-sm font-medium"><Cpu className="w-4 h-4 text-emerald-500/80" /> Edge AI & FPGA</div>
           <div className="flex items-center text-zinc-400 gap-2 text-sm font-medium"><Factory className="w-4 h-4 text-emerald-500/80" /> Automatización PLC</div>
           <div className="flex items-center text-zinc-400 gap-2 text-sm font-medium"><ShieldCheck className="w-4 h-4 text-emerald-500/80" /> Hardware Security</div>
           <div className="flex items-center text-zinc-400 gap-2 text-sm font-medium"><Cloud className="w-4 h-4 text-emerald-500/80" /> Cloud IoT</div>
           <div className="flex items-center text-zinc-400 gap-2 text-sm font-medium"><Settings className="w-4 h-4 text-emerald-500/80" /> ECU Tuning</div>
           <div className="flex items-center text-zinc-400 gap-2 text-sm font-medium"><GraduationCap className="w-4 h-4 text-emerald-500/80" /> Consultoría I+D</div>
        </div>
      </div>
    </section>
  );
}