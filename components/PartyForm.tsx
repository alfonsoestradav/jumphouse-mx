"use client";

import { FormEvent, useMemo, useState } from "react";
import { partyRate, partyServices, waLink } from "@/lib/site";

const GUEST_MIN = 0;
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
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
}) {
  const [text, setText] = useState(String(value));
  const [focused, setFocused] = useState(false);
  const fill = `${(value / GUEST_MAX) * 100}%`;

  return (
    <div>
      <p className="text-sm font-semibold">{label}</p>
      <div className="mt-2 flex items-center gap-3">
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

function maskDate(raw: string) {
  const digits = raw.replace(/\D/g, "").slice(0, 8);
  if (digits.length <= 2) return digits;
  if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
}

function isValidDate(value: string) {
  const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(value);
  if (!match) return false;
  const day = Number(match[1]);
  const month = Number(match[2]);
  const year = Number(match[3]);
  const parsed = new Date(year, month - 1, day);
  return (
    parsed.getFullYear() === year &&
    parsed.getMonth() === month - 1 &&
    parsed.getDate() === day
  );
}

export function PartyForm() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [adults, setAdults] = useState(10);
  const [kids, setKids] = useState(5);
  const [services, setServices] = useState<Record<string, boolean>>({});
  const [dateError, setDateError] = useState("");
  const [guestError, setGuestError] = useState("");

  const guests = adults + kids;
  const jumpTotal = guests * partyRate;
  const serviceTotal = partyServices.reduce(
    (sum, item) => sum + (services[item.id] ? item.price : 0),
    0,
  );
  const total = jumpTotal + serviceTotal;

  const serviceLines = partyServices
    .filter((item) => services[item.id])
    .map((item) => `${item.name} (${money(item.price)})`);

  const message = useMemo(() => {
    const lines = [
      "Hola Jump House, quiero cotizar una fiesta.",
      `Nombre: ${name.trim() || "—"}`,
      `Fecha: ${date || "por definir"}`,
      `Adultos: ${adults}`,
      `Niños: ${kids}`,
      `Invitados: ${guests}`,
      `Salto: ${guests} × $${partyRate} = ${money(jumpTotal)}`,
    ];
    if (serviceLines.length) {
      lines.push("Servicios adicionales:");
      serviceLines.forEach((line) => lines.push(`- ${line}`));
    } else {
      lines.push("Servicios adicionales: no");
    }
    lines.push(`Estimado total: ${money(total)}`);
    lines.push("Confirmo disponibilidad y el paquete del día.");
    return lines.join("\n");
  }, [name, date, adults, kids, guests, jumpTotal, serviceLines, total]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (date && !isValidDate(date)) {
      setDateError("Usa el formato dd/mm/aaaa, por ejemplo 08/09/2026.");
      return;
    }
    if (guests < 1) {
      setGuestError("Indica al menos 1 invitado.");
      return;
    }
    setDateError("");
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
        Salto desde ${partyRate} por persona. Suma servicios adicionales; el
        estimado va en el WhatsApp.
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
          type="text"
          inputMode="numeric"
          placeholder="dd/mm/aaaa"
          value={date}
          onChange={(e) => {
            setDate(maskDate(e.target.value));
            if (dateError) setDateError("");
          }}
          pattern="\d{2}/\d{2}/\d{4}"
          title="Usa el formato dd/mm/aaaa"
          className="mt-2 w-full rounded-2xl border border-white/10 bg-void px-4 py-3 text-ink"
        />
      </label>
      {dateError ? (
        <p className="mt-2 text-sm text-magenta">{dateError}</p>
      ) : null}
      <div className="mt-6">
        <p className="text-sm font-semibold">Número de invitados</p>
        <p className="mt-1 text-sm text-muted">
          {guests} en total · 0 a 100 por grupo
        </p>
        <div className="mt-4 space-y-4">
          <GuestSlider
            label="Adultos"
            value={adults}
            onChange={(n) => {
              setAdults(n);
              if (guestError) setGuestError("");
            }}
          />
          <GuestSlider
            label="Niños"
            value={kids}
            onChange={(n) => {
              setKids(n);
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
        {partyServices.map((item) => (
          <li key={item.id}>
            <label className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 px-4 py-3">
              <span className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={!!services[item.id]}
                  onChange={(e) =>
                    setServices((prev) => ({
                      ...prev,
                      [item.id]: e.target.checked,
                    }))
                  }
                  className="h-5 w-5 accent-[#c6ff2e]"
                />
                <span className="font-semibold">{item.name}</span>
              </span>
              <span className="text-lime">${item.price}</span>
            </label>
          </li>
        ))}
      </ul>

      <div className="mt-6 rounded-2xl border border-lime/30 bg-void px-5 py-4">
        <p className="text-sm text-muted">Estimado del evento</p>
        <p className="font-display mt-1 text-5xl text-lime">{money(total)}</p>
        <p className="mt-2 text-sm text-muted">
          Salto {money(jumpTotal)} ({adults} adultos · {kids} niños)
          {serviceTotal ? ` · servicios ${money(serviceTotal)}` : ""}
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
