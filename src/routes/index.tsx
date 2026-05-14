import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import heroImg from "@/assets/hero-cibu.jpg";
import bannerImg from "@/assets/cibu-banner.png";
import logoLibun from "@/assets/sponsors/libun.png";
import logoMcGraw from "@/assets/sponsors/mcgrawhill.png";
import logoElsevier from "@/assets/sponsors/elsevier.avif";
import logoCbp from "@/assets/sponsors/cbp.png";
import logoSociologos from "@/assets/sponsors/sociologos.png";
import logoBmj from "@/assets/sponsors/bmj.png";
import logoPanamericana from "@/assets/sponsors/panamericana.png";
import logoEscuela from "@/assets/sponsors/escuela-biblio.png";
import logoLocaly from "@/assets/sponsors/localy.svg";
import {
  Sparkles, Network, Shield, GraduationCap, Archive,
  Calendar, MapPin, Users, FileText, ArrowRight, Check, Mail
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VIII CIBU 2026 — Bibliotecas e IA · Trujillo, Perú" },
      { name: "description", content: "VIII Congreso Internacional de Bibliotecas Universitarias. Del 13 al 16 de julio de 2026 en la Universidad Privada Antenor Orrego, Trujillo, Perú." },
      { property: "og:title", content: "VIII CIBU 2026 — Bibliotecas e IA" },
      { property: "og:description", content: "Construyendo futuros posibles: del acceso al conocimiento a la preservación de la memoria cultural." },
    ],
  }),
  component: Index,
});

const ejes = [
  { icon: Sparkles, title: "Bibliotecas inteligentes", desc: "Servicios y colecciones potenciados por IA." },
  { icon: Network, title: "Conocimiento en red", desc: "Colaboración y ciencia abierta en la era digital." },
  { icon: Shield, title: "Ética y confianza", desc: "Desafíos humanos frente a la inteligencia artificial." },
  { icon: GraduationCap, title: "Nuevas alfabetizaciones", desc: "Aprender y enseñar con apoyo de la IA." },
  { icon: Archive, title: "Preservar la memoria", desc: "Patrimonio cultural y digital en tiempos de cambio." },
];

const fechas = [
  { label: "Envío de resúmenes", date: "30 / 05 / 2026" },
  { label: "Notificación de aprobación", date: "15 / 06 / 2026" },
  { label: "Envío de presentación final (PPT)", date: "30 / 06 / 2026" },
];

