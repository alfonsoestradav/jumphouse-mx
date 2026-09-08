import Link from "next/link";
import { IconFacebook, IconInstagram, IconPin } from "@/components/Icons";
import { Logo } from "@/components/Logo";
import { nav, site, waLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#09080f] text-ink">
      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-magenta/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-lime/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <Logo height={148} />
          <p className="mt-3 max-w-sm text-muted">
            Parque de trampolines en Plaza Santa Catarina. Salto ilimitado, fiestas
            y el plan que saca a toda la familia de la casa.
          </p>
          <a
            href={site.mapsUrl}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-lime hover:text-white"
          >
            <IconPin className="h-4 w-4" />
            {site.address.street}, {site.address.place}
          </a>
        </div>

        <div>
          <p className="font-display text-3xl">Menú</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted hover:text-lime">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/aviso-de-privacidad" className="text-muted hover:text-lime">
                Aviso de privacidad
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-display text-3xl">Visítanos</p>
          <p className="mt-4 text-muted">
            {site.hoursNote}
            <br />
            {site.hoursLabel}
          </p>
          <a href={`tel:${site.phoneTel}`} className="mt-3 block font-semibold hover:text-lime">
            {site.phoneDisplay}
          </a>
          <a href={waLink()} className="mt-1 block font-semibold text-lime">
            WhatsApp {site.whatsappDisplay}
          </a>
          <div className="mt-5 flex gap-3">
            <a
              href={site.instagram}
              aria-label="Instagram Jump House"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 hover:border-lime hover:text-lime"
            >
              <IconInstagram className="h-5 w-5" />
            </a>
            <a
              href={site.facebook}
              aria-label="Facebook Jump House"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 hover:border-lime hover:text-lime"
            >
              <IconFacebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10 px-5 py-4 text-center text-sm text-muted lg:px-8">
        © {new Date().getFullYear()} {site.fullName}. Santa Catarina, N.L.
      </div>
    </footer>
  );
}
