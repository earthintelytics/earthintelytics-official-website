import { Logo } from "./Logo";
import { CONTACT_EMAIL, PRODUCT_LINKS } from "@/lib/site";
import CREDITS from "@/lib/photoCredits.json";

/** The site footer: what we are, the products, how to reach us. */
export function Footer() {
  const ext = (href: string) => (href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {});
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid w-full max-w-[1400px] gap-8 px-6 py-12 md:grid-cols-3 lg:px-12">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">Spatial intelligence and Earth observation: assessments, research, FarmIntelytics, and platforms we build and run.</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Product</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href={PRODUCT_LINKS.farmintelytics} {...ext(PRODUCT_LINKS.farmintelytics)} className="text-muted-foreground hover:text-foreground">FarmIntelytics</a></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Contact</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href={`mailto:${CONTACT_EMAIL}`} className="text-muted-foreground hover:text-foreground">{CONTACT_EMAIL}</a></li>
            <li><a href="/about" className="text-muted-foreground hover:text-foreground">About us</a></li>
            <li><a href="/contact" className="text-muted-foreground hover:text-foreground">Contact us</a></li>
            <li><a href="/use-cases" className="text-muted-foreground hover:text-foreground">Use cases</a></li>
            <li><a href="/research" className="text-muted-foreground hover:text-foreground">Research and studies</a></li>
            <li><a href="/consultancy" className="text-muted-foreground hover:text-foreground">Consultancy and research</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto w-full max-w-[1400px] px-6 py-5 text-xs lg:px-12 text-muted-foreground space-y-2">
          <p>© {new Date().getFullYear()} Earthintelytics. All rights reserved.</p>
          <details>
            <summary className="cursor-pointer">Photo credits</summary>
            <ul className="mt-2 space-y-1">
              {Object.values(CREDITS as Record<string, { title: string; author: string; licence: string; source: string }>).map((c) => (
                <li key={c.title}><a href={c.source} target="_blank" rel="noreferrer" className="underline">{c.title}</a> · {c.author || "Wikimedia Commons"} · {c.licence}</li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </footer>
  );
}
