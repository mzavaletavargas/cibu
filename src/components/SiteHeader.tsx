"use client";

import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const LOGO_URL = "https://res.cloudinary.com/dtioir2dl/image/upload/f_auto,q_auto,w_120,dpr_auto/v1778733901/cibu-logo_dfkk9f.png";

const navLinks = [
  { label: "Sobre", href: "/#sobre" },
  { label: "Ejes", href: "/#ejes" },
  { label: "Programa", href: "/programa" },
  { label: "Convocatoria", href: "/#convocatoria" },
  { label: "Expositores", href: "/#expositores" },
  { label: "Sponsors", href: "/#sponsors" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

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

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm">
          {navLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.label}
                to={link.href as any}
                className="text-muted-foreground hover:text-foreground transition"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* Action Buttons - Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/programa"
            className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold border border-border text-foreground hover:bg-secondary transition"
          >
            Programa
          </Link>
          <a
            href="/#convocatoria"
            className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--gold-foreground)] transition"
          >
            Postularse
          </a>
          <Link
            to="/registro"
            className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-[var(--gold-foreground)] transition hover:opacity-90"
            style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
          >
            Inscribirse
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="lg:hidden">
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-1 mt-8">
              <a
                href="/#sobre"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg text-foreground hover:bg-secondary transition text-base font-medium"
              >
                Sobre
              </a>
              <a
                href="/#ejes"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg text-foreground hover:bg-secondary transition text-base font-medium"
              >
                Ejes
              </a>
              <Link
                to="/programa"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg text-foreground hover:bg-secondary transition text-base font-medium"
              >
                Programa
              </Link>
              <a
                href="/#convocatoria"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg text-foreground hover:bg-secondary transition text-base font-medium"
              >
                Convocatoria
              </a>
              <a
                href="/#expositores"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg text-foreground hover:bg-secondary transition text-base font-medium"
              >
                Expositores
              </a>
              <a
                href="/#sponsors"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg text-foreground hover:bg-secondary transition text-base font-medium"
              >
                Sponsors
              </a>

              {/* Mobile Action Buttons */}
              <div className="mt-6 pt-6 border-t border-border space-y-3">
                <Link
                  to="/programa"
                  onClick={() => setIsOpen(false)}
                  className="block w-full rounded-lg px-4 py-3 text-center text-sm font-semibold border border-border text-foreground hover:bg-secondary transition"
                >
                  Ver Programa
                </Link>
                <a
                  href="/#convocatoria"
                  onClick={() => setIsOpen(false)}
                  className="block w-full rounded-lg px-4 py-3 text-center text-sm font-semibold border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--gold-foreground)] transition"
                >
                  Postularse
                </a>
                <Link
                  to="/registro"
                  onClick={() => setIsOpen(false)}
                  className="block w-full rounded-lg px-4 py-3 text-center text-sm font-semibold text-[var(--gold-foreground)] transition hover:opacity-90"
                  style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
                >
                  Inscribirse
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
