"use client";

import { useMemo, useState } from "react";

const WEEKDAYS = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sá", "Do"];

function startOfDay(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function sameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function formatMx(d: Date) {
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  return `${dd}/${mm}/${d.getFullYear()}`;
}

function Chevron({ dir }: { dir: "prev" | "next" }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d={dir === "prev" ? "M14.5 6 8.5 12l6 6" : "M9.5 6l6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DateCalendar({
  value,
  onChange,
}: {
  value: Date | null;
  onChange: (d: Date) => void;
}) {
  const today = useMemo(() => startOfDay(new Date()), []);
  const [cursor, setCursor] = useState(() => value ?? today);
  const year = cursor.getFullYear();
  const month = cursor.getMonth();
  const monthLabel = cursor.toLocaleDateString("es-MX", {
    month: "long",
    year: "numeric",
  });

  const cells = useMemo(() => {
    const startPad = (new Date(year, month, 1).getDay() + 6) % 7;
    const days = new Date(year, month + 1, 0).getDate();
    const list: (number | null)[] = [
      ...Array<number | null>(startPad).fill(null),
      ...Array.from({ length: days }, (_, i) => i + 1),
    ];
    while (list.length % 7 !== 0) list.push(null);
    return list;
  }, [year, month]);

  return (
    <div className="rounded-2xl border border-white/10 bg-void p-4">
      <div className="flex items-center justify-between gap-2">
        <button
          type="button"
          aria-label="Mes anterior"
          onClick={() => setCursor(new Date(year, month - 1, 1))}
          className="grid h-10 w-10 place-items-center rounded-full text-ink hover:bg-white/10"
        >
          <Chevron dir="prev" />
        </button>
        <p className="font-display text-2xl capitalize leading-none text-ink">
          {monthLabel}
        </p>
        <button
          type="button"
          aria-label="Mes siguiente"
          onClick={() => setCursor(new Date(year, month + 1, 1))}
          className="grid h-10 w-10 place-items-center rounded-full text-ink hover:bg-white/10"
        >
          <Chevron dir="next" />
        </button>
      </div>

      <div className="mt-4 grid grid-cols-7 text-center text-xs font-semibold uppercase tracking-wide text-muted">
        {WEEKDAYS.map((day) => (
          <span key={day} className="py-1">
            {day}
          </span>
        ))}
      </div>

      <div className="mt-1 grid grid-cols-7 gap-1">
        {cells.map((day, i) => {
          if (!day) return <span key={`e-${i}`} className="h-10" />;
          const current = new Date(year, month, day);
          const disabled = current < today;
          const selected = value ? sameDay(current, value) : false;
          const isToday = sameDay(current, today);
          return (
            <button
              type="button"
              key={`${year}-${month}-${day}`}
              disabled={disabled}
              onClick={() => onChange(current)}
              aria-label={current.toLocaleDateString("es-MX", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
              aria-pressed={selected}
              aria-current={isToday ? "date" : undefined}
              className={`h-10 rounded-full text-sm font-semibold tabular-nums ${
                selected
                  ? "bg-lime text-void"
                  : isToday
                    ? "text-lime ring-1 ring-lime/60"
                    : "text-ink hover:bg-white/10"
              } disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent`}
            >
              {day}
            </button>
          );
        })}
      </div>

      <p className="mt-3 text-sm text-muted">
        {value ? `Fecha: ${formatMx(value)}` : "Elige un día en el calendario"}
      </p>
    </div>
  );
}
