"use client";

import { FormEvent, useMemo, useState } from "react";
import { partyRate, waLink } from "@/lib/site";

function money(n: number) {
  return n.toLocaleString("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  });
}

export function PartyForm() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(15);
  const [birthday, setBirthday] = useState(true);

  const paying = Math.max(0, birthday ? guests - 1 : guests);
  const total = paying * partyRate;

  const message = useMemo(() => {
    const lines = [
      "Hola Jump House, quiero cotizar una fiesta.",
      `Nombre: ${name.trim() || "—"}`,
      `Fecha: ${date || "por definir"}`,
      `Invitados: ${guests}`,
      `Cumpleañero entra gratis: ${birthday ? "sí" : "no"}`,
      `Personas que pagan: ${paying}`,
      `Estimado: ${money(total)} (${paying} × $${partyRate})`,
      "Confirmo disponibilidad y el paquete del día.",
    ];
    return lines.join("\n");
  }, [name, date, guests, birthday, paying, total]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[1.8rem] bg-void-2 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
    >
      <p className="font-display text-4xl">Calcula tu evento</p>
      <p className="mt-2 text-sm text-muted">
        Paquete desde ${partyRate} por persona. El estimado se arma en el
        mensaje de WhatsApp.
      </p>
      <label className="mt-6 block text-sm font-semibold">
        Tu nombre
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 w-full rounded-2xl border border-white/10 bg-void px-4 py-3 text-ink"
          autoComplete="name"
        />
      </label>
      <label className="mt-4 block text-sm font-semibold">
        Fecha tentativa
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mt-2 w-full rounded-2xl border border-white/10 bg-void px-4 py-3 text-ink"
        />
      </label>
      <label className="mt-4 block text-sm font-semibold">
        Número de invitados
        <input
          type="number"
          min={1}
          value={guests}
          onChange={(e) => setGuests(Math.max(1, Number(e.target.value) || 1))}
          className="mt-2 w-full rounded-2xl border border-white/10 bg-void px-4 py-3 text-ink"
        />
      </label>
      <label className="mt-4 flex items-center gap-3 text-sm font-semibold">
        <input
          type="checkbox"
          checked={birthday}
          onChange={(e) => setBirthday(e.target.checked)}
          className="h-5 w-5 accent-[#c6ff2e]"
        />
        El cumpleañero entra gratis
      </label>

      <div className="mt-6 rounded-2xl border border-lime/30 bg-void px-5 py-4">
        <p className="text-sm text-muted">Estimado del paquete</p>
        <p className="font-display mt-1 text-5xl text-lime">{money(total)}</p>
        <p className="mt-2 text-sm text-muted">
          {paying} {paying === 1 ? "persona paga" : "personas pagan"} × $
          {partyRate}
          {birthday ? " · 1 cortesía" : ""}
        </p>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-lime py-3.5 font-extrabold text-void"
      >
        Enviar cotización por WhatsApp
      </button>
    </form>
  );
}
