import heroBg from "@/assets/real/drone-field.jpg";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import {
  Utensils,
  Droplets,
  Home,
  Sprout,
  HardHat,
  Trees,
  Mountain,
} from "lucide-react";
import susCarbon from "@/assets/real/sus-carbon.jpg";
import susWater from "@/assets/real/sus-water.jpg";
import susClimate from "@/assets/real/sus-climate.jpg";
import susSoil from "@/assets/real/sus-soil.jpg";
import deployCloud from "@/assets/real/deploy-cloud.jpg";
import deployOnprem from "@/assets/real/deploy-onprem.jpg";
import deployMobile from "@/assets/real/deploy-mobile.jpg";

export const Route = createFileRoute("/use-cases")({
  head: () => ({
    meta: [
      { title: "Use Cases | EarthIntelytics" },
      {
        name: "description",
        content:
          "Explore how defense-grade spatial intelligence powers restaurant suitability, flood planning, resettlement mapping, crop planning, and infrastructure development.",
      },
    ],
  }),
  component: UseCasesPage,
});

const USE_CASES = [
  {
    icon: Utensils,
    title: "Restaurant Suitability",
    desc: "Evaluate foot traffic patterns, demographic overlays, and spatial intelligence to pinpoint optimal high-yield restaurant locations.",
  },
  {
    icon: Droplets,
    title: "Flood Planning",
    desc: "Simulate hydrological dynamics and identify vulnerable flood zones using high-resolution topographical data and climate models.",
  },
  {
    icon: Home,
    title: "Resettlement Mapping",
    desc: "Identify secure, sustainable zones for population resettlement using multi-criteria environmental and infrastructural suitability scoring.",
  },
  {
    icon: Sprout,
    title: "Crop Planning",
    desc: "Optimize agricultural yield by analyzing soil composition, historical climate data, and water availability across vast vegetative zones.",
  },
  {
    icon: HardHat,
    title: "Infrastructure Development",
    desc: "Assess terrain stability, elevation constraints, and environmental impact for large-scale energy, transportation, and industrial projects.",
  },
  {
    icon: Trees,
    title: "Vegetative Intelligence",
    desc: "Deploy FarmIntelytics for extensive agriculture monitoring, multi-spectral biomass tracking, and global food security analysis.",
  },
  {
    icon: Mountain,
    title: "Subsurface Intelligence",
    desc: "Utilize MineIntelytics for precise topographical displacement mapping, surface geology anomaly detection, and geofenced perimeter enforcement.",
  },
];

const SUSTAIN = [
  {
    img: susCarbon,
    eyebrow: "Carbon",
    title: "GHG & Carbon Monitoring",
    desc: "Quantify CO₂e from inputs, machinery and land use. Audit-grade reports ready for credit markets and ESG disclosure.",
  },
  {
    img: susWater,
    eyebrow: "Water",
    title: "FAO Water Efficiency Model",
    desc: "Integrated FAO crop-water and evapotranspiration models compute water productivity per hectare in real time.",
  },
  {
    img: susClimate,
    eyebrow: "Climate",
    title: "Climate Modelling",
    desc: "Localised forecasts, rainfall variability and drought-risk indices help farms adapt seasons before they begin.",
  },
  {
    img: susSoil,
    eyebrow: "Land",
    title: "Global Sustainability Models",
    desc: "Track land-use change, biodiversity proxies and regenerative-practice adoption against global frameworks.",
  },
];

const DEPLOY = [
  { img: deployCloud, title: "FarmIntelytics Cloud", desc: "Hosted, managed and updated by us. Spin up a tenant in days." },
  { img: deployOnprem, title: "On-Premise / Local Server", desc: "Sovereign deployment for governments and large agribusinesses. Your data, your hardware." },
  { img: deployMobile, title: "Mobile Application Suite", desc: "Field officer, supervisor and farmer apps - offline-first, low-bandwidth ready." },
];

function UseCasesPage() {
  return (
    <PageShell>
      {/* Hero section */}
      <section className="relative overflow-hidden bg-cover bg-center text-white" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url(${heroBg})` }}>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#009688]/20 via-transparent to-transparent opacity-50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-8 md:py-10 md:py-8 md:py-10 z-10">
          <Reveal>
            <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-[#009688] mb-4">
              Intelligence Applications
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="max-w-4xl font-display text-4xl sm:text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Solve complex spatial <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009688] to-emerald-400">challenges.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-2xl text-lg font-medium leading-normal text-slate-300 md:text-xl">
              From commercial site selection to disaster mitigation, EarthIntelytics provides the verified ground truth required for mission-critical operations and global ESG compliance.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Grid section */}
      <section className="py-10 md:py-8 md:py-10 bg-background border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Global Capabilities"
            title="Operational Use Cases"
            description="Our multi-spectral satellite constellations and autonomous telemetry systems power intelligence across diverse sectors."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {USE_CASES.map((uc, i) => {
              const Icon = uc.icon;
              return (
                <Reveal
                  key={uc.title}
                  delay={i * 100}
                  className="group rounded-xl border border-border bg-surface p-8 transition-smooth hover:border-[#009688]/40 hover:shadow-elevated"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#009688]/10 text-[#009688] mb-6 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground group-hover:text-[#009688] transition-colors">
                    {uc.title}
                  </h3>
                  <p className="mt-4 text-sm leading-normal text-muted-foreground">
                    {uc.desc}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ESG Section */}
      <section className="py-10 md:py-8 md:py-10 bg-surface/40 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="ESG & Verification"
            title="Sustainability Modeling"
            description="Fusing AI, climate science, and global compliance standards to measure outcomes accurately."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SUSTAIN.map((s, i) => (
              <Reveal
                key={s.title}
                delay={i * 100}
                className="group overflow-hidden rounded-xl border border-border bg-card transition-smooth hover:border-[#009688]/40 hover:shadow-elevated"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={s.img} alt={s.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="p-6 relative">
                  <span className="font-mono text-[9px] font-black uppercase tracking-wider text-[#009688]">{s.eyebrow}</span>
                  <h4 className="mt-2 font-sans text-[16px] font-bold text-foreground">{s.title}</h4>
                  <p className="mt-2 text-xs text-muted-foreground leading-normal">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Deployments Section */}
      <section className="py-10 md:py-8 md:py-10 bg-background border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Architecture"
            title="Global Deployments"
            description="Deployed exactly where and how your organization requires security."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {DEPLOY.map((d, i) => (
              <Reveal
                key={d.title}
                delay={i * 100}
                className="rounded-xl border border-border bg-card p-6 transition-smooth hover:border-[#009688]/40 hover:shadow-elevated"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg mb-6">
                  <img src={d.img} alt={d.title} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
                <h4 className="font-sans text-[18px] font-bold text-foreground">{d.title}</h4>
                <p className="mt-3 text-sm text-muted-foreground leading-normal">{d.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
