"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/trades", label: "Trades" },
  { href: "/learn", label: "Learn" },
  { href: "/playbooks", label: "Playbooks" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/75">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Logo />

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[var(--color-secondary)] transition-colors hover:text-[var(--color-primary)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Desktop / large-mobile CTA */}
          <Link
            href="/audit"
            className="hidden sm:inline-flex"
            aria-label="Get your free audit"
          >
            <Button variant="action" size="sm">
              Free audit
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </Link>
          {/* Compact CTA on small phones */}
          <Link
            href="/audit"
            className="sm:hidden"
            aria-label="Get your free audit"
          >
            <Button variant="action" size="sm" className="px-3">
              Audit
            </Button>
          </Link>

          {/* Mobile menu toggle — hidden on lg+ */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="ml-1 inline-flex h-10 w-10 items-center justify-center rounded-md text-[var(--color-primary)] hover:bg-[var(--color-surface)] lg:hidden"
          >
            {open ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav panel — only renders when open and on < lg */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile primary"
          className="border-t border-[var(--color-border)] bg-white lg:hidden"
        >
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-base font-semibold text-[var(--color-primary)] hover:bg-[var(--color-surface)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 border-t border-[var(--color-border)] pt-3">
              <Link
                href="/audit"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-md bg-[var(--color-action)] px-3 py-3 text-base font-semibold text-white"
              >
                Get a free audit
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
