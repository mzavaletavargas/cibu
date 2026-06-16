import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import heroImg from "@/assets/hero-cibu.jpg";
const BANNER_BASE = "https://res.cloudinary.com/dtioir2dl/image/upload";
const BANNER_ID = "v1778733837/cibu-banner_dxmjtd.png";
const bannerSrc = `${BANNER_BASE}/f_auto,q_auto,w_1200,dpr_auto,c_limit/${BANNER_ID}`;
const bannerSrcSet = [400, 800, 1200, 1600, 2000]
  .map((w) => `${BANNER_BASE}/f_auto,q_auto,w_${w},c_limit/${BANNER_ID} ${w}w`)
  .join(", ");
import logoLibun from "@/assets/sponsors/libun.png";
import logoMcGraw from "@/assets/sponsors/mcgrawhill.png";
import logoCbp from "@/assets/sponsors/cbp.png";
import logoSociologos from "@/assets/sponsors/sociologos.png";
import logoSanMarcos from "@/assets/sponsors/sanmarcos-unmsm.png";
import logoDigitalContent from "@/assets/sponsors/digital-content.png";
import logoElibro from "@/assets/sponsors/elibro.png";
import logoMaskhay from "@/assets/sponsors/maskhay.png";
import logoItms from "@/assets/sponsors/itms-group.jpeg";
import logoEbsco from "@/assets/sponsors/ebsco.png";
import logoEducationLink from "@/assets/sponsors/education-link.png";
import logoOpenAccess from "@/assets/sponsors/open-access-peru.png";
import logoOscp from "@/assets/sponsors/oscp.png";
import logoUpao from "@/assets/sponsors/upao.png";
import logoFondoUpao from "@/assets/sponsors/fondo-editorial-upao.png";
import logoLocaly from "@/assets/sponsors/localy.svg";
import fotoAngelaSerna from "@/assets/ponentes/angela-serna.jpeg";
import fotoHuberGomez from "@/assets/ponentes/huber-gomez.jpeg";
import fotoJairoDiaz from "@/assets/ponentes/jairo-diaz.png";
import fotoAnabellyTinoco from "@/assets/ponentes/anabelly-tinoco.jpeg";
import fotoHumbertoRavest from "@/assets/ponentes/humberto-ravest.png";
import fotoKarenJara from "@/assets/ponentes/karen-jara.png";
import fotoJoseIgnacioLopez from "@/assets/ponentes/jose-ignacio-lopez.jpeg";
import fotoAngelRevolledo from "@/assets/ponentes/angel-revolledo.jpg";
import fotoCelsoGonzales from "@/assets/ponentes/celso-gonzales-cam.jpg";
import fotoCeciliaAlegre from "@/assets/ponentes/cecilia-alegre.png";
import fotoDavidQuispe from "@/assets/ponentes/david-quispe.jpg";
import fotoElizabethHuisa from "@/assets/ponentes/elizabeth-huisa.png";
import fotoJesusIpanaque from "@/assets/ponentes/jesus-ipanaque.png";
import fotoMarleneBenavides from "@/assets/ponentes/marlene-benavides.jpeg";
import fotoModestoMontoya from "@/assets/ponentes/modesto-montoya.jpg";
import fotoOscarPilco from "@/assets/ponentes/oscar-pilco.jpeg";
import fotoVaniaNamuche from "@/assets/ponentes/vania-namuche.jpeg";
import fotoRocioAponte from "@/assets/ponentes/rocio-aponte.jpg";
import fotoValerynNamuche from "@/assets/ponentes/valeryn-namuche.jpg";
import {
  Sparkles,
  Network,
  Shield,
  GraduationCap,
  Archive,
  Calendar,
  MapPin,
  Users,
  FileText,
  ArrowRight,
  Check,
  Mail,
} from "lucide-react";

// SEO meta + JSON-LD live in index.html so static crawlers see them without executing JS.
export const Route = createFileRoute("/")({
  component: Index,
});

const ejes = [
  {
    icon: Sparkles,
    title: "Bibliotecas inteligentes",
    desc: "Servicios y colecciones potenciados por IA.",
  },
  {
    icon: Network,
    title: "Conocimiento en red",
    desc: "Colaboración y ciencia abierta en la era digital.",
  },
  {
    icon: Shield,
    title: "Ética y confianza",
    desc: "Desafíos humanos frente a la inteligencia artificial.",
  },
  {
    icon: GraduationCap,
    title: "Nuevas alfabetizaciones",
    desc: "Aprender y enseñar con apoyo de la IA.",
  },
  {
    icon: Archive,
    title: "Preservar la memoria",
    desc: "Patrimonio cultural y digital en tiempos de cambio.",
  },
];

