import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

/** The site header: the logo, the page's sections, and "Talk to us". A menu button on a phone. */
const LINKS = [
  { href: "/#products", label: "FarmIntelytics" },
  { href: "/#what-we-do", label: "What we do" },
  { href: "/use-cases", label: "Use cases" },
  { href: "/research", label: "Research" },
  { href: "/consultancy", label: "Consultancy" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between px-6 lg:px-12">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Sections">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground">{l.label}</a>
          ))}
          <a href="/contact" className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Talk to us</a>
        </nav>
        <button type="button" className="rounded-md p-2 text-foreground md:hidden" onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-6 py-3 md:hidden" aria-label="Sections">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-base font-medium text-foreground">{l.label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
