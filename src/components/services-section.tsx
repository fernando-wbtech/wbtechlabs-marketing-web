import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Activity, Shield, Network, Cpu } from "lucide-react";

export default function ServicesSection() {
  const pillars = [
    {
      title: "Mantenimiento Predictivo (PdMaaS)",
      description: "Despliegue de Edge AI mediante arquitecturas FPGA/DSP. Analizamos patrones de vibración y telemetría en el borde para predecir fallas catastróficas antes de que detengan su línea de producción.",
      icon: <Activity className="w-6 h-6 text-emerald-500" />,
    },
    {
      title: "Ciberseguridad Edge & Hardware",
      description: "Auditoría e Ingeniería Inversa de dispositivos IoT. Fortificamos su infraestructura desde el silicio, previniendo inyecciones de código, extracción de firmware y asegurando túneles MQTT.",
      icon: <Shield className="w-6 h-6 text-emerald-500" />,
    },
    {
      title: "Arquitectura Cloud IoT",
      description: "Diseño de backends distribuidos para flotas masivas. Implementamos brokers de alta disponibilidad, bases de datos de series temporales y túneles WebSocket para latencia cero en el sector industrial.",
      icon: <Network className="w-6 h-6 text-emerald-500" />,
    },
    {
      title: "Optimización Automotriz (ECU Tuning)",
      description: "Servicio remoto B2B de recalibración de mapas de memoria (Bosch, Siemens, Delphi). Optimizamos la inyección y torque para flotas pesadas y talleres, maximizando rendimiento y eficiencia.",
      icon: <Cpu className="w-6 h-6 text-emerald-500" />,
    },
  ];

  return (
    <section className="w-full py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Cabecera de la sección */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100 mb-4">
            Ingeniería de Precisión en 4 Pilares
          </h2>
          <p className="max-w-[800px] text-zinc-400 text-lg md:text-xl font-light">
            Soluciones tecnológicas diseñadas para proteger sus activos críticos, escalar sus operaciones y garantizar el máximo retorno de inversión (ROI).
          </p>
        </div>

        {/* Cuadrícula de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <Card key={index} className="bg-zinc-900/40 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-4 group-hover:border-emerald-500/50 transition-colors">
                  {pillar.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-zinc-100">
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