const fechas = [
  { label: "Envío de resúmenes", date: "30 / 05 / 2026" },
  { label: "Notificación de aprobación", date: "15 / 06 / 2026" },
  { label: "Envío de presentación final (PPT)", date: "30 / 06 / 2026" },
];

const sponsors = [
  {
    name: "Universidad Privada Antenor Orrego (UPAO)",
    logo: logoUpao,
    dark: false,
    featured: true,
  },
  { name: "EBSCO", logo: logoEbsco, dark: false, featured: true },
  { name: "eLibro", logo: logoElibro, dark: false, featured: true },
  { name: "Education Link", logo: logoEducationLink, dark: false },
  { name: "ITMS Group", logo: logoItms, dark: false },
  { name: "McGraw Hill", logo: logoMcGraw, dark: false },
  { name: "LIBUN Editorial", logo: logoLibun, dark: false },
  { name: "Digital Content", logo: logoDigitalContent, dark: false },
  { name: "Maskhay Corp", logo: logoMaskhay, dark: false },
  { name: "Colegio de Bibliotecólogos del Perú", logo: logoCbp, dark: false },
  { name: "Escuela de Bibliotecología — UNMSM", logo: logoSanMarcos, dark: false },
  { name: "Colectivo Open Access Perú", logo: logoOpenAccess, dark: false },
  { name: "Open Science Community Perú", logo: logoOscp, dark: false },
  { name: "Colegio de Sociólogos del Perú", logo: logoSociologos, dark: false },
  { name: "Fondo Editorial de la UPAO", logo: logoFondoUpao, dark: false },
  { name: "Localy", logo: logoLocaly, dark: false, href: "https://www.localy.lat" },
];

type Expositor = {
  name: string;
  institution: string;
  country: string;
  photo: string;
  bio: string[];
};

