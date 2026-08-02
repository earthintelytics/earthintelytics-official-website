import heroBg from "@/assets/real/adv-program.jpg";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Cpu, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners & Data Providers | EarthIntelytics" },
      {
        name: "description",
        content:
          "EarthIntelytics is powered by industry-leading open source satellite constellations and global data providers.",
      },
    ],
  }),
  component: PartnersPage,
});

const DATA_PROVIDERS = [
  {
    name: "Copernicus Sentinel (ESA)",
    type: "Optical & Radar Satellites",
    desc: "Provides our baseline multi-spectral optical data and C-band Synthetic Aperture Radar (SAR) imagery for continuous global monitoring.",
    logoUrl: "/partners/copernicus.svg",
  },
  {
    name: "Landsat (USGS/NASA)",
    type: "Multi-Spectral Optical",
    desc: "Decades of historical archive and continuous medium-resolution thermal and multi-spectral imagery for baseline climate models.",
    logoUrl: "/partners/usgs.svg",
  },
  {
    name: "FAO GAEZ",
    type: "Suitability Indices",
    desc: "Global Agro-Ecological Zones framework providing the baseline models for our crop suitability and climate adaptation algorithms.",
    logoUrl: "/partners/fao.svg",
  },
  {
    name: "OpenStreetMap",
    type: "Vector Infrastructure",
    desc: "Open source community-driven mapping data providing the foundational road, building, and hydrology vectors for our dashboards.",
    logoUrl: "/partners/osm.svg",
  },
];

const TECH_PARTNERS = [
  {
    name: "IoT Sensor Grids",
    type: "Ground Truth Hardware",
    desc: "Integrated weather stations and soil moisture probes that stream live environmental data to calibrate our orbital models.",
    icon: Cpu,
  },
  {
    name: "Cloud Infrastructure Partners",
    type: "Secure Processing",
    desc: "High-performance edge and cloud computing that processes terabytes of multi-spectral data securely.",
    icon: ShieldCheck,
  },
];

function PartnersPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-cover bg-center border-b border-border" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url(${heroBg})` }}>
        <div className="mx-auto max-w-7xl px-6 py-10 md:py-8 md:py-10 md:py-8 md:py-10">
          <Reveal>
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.35em] text-primary">
              The Ecosystem
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="max-w-4xl font-display text-4xl sm:text-5xl font-extrabold leading-[0.92] tracking-tight text-white md:text-7xl">
              Powered by the world's <span className="text-primary">best data.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-2xl text-lg font-medium leading-normal text-white/80">
              Our platform ingests feeds from the world’s leading satellite constellations, open data frameworks, and hardware manufacturers. We do the heavy lifting of fusing this data so you don't have to.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-10 md:py-8 md:py-10 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Data Providers"
            title="Satellite & Open Data Partners"
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {DATA_PROVIDERS.map((partner, i) => {
              return (
                <Reveal
                  key={partner.name}
                  delay={i * 100}
                  className="flex flex-col sm:flex-row gap-6 rounded-2xl bg-white p-8 border border-border transition-all hover:-translate-y-1 "
                >
                  <div className="flex h-20 w-24 shrink-0 items-center justify-center overflow-hidden">
                    <img src={partner.logoUrl} alt={partner.name} className="h-full w-full object-contain mix-blend-multiply drop-shadow-sm" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-extrabold text-slate-900">
                      {partner.name}
                    </h3>
                    <p className="mt-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#009688]">
                      {partner.type}
                    </p>
                    <p className="mt-4 text-[15px] leading-normal text-slate-600 font-medium">
                      {partner.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-8 md:py-10 border-t border-border bg-surface/40">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Hardware & Compute"
            title="Technology Integrations"
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {TECH_PARTNERS.map((partner, i) => {
              const Icon = partner.icon;
              return (
                <Reveal
                  key={partner.name}
                  delay={i * 100}
                  className="flex gap-6 rounded-2xl border border-border bg-background p-8 transition-smooth hover:border-primary/40 shadow-sm"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {partner.name}
                    </h3>
                    <p className="mt-1 font-mono text-xs font-bold uppercase text-primary">
                      {partner.type}
                    </p>
                    <p className="mt-4 text-sm leading-normal text-muted-foreground">
                      {partner.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
