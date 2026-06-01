import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

const LOGO_URL = "https://res.cloudinary.com/dtioir2dl/image/upload/f_auto,q_auto,w_160,dpr_auto/v1778733901/cibu-logo_dfkk9f.png";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--deep)] text-[var(--primary-foreground)] mt-24">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="bg-white/95 inline-flex p-2 rounded-lg mb-4">
            <img src={LOGO_URL} alt="VIII CIBU 2026 logo" width={64} height={48} loading="lazy" decoding="async" className="h-12 w-auto object-contain" />
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
          <div className="pt-2 border-t border-white/10 mt-2 space-y-1">
            <div className="font-semibold text-white/95">Contacto</div>
            <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> <a href="tel:+51945496456" className="hover:text-[var(--gold)] transition">945 496 456</a></div>
            <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> <a href="tel:+51986160732" className="hover:text-[var(--gold)] transition">986 160 732</a></div>
          </div>
          <div className="pt-2 border-t border-white/10 mt-2 space-y-1">
            <div className="font-semibold text-white/95">Yape</div>
            <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> <a href="tel:968709488" className="hover:text-[var(--gold)] transition">968 709 488</a> — Lucca Ravest Castillo</div>
            <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> <a href="tel:+51945496456" className="hover:text-[var(--gold)] transition">945 496 456</a> — Humberto Ravest</div>
          </div>
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
        <div className="max-w-7xl mx-auto px-6 pb-5 text-xs opacity-60 text-center md:text-right">
          Sitio web creado por{" "}
          <a
            href="https://gustavozavaleta.com/?utm_source=cibu&utm_medium=footer&utm_campaign=cibu2026"
            target="_blank"
            rel="noreferrer"
            className="underline hover:opacity-100 hover:text-[var(--gold)] transition"
          >
            Gustavo Zavaleta
          </a>
          .
        </div>
      </div>
    </footer>
  );
}
