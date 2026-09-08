import Image from "next/image";
import Link from "next/link";
import { IconArrow, IconClock, IconPin } from "@/components/Icons";
import { attractions, extras, prices, site, waLink } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[100svh] overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Canchas de trampolines, tobogán y pozo de cubos en Jump House"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,6,12,0.25)_0%,rgba(7,6,12,0.55)_45%,rgba(7,6,12,0.92)_100%)]" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-10 pt-28 lg:px-8 lg:pb-16">
          <h1 className="jump-title font-display max-w-5xl text-[5.4rem] text-white sm:text-[8.5rem] lg:text-[10.5rem]">
            Salta
            <span className="block text-lime">sin límite</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-ink/90">
            Parque de trampolines para todas las edades. Tiempo ilimitado, el
            cumpleañero entra gratis y solo pagan quienes brincan.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={waLink("Hola Jump House, quiero ir a saltar hoy.")}
              className="cta-glow inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3.5 text-base font-extrabold text-void"
            >
              Reservar por WhatsApp
              <IconArrow className="h-5 w-5" />
            </a>
            <Link
              href="/precios"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 font-bold text-white hover:border-lime hover:text-lime"
            >
              Ver precios
            </Link>
          </div>
        </div>
      </section>

      <div className="border-y border-lime/20 bg-lime text-void">
        <div className="marquee py-3">
          <div className="marquee-track font-display text-2xl tracking-wide">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-10 pr-10">
                <span>Súper lunes $130</span>
                <span>Martes a jueves $180 antes de 3:30</span>
                <span>Jump Pack fin de semana $250</span>
                <span>Cumpleañeros entran gratis</span>
                <span>Tiempo ilimitado</span>
                <span>Solo paga quien salta</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
        <div>
          <h2 className="font-display text-6xl sm:text-8xl">
            El plan de Santa Catarina
          </h2>
          <p className="mt-5 max-w-xl text-lg text-muted">
            Jump House está en Plaza Santa Catarina, sobre Manuel Ordóñez. Llegas,
            te pones calcetas, y te lanzas. No hay reloj de una hora: la entrada
            es por tiempo ilimitado.
          </p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-void-2 p-5">
              <dt className="flex items-center gap-2 text-lime">
                <IconPin className="h-5 w-5" />
                Dónde
              </dt>
              <dd className="mt-2 font-semibold">
                {site.address.street}
                <br />
                {site.address.place}, {site.city}
              </dd>
            </div>
            <div className="rounded-3xl bg-void-2 p-5">
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
          </dl>
        </div>
        <div className="relative min-h-[340px] overflow-hidden rounded-[2rem]">
          <Image
            src="/images/lobby.jpg"
            alt="Recepción de Jump House con luces de neón y calcetas"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
      </section>

      <section className="bg-void-2 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display max-w-xl text-6xl sm:text-8xl">
              Lo que te espera adentro
            </h2>
            <Link href="/atracciones" className="font-extrabold text-lime hover:text-white">
              Todas las atracciones →
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {attractions.slice(0, 3).map((item, i) => (
              <Link
                key={item.slug}
                href="/atracciones"
                className={`group relative isolate min-h-[320px] overflow-hidden rounded-[1.6rem] ${
                  i === 0 ? "md:col-span-2 md:min-h-[420px]" : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <h3 className="font-display text-4xl sm:text-5xl">{item.title}</h3>
                  <p className="mt-2 max-w-md text-sm text-ink/85">{item.copy}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <h2 className="font-display text-6xl sm:text-8xl">Precios de esta semana</h2>
        <p className="mt-4 max-w-xl text-muted">
          Promos publicadas en redes. Sujetas a cambio. La entrada no incluye
          calcetas ($40).
        </p>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {prices.map((p) => (
            <article
              key={p.id}
              className={`rounded-[1.7rem] p-6 ${
                p.highlight
                  ? "bg-lime text-void"
                  : "border border-white/10 bg-void-2"
              }`}
            >
              <h3 className="font-display text-4xl">{p.day}</h3>
              <p className="font-display mt-4 text-7xl">{p.price}</p>
              <p className="mt-3 font-semibold">{p.detail}</p>
              <p className={`mt-1 text-sm ${p.highlight ? "text-void/70" : "text-muted"}`}>
                {p.note}
              </p>
            </article>
          ))}
        </div>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {extras.map((x) => (
            <li key={x.label} className="rounded-2xl border border-white/10 px-4 py-3">
              <span className="block text-sm text-muted">{x.label}</span>
              <span className="font-extrabold text-lime">{x.value}</span>
            </li>
          ))}
        </ul>
        <Link href="/precios" className="mt-8 inline-block font-extrabold text-lime">
          Detalle de precios y promociones →
        </Link>
      </section>

      <section className="relative isolate overflow-hidden">
        <Image
          src="/images/party.jpg"
          alt="Área de fiestas junto a los trampolines"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-void/80" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-5 py-24 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-display text-6xl sm:text-8xl">
              Nada supera una fiesta aquí
            </h2>
            <p className="mt-5 max-w-md text-lg text-ink/90">
              Paquetes desde $245 por persona. El cumpleañero entra gratis.
              Armamos la fecha por WhatsApp.
            </p>
            <Link
              href="/fiestas"
              className="mt-8 inline-flex rounded-full bg-magenta px-6 py-3.5 font-extrabold text-white hover:bg-white hover:text-void"
            >
              Ver fiestas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
