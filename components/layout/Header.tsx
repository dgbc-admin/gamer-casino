"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  {
    name: "Inicio",
    href: "/",
  },
  {
    name: "Eventos",
    href: "/events",
  },
  {
    name: "Ranking",
    href: "/ranking",
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6">
        {/* Main navbar */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600 font-black text-white">
              W
            </div>

            <span className="text-xl font-black tracking-tight text-white">
              WELL
              <span className="text-violet-500">PLAY</span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                  isActive(item.href)
                    ? "bg-violet-500/10 text-violet-400"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/login"
              className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-300 transition hover:bg-zinc-900 hover:text-white"
            >
              Iniciar sesión
            </Link>

            <Link
              href="/register"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-700"
            >
              Crear cuenta
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((current) => !current)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 text-zinc-300 transition hover:bg-zinc-900 hover:text-white md:hidden"
            aria-label="Abrir menú"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              /* X */
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              /* Hamburger */
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            mobileMenuOpen
              ? "max-h-[500px] border-t border-zinc-800 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1 py-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                  isActive(item.href)
                    ? "bg-violet-500/10 text-violet-400"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="my-3 border-t border-zinc-800" />

            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-zinc-300 transition hover:bg-zinc-900 hover:text-white"
            >
              Iniciar sesión
            </Link>

            <Link
              href="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 rounded-lg bg-violet-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-violet-700"
            >
              Crear cuenta
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
