import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { to: "/", label: "Overview" },
  { to: "/modules", label: "Modules" },
  { to: "/crops", label: "Crops" },
  { to: "/sustainability", label: "Sustainability" },
  { to: "/monitoring", label: "Monitoring" },
  { to: "/architecture", label: "Architecture" },
  { to: "/use-cases", label: "Use Cases" },
  { to: "/services", label: "Developer" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-6 py-3">
        <Logo />

        <nav className="hidden flex-nowrap items-center gap-0.5 xl:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="whitespace-nowrap rounded-md px-2.5 py-2 font-display text-[13px] font-semibold text-muted-foreground transition-smooth hover:text-foreground"
              activeProps={{ className: "whitespace-nowrap rounded-md px-2.5 py-2 font-display text-[13px] font-semibold text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-md bg-primary px-4 py-2.5 text-[13px] font-semibold text-primary-foreground transition-smooth hover:bg-primary/90"
          >
            Book a demo
          </Link>
        </div>

        <button
          className="xl:hidden rounded-md p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl xl:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 font-display text-sm font-semibold text-muted-foreground hover:bg-surface hover:text-foreground"
                activeProps={{ className: "rounded-md px-3 py-2 font-display text-sm font-semibold text-primary bg-surface" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