const sponsors = [
  { name: "LIBUN Editorial", logo: logoLibun, dark: false },
  { name: "McGraw Hill", logo: logoMcGraw, dark: false },
  { name: "Elsevier", logo: logoElsevier, dark: false },
  { name: "Colegio de Bibliotecólogos del Perú", logo: logoCbp, dark: false },
  { name: "Colegio de Sociólogos del Perú", logo: logoSociologos, dark: false },
  { name: "BMJ Journals", logo: logoBmj, dark: false },
  { name: "Editorial Panamericana", logo: logoPanamericana, dark: false },
  { name: "Escuela de Bibliotecólogos", logo: logoEscuela, dark: true },
  { name: "Localy", logo: logoLocaly, dark: false, href: "https://www.localy.lat" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" width={1920} height={1080} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.15 0.05 260 / 0.92), oklch(0.18 0.06 270 / 0.78))" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-32 md:pt-32 md:pb-40 text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/30 backdrop-blur text-xs uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" /> 13–16 julio · Trujillo, Perú
          </div>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] max-w-4xl">
            Bibliotecas e <span className="italic" style={{ color: "var(--gold)" }}>IA</span>:
            <br /> construyendo futuros posibles.
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl text-white/80 leading-relaxed">
            VIII Congreso Internacional de Bibliotecas Universitarias.
            Del acceso al conocimiento a la preservación de la memoria cultural.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/registro"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-[var(--gold-foreground)] hover:opacity-90 transition"
              style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
            >
              Inscribirme al congreso <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="#convocatoria" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-medium border border-white/30 hover:bg-white/10 transition">
              Convocatoria de trabajos
            </a>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
            {[
              { icon: Calendar, k: "4 días", v: "de congreso" },
              { icon: MapPin, k: "UPAO", v: "Trujillo, Perú" },
              { icon: Users, k: "Internacional", v: "Latam + España" },
              { icon: FileText, k: "5 ejes", v: "temáticos" },
            ].map((s, i) => (
              <div key={i} className="border-l border-white/20 pl-4">
                <s.icon className="w-5 h-5 mb-2" style={{ color: "var(--gold)" }} />
                <div className="font-display text-2xl">{s.k}</div>
                <div className="text-xs uppercase tracking-wider text-white/60">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER */}
      <section className="bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <img
            src={bannerImg}
            alt="VIII Congreso Internacional de Bibliotecas Universitarias — Bibliotecas e IA: construyendo futuros posibles. 13 al 16 de julio de 2026, UPAO, Trujillo, Perú"
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] font-semibold mb-4">El Congreso</div>
            <h2 className="font-display text-4xl md:text-5xl mb-6">Un encuentro global sobre el futuro de las bibliotecas.</h2>
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Del 13 al 16 de julio de 2026, la <strong className="text-foreground">Universidad Privada Antenor Orrego de Trujillo (Perú)</strong> albergará el VIII CIBU, con el lema:
              <em> «Bibliotecas e IA: construyendo futuros posibles»</em>.
            </p>
            <p>
              Contará con la participación de conferencistas de Latinoamérica y España, quienes expondrán los últimos avances en gestión de bibliotecas, del conocimiento y de la información.
            </p>
            <p>
              De forma paralela, una <strong className="text-foreground">feria tecnológica</strong> reunirá editoriales, expertos y empresas proveedoras líderes en software de gestión, equipos de última generación, libros electrónicos, bases de datos y servicios innovadores para bibliotecas, archivos y museos.
            </p>
          </div>
        </div>
      </section>

      {/* EJES */}
      <section id="ejes" className="bg-secondary/40 py-24 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] font-semibold mb-4">Ejes temáticos</div>
            <h2 className="font-display text-4xl md:text-5xl">Cinco caminos hacia el futuro.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ejes.map((e, i) => (
              <div key={i} className="bg-card p-7 rounded-2xl border border-border hover:border-[var(--gold)] transition group" style={{ boxShadow: "0 4px 24px -12px oklch(0.18 0.05 260 / 0.15)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition" style={{ background: "var(--gradient-gold)" }}>
                  <e.icon className="w-6 h-6 text-[var(--gold-foreground)]" />
                </div>
                <div className="text-xs font-bold text-[var(--gold)] mb-2">0{i + 1}</div>
                <h3 className="font-display text-xl mb-2">{e.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONVOCATORIA */}
      <section id="convocatoria" className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] font-semibold mb-4">Convocatoria</div>
            <h2 className="font-display text-4xl mb-6">Presenta tu trabajo.</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Invitamos a profesionales e investigadores a presentar estudios y buenas prácticas, teóricos y prácticos. Para fomentar la participación global, se recibirá un número limitado de presentaciones <strong className="text-foreground">virtuales</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              La presentación presencial dispondrá de <strong className="text-foreground">20 minutos</strong> de exposición más ronda de preguntas. Los trabajos serán publicados en el sitio web del congreso y su repositorio.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/formato-envio-trabajos.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-[var(--gold-foreground)] hover:opacity-90 transition"
                style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
              >
                <FileText className="w-4 h-4" /> Descargar formato (PDF)
              </a>
              <a href="mailto:cibu.bibliotecas@gmail.com" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold border border-border hover:bg-secondary transition">
                <Mail className="w-4 h-4" /> Enviar trabajo
              </a>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="bg-card border border-border rounded-2xl p-8" style={{ boxShadow: "var(--shadow-elegant)" }}>
              <h3 className="font-display text-2xl mb-6">Fechas clave</h3>
              <div className="space-y-5">
                {fechas.map((f, i) => (
                  <div key={i} className="flex items-center justify-between gap-4 pb-5 border-b border-border last:border-0 last:pb-0">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-display font-bold text-[var(--deep)]">
                        {i + 1}
                      </div>
                      <div className="font-medium">{f.label}</div>
                    </div>
                    <div className="font-display text-lg text-[var(--gold)] font-semibold whitespace-nowrap">{f.date}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FORMATO DEL TRABAJO */}
        <div className="mt-16 bg-card border border-border rounded-2xl p-8 md:p-10" style={{ boxShadow: "var(--shadow-elegant)" }}>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] font-semibold mb-2">Formato</div>
              <h3 className="font-display text-3xl">Estructura para el envío de trabajos</h3>
            </div>
            <a
              href="/formato-envio-trabajos.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold border border-[var(--gold)] text-[var(--deep)] hover:bg-[var(--gold)] hover:text-[var(--gold-foreground)] transition"
            >
              <FileText className="w-4 h-4" /> Descargar PDF
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { k: "Título", v: "En español e inglés." },
              { k: "Autor o autores", v: "Nombres completos de quienes presentan el trabajo." },
              { k: "Institución", v: "Filiación institucional de los autores." },
              { k: "Eje temático", v: "Indicar uno de los cinco ejes del congreso." },
              { k: "Resumen", v: "Síntesis del trabajo, objetivos, metodología y aportes." },
              { k: "Autorización de publicación", v: "Permiso para publicar el trabajo en los sitios web y repositorio del CIBU 2026." },
            ].map((f, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-xl bg-secondary/40 border border-border">
                <div className="w-8 h-8 shrink-0 rounded-full bg-[var(--gold)] text-[var(--gold-foreground)] flex items-center justify-center text-sm font-bold">{i + 1}</div>
                <div>
                  <div className="font-semibold mb-1">{f.k}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{f.v}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Envía tu trabajo siguiendo este formato al correo <a className="text-foreground font-semibold border-b border-[var(--gold)]" href="mailto:cibu.bibliotecas@gmail.com">cibu.bibliotecas@gmail.com</a>.
          </p>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="relative py-24 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <div className="text-xs uppercase tracking-[0.25em] font-semibold mb-4" style={{ color: "var(--gold)" }}>Historia</div>
          <h2 className="font-display text-4xl md:text-5xl mb-8">Desde 2011, conectando bibliotecas del mundo.</h2>
          <p className="text-lg text-white/80 leading-relaxed">
            El Congreso Internacional de Bibliotecas Universitarias nació en 2011 por iniciativa del <strong className="text-white">Ing. Humberto Ravest</strong> en la Universidad Técnica Federico Santa María (Chile), con el apoyo de la Pontificia Universidad Católica de Valparaíso y la Universidad Austral de Chile.
          </p>
          <p className="mt-4 text-lg text-white/80 leading-relaxed">
            Lo que comenzó como una reunión de bibliotecas universitarias hoy es un evento de relevancia internacional, fiel a su objetivo: compartir experiencias y soluciones tecnológicas que ya están siendo probadas con éxito en la región.
          </p>
        </div>
      </section>

      {/* EXPOSITORES */}
      <section id="expositores" className="max-w-6xl mx-auto px-6 py-24 text-center">
        <div className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] font-semibold mb-4">Expositores</div>
        <h2 className="font-display text-4xl md:text-5xl mb-4">Pronto se publicarán.</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
          Estamos confirmando a los conferencistas de Latinoamérica y España. Esta sección se actualizará pronto con el line-up completo.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="aspect-square rounded-2xl border border-dashed border-border bg-secondary/30 flex flex-col items-center justify-center p-4"
            >
              <Users className="w-8 h-8 text-[var(--gold)] mb-3 opacity-70" />
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Próximamente</div>
            </div>
          ))}
        </div>
      </section>

      {/* SPONSORS */}
      <section id="sponsors" className="bg-secondary/40 py-20 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] font-semibold mb-4">Auspiciadores</div>
            <h2 className="font-display text-4xl">Con el respaldo de.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sponsors.map((s) => {
              const cardClass = `border border-border rounded-xl px-6 py-8 flex items-center justify-center hover:border-[var(--gold)] transition min-h-[140px] ${s.dark ? "bg-slate-800 text-white" : "bg-white text-slate-900"}`;
              const inner = <img src={s.logo} alt={s.name} className="max-h-16 max-w-full object-contain" loading="lazy" />;
              return s.href ? (
                <a key={s.name} href={s.href} target="_blank" rel="noreferrer" className={cardClass} aria-label={s.name}>
                  {inner}
                </a>
              ) : (
                <div key={s.name} className={cardClass}>{inner}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="font-display text-4xl md:text-6xl mb-6">¿Listo para ser parte?</h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
          Asegura tu lugar en el evento más importante de bibliotecas universitarias de la región.
        </p>
        <Link
          to="/registro"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-[var(--gold-foreground)] text-lg hover:opacity-90 transition"
          style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
        >
          Inscribirme ahora <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      <SiteFooter />
      <WhatsAppFAB />
    </div>
  );
}
