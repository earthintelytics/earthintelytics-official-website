import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-surface/30">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            The Earth intelligence platform, combining remote sensing, GIS, and AI into one verified source of truth for agriculture and mining monitoring operations.
          </p>
        </div>

        <div>
          <h4 className="font-sans text-lg font-bold text-foreground">Platform</h4>
          <ul className="mt-4 space-y-3 text-base">
            <li><Link to="/modules" className="text-muted-foreground hover:text-primary transition-colors">FarmIntelytics</Link></li>
            <li><Link to="/mining" className="text-muted-foreground hover:text-primary transition-colors">MineIntelytics</Link></li>
            <li><Link to="/suitability" className="text-muted-foreground hover:text-primary transition-colors">SuitabilityIntelytics</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-lg font-bold text-foreground">Use Cases</h4>
          <ul className="mt-4 space-y-3 text-base">
            <li><Link to="/use-cases" className="text-muted-foreground hover:text-primary transition-colors">Agribusiness & Plantations</Link></li>
            <li><Link to="/use-cases" className="text-muted-foreground hover:text-primary transition-colors">Government Programs</Link></li>
            <li><Link to="/use-cases" className="text-muted-foreground hover:text-primary transition-colors">NGOs & Development</Link></li>
            <li><Link to="/use-cases" className="text-muted-foreground hover:text-primary transition-colors">Farmer Cooperatives</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-lg font-bold text-foreground">Company</h4>
          <ul className="mt-4 space-y-3 text-base">
            <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
            <li><Link to="/partners" className="text-muted-foreground hover:text-primary transition-colors">Partners</Link></li>
            <li><Link to="/api-docs" className="text-muted-foreground hover:text-primary transition-colors">API Docs</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} EarthIntelytics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
