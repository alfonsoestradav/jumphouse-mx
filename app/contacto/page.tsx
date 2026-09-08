import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import {
  IconArrow,
  IconClock,
  IconFacebook,
  IconInstagram,
  IconTikTok,
  IconPin,
  IconWhatsApp,
} from "@/components/Icons";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Visita Jump House en Plaza Santa Catarina. Horario de 1:00 p.m. a 9:00 p.m., teléfono, WhatsApp y mapa.",
  alternates: { canonical: "/contacto" },
};

const addressLines = [
  site.address.street,
  `${site.address.place}, ${site.address.neighborhood}`,
  `${site.address.zip} ${site.address.city}, N.L.`,
];

export default function ContactoPage() {
  return (
    <>
      <PageHero
        title="Contacto"
        lede="Estamos en Plaza Santa Catarina. Escríbenos por WhatsApp o ven directo de 1:00 p.m. a 9:00 p.m."
        image="/images/park.jpg"
        alt="Canchas de Jump House en Plaza Santa Catarina"
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
        <div>
          <dl className="space-y-8">
            <div>
              <dt className="flex items-center gap-2 text-lime">
                <IconPin className="h-5 w-5" />
                Dónde
              </dt>
              <dd className="mt-2 font-semibold">
                {addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
                <a
                  href={site.mapsUrl}
                  className="mt-2 inline-block text-sm font-extrabold text-lime hover:text-white"
                >
                  Cómo llegar
                </a>
              </dd>
            </div>
            <div>
              <dt className="flex items-center gap-2 text-lime">
                <IconClock className="h-5 w-5" />
                Horario
              </dt>
              <dd className="mt-2 font-semibold">
                {site.hoursNote}
                <br />
                {site.hoursLabel}
              </dd>
            </div>
            <div>
              <dt className="text-lime">Teléfono</dt>
              <dd className="mt-2">
                <a
                  href={`tel:${site.phoneTel}`}
                  className="font-semibold hover:text-lime"
                >
                  {site.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="flex items-center gap-2 text-lime">
                <IconWhatsApp className="h-5 w-5" />
                WhatsApp
              </dt>
              <dd className="mt-2">
                <a href={waLink()} className="font-semibold hover:text-lime">
                  {site.whatsappDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-lime">Redes</dt>
              <dd className="mt-3 flex gap-3">
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
                <a
                  href={site.tiktok}
                  aria-label="TikTok Jump House"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 hover:border-lime hover:text-lime"
                >
                  <IconTikTok className="h-5 w-5" />
                </a>
              </dd>
            </div>
          </dl>

          <a
            href={waLink("Hola Jump House, tengo una pregunta.")}
            className="cta-glow mt-10 inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3.5 font-extrabold text-void"
          >
            Escribir por WhatsApp
            <IconArrow className="h-5 w-5" />
          </a>
        </div>

        <iframe
          title="Mapa de Jump House en Plaza Santa Catarina"
          src={site.mapsEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="min-h-[420px] w-full rounded-[1.6rem] border-0"
          allowFullScreen
        />
      </section>
    </>
  );
}
