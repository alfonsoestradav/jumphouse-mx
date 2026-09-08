import type { Metadata } from "next";
import { IconArrow } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { jobs, site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vacantes",
  description:
    "Únete al equipo de Jump House en Plaza Santa Catarina. Vacantes de Animador(a) de Trampolín en medio turno. Info por WhatsApp.",
};

export default function VacantesPage() {
  return (
    <>
      <PageHero
        title="Vacantes"
        lede={jobs.intro}
        image={jobs.image}
        alt={jobs.alt}
      />

      <section className="mx-auto max-w-3xl px-5 py-16 lg:px-8 lg:py-24">
        <h2 className="font-display text-6xl sm:text-8xl">{jobs.title}</h2>
        <p className="mt-5 text-lg text-muted">{jobs.intro}</p>
        <p className="mt-10 font-display text-4xl text-lime">{jobs.role}</p>
        <ul className="mt-6 space-y-3">
          {jobs.shifts.map((shift) => (
            <li
              key={shift.hours}
              className="rounded-2xl border border-white/10 bg-void-2 px-5 py-4"
            >
              <p className="font-extrabold">{shift.label}</p>
              <p className="mt-1 text-muted">{shift.hours}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-muted">
          Más info por WhatsApp al {site.whatsappDisplay}.
        </p>
        <a
          href={waLink(jobs.whatsappText)}
          className="cta-glow mt-8 inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3.5 font-extrabold text-void"
        >
          Escribir por WhatsApp
          <IconArrow className="h-5 w-5" />
        </a>
      </section>
    </>
  );
}
