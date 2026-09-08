import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { extras, prices, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Precios",
  description:
    "Promos de Jump House en Plaza Santa Catarina: Súper lunes $130, martes a jueves $180 antes de las 3:30 p.m. y Jump Pack de fin de semana $250. Tiempo ilimitado. Calcetas $40.",
};

export default function PreciosPage() {
  return (
    <>
      <PageHero
        title="Precios"
        lede="Tiempo ilimitado, solo paga quien salta y el cumpleañero entra gratis. Todos los días de 1:00 p.m. a 9:00 p.m. en Plaza Santa Catarina."
        image="/images/jump.jpg"
        alt="Salto en trampolín en Jump House"
      />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <h2 className="font-display text-6xl sm:text-8xl">
          Promos de la semana
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Tres tarifas publicadas para saltar en {site.address.place},{" "}
          {site.address.street}. La entrada no incluye calcetas.
        </p>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {prices.map((p) => {
            const featured = p.highlight;
            return (
              <article
                key={p.id}
                className={`rounded-[1.7rem] p-6 ${
                  featured
                    ? "bg-lime text-void"
                    : "border border-white/10 bg-void-2"
                }`}
              >
                <h3 className="font-display text-4xl">{p.day}</h3>
                <p className="font-display mt-4 text-7xl">{p.price}</p>
                <p className="mt-3 font-semibold">{p.detail}</p>
                <p
                  className={`mt-1 text-sm ${
                    featured ? "text-void/70" : "text-muted"
                  }`}
                >
                  {p.note}
                </p>
              </article>
            );
          })}
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {extras.map((x) => (
            <li
              key={x.label}
              className="rounded-2xl border border-white/10 px-4 py-3"
            >
              <span className="block text-sm text-muted">{x.label}</span>
              <span className="font-extrabold text-lime">{x.value}</span>
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-2xl text-muted">
          Estas promociones salen de{" "}
          <a
            href={site.facebook}
            className="font-semibold text-lime hover:text-white"
          >
            Facebook
          </a>{" "}
          e{" "}
          <a
            href={site.instagram}
            className="font-semibold text-lime hover:text-white"
          >
            Instagram
          </a>{" "}
          y pueden cambiar. Confirma el precio del día en caja o por WhatsApp.
          Horario: {site.hoursNote.toLowerCase()}, {site.hoursLabel}.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/contacto"
            className="inline-flex rounded-full bg-lime px-6 py-3.5 font-extrabold text-void"
          >
            Cómo llegar
          </Link>
          <Link
            href="/reglas"
            className="inline-flex rounded-full border border-white/25 px-6 py-3.5 font-bold text-white hover:border-lime hover:text-lime"
          >
            Ver reglas del parque
          </Link>
        </div>
      </section>
    </>
  );
}
