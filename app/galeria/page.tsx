import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IconArrow } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { gallery, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Galería",
  description:
    "Fotos de Jump House en Plaza Santa Catarina, publicadas en Facebook.",
};

const mosaic = [
  "col-span-2 min-h-[240px] md:col-span-4 md:row-span-2 md:min-h-[480px]",
  "col-span-1 min-h-[180px] md:col-span-2 md:min-h-[230px]",
  "col-span-1 min-h-[180px] md:col-span-2 md:min-h-[230px]",
  "col-span-2 min-h-[200px] md:col-span-3 md:min-h-[280px]",
  "col-span-2 min-h-[200px] md:col-span-3 md:min-h-[280px]",
  "col-span-1 min-h-[220px] md:col-span-2 md:row-span-2 md:min-h-[540px]",
  "col-span-1 min-h-[220px] md:col-span-4 md:min-h-[250px]",
  "col-span-2 min-h-[200px] md:col-span-4 md:min-h-[250px]",
  "col-span-2 min-h-[200px] md:col-span-6 md:min-h-[280px]",
];

export default function GaleriaPage() {
  return (
    <>
      <PageHero
        title="Galería"
        lede="Luces, color y el ruido bueno de una cancha llena. Así se ve Jump House cuando se enciende."
        image="/images/leap.jpg"
        alt="Salto en Jump House, Plaza Santa Catarina"
      />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-4">
          {gallery.map((shot, i) => (
            <figure
              key={shot.src}
              className={`relative overflow-hidden rounded-[1.4rem] ${mosaic[i]}`}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </figure>
          ))}
        </div>
        <p className="mt-6 max-w-xl text-sm text-muted">
          Fotos de Jump House en Plaza Santa Catarina, publicadas en su página de
          Facebook.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8 lg:pb-28">
        <div className="overflow-hidden rounded-[2rem] bg-void-2 px-8 py-12 md:px-14 md:py-16">
          <h2 className="font-display max-w-3xl text-6xl sm:text-8xl">
            Ven a verte así
          </h2>
          <p className="mt-5 max-w-lg text-lg text-muted">
            Plaza Santa Catarina, todos los días de 1:00 p.m. a 9:00 p.m.
            Mándanos WhatsApp y te esperamos en la cancha.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={waLink("Hola Jump House, vi la galería y quiero visitar el parque.")}
              className="cta-glow inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3.5 text-base font-extrabold text-void"
            >
              Reservar por WhatsApp
              <IconArrow className="h-5 w-5" />
            </a>
            <Link
              href="/atracciones"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 font-bold text-white hover:border-lime hover:text-lime"
            >
              Ver atracciones
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
