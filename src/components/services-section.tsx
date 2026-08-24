import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Activity, Shield, Network, Cpu, Factory, GraduationCap } from "lucide-react";

export default function ServicesSection() {
  const pillars = [
    {
      title: "Mantenimiento Predictivo (PdMaaS)",
      description: "Despliegue de Edge AI y procesamiento DSP. Analizamos telemetría en el borde para predecir fallas catastróficas antes de detener su línea de producción.",
      icon: <Activity className="w-6 h-6 text-emerald-500" />,
    },
    {
      title: "Automatización & Robótica (PLC/CNC)",
      description: "Programación avanzada de PLCs, HMIs y SCADA a distancia. Integramos lógicas de control para brazos robóticos (KUKA) y mecanizado CNC, elevando la eficiencia de su planta sin fronteras.",
      icon: <Factory className="w-6 h-6 text-emerald-500" />,
    },
    {
      title: "Ciberseguridad Edge & Hardware",
      description: "Auditoría profunda e ingeniería inversa de dispositivos IoT. Fortificamos su infraestructura desde el silicio, previniendo inyecciones de código.",
      icon: <Shield className="w-6 h-6 text-emerald-500" />,
    },
    {
      title: "Cloud IoT & Redes Industriales (OT)",
      description: "Diseño de backends distribuidos y configuración de redes físicas (Routers, Switches, Enlaces RF). Implementamos brokers MQTT de alta disponibilidad para telemetría determinista.",
      icon: <Network className="w-6 h-6 text-emerald-500" />,
    },
    {
      title: "Optimización Automotriz B2B",
      description: "Servicio remoto de recalibración de mapas de memoria (ECU Tuning). Optimizamos la inyección y el torque maximizando el rendimiento del hardware.",
      icon: <Cpu className="w-6 h-6 text-emerald-500" />,
    },
    {
      title: "Consultoría I+D & Prototipado 3D",
      description: "Asesoría experta en desarrollo de hardware y validación técnica. Transformamos la complejidad en arquitecturas viables, acelerando su innovación mediante prototipado rápido (Impresión 3D).",
      icon: <GraduationCap className="w-6 h-6 text-emerald-500" />,
    }
  ];

  return (
    <section id="servicios" className="w-full pt-24 pb-12 bg-zinc-950 border-t border-zinc-900 scroll-mt-10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Cabecera con Animación de Entrada */}
        <div className="flex flex-col items-center justify-center text-center mb-16 animate-in fade-in slide-in-from-bottom-5 duration-1000 ease-out">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100 mb-4">
            Ingeniería de Precisión en 6 Pilares
          </h2>
          <p className="max-w-[800px] text-zinc-400 text-lg md:text-xl font-light">
            Soluciones tecnológicas diseñadas para proteger sus activos críticos, escalar sus operaciones y garantizar el máximo retorno de inversión.
          </p>
        </div>

        {/* Grid B2B */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden bg-zinc-900/40 border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900/80 hover:shadow-2xl hover:shadow-emerald-900/20 transition-all duration-500"
            >
              {/* 1. Fondo Reactivo (Brillo radial invisible que aparece en hover) */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0"></div>

              {/* Contenedor relativo para mantener los textos por encima del brillo */}
              <div className="relative z-10 flex flex-col h-full">
                <CardHeader>
                  {/* 2. Ícono Animado: Flota y brilla suavemente */}
                  <div className="w-12 h-12 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-4 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-emerald-500/50 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                    {pillar.icon}
                  </div>
                  
                  {/* Título: Se ilumina en hover */}
                  <CardTitle className="text-xl font-semibold text-zinc-100 leading-tight transition-colors group-hover:text-white">
                    {pillar.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="flex flex-col flex-grow justify-between">
                  {/* Descripción */}
                  <CardDescription className="text-zinc-400 text-base leading-relaxed transition-colors group-hover:text-zinc-300">
                    {pillar.description}
                  </CardDescription>

                  {/* 3. Indicador de Consola: Desliza desde la izquierda en hover */}
                  <div className="mt-8 flex items-center text-xs font-mono font-semibold text-emerald-500 opacity-0 transition-all duration-500 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0">
                    <span className="mr-2">&gt;</span> Inicializar proceso
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}