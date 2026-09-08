import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { menu, menuNote, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Menú",
  description:
    "Cafetería de Jump House en Plaza Santa Catarina: palomitas, limonada, café, pizza, nuggets, elotes y más. Precios en pesos mexicanos. Confirma en caja.",
};

export default function MenuPage() {
  return (
    <>
      <PageHero
        title="Menú"
        lede="Salta, recarga y sigue. Palomitas, limonada, pizza y lo típico de la cafetería, sin salir del parque."
        image="/images/pack.jpg"
        alt="Visitantes de Jump House en Plaza Santa Catarina"
      />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <p className="max-w-2xl text-muted">{menuNote}</p>
        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          {menu.map((group) => (
            <div key={group.id}>
              <h2 className="font-display border-b border-lime/40 pb-3 text-5xl text-lime">
                {group.title}
              </h2>
              <ul className="mt-2 divide-y divide-white/10">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline justify-between gap-4 py-4"
                  >
                    <span className="font-semibold">{item.name}</span>
                    <span className="font-display text-3xl text-lime">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 max-w-xl text-muted">
          El Jump Pack de fin de semana incluye limonada refill y bolsa de
          palomitas. El resto se pide en caja.
        </p>
        <a
          href={waLink("Hola Jump House, quiero confirmar el menú de cafetería.")}
          className="mt-8 inline-flex rounded-full bg-lime px-6 py-3.5 font-extrabold text-void"
        >
          Preguntar por WhatsApp
        </a>
      </section>
    </>
  );
}
