import { IconWhatsApp } from "@/components/Icons";
import { site, waLink } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={waLink()}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-extrabold text-[#052e16] shadow-[0_16px_40px_rgba(37,211,102,0.35)] transition hover:scale-[1.03]"
      aria-label={`Escribir por WhatsApp al ${site.whatsappDisplay}`}
    >
      <IconWhatsApp className="h-6 w-6" />
      <span className="hidden sm:inline">Escríbenos</span>
    </a>
  );
}
