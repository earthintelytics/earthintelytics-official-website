import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group flex items-center gap-3 ${className}`}>
      <img
        src={logoImg}
        alt="EarthIntelytics Logo"
        className="h-12 w-auto object-contain transition-smooth group-hover:scale-105"
      />
    </Link>
  );
}
