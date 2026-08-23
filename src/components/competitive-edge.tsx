import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CompetitiveEdge() {
  const benefits = [
    "Latencia Cero: Arquitecturas Edge computing que no dependen de la nube para decisiones críticas.",
    "Seguridad desde el Silicio: Prevención de ingeniería inversa e inyección de payloads.",
    "Despliegue Agnóstico: Hardware y software diseñados para no depender de un solo proveedor (Vendor Lock-in).",
    "ROI Medible: Reducción drástica de paradas de planta (Downtime) mediante mantenimiento predictivo."
  ];

  return (
    <section className="w-full pt-12 pb-24 bg-zinc-950 flex justify-center border-t border-zinc-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Columna de Texto B2B */}
          <div className="flex flex-col space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100">
              Ingeniería diseñada para <br />
              <span className="text-emerald-500">Tolerancia a Fallos Cero</span>
            </h2>
            <p className="text-lg text-zinc-400 font-light leading-relaxed max-w-md">
              En la industria crítica, un milisegundo de retraso o una vulnerabilidad en el hardware pueden costar miles de dólares. En WB Tech Labs, no hacemos simples integraciones; construimos arquitecturas blindadas.
            </p>
            
            <ul className="space-y-4 mt-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0 mt-0.5" />
                  <span className="text-zinc-300 text-sm md:text-base leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna Visual / CTA Card */}
          <div className="relative">
            {/* Efecto de resplandor trasero */}
            <div className="absolute -inset-1 bg-linear-to-r from-emerald-500/20 to-zinc-800 rounded-2xl blur-lg opacity-50"></div>
            
            <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-10 shadow-2xl flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold text-zinc-100 mb-4">¿Listo para auditar su infraestructura?</h3>
              <p className="text-zinc-400 mb-8 text-sm md:text-base">
                Agende una consulta técnica directa de 30 minutos con nuestro Ingeniero Principal. Analizaremos sus vulnerabilidades y cuellos de botella operativos sin compromiso.
              </p>
              
              {/* Botón CTA conectado a WhatsApp */}
              <a href="https://wa.me/51961482749?text=Hola%20Fernando,%20vengo%20de%20la%20web%20y%20deseo%20solicitar%20la%20Auditor%C3%ADa%20T%C3%A9cnica%20Gratuita%20para%20mi%20infraestructura." target="_blank" rel="noopener noreferrer" className="w-full">
                <Button size="lg" className="w-full bg-emerald-600 text-white hover:bg-emerald-700 font-semibold h-12 rounded-md transition-colors">
                  Solicitar Auditoría Gratuita
                </Button>
              </a>

              <p className="text-zinc-500 text-xs mt-4">
                *Sesión exclusiva para directores de planta, operaciones y gerentes B2B.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}