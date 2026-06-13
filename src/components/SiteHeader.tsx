import { Link } from "@tanstack/react-router";

const LOGO_URL = "https://res.cloudinary.com/dtioir2dl/image/upload/f_auto,q_auto,w_120,dpr_auto/v1778733901/cibu-logo_dfkk9f.png";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={LOGO_URL} alt="VIII CIBU 2026 logo" width={48} height={40} loading="eager" decoding="async" className="h-10 w-auto object-contain" />
          <div className="leading-tight">
            <div className="font-display font-bold text-foreground">VIII CIBU</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">2026 · Trujillo</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="/#sobre" className="text-muted-foreground hover:text-foreground transition">Sobre</a>
          <a href="/#ejes" className="text-muted-foreground hover:text-foreground transition">Ejes</a>
          <Link to="/programa" className="text-muted-foreground hover:text-foreground transition">Programa</Link>
          <a href="/#convocatoria" className="text-muted-foreground hover:text-foreground transition">Convocatoria</a>
          <a href="/#sponsors" className="text-muted-foreground hover:text-foreground transition">Sponsors</a>
        </nav>
        <Link
          to="/registro"
          className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-[var(--gold-foreground)] transition hover:opacity-90"
          style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
        >
          Inscribirse
        </Link>
      </div>
    </header>
  );
}
