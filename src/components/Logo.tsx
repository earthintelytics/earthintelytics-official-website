import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group flex items-center gap-3 ${className}`}>
      <img
        src={logoImg}
        alt="Earthintelytics"
        className="site-logo h-12 w-auto object-contain"
      />
    </Link>
  );
}
