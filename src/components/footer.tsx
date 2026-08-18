import { Cpu } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-900 py-10">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center max-w-6xl">
        
        {/* Logo / Brand */}
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Cpu className="w-5 h-5 text-emerald-500" />
          <span className="text-zinc-100 font-bold tracking-tight">WB Tech Labs</span>
        </div>

        {/* Legal & Copyright */}
        <div className="text-zinc-500 text-sm font-light text-center md:text-left">
          &copy; {currentYear} WB Tech Labs. Todos los derechos reservados. <br className="md:hidden" />
          Ingeniería Electrónica y Ciberseguridad B2B.
        </div>

        {/* Enlaces simples */}
        <div className="flex gap-6 mt-4 md:mt-0 text-sm font-medium text-zinc-400">
          <a href="#" className="hover:text-emerald-400 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Portal de Clientes</a>
          <a href="mailto:contacto@wbtechlabs.com" className="hover:text-emerald-400 transition-colors">Contacto</a>
        </div>

      </div>
    </footer>
  );
}