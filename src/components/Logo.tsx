import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/farmintelytics-logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group flex items-center gap-3 ${className}`}>
      <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-lg bg-white transition-smooth group-hover:scale-105">
        <img
          src={logoImg}
          alt="FarmIntelytics logo"
          width={88}
          height={88}
          className="h-full w-full object-contain"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-extrabold tracking-tight text-foreground">
          Farm<span className="text-primary">Intelytics</span>
        </span>
        <span className="mt-1 font-mono text-[9px] font-bold uppercase tracking-[0.22em] text-foreground/60">
          Verified · Monitored · Connected
        </span>
      </span>
    </Link>
  );
}
