import Link from "next/link";
import { ArrowRight } from "lucide-react";
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

        <div className="flex items-center gap-3">
          <Link
            href="/audit"
            className="hidden sm:inline-flex"
            aria-label="Get your free lead audit"
          >
            <Button variant="action" size="sm">
              Free audit
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </Link>
          {/* Mobile CTA (compact) */}
          <Link
            href="/audit"
            className="sm:hidden"
            aria-label="Get your free lead audit"
          >
            <Button variant="action" size="sm" className="px-3">
              Audit
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
