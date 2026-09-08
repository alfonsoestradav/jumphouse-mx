"use client";

import { FormEvent, useState } from "react";
import { waLink } from "@/lib/site";

export function PartyForm() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("15");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const text = `Hola Jump House, quiero cotizar una fiesta.
Nombre: ${name || "—"}
Fecha: ${date || "por definir"}
Invitados: ${guests}`;
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[1.8rem] bg-void-2 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
    >
      <p className="font-display text-4xl">Cotiza tu fecha</p>
      <p className="mt-2 text-sm text-muted">
        Te abrimos WhatsApp con los datos listos. Sin formularios eternos.
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
          onChange={(e) => setGuests(e.target.value)}
          className="mt-2 w-full rounded-2xl border border-white/10 bg-void px-4 py-3 text-ink"
        />
      </label>
      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-lime py-3.5 font-extrabold text-void"
      >
        Enviar por WhatsApp
      </button>
    </form>
  );
}
