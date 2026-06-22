import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import { Calendar, MapPin, Clock, Info, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/programa")({
  component: ProgramaPage,
  head: () => ({
    meta: [
      { title: "Programa | VIII CIBU 2026" },
      {
        name: "description",
        content:
          "Programa oficial del VIII Congreso Internacional de Bibliotecas Universitarias (CIBU 2026). Talleres, conferencias y mesas redondas del 13 al 17 de julio en Trujillo, Perú.",
      },
      { property: "og:title", content: "Programa VIII CIBU 2026" },
      {
        property: "og:description",
        content:
          "Talleres, charlas magistrales, conferencias y mesas redondas del 13 al 17 de julio en UPAO, Trujillo.",
      },
    ],
  }),
});

type Row = {
  time: string;
  kind?: string;
  title?: string;
  speaker?: string;
  institution?: string;
  break?: boolean;
  virtual?: boolean;
};

type Day = {
  date: string;
  weekday: string;
  iso: string;
  subtitle?: string;
  rows: Row[];
};

const days: Day[] = [
  {
    date: "13 de julio de 2026",
    weekday: "Lunes",
    iso: "2026-07-13",
    subtitle: "Día de talleres",
    rows: [
      {
        time: "08:30 – 10:00",
        kind: "Taller 1",
        title:
          "Nuevas alfabetizaciones: aprender y enseñar con apoyo de la IA. Impulsar competencias digitales y críticas frente a contenidos generados por IA en entornos de aprendizaje híbridos.",
        speaker: "Prof. Jairo Hernán Díaz Arias — Colombia",
        institution: "McGraw Hill / Libun",
      },
      { time: "10:00 – 10:30", title: "Coffee break", break: true },
      {
        time: "10:30 – 12:00",
        kind: "Taller 2",
        title:
          "Recursos virtuales de acceso abierto para docencia e investigación. Ebooks, bases de datos y licencias Creative Commons.",
        speaker: "Ing. Humberto Ravest",
        institution: "Consultor en Gestión del Conocimiento — Chile / Perú",
      },
      { time: "12:00 – 14:00", title: "Pausa almuerzo", break: true },
      {
        time: "14:00 – 15:30",
        kind: "Taller 3",
        title:
          "Rediseñando la biblioteca: estrategias de inteligencia artificial para servicios innovadores.",
        speaker: "Mg. Celso Gonzáles Cam",
        institution: "UNMSM",
      },
      {
        time: "16:00 – 17:30",
        kind: "Taller 4",
        title: "Inteligencia Artificial para la Investigación Académica",
        speaker: "Lic. Oscar Pilco",
        institution: "ESAN CENDOC",
      },
      { time: "17:30 – 18:00", title: "Coffee break", break: true },
      {
        time: "18:00 – 19:30",
        kind: "Taller 5",
        title: "El reto de la prevención del plagio en la era de la inteligencia artificial.",
        speaker: "Lic. Celso Garzón",
        institution: "ITMS Group",
      },
    ],
  },
  {
    date: "14 de julio de 2026",
    weekday: "Martes",
    iso: "2026-07-14",
    subtitle: "Inauguración y conferencias",
    rows: [
      { time: "08:00 – 08:30", kind: "Acreditación", title: "Entrega de credenciales" },
      {
        time: "08:30 – 09:00",
        kind: "Inauguración",
        title: "Palabras de bienvenida",
        institution: "Autoridades de la institución y del congreso",
      },
      {
        time: "08:30 – 09:30",
        kind: "Charla magistral 1",
        title: "Investigación y bibliotecas",
        speaker: "Modesto Montoya",
        institution: "Universidad Nacional de Ingeniería",
      },
      {
        time: "09:35 – 10:05",
        kind: "Conferencia 1",
        title: "Alfabetización con IA en la Política Nacional de Transformación Digital",
        speaker: "Elizabeth Huisa",
        institution: "Directora Escuela Profesional de Bibliotecología y Ciencias de la Información de la Universidad Nacional Mayor de San Marcos",
      },
      { time: "10:10 – 10:35", kind: "Ceremonia Inaugural", title: "Palabras de bienvenida", institution: "Autoridades de la institución y del congreso" },
      { time: "10:35 – 11:05", title: "Coffee break", break: true },
      {
        time: "11:10 – 11:40",
        kind: "Conferencia 2",
        title:
          "El fin de la catalogación tradicional: IA, acceso a la información y gestión del patrimonio cultural",
        speaker: "Celso Gonzáles",
        institution: "UNMSM",
      },
      {
        time: "11:45 – 12:15",
        kind: "Conferencia 3",
        title:
          "Repositorio institucional en UESAN: experiencias en la difusión de la investigación científica y académica",
        speaker: "Cecilia Alegre",
        institution: "ESAN CENDOC",
      },
      { time: "12:15 – 14:00", title: "Pausa almuerzo", break: true },
      {
        time: "14:00 – 14:30",
        kind: "Conferencia 4",
        title: "Recursos virtuales de acceso abierto para docencia e investigación. Ebooks, bases de datos y licencias Creative Commons.",
        speaker: "Ing. Humberto Ravest",
        institution: "Consultor en Gestión del Conocimiento — Chile / Perú",
      },
      {
        time: "14:35 – 15:05",
        kind: "Conferencia 5",
        title: "IA + lectura: cómo las bibliotecas están redefiniendo el aprendizaje",
        speaker: "Jairo Ramírez Molina — Colombia",
        institution: "Libun / Digital Content",
      },
      {
        time: "15:10 – 15:45",
        kind: "Conferencia 6",
        title: "Importancia de las bibliotecas + IA en el desarrollo académico de los usuarios",
        speaker: "Vania Namuche Zavaleta",
        institution: "UNMSM",
      },
      { time: "16:00 – 16:30", title: "Coffee break", break: true },
      {
        time: "16:40 – 17:10",
        kind: "Conferencia 7",
        title: "Avanzando hacia una cultura de Ciencia Abierta en la Universidad de O’Higgins",
        speaker: "Bernardo Rojas",
        institution: "Universidad de O’Higgins — Chile",
      },
      {
        time: "17:15 – 17:45",
        kind: "Conferencia",
        title: "Copiloto Sustituto Plagio Algoritmos: Retos de la Inteligencia Artificial en la Educación Superior",
        speaker: "Eduardo Alfaro",
        institution: "Maskhay",
      },
      {
        time: "17:55 – 18:55",
        kind: "Mesa redonda 1",
        title: "IA en bibliotecas",
        speaker:
          "Celso Gonzáles · Yuneli Cuevas Ríos · Elizabeth Huisa · Karen Jara · Henry Chávez",
        institution: "USMP · UNMSM · Universidad de Concepción (Chile) · CBP",
      },
    ],
  },
  {
    date: "15 de julio de 2026",
    weekday: "Miércoles",
    iso: "2026-07-15",
    subtitle: "Ciencia abierta y futuro del bibliotecólogo",
    rows: [
      {
        time: "08:30 – 09:30",
        kind: "Charla magistral 2",
        title:
          "De la ciencia abierta a la gobernanza de la inteligencia artificial: el nuevo rol estratégico de las bibliotecas universitarias",
        speaker: "Karen Jara",
        institution: "Universidad de Concepción — Chile",
      },
      {
        time: "09:35 – 10:05",
        kind: "Conferencia 8",
        title:
          "Hacia una ciencia abierta en el Perú: contribución a la Consulta Global 2026 de la UNESCO",
        speaker: "Dr. José Ignacio López Ramírez Gastón",
        institution: "Open Science Community Perú",
      },
      { time: "10:10 – 10:40", title: "Coffee break", break: true },
      {
        time: "10:40 – 11:10",
        kind: "Conferencia 9",
        title:
          "¿Reemplazo o colaboración? El papel de la inteligencia artificial en el futuro del bibliotecólogo",
        speaker: "Yuneli Cueva Ríos",
        institution: "UNMSM",
      },
      {
        time: "11:15 – 11:45",
        kind: "Conferencia 10",
        title:
          "La inteligencia artificial generativa en el proceso enseñanza–aprendizaje: nuevas alfabetizaciones y el apoyo de las bibliotecas universitarias desde una perspectiva ética",
        speaker: "Anabelly Tinoco Altamirano · Ivannia Conejo Chinchilla",
        institution: "Universidad Nacional, Campus Omar Dengo — Costa Rica",
      },
      {
        time: "11:50 – 12:20",
        kind: "Conferencia 11",
        title: "Soluciones educativas para el aprendizaje significativo",
        speaker: "Ángel Revolledo Morán",
        institution: "McGraw Hill / Libun",
      },
      { time: "12:25 – 14:00", title: "Pausa almuerzo", break: true },
      {
        time: "14:00 – 14:30",
        kind: "Conferencia 12",
        title:
          "De la memoria local a la memoria accesible: recuperación editorial, preservación patrimonial y gestión cultural en contextos locales",
        speaker: "Lic. Valeryn Namuche Zavaleta",
        institution: "UNMSM",
      },
      {
        time: "14:35 – 15:05",
        kind: "Conferencia 13",
        virtual: true,
        title:
          "Inteligencia artificial como facilitadora de la automatización de procesos bibliográficos en bibliotecas universitarias: una experiencia de co-creación tecnológica",
        speaker: "Karina Vargas García · Fabiola Arguedas Segura · Estefany Navarro Barquero",
        institution: "Universidad Castro Carazo — Costa Rica",
      },
      {
        time: "15:10 – 15:40",
        kind: "Conferencia 14",
        virtual: true,
        title:
          "Beneficios de la inteligencia artificial en la transformación digital de las empresas de comercio en San Gil",
        speaker:
          "Anderson J. Murillo · Sebastián A. Castro · Sandra M. Afanador · Lizbleydi Y. Aparicio",
        institution: "Universidad de Investigación y Desarrollo (UDI) — Colombia",
      },
      {
        time: "15:45 – 16:15",
        kind: "Conferencia 15",
        virtual: true,
        title:
          "La gestión del repositorio institucional de una universidad privada: conocimiento en red, colaboración y ciencia abierta en la era digital",
        speaker: "Jesús Miguel Ipanaqué Peña",
        institution: "Universidad Privada del Norte",
      },
      { time: "16:20 – 16:50", title: "Coffee break", break: true },
      {
        time: "17:00 – 17:30",
        kind: "Conferencia 16",
        title: "Prácticas de ciencia abierta en bibliotecas académicas",
        speaker: "Julio Santillán",
        institution: "Open Science Community Perú",
      },
      {
        time: "17:35 – 18:05",
        kind: "Conferencia 17",
        title:
          "Inteligencia artificial, gobernanza y alfabetización crítica: desafíos para las bibliotecas universitarias en entornos de transformación digital sostenible",
        speaker: "Rocío Aponte",
        institution: "UNMSM",
      },
      {
        time: "18:10 – 19:10",
        kind: "Mesa redonda 2",
        title: "Open Access para docencia e investigación",
        speaker: "Dr. José Ignacio López Ramírez Gastón · Dr. Julio Santillán · Humberto Ravest",
        institution:
          "Open Science Community Perú · Open Access Perú · Consultor en Gestión del Conocimiento (Chile/Perú)",
      },
    ],
  },
  {
    date: "16 de julio de 2026",
    weekday: "Jueves",
    iso: "2026-07-16",
    subtitle: "Cierre y clausura",
    rows: [
      {
        time: "08:30 – 09:30",
        kind: "Charla magistral 3",
        title: "Respuestas seguras no son respuestas verdaderas: alfabetización crítica en la era de la IA generativa",
        speaker: "Santiago Villegas-Ceballos",
        institution: "eLibro",
      },
      {
        time: "09:35 – 10:05",
        kind: "Conferencia 18",
        title:
          "Transformación del CRAI+I y Ecosistemas Maker en las Ciencias Administrativas: Innovación, Inteligencia Artificial y Aprendizaje Inmersivo en la Educación Superior",
        speaker: "Angela Clemencia Serna · Huber Gómez",
        institution: "CEIPA · Support Pro Consulting — Colombia",
      },
      { time: "10:10 – 10:40", title: "Coffee break", break: true },
      {
        time: "10:40 – 11:10",
        kind: "Conferencia 19",
        title:
          "Repositorios institucionales y transparencia de la información de los trabajos de investigación: experiencias en la aplicación del reglamento RENATI",
        speaker: "Alan Cáceres",
        institution: "Registro Nacional de Trabajos de Investigación (RENATI)",
      },
      {
        time: "11:15 – 11:45",
        kind: "Conferencia 20",
        title:
          "Conocimiento al alcance de todos: libros inteligentes y soluciones académicas a precios convenientes",
        speaker: "Marlene Benavides",
        institution: "Fundación del Libro Universitario — Libun",
      },
      {
        time: "11:50 – 12:20",
        kind: "Conferencia 21",
        title: "Herramienta para el acompañamiento académico y crecimiento",
        speaker: "Raúl Manco",
        institution: "eLibro",
      },
      { time: "12:30 – 13:00", title: "Coffee break", break: true },
      { time: "13:10 – 13:40", kind: "Clausura oficial", title: "Clausura oficial" },
      { time: "13:50 – 14:20", kind: "Evento cultural", title: "Evento cultural" },
    ],
  },
  {
    date: "17 de julio de 2026",
    weekday: "Viernes",
    iso: "2026-07-17",
    subtitle: "Paseo cultural",
    rows: [
      {
        time: "09:00 – 13:00",
        kind: "Paseo cultural",
        title: "Visita guiada a las Huacas del Sol y la Luna, y Chan Chan.",
      },
    ],
  },
];

function ProgramaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/30 backdrop-blur text-xs uppercase tracking-widest mb-6">
            <Calendar className="w-3.5 h-3.5" style={{ color: "var(--gold)" }} />
            Programa oficial
          </div>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.05] max-w-4xl">
            Programa del{" "}
            <span className="italic" style={{ color: "var(--gold)" }}>
              VIII CIBU
            </span>{" "}
            2026
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl text-white/80 leading-relaxed">
            Cuatro días de talleres, conferencias y mesas redondas, más una jornada cultural, entre
            el 13 y el 17 de julio en Trujillo, Perú.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/80">
            <div className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4" style={{ color: "var(--gold)" }} /> UPAO · Trujillo, Perú
            </div>
            <div className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4" style={{ color: "var(--gold)" }} /> 13 – 17 de julio de
              2026
            </div>
          </div>
        </div>
      </section>

      {/* NOTA */}
      <div className="max-w-6xl mx-auto px-6 mt-10">
        <div
          className="flex items-start gap-3 rounded-xl border p-4 md:p-5"
          style={{
            borderColor: "color-mix(in oklab, var(--gold) 45%, transparent)",
            background: "color-mix(in oklab, var(--gold) 10%, transparent)",
          }}
        >
          <Info className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "var(--gold)" }} />
          <p className="text-sm md:text-base text-foreground leading-relaxed">
            <strong>Programa sujeto a cambios.</strong> Algunos títulos y expositores aún están por
            confirmarse; esta página se actualizará a medida que recibamos la información definitiva
            de cada relator.
          </p>
        </div>
      </div>

      {/* DAYS */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {days.map((d) => (
          <article key={d.iso} id={d.iso}>
            <header className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-border pb-4">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] font-semibold mb-2">
                  {d.weekday}
                </div>
                <h2 className="font-display text-3xl md:text-4xl">{d.date}</h2>
                {d.subtitle && <p className="text-muted-foreground mt-1">{d.subtitle}</p>}
              </div>
            </header>

            <div
              className="bg-card border border-border rounded-2xl overflow-hidden"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              <ul className="divide-y divide-border">
                {d.rows.map((r, i) => (
                  <li
                    key={i}
                    className={`grid md:grid-cols-[170px_140px_1fr] gap-3 md:gap-6 px-5 md:px-7 py-5 ${
                      r.break ? "bg-secondary/50" : ""
                    }`}
                  >
                    <div className="font-display text-base md:text-lg text-[var(--deep)] font-semibold whitespace-nowrap">
                      {r.time}
                    </div>
                    <div>
                      {r.kind && (
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                            r.break
                              ? "bg-muted text-muted-foreground"
                              : "bg-[var(--gold)] text-[var(--gold-foreground)]"
                          }`}
                        >
                          {r.kind}
                          {r.virtual && <span className="ml-1">· Virtual</span>}
                        </span>
                      )}
                    </div>
                    <div className="min-w-0">
                      {r.title && (
                        <div
                          className={`leading-snug ${r.break ? "text-muted-foreground italic" : "font-medium"}`}
                        >
                          {r.title}
                        </div>
                      )}
                      {(r.speaker || r.institution) && (
                        <div className="mt-2 text-sm text-muted-foreground">
                          {r.speaker && (
                            <span className="text-foreground font-semibold">{r.speaker}</span>
                          )}
                          {r.speaker && r.institution && <span> · </span>}
                          {r.institution && <span>{r.institution}</span>}
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 pb-24 text-center">
        <p className="text-muted-foreground mb-6">
          Reserva tu lugar y asegura tu participación en el evento.
        </p>
        <Link
          to="/registro"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-[var(--gold-foreground)] hover:opacity-90 transition"
          style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
        >
          Inscribirme al congreso <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <SiteFooter />
      <WhatsAppFAB />
    </div>
  );
}
