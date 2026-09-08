import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { PartyForm } from "@/components/PartyForm";
import { partyTerms, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fiestas",
  description:
    "Fiestas de cumpleaños en Jump House, Plaza Santa Catarina. Paquetes desde $245 por persona, 4 horas de servicio y cumpleañero gratis. Cotiza por WhatsApp.",
};

export default function FiestasPage() {
  return (
    <>
      <PageHero
        title="Fiestas"
        lede="4 horas de servicio. El cumpleañero entra gratis. Armamos la fecha por WhatsApp en Plaza Santa Catarina, Manuel Ordóñez 322."
        image="/images/party.jpg"
        alt="Fiesta en las canchas de Jump House"
      />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="font-display text-[4.2rem] leading-none text-lime sm:text-[6.5rem]">
              desde $245
              <span className="mt-2 block text-ink">por persona</span>
            </p>
            <p className="mt-8 max-w-xl text-lg text-muted">
              Paquetes de fiesta desde $245 por persona. El evento es de 4 horas
              de servicio. El cumpleañero entra gratis y solo pagan quienes
              suben a brincar. Horario del parque: {site.hoursNote.toLowerCase()},{" "}
              {site.hoursLabel}.
            </p>
            <p className="mt-5 max-w-xl text-lg text-muted">
              Usa el calculador: invitados y servicios adicionales (quequitos,
              pizza extra, varitas neón y evento privado). Adultos y niños
              pagan lo mismo. El WhatsApp sale con el estimado ({site.address.place}).
            </p>
            <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-[2rem]">
              <Image
                src="/images/maps-07.jpg"
                alt="Área de fiestas en Jump House, con mesas, globo y tobogán"
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>

          <PartyForm />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8 lg:pb-28">
        <div className="rounded-[2rem] border border-white/10 bg-void-2 px-6 py-10 md:px-12 md:py-14">
          <h2 className="font-display text-5xl text-lime sm:text-7xl">
            Condiciones del evento
          </h2>
          <p className="mt-5 max-w-3xl text-lg font-semibold text-ink">
            {partyTerms.duration}
          </p>
          <p className="mt-3 max-w-3xl text-lg text-muted">
            {partyTerms.deposit}
          </p>
          <p className="mt-3 max-w-3xl font-semibold text-ink">
            {partyTerms.extrasNote}
          </p>

          <h3 className="font-display mt-10 text-4xl">Importante</h3>
          <ul className="mt-4 space-y-3 text-muted">
            {partyTerms.important.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="font-display mt-10 text-4xl">Restricciones</h3>
          <ul className="mt-4 space-y-3 text-muted">
            {partyTerms.restrictions.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-magenta" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
