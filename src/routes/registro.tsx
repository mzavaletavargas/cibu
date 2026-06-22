import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import {
  Check,
  Smartphone,
  Building2,
  FileSpreadsheet,
  ArrowLeft,
  Award,
  Backpack,
  Users,
  Copy,
} from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/registro")({
  component: Registro,
});

const beneficios = [
  {
    icon: Users,
    title: "Asistencia completa",
    desc: "Acceso a las 4 jornadas del congreso, ponencias magistrales y feria tecnológica.",
  },
  {
    icon: Award,
    title: "Certificado oficial",
    desc: "Certificado de participación emitido por la organización del CIBU.",
  },
  {
    icon: Backpack,
    title: "Kit de materiales",
    desc: "Kit oficial del evento con materiales impresos y obsequios institucionales.",
  },
];

function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="flex items-center justify-between gap-3 bg-secondary/60 border border-border rounded-lg px-4 py-3">
      <div>
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="font-mono font-semibold text-foreground">{value}</div>
      </div>
      <button
        onClick={() => {
          navigator.clipboard.writeText(value);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }}
        className="text-xs flex items-center gap-1 px-3 py-1.5 rounded-md border border-border hover:bg-background transition"
      >
        {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
        {copied ? "Copiado" : "Copiar"}
      </button>
    </div>
  );
}

