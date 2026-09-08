"use client";

import { FormEvent, useMemo, useState } from "react";
import { partyFood, partyRate, partyServices, waLink } from "@/lib/site";

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
  const [foodQty, setFoodQty] = useState<Record<string, number>>({});
  const [services, setServices] = useState<Record<string, boolean>>({});

  const paying = Math.max(0, birthday ? guests - 1 : guests);
  const jumpTotal = paying * partyRate;
  const foodTotal = partyFood.reduce(
    (sum, item) => sum + (foodQty[item.id] || 0) * item.price,
    0,
  );
  const serviceTotal = partyServices.reduce(
    (sum, item) => sum + (services[item.id] ? item.price : 0),
    0,
  );
  const total = jumpTotal + foodTotal + serviceTotal;

  const foodLines = partyFood
    .filter((item) => (foodQty[item.id] || 0) > 0)
    .map((item) => `${item.name} x${foodQty[item.id]} (${money(item.price * foodQty[item.id])})`);
  const serviceLines = partyServices
    .filter((item) => services[item.id])
    .map((item) => `${item.name} (${money(item.price)})`);

  const message = useMemo(() => {
    const lines = [
      "Hola Jump House, quiero cotizar una fiesta.",
      `Nombre: ${name.trim() || "—"}`,
      `Fecha: ${date || "por definir"}`,
      `Invitados: ${guests}`,
      `Cumpleañero entra gratis: ${birthday ? "sí" : "no"}`,
      `Salto: ${paying} × $${partyRate} = ${money(jumpTotal)}`,
    ];
    if (foodLines.length) {
      lines.push("Comida extra:");
      foodLines.forEach((line) => lines.push(`- ${line}`));
    } else {
      lines.push("Comida extra: no");
    }
    if (serviceLines.length) {
      lines.push("Servicios:");
      serviceLines.forEach((line) => lines.push(`- ${line}`));
    } else {
      lines.push("Servicios extra: no");
    }
    lines.push(`Estimado total: ${money(total)}`);
    lines.push("Confirmo disponibilidad y el paquete del día.");
    return lines.join("\n");
  }, [
    name,
    date,
    guests,
    birthday,
    paying,
    jumpTotal,
    foodLines,
    serviceLines,
    total,
  ]);

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
        Salto desde ${partyRate} por persona. Suma comida y servicios; el
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

      <p className="mt-8 font-display text-3xl">Comida extra</p>
      <p className="mt-1 text-sm text-muted">
        El paquete ya trae merienda. Esto es adicional.
      </p>
      <ul className="mt-3 space-y-2">
        {partyFood.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 px-4 py-3"
          >
            <span>
              <span className="font-semibold">{item.name}</span>
              <span className="ml-2 text-sm text-muted">
                ${item.price} / {item.unit}
              </span>
            </span>
            <input
              type="number"
              min={0}
              value={foodQty[item.id] || 0}
              onChange={(e) =>
                setFoodQty((prev) => ({
                  ...prev,
                  [item.id]: Math.max(0, Number(e.target.value) || 0),
                }))
              }
              className="w-16 rounded-xl border border-white/10 bg-void px-2 py-1 text-center text-ink"
              aria-label={`Cantidad de ${item.name}`}
            />
          </li>
        ))}
      </ul>

      <p className="mt-8 font-display text-3xl">Servicios</p>
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
          Salto {money(jumpTotal)}
          {foodTotal ? ` · comida ${money(foodTotal)}` : ""}
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
