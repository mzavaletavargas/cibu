import { Instagram, Facebook, Mail, MapPin } from "lucide-react";
import logo from "@/assets/cibu-logo.png";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--deep)] text-[var(--primary-foreground)] mt-24">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="bg-white/95 inline-flex p-2 rounded-lg mb-4">
            <img src={logo} alt="CIBU" className="h-12 w-auto object-contain" />
          </div>
          <h3 className="font-display text-2xl mb-3">VIII CIBU 2026</h3>
          <p className="text-sm opacity-80 leading-relaxed">
            Congreso Internacional de Bibliotecas Universitarias.
            Bibliotecas e IA: construyendo futuros posibles.
          </p>
        </div>
        <div className="space-y-2 text-sm opacity-90">
          <div className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> <span>Universidad Privada Antenor Orrego, Av. América Sur 3145, Trujillo 13008</span></div>
          <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> cibu.bibliotecas@gmail.com</div>
          <div>13–16 de julio de 2026</div>
        </div>
        <div className="md:text-right">
          <div className="flex md:justify-end gap-3">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 text-xs opacity-70 flex flex-col md:flex-row justify-between gap-2">
          <div>© {year} CIBU. Todos los derechos reservados.</div>
          <div>Director ejecutivo: Ing. Humberto Ravest B.</div>
        </div>
      </div>
    </footer>
  );
}
