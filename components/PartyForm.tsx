"use client";

import { FormEvent, useMemo, useState } from "react";
import { DateCalendar, formatMx } from "@/components/DateCalendar";
import {
  partyDepositRate,
  partyHours,
  partyRate,
  partyServices,
  partyTerms,
  waLink,
} from "@/lib/site";

const GUEST_MIN = 1;
const GUEST_MAX = 100;

function money(n: number) {
  return n.toLocaleString("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  });
}

function clampGuests(n: number) {
  if (!Number.isFinite(n)) return GUEST_MIN;
  return Math.min(GUEST_MAX, Math.max(GUEST_MIN, Math.round(n)));
}

function GuestSlider({
  label,
  value,
  onChange,
  showTitle = true,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  showTitle?: boolean;
}) {
  const [text, setText] = useState(String(value));
  const [focused, setFocused] = useState(false);
  const fill = `${(value / GUEST_MAX) * 100}%`;

  return (
    <div>
      {showTitle ? <p className="text-sm font-semibold">{label}</p> : null}
      <div className={`flex items-center gap-3 ${showTitle ? "mt-2" : ""}`}>
        <input
          type="range"
          min={GUEST_MIN}
          max={GUEST_MAX}
          value={value}
          onChange={(e) => {
            const next = clampGuests(Number(e.target.value));
            onChange(next);
            if (!focused) setText(String(next));
          }}
          className="guest-slider min-w-0 flex-1"
          style={{ ["--fill" as string]: fill }}
          aria-label={label}
        />
        <input
          type="text"
          inputMode="numeric"
          value={focused ? text : String(value)}
          onFocus={() => {
            setFocused(true);
            setText(String(value));
          }}
          onChange={(e) => {
            const raw = e.target.value.replace(/\D/g, "").slice(0, 3);
            if (raw === "") {
              setText("");
              return;
            }
            const next = clampGuests(Number(raw));
            setText(Number(raw) > GUEST_MAX ? String(GUEST_MAX) : raw);
            onChange(next);
          }}
          onBlur={() => {
            const next = clampGuests(Number(text) || 0);
            setText(String(next));
            onChange(next);
            setFocused(false);
          }}
          className="w-14 shrink-0 rounded-xl border border-white/10 bg-void px-2 py-2 text-center text-sm font-semibold tabular-nums text-ink"
          aria-label={`${label}, valor numérico`}
        />
      </div>
    </div>
  );
}

export function PartyForm() {
  const [name, setName] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const [guests, setGuests] = useState(15);
  const [qty, setQty] = useState<Record<string, number>>({});
  const [privado, setPrivado] = useState(false);
  const [guestError, setGuestError] = useState("");

  const jumpTotal = guests * partyRate;
  const serviceTotal = partyServices.reduce((sum, item) => {
    if (item.kind === "flag") return sum + (privado ? item.price : 0);
    return sum + (qty[item.id] || 0) * item.price;
  }, 0);
  const total = jumpTotal + serviceTotal;
  const deposit = Math.round(total * partyDepositRate);

  const serviceLines = partyServices.flatMap((item) => {
    if (item.kind === "flag") {
      return privado ? [`${item.name} (${money(item.price)})`] : [];
    }
    const n = qty[item.id] || 0;
    if (n <= 0) return [];
    return [`${item.name} x${n} (${money(item.price * n)})`];
  });

  const message = useMemo(() => {
    const lines = [
      "Hola Jump House, quiero cotizar una fiesta.",
      `Nombre: ${name.trim() || "—"}`,
      `Fecha: ${date ? formatMx(date) : "por definir"}`,
      `Invitados: ${guests}`,
      `Servicio: ${partyHours} horas`,
      `Salto: ${guests} × $${partyRate} = ${money(jumpTotal)}`,
    ];
    if (serviceLines.length) {
      lines.push("Servicios adicionales:");
      serviceLines.forEach((line) => lines.push(`- ${line}`));
    } else {
      lines.push("Servicios adicionales: no");
    }
    lines.push(`Estimado total: ${money(total)}`);
    lines.push(`Anticipo 30%: ${money(deposit)}`);
    lines.push("Confirmo disponibilidad y el paquete del día.");
    return lines.join("\n");
  }, [
    name,
    date,
    guests,
    jumpTotal,
    serviceLines,
    total,
    deposit,
  ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (guests < 1) {
      setGuestError("Indica al menos 1 invitado.");
      return;
    }
    setGuestError("");
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[1.8rem] bg-void-2 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
    >
      <p className="font-display text-4xl">Calcula tu evento</p>
      <p className="mt-2 text-sm text-muted">
        ${partyHours} horas de servicio. Salto desde ${partyRate} por persona.
        Suma extras; el estimado y el anticipo del 30% van en el WhatsApp.
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
      <div className="mt-4">
        <p className="text-sm font-semibold">Fecha tentativa</p>
        <div className="mt-2">
          <DateCalendar value={date} onChange={setDate} />
        </div>
      </div>
      <div className="mt-6">
        <p className="text-sm font-semibold">Número de invitados</p>
        <p className="mt-1 text-sm text-muted">
          Adultos y niños pagan el mismo precio: ${partyRate} por persona.
        </p>
        <div className="mt-4">
          <GuestSlider
            label="Número de invitados"
            value={guests}
            showTitle={false}
            onChange={(n) => {
              setGuests(n);
              if (guestError) setGuestError("");
            }}
          />
        </div>
        {guestError ? (
          <p className="mt-2 text-sm text-magenta">{guestError}</p>
        ) : null}
      </div>

      <p className="mt-8 font-display text-3xl">Servicios adicionales</p>
      <ul className="mt-3 space-y-2">
        {partyServices.map((item) =>
          item.kind === "flag" ? (
            <li key={item.id}>
              <label className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 px-4 py-3">
                <span className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={privado}
                    onChange={(e) => setPrivado(e.target.checked)}
                    className="h-5 w-5 accent-[#c6ff2e]"
                  />
                  <span className="font-semibold">{item.name}</span>
                </span>
                <span className="text-lime">${item.price.toLocaleString("es-MX")}</span>
              </label>
            </li>
          ) : (
            <li
              key={item.id}
              className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 px-4 py-3"
            >
              <span>
                <span className="font-semibold">{item.name}</span>
                <span className="ml-2 text-sm text-muted">
                  ${item.price} {item.unit}
                </span>
              </span>
              <input
                type="number"
                min={0}
                value={qty[item.id] || 0}
                onChange={(e) =>
                  setQty((prev) => ({
                    ...prev,
                    [item.id]: Math.max(0, Number(e.target.value) || 0),
                  }))
                }
                className="w-16 rounded-xl border border-white/10 bg-void px-2 py-1 text-center text-ink"
                aria-label={`Cantidad de ${item.name}`}
              />
            </li>
          ),
        )}
      </ul>
      <p className="mt-3 text-sm text-muted">{partyTerms.extrasNote}</p>

      <div className="mt-6 rounded-2xl border border-lime/30 bg-void px-5 py-4">
        <p className="text-sm text-muted">Estimado del evento</p>
        <p className="font-display mt-1 text-5xl text-lime">{money(total)}</p>
        <p className="mt-2 text-sm text-muted">
          Salto {money(jumpTotal)} ({guests} {guests === 1 ? "persona" : "personas"})
          {serviceTotal ? ` · extras ${money(serviceTotal)}` : ""}
        </p>
        <p className="mt-2 text-sm text-muted">
          Anticipo 30%: {money(deposit)} · resto 3 días antes
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
