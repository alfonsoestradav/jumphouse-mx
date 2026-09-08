"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IconClose, IconMenu } from "@/components/Icons";
import { Logo } from "@/components/Logo";
import { nav, site, waLink } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-void/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <Logo height={48} />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[0.95rem] font-semibold tracking-wide transition-colors ${
                  active ? "text-lime" : "text-ink/80 hover:text-lime"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={waLink("Hola Jump House, quiero reservar una visita o fiesta.")}
            className="hidden rounded-full bg-lime px-4 py-2 text-sm font-extrabold text-void transition hover:bg-white sm:inline-flex"
          >
            Reservar
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
            {open ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-ink/10 bg-void px-5 py-5 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Móvil">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-lg font-semibold text-ink hover:bg-white/5 hover:text-lime"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={waLink()}
              className="mt-3 rounded-full bg-lime px-4 py-3 text-center font-extrabold text-void"
            >
              WhatsApp {site.whatsappDisplay}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
