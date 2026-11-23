import { Logo } from "./Logo";
import { CONTACT_EMAIL, PRODUCT_LINKS } from "@/lib/site";

/** The site footer: what we are, the products, how to reach us. */
export function Footer() {
  const ext = (href: string) => (href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {});
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">Earth-observation products, and geospatial services and consultancy, for agriculture, mining and the environment.</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Products</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href={PRODUCT_LINKS.farmintelytics} {...ext(PRODUCT_LINKS.farmintelytics)} className="text-muted-foreground hover:text-foreground">FarmIntelytics</a></li>
            <li><a href={PRODUCT_LINKS.mineintelytics} {...ext(PRODUCT_LINKS.mineintelytics)} className="text-muted-foreground hover:text-foreground">MineIntelytics</a></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Contact</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href={`mailto:${CONTACT_EMAIL}`} className="text-muted-foreground hover:text-foreground">{CONTACT_EMAIL}</a></li>
            <li><a href="/#services" className="text-muted-foreground hover:text-foreground">Services and consultancy</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-6 py-5 text-xs text-muted-foreground">© {new Date().getFullYear()} Earthintelytics. All rights reserved.</p>
      </div>
    </footer>
  );
}
