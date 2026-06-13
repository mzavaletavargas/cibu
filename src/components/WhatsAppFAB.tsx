import { MessageCircle } from "lucide-react";

export function WhatsAppFAB() {
  const phone = "51957555418";
  const msg = encodeURIComponent("Hola, tengo una consulta sobre el VIII CIBU 2026.");
  return (
    <a
      href={`https://wa.me/${phone}?text=${msg}`}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-2"
    >
      <span className="hidden group-hover:inline bg-card text-foreground text-sm px-3 py-1.5 rounded-full shadow-lg border border-border">
        +51 957 555 418
      </span>
      <span
        className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition transform group-hover:scale-110"
        style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
      >
        <MessageCircle className="w-7 h-7" fill="currentColor" />
      </span>
    </a>
  );
}
