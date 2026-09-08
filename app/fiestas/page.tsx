import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PartyForm } from "@/components/PartyForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fiestas",
  description:
    "Fiestas de cumpleaños en Jump House, Plaza Santa Catarina. Paquetes desde $245 por persona, cumpleañero gratis y tiempo ilimitado. Cotiza por WhatsApp.",
};

export default function FiestasPage() {
  return (
    <>
      <PageHero
        title="Fiestas"
        lede="El cumpleañero entra gratis. Armamos la fecha por WhatsApp en Plaza Santa Catarina, Manuel Ordóñez 322."
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
              Paquetes de fiesta desde $245 por persona. El cumpleañero entra
              gratis y solo pagan quienes suben a brincar. El tiempo de salto es
              ilimitado dentro del horario del parque: {site.hoursNote.toLowerCase()},{" "}
              {site.hoursLabel}.
            </p>
            <p className="mt-5 max-w-xl text-lg text-muted">
              Usa el calculador: invitados y servicios adicionales (pastel,
              fotos, globos). El WhatsApp sale con el estimado ({site.address.place}).
            </p>
          </div>

          <PartyForm />
        </div>
      </section>
    </>
  );
}
