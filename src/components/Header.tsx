import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";

const PRODUCTS_ITEMS = [
  { to: "/modules", label: "FarmIntelytics", desc: "Agriculture intelligence suite" },
  { to: "/mining", label: "MineIntelytics", desc: "Mining operations intelligence" },
  { to: "/suitability", label: "SuitabilityIntelytics", desc: "Land suitability analysis" },
  { to: "/api-docs", label: "API Documentation", desc: "Developer integration guides" },
];

const COMPANY_ITEMS = [
  { to: "/about", label: "Who We Are", desc: "Our mission and team" },
  { to: "/partners", label: "Partners", desc: "Our data and tech ecosystem" },
];

function DropdownMenu({
  label,
  to,
  items,
}: {
  label: string;
  to: string;
  items: { to: string; label: string; desc: string }[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouterState();
  const isActive = router.location.pathname.startsWith(to) && to !== "/";

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1 whitespace-nowrap rounded-md px-3 py-2 font-sans text-[15px] font-semibold transition-smooth ${isActive
            ? "text-primary"
            : "text-muted-foreground hover:text-foreground"
          }`}
      >
        {label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 w-64 overflow-hidden rounded-xl border border-border bg-background shadow-elevated">
          <div className="p-2">
            {items.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="flex flex-col rounded-lg px-4 py-3 transition-smooth hover:bg-surface"
                activeProps={{ className: "flex flex-col rounded-lg px-4 py-3 bg-primary/5" }}
              >
                <span className="font-sans text-[14px] font-semibold text-foreground">{item.label}</span>
                <span className="mt-0.5 text-xs text-muted-foreground">{item.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6 py-3">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden flex-nowrap items-center gap-1 lg:flex">
          <Link
            to="/"
            className="whitespace-nowrap rounded-md px-3 py-2 font-sans text-[15px] font-semibold text-muted-foreground transition-smooth hover:text-foreground"
            activeProps={{ className: "whitespace-nowrap rounded-md px-3 py-2 font-sans text-[15px] font-semibold text-primary" }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>
          <DropdownMenu label="Company" to="/about" items={COMPANY_ITEMS} />
          <DropdownMenu label="Products" to="/products" items={PRODUCTS_ITEMS} />
          <Link
            to="/use-cases"
            className="whitespace-nowrap rounded-md px-3 py-2 font-sans text-[15px] font-semibold text-muted-foreground transition-smooth hover:text-foreground"
            activeProps={{ className: "whitespace-nowrap rounded-md px-3 py-2 font-sans text-[15px] font-semibold text-primary" }}
          >
            Use Cases
          </Link>
          <Link
            to="/careers"
            className="whitespace-nowrap rounded-md px-3 py-2 font-sans text-[15px] font-semibold text-muted-foreground transition-smooth hover:text-foreground"
            activeProps={{ className: "whitespace-nowrap rounded-md px-3 py-2 font-sans text-[15px] font-semibold text-primary" }}
          >
            Careers
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-md bg-primary px-5 py-2.5 text-[14px] font-semibold text-primary-foreground transition-smooth hover:bg-primary/90"
          >
            Book a demo
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden rounded-md p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {[
              { to: "/", label: "Home", exact: true },

              { to: "/products", label: "Products", exact: false },
              { to: "/modules", label: "↳ FarmIntelytics", exact: false },
              { to: "/mining", label: "↳ MineIntelytics", exact: false },
              { to: "/suitability", label: "↳ SuitabilityIntelytics", exact: false },
              { to: "/api-docs", label: "↳ API Documentation", exact: false },

              { to: "/about", label: "Company", exact: false },
              { to: "/partners", label: "↳ Partners", exact: false },

              { to: "/use-cases", label: "Use Cases", exact: false },
              { to: "/careers", label: "Careers", exact: false },

              { to: "/contact", label: "Book a Demo", exact: false },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 font-sans text-[15px] font-semibold text-muted-foreground hover:bg-surface hover:text-foreground"
                activeProps={{ className: "rounded-md px-3 py-2 font-sans text-[15px] font-semibold text-primary bg-surface" }}
                activeOptions={{ exact: item.exact }}
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
