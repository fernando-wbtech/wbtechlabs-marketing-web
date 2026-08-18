import { Cpu, Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-900 py-10">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center max-w-6xl gap-6">

        {/* Logo / Brand */}
        <div className="flex items-center gap-2">
          <Cpu className="w-5 h-5 text-emerald-500" />
          <span className="text-zinc-100 font-bold tracking-tight">WB Tech Labs</span>
        </div>

        {/* Legal & Copyright */}
        <div className="text-zinc-500 text-sm font-light text-center md:text-left">
          &copy; {currentYear} WB Tech Labs. Todos los derechos reservados. <br className="md:hidden" />
          Ingeniería Electrónica y Ciberseguridad B2B.
        </div>

        {/* Enlaces corporativos y Contacto */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-zinc-400">
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
    </footer>
  );
}