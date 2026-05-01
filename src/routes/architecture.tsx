import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { Smartphone, Cpu, Database, Layers } from "lucide-react";
import archCollection from "@/assets/real/arch-collection.jpg";
import archIntelligence from "@/assets/real/arch-intelligence.jpg";
import archCore from "@/assets/real/arch-core.jpg";
import archExperience from "@/assets/real/arch-experience.jpg";

export const Route = createFileRoute("/architecture")({
  head: () => ({
    meta: [
      { title: "Architecture · FarmIntelytics" },
      {
        name: "description",
        content:
          "A four-layer architecture: collection, intelligence, core systems and experience , built cloud-native, multi-tenant, offline-capable.",
      },
      { property: "og:title", content: "FarmIntelytics Platform Architecture" },
      {
        property: "og:description",
        content: "Four-layer cloud-native architecture for agricultural intelligence at scale.",
      },
      { property: "og:image", content: archCore },
    ],
  }),
  component: ArchitecturePage,
});

const LAYERS = [
  {
    n: "01",
    icon: Smartphone,
    label: "Data Collection",
    tagline: "Capture every signal from the field.",
    items: ["Mobile apps", "Biometrics", "GPS / Location", "Drones", "Satellites", "IoT sensors"],
    img: archCollection,
  },
  {
    n: "02",
    icon: Cpu,
    label: "Intelligence Engine",
    tagline: "Turn raw data into verified decisions.",
    items: ["AI / ML models", "Geospatial analytics", "Fraud detection", "Predictive systems", "Computer vision"],
    img: archIntelligence,
  },
  {
    n: "03",
    icon: Database,
    label: "Core Systems",
    tagline: "Run the operational backbone.",
    items: ["Workforce", "Farm operations", "Payments & wallets", "Logistics", "Monitoring & alerts"],
    img: archCore,
  },
  {
    n: "04",
    icon: Layers,
    label: "Experience Layer",
    tagline: "Deliver the right view to every role.",
    items: ["Executive dashboards", "Manager portals", "Farmer apps", "Reports & exports", "Real-time alerts"],
    img: archExperience,
  },
];

const PRINCIPLES = [
  { k: "Cloud-native", v: "Built on scalable, managed infrastructure with auto-failover." },
  { k: "Multi-tenant", v: "Secure isolation per organisation, region or program." },
  { k: "Offline-capable", v: "Field-first apps continue working with no signal, sync later." },
  { k: "API-first", v: "Every module exposes APIs for integration with ERPs, banks and gov systems." },
  { k: "Audit-grade", v: "Immutable activity ledger for compliance and investigation." },
  { k: "Modular", v: "Adopt one module or all twelve, pricing follows usage." },
];

function ArchitecturePage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground text-background">
        <div className="absolute inset-0 opacity-25">
          <img src={archIntelligence} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/85 to-foreground" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-36">
          <Reveal>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.35em] text-primary-glow">
              Under the hood
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-5 max-w-4xl font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] md:text-7xl">
              A four-layer system,<br />
              <span className="text-primary-glow">built for scale.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-7 max-w-2xl text-lg font-medium leading-relaxed text-background/80 md:text-xl">
              From sensor to dashboard, every layer is designed to run reliably across rural
              connectivity, multiple organisations and millions of records.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Layers , bold image-led with massive numbers */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-20 md:space-y-32">
            {LAYERS.map(({ n, icon: Icon, label, tagline, items, img }, i) => (
              <Reveal key={label} delay={i * 100}>
                <div className="grid items-center gap-10 md:grid-cols-12 md:gap-14">
                  {/* Image */}
                  <div className={`md:col-span-7 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                    <div className="group relative overflow-hidden rounded-2xl border border-border shadow-elevated">
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={img}
                          alt={label}
                          loading="lazy"
                          width={1600}
                          height={1000}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute right-5 top-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-background/95 text-primary shadow-card backdrop-blur">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-5">
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-7xl font-extrabold leading-none tracking-[-0.06em] text-primary md:text-8xl">
                        {n}
                      </span>
                      <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-foreground/50">
                        Layer
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.04em] text-foreground md:text-6xl">
                      {label}
                    </h3>
                    <p className="mt-5 text-lg font-semibold text-foreground/75 md:text-xl">
                      {tagline}
                    </p>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {items.map((it) => (
                        <span
                          key={it}
                          className="rounded-md border border-border bg-surface px-3 py-1.5 font-display text-xs font-bold text-foreground/80"
                        >
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Principles , bold dark band */}
      <section className="border-t border-border bg-foreground py-24 text-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.35em] text-primary-glow">
              Engineering principles
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-[-0.04em] text-background md:text-6xl">
              Designed for the realities of the field.
            </h2>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-background/10 bg-background/10 md:grid-cols-2 lg:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <Reveal
                key={p.k}
                delay={(i % 3) * 100}
                className="group bg-foreground p-8 transition-smooth hover:bg-background/5"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs font-bold text-primary-glow">0{i + 1}</span>
                  <h3 className="font-display text-xl font-extrabold tracking-[-0.02em] text-background md:text-2xl">
                    {p.k}
                  </h3>
                </div>
                <p className="mt-4 text-sm font-medium leading-relaxed text-background/70">
                  {p.v}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
