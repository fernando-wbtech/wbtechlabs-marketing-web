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
      title: "Automatización Remota (PLC/SCADA)",
      description: "Programación avanzada y control a distancia. Elevamos la eficiencia de su planta integrando lógicas robustas de supervisión sin fronteras geográficas.",
      icon: <Factory className="w-6 h-6 text-emerald-500" />,
    },
    {
      title: "Ciberseguridad Edge & Hardware",
      description: "Auditoría profunda e ingeniería inversa de dispositivos IoT. Fortificamos su infraestructura desde el silicio, previniendo inyecciones de código.",
      icon: <Shield className="w-6 h-6 text-emerald-500" />,
    },
    {
      title: "Arquitectura Cloud IoT",
      description: "Diseño de backends distribuidos para flotas masivas. Implementamos brokers MQTT de alta disponibilidad y bases de datos de series temporales.",
      icon: <Network className="w-6 h-6 text-emerald-500" />,
    },
    {
      title: "Optimización Automotriz B2B",
      description: "Servicio remoto de recalibración de mapas de memoria (ECU Tuning). Optimizamos la inyección y el torque maximizando el rendimiento del hardware.",
      icon: <Cpu className="w-6 h-6 text-emerald-500" />,
    },
    {
      title: "Consultoría I+D y Mentoría",
      description: "Asesoría experta para empresas que desarrollan hardware y validación técnica académica. Transformamos la complejidad en arquitecturas viables y escalables.",
      icon: <GraduationCap className="w-6 h-6 text-emerald-500" />,
    }
  ];

  return (
    <section id="servicios" className="w-full py-24 bg-zinc-950 border-t border-zinc-900 scroll-mt-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100 mb-4">
            Ingeniería de Precisión en 6 Pilares
          </h2>
          <p className="max-w-[800px] text-zinc-400 text-lg md:text-xl font-light">
            Soluciones tecnológicas diseñadas para proteger sus activos críticos, escalar sus operaciones y garantizar el máximo retorno de inversión.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <Card key={index} className="bg-zinc-900/40 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-4 group-hover:border-emerald-500/50 transition-colors">
                  {pillar.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-zinc-100 leading-tight">
                  {pillar.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-zinc-400 text-base leading-relaxed">
                  {pillar.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}