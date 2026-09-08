import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IconArrow } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { attractions, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Atracciones",
  description:
    "Zona de salto, pozo de cubos, gladiadores, básquet y fiestas en Jump House, Plaza Santa Catarina.",
};

export default function AtraccionesPage() {
  return (
    <>
      <PageHero
        title="Atracciones"
        lede="Trampolines, cubos, gladiadores y básquet. El parque entero está hecho para brincar sin reloj."
        image="/images/park.jpg"
        alt="Canchas de Jump House en Plaza Santa Catarina"
      />

      <section className="mx-auto max-w-7xl space-y-20 px-5 py-16 lg:space-y-28 lg:px-8 lg:py-24">
        {attractions.map((item, i) => (
          <article
            key={item.slug}
            id={item.slug}
            className={`flex flex-col gap-8 lg:items-center lg:gap-16 ${
              i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            <div
              className={`relative w-full overflow-hidden rounded-[2rem] ${
                i % 3 === 0
                  ? "min-h-[320px] lg:min-h-[540px] lg:w-[58%]"
                  : "min-h-[280px] lg:min-h-[420px] lg:w-[48%]"
              }`}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
            </div>
            <div className="lg:flex-1">
              <h2
                className={`font-display text-6xl sm:text-8xl lg:text-[7.5rem] ${
                  i % 2 === 1 ? "text-lime" : ""
                }`}
              >
                {item.title}
              </h2>
              <p className="mt-5 max-w-md text-lg text-muted">{item.copy}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8 lg:pb-28">
        <div className="rounded-[2rem] bg-lime px-8 py-12 text-void md:px-14 md:py-16">
          <h2 className="font-display max-w-3xl text-6xl sm:text-8xl">
            Elige tu zona y lánzate
          </h2>
          <p className="mt-5 max-w-lg text-lg text-void/80">
            Tiempo ilimitado, todas las edades y solo pagan quienes brincan.
            Escríbenos y armamos tu visita en Plaza Santa Catarina.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={waLink("Hola Jump House, quiero ir a saltar en el parque.")}
              className="cta-glow inline-flex items-center gap-2 rounded-full bg-void px-6 py-3.5 text-base font-extrabold text-lime"
            >
              Reservar por WhatsApp
              <IconArrow className="h-5 w-5" />
            </a>
            <Link
              href="/precios"
              className="inline-flex items-center gap-2 rounded-full border border-void/20 px-6 py-3.5 font-bold text-void hover:bg-void hover:text-lime"
            >
              Ver precios
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
