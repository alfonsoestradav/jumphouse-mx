import type { Metadata } from "next";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description:
    "Aviso de privacidad de Jump House Trampoline Park en Santa Catarina, Nuevo León.",
  alternates: { canonical: "/aviso-de-privacidad" },
};

export default function AvisoDePrivacidadPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 pb-20 pt-32 lg:px-8">
      <h1 className="font-display text-6xl sm:text-8xl">Aviso de privacidad</h1>
      <p className="mt-6 text-lg text-muted">
        Jump House Trampoline Park (el “Responsable”), con domicilio en{" "}
        {site.address.street}, {site.address.place}, {site.address.neighborhood},{" "}
        {site.address.zip} {site.address.city}, {site.address.state}, México, pone
        a su disposición este aviso de privacidad simplificado, en términos de la
        Ley Federal de Protección de Datos Personales en Posesión de los
        Particulares.
      </p>

      <section className="mt-12 space-y-8 text-ink/90">
        <div>
          <h2 className="font-display text-4xl text-lime">Datos que recabamos</h2>
          <p className="mt-3">
            En este sitio no hay cuentas ni pagos en línea. El calculador de
            fiestas recaba nombre, fecha tentativa, número de invitados y si el
            cumpleañero entra gratis. Al enviarlo, esos datos y el estimado se
            abren en un mensaje de WhatsApp. No recabamos RFC, identificaciones
            ni datos financieros.
          </p>
        </div>

        <div>
          <h2 className="font-display text-4xl text-lime">Finalidad</h2>
          <p className="mt-3">
            Usamos esa información solo para responder su solicitud, cotizar o
            confirmar una visita o fiesta y dar seguimiento por WhatsApp. No la
            usamos para publicidad masiva ni la vendemos a terceros.
          </p>
        </div>

        <div>
          <h2 className="font-display text-4xl text-lime">Transferencias</h2>
          <p className="mt-3">
            El mensaje se envía a través de WhatsApp, servicio operado por Meta
            Platforms. No realizamos transferencias adicionales de sus datos.
          </p>
        </div>

        <div>
          <h2 className="font-display text-4xl text-lime">Derechos ARCO</h2>
          <p className="mt-3">
            Puede acceder, rectificar, cancelar u oponerse al tratamiento de sus
            datos, o limitar su uso, escribiéndonos por WhatsApp al{" "}
            <a href={waLink()} className="font-semibold text-lime hover:text-white">
              {site.whatsappDisplay}
            </a>
            . Atenderemos su petición por el mismo canal.
          </p>
        </div>

        <div>
          <h2 className="font-display text-4xl text-lime">Cambios a este aviso</h2>
          <p className="mt-3">
            Cualquier actualización se publicará en esta página. Última revisión:
            septiembre de 2026.
          </p>
        </div>
      </section>
    </article>
  );
}
