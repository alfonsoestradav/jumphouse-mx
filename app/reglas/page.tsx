import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { IconArrow } from "@/components/Icons";
import { faqs, rules, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reglas",
  description:
    "Reglas de salto y preguntas frecuentes de Jump House en Plaza Santa Catarina. Calcetas obligatorias, tiempo ilimitado y solo paga quien brinca.",
  alternates: { canonical: "/reglas" },
};

export default function ReglasPage() {
  return (
    <>
      <PageHero
        title="Reglas"
        lede="Para que todos salten rico: calcetas, respeto al staff y tiempo ilimitado dentro del horario."
        image="/images/park.jpg"
        alt="Canchas de Jump House en Plaza Santa Catarina"
      />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="flex items-end justify-between gap-4 border-b border-lime/40 pb-4">
          <h2 className="font-display text-5xl text-lime sm:text-7xl">Cancha</h2>
          <p className="font-display text-2xl text-muted sm:text-3xl">
            {String(rules.length).padStart(2, "0")} reglas
          </p>
        </div>
        <ol className="divide-y divide-lime/25">
          {rules.map((rule, i) => (
            <li
              key={rule}
              className="grid grid-cols-[auto_1fr] items-baseline gap-5 py-6 sm:gap-10 sm:py-7"
            >
              <span className="font-display text-5xl tabular-nums text-lime sm:text-7xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="max-w-3xl text-lg text-ink/90 sm:text-xl">{rule}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-void-2 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="font-display text-6xl sm:text-8xl">Preguntas frecuentes</h2>
          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {faqs.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-6">
                    <span className="font-display text-3xl sm:text-4xl">{item.q}</span>
                    <span
                      aria-hidden="true"
                      className="font-display text-3xl text-lime transition group-open:rotate-45"
                    >
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col items-start gap-5 px-5 py-16 lg:px-8">
        <h2 className="font-display text-5xl sm:text-7xl">Listo para saltar</h2>
        <p className="max-w-lg text-muted">
          Si vienes con grupo o fiesta, aparta por WhatsApp. Si vienes a brincar,
          puedes llegar directo.
        </p>
        <a
          href={waLink("Hola Jump House, quiero información para visitar el parque.")}
          className="cta-glow inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3.5 font-extrabold text-void"
        >
          Escribir por WhatsApp
          <IconArrow className="h-5 w-5" />
        </a>
      </section>
    </>
  );
}
