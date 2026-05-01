import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-surface/30">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            The operating system for agricultural intelligence , combining biometrics, geospatial
            data, payments and AI into one verified source of truth.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Platform
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/modules" className="text-foreground/80 hover:text-primary">Modules</Link></li>
            <li><Link to="/crops" className="text-foreground/80 hover:text-primary">Crops</Link></li>
            <li><Link to="/monitoring" className="text-foreground/80 hover:text-primary">Monitoring</Link></li>
            <li><Link to="/services" className="text-foreground/80 hover:text-primary">Advisor & API</Link></li>
            <li><Link to="/architecture" className="text-foreground/80 hover:text-primary">Architecture</Link></li>
            <li><Link to="/use-cases" className="text-foreground/80 hover:text-primary">Use Cases</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Get in touch
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact" className="text-foreground/80 hover:text-primary">Request a demo</Link></li>
            <li><a href="mailto:hello@farmintelytics.com" className="text-foreground/80 hover:text-primary">hello@farmintelytics.com</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} FarmIntelytics. All rights reserved.</p>
          <p className="font-mono uppercase tracking-widest">Built for modern agriculture</p>
        </div>
      </div>
    </footer>
  );
}