const expositores: Expositor[] = [
  {
    name: "Angela Clemencia Serna",
    institution: "CEIPA — CRAI+I",
    country: "Colombia",
    photo: fotoAngelaSerna,
    bio: [
      "Bibliotecóloga de la Universidad de Antioquia, Magíster en gestión de la tecnología educativa, Coordinadora del Centro de recursos para el aprendizaje, la investigación y la innovación CRAI+I de CEIPA — Colombia.",
      "Cuenta con amplia experiencia en diseño de ambientes virtuales de aprendizaje e inclusión de tecnologías en los procesos formativos. Actualmente forma parte de un grupo de investigación cuya línea de trabajo es la construcción y validación de un modelo de competencias digitales para los docentes de la Institución Universitaria Pascual Bravo. Tiene amplia experiencia en dirección de bibliotecas académicas y centros de recursos para el aprendizaje, la investigación y la innovación (CRAI).",
    ],
  },
  {
    name: "Huber Fernando Gómez Molina",
    institution: "Support Pro Consulting",
    country: "Colombia",
    photo: fotoHuberGomez,
    bio: [
      "Bibliotecólogo, Especialista en Gestión Tecnológica y Magíster en desarrollo humano organizacional. Consultor de Support Pro Consulting — Colombia.",
      "Consultor y formador en procesos de talento humano, con enfoque en el desarrollo de competencias digitales y la implementación de inteligencia artificial para optimizar la gestión organizacional.",
    ],
  },
  {
    name: "Jairo Hernán Díaz Arias",
    institution: "Universidad del Quindío",
    country: "Colombia",
    photo: fotoJairoDiaz,
    bio: [
      "Profesional en Ciencias de la Información y la Documentación, Bibliotecología y Archivística. Especialista en Gerencia Informática. Creador y ex-director del Programa Virtual de la Universidad del Quindío (Colombia). Pionero en educación virtual en esta área a nivel iberoamericano.",
      "Creador del primer software de educación en línea @prender, director y creador de la Biblioteca como CRAI en la U.Q. y creador del sistema colaborativo biblioteca.club.",
      "Conferencista en temas de innovación, gestión de ideas, transformación digital y el futuro del trabajo en unidades de información en Colombia, Perú y Ecuador.",
    ],
  },
  {
    name: "Anabelly Tinoco Altamirano",
    institution: "Universidad Nacional de Costa Rica",
    country: "Costa Rica",
    photo: fotoAnabellyTinoco,
    bio: [
      "Máster en Bibliotecología y Estudios de la Información, énfasis en Tecnologías de la Información, Universidad de Costa Rica. Maestranda en Recursos Humanos y Gestión del Conocimiento, Licenciada en Bibliotecología y Documentación, Universidad Nacional.",
      "Cuenta con experiencia en atención y formación de usuarios y en el desarrollo de procesos de alfabetización informacional, así como en la planificación, organización, gestión y administración de bibliotecas. Se ha desempeñado en cargos de coordinación y jefatura en bibliotecas especializadas y de facultad del Sistema de Bibliotecas y Centros de Información Documental de la Universidad Nacional.",
      "Ha participado como ponente en congresos nacionales e internacionales. Actualmente es coordinadora de la biblioteca en la Sección Regional Central-Occidente, Alajuela.",
    ],
  },
  {
    name: "Humberto Ravest",
    institution: "Universidad Técnica Federico Santa María (USM)",
    country: "Chile",
    photo: fotoHumbertoRavest,
    bio: [
      "Reconocido internacionalmente como experto en gestión de bibliotecas, preservación documental y nuevas tecnologías. Exdirector de Información y Documentación Bibliográfica de la Universidad Técnica Federico Santa María (USM) en Chile.",
      "Fundó en 2011 el Congreso Internacional de Bibliotecas Universitarias (CIBU), consolidado como un encuentro clave para el desarrollo tecnológico de los centros de información en América Latina.",
    ],
  },
  {
    name: "Karen Jara",
    institution: "U. Católica de la Santísima Concepción",
    country: "Chile",
    photo: fotoKarenJara,
    bio: [
      "Bibliotecóloga documentalista por la Universidad de Playa Ancha y magíster en Educación por la Universidad Autónoma de Chile. En 2012 fue nombrada directora de Bibliotecas de la Universidad Católica de la Santísima Concepción, con objetivos como la incorporación de los Institutos Tecnológicos a la red de bibliotecas, el desarrollo de colecciones y la automatización de servicios.",
      "En noviembre de 2024 fue reelecta como presidenta de CABID (Consejo Asesor de la Infraestructura Nacional de Acceso) para el periodo 2025-2026, con un plan que considera la creación de un repositorio nacional de buenas prácticas en ciencia abierta, modelos de digitalización cooperativa y cooperación con redes internacionales de bibliotecas.",
    ],
  },
  {
    name: "José Ignacio López Ramírez-Gastón",
    institution: "U. Nacional de Música · OSCP",
    country: "España",
    photo: fotoJoseIgnacioLopez,
    bio: [
      "Doctor y Magíster en música por la University of California San Diego y Licenciado por el Departamento de Estudios Comparados de la Ohio State University (EE. UU.).",
      "Actualmente está a cargo de la Dirección de Innovación y Transferencia Tecnológica y de la coordinación del Laboratorio de Música Electroacústica y Arte Sonoro de la Universidad Nacional de Música, desde donde fomenta el desarrollo, la práctica y la investigación en el campo de las artes sonoras relacionadas con el avance tecnológico-musical y la innovación. Fundador y Presidente de Open Science Community Peru.",
    ],
  },
  {
    name: "Ángel Revolledo Morán",
    institution: "Especialista en Tecnología Educativa (EdTech)",
    country: "Perú",
    photo: fotoAngelRevolledo,
    bio: [
      "Profesional orientado al desarrollo de negocios en el sector educativo, con experiencia comprobada en la comercialización de productos digitales y servicios bibliotecarios. Especialista en la identificación de oportunidades de mercado y el diseño de propuestas técnicas para el sector universitario.",
      "Especialista en Tecnología Educativa (EdTech), con trayectoria brindando soluciones integrales a instituciones de educación superior: desde la prospección estratégica en facultades de pre y posgrado hasta la implementación de bibliotecas virtuales y ecosistemas digitales, enfocado en potenciar la calidad académica y la fidelización del cliente.",
    ],
  },
  {
    name: "Celso Gonzáles Cam",
    institution: "Universidad San Ignacio de Loyola",
    country: "Perú",
    photo: fotoCelsoGonzales,
    bio: [
      "Magíster en Dirección de Tecnología de Información y Comunicaciones por la Universidad Politécnica de Cataluña (España) y la Universidad Peruana de Ciencias Aplicadas (Perú). Estudios de postgrado en Ingeniería de Software en la PUCP y Marketing Digital en la Universidad del Pacífico. Docente en la Universidad Nacional Mayor de San Marcos y licenciado de Ciencias de la Información por la PUCP.",
      "Actualmente labora como jefe del Sistema de Bibliotecas de la Universidad San Ignacio de Loyola. Ha sido subdirector corporativo del Área de Tecnología de Información y Comunicaciones de la Universidad Científica del Sur, Universidad SISE e Instituto SISE, y webmaster en la Universidad del Pacífico y la UPC. Participó en programas de entrenamiento en la Universidad de Illinois (EE. UU.) y en desarrollo de bibliotecas digitales en la Universidad de Ceará (Brasil).",
    ],
  },
  {
    name: "Cecilia Alegre Castro",
    institution: "Universidad ESAN",
    country: "Perú",
    photo: fotoCeciliaAlegre,
    bio: ["Jefe de Biblioteca y Centro de Información de la Universidad ESAN."],
  },
  {
    name: "David Quispe Riveros",
    institution: "CONCYTEC",
    country: "Perú",
    photo: fotoDavidQuispe,
    bio: [
      "Profesional de la especialidad de Bibliotecología y Ciencias de la Información, con estudios concluidos en la Maestría en Gestión de la Información y del Conocimiento por la Universidad Nacional Mayor de San Marcos.",
      "Cuenta con experiencia en la gestión de información, comunicación científica, plataformas y gestores de contenido digitales, así como en el registro, valoración y preservación del patrimonio documental bibliográfico. Fue miembro alterno del comité del portal SciELO Perú y actualmente labora como Analista en Repositorios Digitales en la Subdirección de Gestión de Información y Conocimiento del CONCYTEC.",
    ],
  },
  {
    name: "Elizabeth Huisa Veria",
    institution: "Escuela de Bibliotecología — UNMSM",
    country: "Perú",
    photo: fotoElizabethHuisa,
    bio: [
      "Doctora en Educación de la Universidad San Martín de Porres, Maestra en Administración de Negocios de la Universidad Ricardo Palma, Bachiller y Licenciada en Bibliotecología y Ciencias de la Información de la UNMSM. Se desempeña como Directora y responsable del proceso de acreditación de la Escuela Profesional de Bibliotecología y Ciencias de la Información de la UNMSM desde 2019 y como Jefe de la Oficina de Calidad y Acreditación de la Facultad de Letras y Ciencias Humanas.",
      "Investigadora reconocida por el Renacyt — Concytec desde 2017 y docente investigadora reconocida por la UNMSM desde 2021. Evaluadora externa de proyectos de la Red IDi a nivel nacional y miembro del Grupo de Educación Bibliotecológica del IIBI. Ha expuesto en conferencias internacionales organizadas por universidades de Argentina, Brasil, Chile, México y España.",
    ],
  },
  {
    name: "Jesús Miguel Ipanaqué Peña",
    institution: "Repositorios de Acceso Abierto",
    country: "Perú",
    photo: fotoJesusIpanaque,
    bio: [
      "Especialista en Gestión de la Información con más de 15 años de experiencia en la implementación, optimización y escalabilidad de Repositorios Institucionales de Acceso Abierto.",
      "Experto en normalización de metadatos (Dublin Core, MARC 21) y aseguramiento de la calidad bajo estándares de RENATI-SUNEDU y ALICIA-CONCYTEC. Líder de equipos técnicos con enfoque en la visibilidad del impacto científico y la transformación digital de unidades de información.",
    ],
  },
  {
    name: "Marlene Benavides",
    institution: "Fundación del Libro Universitario — LIBUN",
    country: "Perú",
    photo: fotoMarleneBenavides,
    bio: [
      "Directora ejecutiva de la Fundación del Libro Universitario — LIBUN. Desde hace más de dos décadas trabaja junto a universidades, bibliotecas y comunidades académicas de todo el país, acompañando sus esfuerzos por acercar el conocimiento a más estudiantes y docentes.",
      "Administradora de empresas, con estudios de especialización en liderazgo, coaching transformacional, desarrollo de competencias profesionales y gestión de equipos. Ha liderado iniciativas orientadas al fortalecimiento de bibliotecas académicas, la transformación digital de los servicios de información y la generación de alianzas estratégicas con instituciones de educación superior.",
    ],
  },
  {
    name: "Modesto Montoya Zavaleta",
    institution: "Universidad Nacional de Ingeniería",
    country: "Perú",
    photo: fotoModestoMontoya,
    bio: [
      "Doctor en Gobierno y Política Pública (USMP, 2012), Doctor de Estado en ciencias físicas (1981) y Doctor de Tercer Ciclo en física nuclear y de partículas (1977) por la Universidad París XI, Francia. Licenciado, Magíster y Bachiller en física por la UNI.",
      "Miembro de la Academia Nacional de Ciencias del Perú y presidente de la Academia Nuclear del Perú. Ex presidente del Instituto Peruano de Energía Nuclear (IPEN) y de la Sociedad Peruana de Física. Fundador y coordinador del Encuentro Científico Internacional (ECI). Profesor principal de la Facultad de Ciencias de la UNI y divulgador científico.",
    ],
  },
  {
    name: "Oscar Pilco",
    institution: "Universidad ESAN",
    country: "Perú",
    photo: fotoOscarPilco,
    bio: [
      "Bibliotecólogo por la Universidad Nacional Mayor de San Marcos (UNMSM). Actualmente se desempeña en la Universidad ESAN, donde coordina los servicios de información para el área de Pregrado.",
      "Su labor se centra en el desarrollo de iniciativas que fortalecen la alfabetización informacional, la formación académica y el apoyo a la investigación universitaria.",
    ],
  },
  {
    name: "Vania Namuche Zavaleta",
    institution: "Universidad Privada Antenor Orrego",
    country: "Perú",
    photo: fotoVaniaNamuche,
    bio: [
      "Magíster en Gestión Tecnológica Empresarial de la Universidad Nacional de Ingeniería, Licenciada en Bibliotecología y Ciencias de la Información de la UNMSM y egresada de la Maestría en Docencia Universitaria de la misma casa de estudios.",
      "Ha colaborado con organismos públicos en proyectos de fortalecimiento técnico y capacitaciones sobre organización de archivos. Actualmente labora como jefa de la biblioteca de la Universidad Privada Antenor Orrego. Cuenta con reconocimiento del Congreso de la República por su labor en la promoción de la lectura (2022).",
    ],
  },
  {
    name: "Rocio Aponte Castro",
    institution: "Red de Bibliotecas en Ciencias de la Salud",
    country: "Perú",
    photo: fotoRocioAponte,
    bio: [
      "Licenciada en Bibliotecología y Ciencias de la Información por la UNMSM y egresada de la Maestría en Gestión de la Información y del Conocimiento de la misma universidad. Con diplomados en Administración, Gestión de la Calidad en Instituciones Educativas y Habilidades Gerenciales.",
      "Especialista en gestión de bibliotecas universitarias y especializadas con más de 20 años de experiencia. Ha desarrollado líneas de investigación en bebetecas, procesos, acreditación, alfabetización informacional y revisiones sistemáticas, y se ha desempeñado como líder coordinadora de la Red de Bibliotecas Peruanas en Ciencias de la Salud.",
    ],
  },
  {
    name: "Valeryn Namuche Zavaleta",
    institution: "Anomiart — Gestión Cultural",
    country: "Perú",
    photo: fotoValerynNamuche,
    bio: [
      "Socióloga y gestora cultural peruana, actualmente estudiante de la Maestría en Política Social con mención en Gestión de Proyectos Sociales en la UNMSM. Es directora de Anomiart, espacio dedicado a la gestión cultural, la formulación de proyectos socioculturales, la investigación aplicada y el fortalecimiento de capacidades para agentes culturales.",
      "Cuenta con experiencia en mediación lectora, recuperación editorial, monitoreo de proyectos y diseño de iniciativas culturales con enfoque social. Ha participado en proyectos ganadores de fondos del Ministerio de Cultura, entre ellos “Culturalia” (Estímulos Económicos para la Cultura 2025).",
    ],
  },
];