function Registro() {
  useEffect(() => {
    const prev = document.title;
    document.title = "Inscripción · VIII CIBU 2026";
    return () => {
      document.title = prev;
    };
  }, []);

  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSfArpZlkD_54qhWp7CUUU9d5nXDQPtsTGeWDQUmMvueKfh3UA/viewform?usp=header";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="max-w-5xl mx-auto px-6 text-white">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Volver al inicio
          </Link>
          <div
            className="text-xs uppercase tracking-[0.25em] font-semibold mb-4"
            style={{ color: "var(--gold)" }}
          >
            Inscripción
          </div>
          <h1 className="font-display text-5xl md:text-6xl leading-tight max-w-3xl">
            Asegura tu lugar en el VIII CIBU 2026.
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-2xl">
            Completa tu inscripción en 4 pasos: revisa los beneficios, conoce los costos, realiza el pago y registra tus datos.
          </p>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="max-w-5xl mx-auto px-6 -mt-16 relative z-10">
        <div
          className="bg-card border border-border rounded-2xl p-8 md:p-10"
          style={{ boxShadow: "var(--shadow-elegant)" }}
        >
          <div className="flex items-baseline justify-between flex-wrap gap-4 mb-8">
            <h2 className="font-display text-3xl">Tu inscripción incluye</h2>
            <div className="text-xs uppercase tracking-widest text-[var(--gold)] font-semibold">
              Paso 1 de 4
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Certificado oficial",
                desc: "Certificado de participación emitido por la organización del CIBU.",
              },
              {
                icon: Award,
                title: "Factura comprobante",
                desc: "Se emitirá factura comprobante oficial por tu inscripción.",
              },
              {
                icon: Backpack,
                title: "Portal de inscripciones",
                desc: "Acceso a un portal dedicado para gestionar tu registro y documentación.",
              },
            ].map((b, i) => (
              <div key={i} className="text-center">
                <div
                  className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center mb-4"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <b.icon className="w-7 h-7 text-[var(--gold-foreground)]" />
                </div>
                <h3 className="font-display text-lg mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRECIOS */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex items-baseline justify-between flex-wrap gap-4 mb-8">
          <h2 className="font-display text-3xl md:text-4xl">Costos de inscripción</h2>
          <div className="text-xs uppercase tracking-widest text-[var(--gold)] font-semibold">
            Paso 2 de 4
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Conferencias */}
          <div className="bg-card border border-border rounded-2xl p-8 hover:border-[var(--gold)] transition">
            <h3 className="font-display text-2xl mb-2">Conferencias</h3>
            <p className="text-sm text-muted-foreground mb-6">14 – 16 de julio de 2026</p>
            <div className="space-y-4 mb-6">
              <div className="pb-4 border-b border-border">
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Perú (con DNI o RUC)
                </div>
                <div className="font-display text-3xl text-[var(--gold)]">S/ 100.00</div>
                <div className="text-xs text-muted-foreground mt-1">+ IGV</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Extranjero
                </div>
                <div className="font-display text-3xl text-[var(--gold)]">USD 30.00</div>
              </div>
            </div>
            <div className="border-t border-border pt-4">
              <div className="text-xs uppercase tracking-widest text-[var(--gold)] font-semibold mb-3">
                Incluye
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--gold)] mt-0.5">•</span>
                  <span>Acceso a las 4 jornadas del congreso y feria tecnológica</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--gold)] mt-0.5">•</span>
                  <span>Material para apuntes y objetos promocionales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--gold)] mt-0.5">•</span>
                  <span>Certificado oficial de participación</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Talleres */}
          <div className="bg-card border border-[var(--gold)] rounded-2xl p-8 hover:border-[var(--gold)] transition">
            <h3 className="font-display text-2xl mb-2">Talleres</h3>
            <p className="text-sm text-muted-foreground mb-6">13 de julio de 2026</p>
            <div className="space-y-4 mb-6">
              <div className="pb-4 border-b border-border">
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Por taller individual - Perú (con DNI o RUC)
                </div>
                <div className="font-display text-3xl text-[var(--gold)]">S/ 30.00</div>
                <div className="text-xs text-muted-foreground mt-1">+ IGV (por cada taller)</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Por taller individual - Extranjero
                </div>
                <div className="font-display text-3xl text-[var(--gold)]">USD 10.00</div>
                <div className="text-xs text-muted-foreground mt-1">(por cada taller)</div>
              </div>
            </div>
            <div className="border-t border-border pt-4">
              <div className="text-xs uppercase tracking-widest text-[var(--gold)] font-semibold mb-3">
                Incluye
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--gold)] mt-0.5">•</span>
                  <span>Material para apuntes (cupos limitados)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--gold)] mt-0.5">•</span>
                  <span>Acceso liberado a todas las conferencias</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--gold)] mt-0.5">•</span>
                  <span>Certificado oficial de participación</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PAGO */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex items-baseline justify-between flex-wrap gap-4 mb-8">
          <h2 className="font-display text-3xl md:text-4xl">Métodos de pago</h2>
          <div className="text-xs uppercase tracking-widest text-[var(--gold)] font-semibold">
            Paso 3 de 4
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Yape */}
          <div className="bg-card border border-border rounded-2xl p-8 hover:border-[var(--gold)] transition">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold"
                style={{ background: "linear-gradient(135deg, #6B2BD9, #9333EA)" }}
              >
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display text-xl">Yape</h3>
                <div className="text-xs text-muted-foreground">Pago móvil instantáneo</div>
              </div>
            </div>
            <div className="space-y-3">
              <CopyField label="Yape · Lucca Ravest Castillo" value="968 709 488" />
              <CopyField label="Yape · Humberto Ravest" value="945 496 456" />
            </div>
          </div>

          {/* Transferencia */}
          <div className="bg-card border border-border rounded-2xl p-8 hover:border-[var(--gold)] transition">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                style={{ background: "var(--gradient-hero)" }}
              >
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display text-xl">Transferencia bancaria</h3>
                <div className="text-xs text-muted-foreground">Cuenta institucional</div>
              </div>
            </div>
            <div className="space-y-3">
              <CopyField label="Beneficiario" value="EDUCATION LINK S.A.C." />
              <CopyField label="RUC" value="20602277586" />
              <CopyField label="Banco" value="BBVA Banco Continental" />
              <CopyField label="Cuenta Corriente Dólares" value="0011-0351-0100033150-42" />
              <CopyField label="CCI" value="011-351-000100033150-42" />
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Transferencias internacionales
              </div>
              <div className="space-y-3">
                <CopyField label="RUC (tax ID)" value="20602277586" />
                <CopyField label="Account Number US$" value="0011-0351-0100033150-42" />
                <CopyField
                  label="Bank Address"
                  value="Av. República de Panamá 3055 - San Isidro, Lima, Perú"
                />
              </div>
            </div>
          </div>
        </div>

        {/* AVISO */}
        <div className="mt-10 rounded-2xl p-8 border-2 border-dashed border-[var(--gold)] bg-[var(--gold)]/5">
          <div className="flex items-baseline justify-between flex-wrap gap-4 mb-4">
            <h3 className="font-display text-2xl flex items-center gap-2">
              <FileSpreadsheet className="w-6 h-6 text-[var(--gold)]" />
              Importante: registra tu inscripción
            </h3>
            <div className="text-xs uppercase tracking-widest text-[var(--gold)] font-semibold">
              Paso 4 de 4
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Después de realizar el pago, deberás{" "}
            <strong className="text-foreground">completar el formulario de Google</strong> con tus
            datos personales y adjuntar la constancia o captura de tu pago. Tu cupo no quedará
            reservado hasta completar este paso.
          </p>
          <a
            href={formUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-[var(--gold-foreground)] hover:opacity-90 transition"
            style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
          >
            Abrir formulario de inscripción <FileSpreadsheet className="w-4 h-4" />
          </a>
        </div>

        {/* CONTACTO */}
        <div className="mt-12 text-center text-muted-foreground">
          <p>
            ¿Tienes preguntas? Escríbenos por WhatsApp al{" "}
            <a href="https://wa.me/51986160732" target="_blank" rel="noreferrer" className="underline text-foreground font-semibold hover:text-[var(--gold)]">
              +51 986 160 732
            </a>{" "}
            o al correo{" "}
            <a href="mailto:cibu.bibliotecas@gmail.com" className="underline">
              cibu.bibliotecas@gmail.com
            </a>
          </p>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFAB />
    </div>
  );
}
