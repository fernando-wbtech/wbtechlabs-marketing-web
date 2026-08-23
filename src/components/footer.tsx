import { Cpu, Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-900 py-10 font-sans">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        
        {/* Fila Superior: Logo y Enlaces Corporativos */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 mb-8">
          
          {/* Logo / Brand */}
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-emerald-500" />
            <span className="text-zinc-100 font-bold tracking-tight">WB Tech Labs</span>
          </div>

          {/* Enlaces corporativos y Contacto */}
          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm font-medium text-zinc-400">
            <a href="https://www.linkedin.com/in/wilmer-jose-fernando-benites-huaman%C3%AD/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
              LinkedIn
            </a>
            <a href="https://portal.wbtechlabs.com" className="hover:text-emerald-400 transition-colors">
              Portal B2B
            </a>
            <a href="mailto:fernando@wbtechlabs.com" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
              <Mail className="w-4 h-4" /> Email
            </a>
            {/* Enlace directo a WhatsApp B2B */}
            <a href="https://wa.me/51961482749" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
              <Phone className="w-4 h-4" /> +51 961482749
            </a>
          </div>
        </div>

        {/* Fila Inferior: Legal & Copyright (Aislado para evitar colisiones horizontales) */}
        <div className="pt-6 border-t border-zinc-900/60 flex flex-col justify-center items-center">
          <div className="text-zinc-500 text-sm font-light text-center">
            &copy; {currentYear} WB Tech Labs. Todos los derechos reservados. <br className="md:hidden" />
            Arquitectura Deep Tech, Robótica y Ciberseguridad Industrial B2B.
          </div>
        </div>

      </div>
    </footer>
  );
}