function Index() {
  const [ponente, setPonente] = useState<Expositor | null>(null);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        {/* Foto a la derecha, fundida con el azul (desktop) */}
        <div className="hidden lg:block absolute inset-y-0 right-0 w-[45%]">
          <img
            src={heroImg}
            alt=""
            width={1920}
            height={1080}
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, #0056a3 0%, rgba(0,86,163,0.6) 26%, rgba(0,86,163,0) 62%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(0,40,90,0.2), rgba(0,40,90,0.4))" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-28 md:pt-32 md:pb-36 text-white">
          <div className="lg:max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/30 backdrop-blur text-xs uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" /> 13–16 julio · Trujillo,
              Perú
            </div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05]">
              Bibliotecas e{" "}
              <span className="italic" style={{ color: "var(--gold)" }}>
                IA
              </span>
              :
              <br /> construyendo futuros posibles.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed">
              VIII Congreso Internacional de Bibliotecas Universitarias. Del acceso al conocimiento
              a la preservación de la memoria cultural.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/registro"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-[var(--gold-foreground)] hover:opacity-90 transition"
                style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
              >
                Inscribirme al congreso <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/programa"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-medium border border-white/30 hover:bg-white/10 transition"
              >
                <Calendar className="w-4 h-4" /> Ver programa
              </Link>
              <a
                href="#convocatoria"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-medium border border-white/30 hover:bg-white/10 transition"
              >
                Convocatoria de trabajos
              </a>
            </div>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
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
        </div>
      </section>


      {/* BANNER */}
      <section className="bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <img
            src={bannerSrc}
            srcSet={bannerSrcSet}
            sizes="(max-width: 768px) 100vw, 1152px"
            alt="VIII Congreso Internacional de Bibliotecas Universitarias — Bibliotecas e IA: construyendo futuros posibles. 13 al 16 de julio de 2026, UPAO, Trujillo, Perú"
            width={1600}
            height={500}
            className="w-full h-auto object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>
 {/* VIDEO */}
 <section id="video" className="bg-secondary/40 border-y border-border py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-10">
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] font-semibold mb-4">
              Video
            </div>
            <h2 className="font-display text-3xl md:text-5xl">Conoce el VIII CIBU 2026.</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm md:text-base">
              Mira el video oficial de invitación al congreso.
            </p>
          </div>
          <div
            className="relative w-full overflow-hidden rounded-lg md:rounded-2xl border border-border bg-black"
            style={{
              aspectRatio: "16 / 9",
              boxShadow: "var(--shadow-elegant)",
              minHeight: "200px",
            }}
          >
            <video
              src="https://res.cloudinary.com/dnsjgx792/video/upload/v1781587170/WhatsApp_Video_2026-06-16_at_00.55.59_k990ie.mp4"
              title="Video oficial VIII CIBU 2026"
              controls
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </section>

   

      {/* SOBRE */}
      <section id="sobre" className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] font-semibold mb-4">
              El Congreso
            </div>
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              Un encuentro global sobre el futuro de las bibliotecas.
            </h2>
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Del 13 al 16 de julio de 2026, la{" "}
              <strong className="text-foreground">
                Universidad Privada Antenor Orrego de Trujillo (Perú)
              </strong>{" "}
              albergará el VIII CIBU, con el lema:
              <em> «Bibliotecas e IA: construyendo futuros posibles»</em>.
            </p>
            <p>
              Contará con la participación de conferencistas de Latinoamérica y España, quienes
              expondrán los últimos avances en gestión de bibliotecas, del conocimiento y de la
              información.
            </p>
            <p>
              De forma paralela, una <strong className="text-foreground">feria tecnológica</strong>{" "}
              reunirá editoriales, expertos y empresas proveedoras líderes en software de gestión,
              equipos de última generación, libros electrónicos, bases de datos y servicios
              innovadores para bibliotecas, archivos y museos.
            </p>
          </div>
        </div>
      </section>

      {/* EJES */}
      <section id="ejes" className="bg-secondary/40 py-24 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] font-semibold mb-4">
              Ejes temáticos
            </div>
            <h2 className="font-display text-4xl md:text-5xl">Cinco caminos hacia el futuro.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ejes.map((e, i) => (
              <div
                key={i}
                className="bg-card p-7 rounded-2xl border border-border hover:border-[var(--gold)] transition group"
                style={{ boxShadow: "0 4px 24px -12px oklch(0.18 0.05 260 / 0.15)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition"
                  style={{ background: "var(--gradient-gold)" }}
                >
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
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] font-semibold mb-4">
              Convocatoria
            </div>
            <h2 className="font-display text-4xl mb-6">Presenta tu trabajo.</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Invitamos a profesionales e investigadores a presentar estudios y buenas prácticas,
              teóricos y prácticos. Para fomentar la participación global, se recibirá un número
              limitado de presentaciones <strong className="text-foreground">virtuales</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              La presentación presencial dispondrá de{" "}
              <strong className="text-foreground">20 minutos</strong> de exposición más ronda de
              preguntas. Los trabajos serán publicados en el sitio web del congreso y su
              repositorio.
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
              <a
                href="mailto:cibu.bibliotecas@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold border border-border hover:bg-secondary transition"
              >
                <Mail className="w-4 h-4" /> Enviar trabajo
              </a>
            </div>
          </div>
          <div className="md:col-span-3">
            <div
              className="bg-card border border-border rounded-2xl p-8"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              <h3 className="font-display text-2xl mb-6">Fechas clave</h3>
              <div className="space-y-5">
                {fechas.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-4 pb-5 border-b border-border last:border-0 last:pb-0"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-display font-bold text-[var(--deep)]">
                        {i + 1}
                      </div>
                      <div className="font-medium">{f.label}</div>
                    </div>
                    <div className="font-display text-lg text-[var(--gold)] font-semibold whitespace-nowrap">
                      {f.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FORMATO DEL TRABAJO */}
        <div
          className="mt-16 bg-card border border-border rounded-2xl p-8 md:p-10"
          style={{ boxShadow: "var(--shadow-elegant)" }}
        >
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] font-semibold mb-2">
                Formato
              </div>
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
              {
                k: "Autorización de publicación",
                v: "Permiso para publicar el trabajo en los sitios web y repositorio del CIBU 2026.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="flex gap-4 p-5 rounded-xl bg-secondary/40 border border-border"
              >
                <div className="w-8 h-8 shrink-0 rounded-full bg-[var(--gold)] text-[var(--gold-foreground)] flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </div>
                <div>
                  <div className="font-semibold mb-1">{f.k}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{f.v}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Envía tu trabajo siguiendo este formato al correo{" "}
            <a
              className="text-foreground font-semibold border-b border-[var(--gold)]"
              href="mailto:cibu.bibliotecas@gmail.com"
            >
              cibu.bibliotecas@gmail.com
            </a>
            .
          </p>
        </div>
      </section>

      {/* HISTORIA */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <div
            className="text-xs uppercase tracking-[0.25em] font-semibold mb-4"
            style={{ color: "var(--gold)" }}
          >
            Historia
          </div>
          <h2 className="font-display text-4xl md:text-5xl mb-8">
            Desde 2011, conectando bibliotecas del mundo.
          </h2>
          <p className="text-lg text-white/80 leading-relaxed">
            El Congreso Internacional de Bibliotecas Universitarias nació en 2011 por iniciativa del{" "}
            <strong className="text-white">Ing. Humberto Ravest</strong> en la Universidad Técnica
            Federico Santa María (Chile), con el apoyo de la Pontificia Universidad Católica de
            Valparaíso y la Universidad Austral de Chile.
          </p>
          <p className="mt-4 text-lg text-white/80 leading-relaxed">
            Lo que comenzó como una reunión de bibliotecas universitarias hoy es un evento de
            relevancia internacional, fiel a su objetivo: compartir experiencias y soluciones
            tecnológicas que ya están siendo probadas con éxito en la región.
          </p>
        </div>
      </section>
   {/* VIDEO 2 */}
   <section id="video" className="bg-secondary/40 border-y border-border py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-10">
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] font-semibold mb-4">
              Video
            </div>
            <h2 className="font-display text-3xl md:text-5xl">Conoce el VIII CIBU 2026.</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm md:text-base">
              Mira el video oficial de invitación al congreso.
            </p>
          </div>
          <div
            className="relative w-full overflow-hidden rounded-lg md:rounded-2xl border border-border bg-black"
            style={{
              aspectRatio: "16 / 9",
              boxShadow: "var(--shadow-elegant)",
              minHeight: "200px",
            }}
          >
            <iframe
              src="https://drive.google.com/file/d/1-pmbYq9E7438YAzSl-dHAGVM_etRzarx/preview"
              title="Video oficial VIII CIBU 2026"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </section>
     
     
      {/* CTA PROGRAMA */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div
          className="relative overflow-hidden rounded-3xl border border-border p-10 md:p-14"
          style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-elegant)" }}
        >
          <div
            className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-20 blur-3xl"
            style={{ background: "var(--gold)" }}
          />
          <div className="relative grid md:grid-cols-5 gap-8 items-center text-white">
            <div className="md:col-span-3">
              <div
                className="text-xs uppercase tracking-[0.25em] font-semibold mb-3"
                style={{ color: "var(--gold)" }}
              >
                Programa
              </div>
              <h2 className="font-display text-3xl md:text-5xl mb-4">
                5 días · 4 charlas magistrales · 21 conferencias.
              </h2>
              <p className="text-white/80 leading-relaxed">
                Talleres, conferencias internacionales, mesas redondas y un paseo cultural por
                Huacas del Sol y la Luna y Chan Chan. Revisa el programa día por día.
              </p>
            </div>
            <div className="md:col-span-2 flex md:justify-end">
              <Link
                to="/programa"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-lg font-semibold text-[var(--gold-foreground)] hover:opacity-90 transition"
                style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
              >
                <Calendar className="w-5 h-5" /> Ver programa completo{" "}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EXPOSITORES */}
      <section id="expositores" className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] font-semibold mb-4">
            Expositores
          </div>
          <h2 className="font-display text-4xl md:text-5xl mb-4">
            Voces de Latinoamérica y más allá.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Profesionales e investigadores de Perú, Chile, Colombia, Costa Rica y España confirmados
            para el VIII CIBU 2026. Haz clic en cada ponente para conocer su trayectoria.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {expositores.map((e, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPonente(e)}
              className="text-left bg-card border border-border rounded-2xl p-6 hover:border-[var(--gold)] transition flex gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
            >
              <img
                src={e.photo}
                alt={`Foto de ${e.name}`}
                loading="lazy"
                className="w-16 h-16 shrink-0 rounded-full object-cover border border-border"
              />
              <div className="min-w-0">
                <div className="font-semibold leading-tight">{e.name}</div>
                <div className="text-sm text-muted-foreground mt-1 leading-snug">
                  {e.institution}
                </div>
                <div className="text-xs uppercase tracking-wider text-[var(--gold)] mt-2 font-semibold">
                  {e.country}
                </div>
              </div>
            </button>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-10 italic">
          Lista preliminar · sujeta a confirmaciones y nuevas incorporaciones.
        </p>
      </section>

      <Dialog open={!!ponente} onOpenChange={(open) => !open && setPonente(null)}>
        <DialogContent className="max-w-xl max-h-[85vh] overflow-y-auto">
          {ponente && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 text-left">
                  <img
                    src={ponente.photo}
                    alt={`Foto de ${ponente.name}`}
                    className="w-20 h-20 shrink-0 rounded-full object-cover border border-border"
                  />
                  <div className="min-w-0">
                    <DialogTitle className="text-xl">{ponente.name}</DialogTitle>
                    <DialogDescription className="mt-1">{ponente.institution}</DialogDescription>
                    <div className="text-xs uppercase tracking-wider text-[var(--gold)] mt-2 font-semibold">
                      {ponente.country}
                    </div>
                  </div>
                </div>
              </DialogHeader>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed text-left">
                {ponente.bio.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* SPONSORS */}
      <section id="sponsors" className="bg-secondary/40 py-20 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] font-semibold mb-4">
              Auspiciadores
            </div>
            <h2 className="font-display text-4xl">Con el respaldo de.</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {sponsors.map((s) => {
              const featured = "featured" in s && s.featured;
              const cardClass = `border border-border rounded-xl flex items-center justify-center hover:border-[var(--gold)] transition max-w-full ${featured ? "h-32 px-10" : "h-24 px-8"} ${s.dark ? "bg-slate-800 text-white" : "bg-white text-slate-900"}`;
              const inner = (
                <img
                  src={s.logo}
                  alt={`${s.name} logo`}
                  className={`${featured ? "h-20 max-w-[420px]" : "h-14 max-w-[340px]"} w-auto object-contain`}
                  loading="lazy"
                />
              );
              return s.href ? (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className={cardClass}
                  aria-label={s.name}
                >
                  {inner}
                </a>
              ) : (
                <div key={s.name} className={cardClass}>
                  {inner}
                </div>
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
