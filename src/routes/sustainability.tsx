import heroBg from "@/assets/real/sus-carbon.jpg";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ShieldCheck, Brain, Sprout, Wheat, ArrowRight } from "lucide-react";
import susSoil from "@/assets/real/sus-soil.jpg";
import susWater from "@/assets/real/sus-water.jpg";
import susClimate from "@/assets/real/sus-climate.jpg";
import susCarbon from "@/assets/real/sus-carbon.jpg";
import deployCloud from "@/assets/real/deploy-cloud.jpg";
import deployOnprem from "@/assets/real/deploy-onprem.jpg";
import deployMobile from "@/assets/real/deploy-mobile.jpg";
import disease from "@/assets/real/disease-detection.jpg";
import compliance from "@/assets/real/compliance.jpg";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Sustainability, AI & Deployment · FarmIntelytics" },
      {
        name: "description",
        content:
          "Blockchain trust, GHG & carbon monitoring, FAO water model, climate intelligence, AI detection , deployed cloud, on-prem or mobile.",
      },
      { property: "og:title", content: "FarmIntelytics , Sustainability & Intelligence" },
      { property: "og:image", content: susCarbon },
    ],
  }),
  component: SustainabilityPage,
});

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

const AI = [
  { icon: Brain, title: "AI Disease Detection", desc: "Snap a leaf, get a diagnosis. Trained for cassava, maize, cocoa, palm , works offline.", img: disease },
  { icon: Sprout, title: "AI Plant & Pod Counting", desc: "Computer vision counts plants, pods, bunches and tubers , kills ghost yields.", img: susSoil },
  { icon: Wheat, title: "AI Harvest Care", desc: "Stage-aware reminders for staples , intervene before disease, drought or pest takes a hectare.", img: susWater },
  { icon: ShieldCheck, title: "AI Fraud Detection", desc: "Anomaly models surface ghost workers, duplicated logs and impossible movements automatically.", img: compliance },
];

const DEPLOY = [
  { img: deployCloud, title: "FarmIntelytics Cloud", desc: "Hosted, managed and updated by us. Spin up a tenant in days." },
  { img: deployOnprem, title: "On-Premise / Local Server", desc: "Sovereign deployment for governments and large agribusinesses. Your data, your hardware." },
  { img: deployMobile, title: "Mobile Application Suite", desc: "Field officer, supervisor and farmer apps , offline-first, low-bandwidth ready." },
];

function SustainabilityPage() {
  return (
    <PageShell>
      {/* Hero , bold dark editorial */}
      <section className="relative overflow-hidden bg-foreground text-background">
        <div className="absolute inset-0">
          <img src={susCarbon} alt="" className="h-full w-full object-cover opacity-45" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/30" />
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-8 md:py-10 md:py-40">
          <Reveal>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.35em] text-primary-glow">
              The bigger picture
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-5 max-w-5xl font-display text-4xl sm:text-5xl font-extrabold leading-[0.92] tracking-[-0.045em] md:text-7xl lg:text-[5.5rem]">
              You think about your farm.<br />
              <span className="text-primary-glow">We scale it without costing the planet.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-7 max-w-2xl text-lg font-medium leading-normal text-background/85 md:text-xl">
              FarmIntelytics fuses AI, blockchain, climate science and global sustainability models , so growth is measured, not assumed.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Blockchain , bold split */}
      <section className="py-10 md:py-8 md:py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-6 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.35em] text-primary">Trust layer</p>
              <h2 className="mt-4 font-display text-4xl font-extrabold tracking-[-0.04em] text-foreground md:text-6xl">
                Blockchain-secured records.
              </h2>
              <p className="mt-5 text-lg font-medium text-foreground/75">
                Every biometric enrollment, geo-tagged activity, weight reading and payment is hashed onto an immutable ledger. Auditors, funders and regulators get cryptographic proof , not screenshots.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {["Immutable ledger", "Cryptographic proof", "Audit-ready", "Tamper-evident"].map((t) => (
                  <span key={t} className="rounded-md border border-border bg-surface px-3 py-1.5 font-display text-xs font-bold text-foreground/80">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:col-span-7">
              <div className="relative overflow-hidden rounded-2xl border border-border shadow-elevated">
                <img src={compliance} alt="Audit-grade compliance" loading="lazy" width={1600} height={1024} className="h-full w-full object-cover" />
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-md bg-background/95 px-3 py-2 backdrop-blur">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  <span className="font-display text-xs font-bold text-foreground">Verified on-chain</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability cards , image-led */}
      <section className="border-t border-border bg-surface/40 py-10 md:py-8 md:py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.35em] text-primary">Climate & sustainability</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-[-0.04em] text-foreground md:text-6xl">
              Clean farming, measured.
            </h2>
            <p className="mt-5 text-lg font-medium text-foreground/70">
              Productivity that ignores the environment isn't productivity. We bake global standards into daily operations.
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {SUSTAIN.map(({ img, eyebrow, title, desc }, i) => (
              <Reveal
                key={title}
                as="article"
                delay={(i % 2) * 130}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-smooth hover:border-primary/40"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={img} alt={title} loading="lazy" width={1600} height={1024} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-background/95 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-primary backdrop-blur">
                    {eyebrow}
                  </span>
                  <h3 className="absolute bottom-5 left-5 right-5 font-display text-2xl font-extrabold tracking-[-0.02em] text-background md:text-3xl">
                    {title}
                  </h3>
                </div>
                <p className="p-6 text-base font-medium leading-normal text-foreground/75">{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI Suite , bold cards with images */}
      <section className="py-10 md:py-8 md:py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.35em] text-primary">AI on the ground</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-[-0.04em] text-foreground md:text-6xl">
              Detection, counting, care.
            </h2>
            <p className="mt-5 text-lg font-medium text-foreground/70">
              Mobile-first AI models that work offline, recognise crops at a glance and shut the door on fraud.
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {AI.map(({ icon: Icon, title, desc, img }, i) => (
              <Reveal
                key={title}
                delay={i * 100}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-smooth hover:border-primary/40"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={img} alt={title} loading="lazy" width={800} height={600} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-md bg-background/95 text-primary backdrop-blur">
                    <Icon className="h-4 w-4" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-extrabold tracking-[-0.02em] text-foreground">{title}</h3>
                  <p className="mt-2 text-sm font-medium text-foreground/70">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment , large image cards */}
      <section className="border-t border-border bg-foreground py-10 md:py-8 md:py-10 text-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.35em] text-primary-glow">Deploy your way</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-[-0.04em] text-background md:text-6xl">
              Cloud, on-prem, or both.
            </h2>
            <p className="mt-5 text-lg font-medium text-background/75">
              Customised per organisation. Branded apps. Configurable workflows. You choose where your data lives.
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {DEPLOY.map(({ img, title, desc }, i) => (
              <Reveal
                key={title}
                as="article"
                delay={i * 130}
                className="group relative overflow-hidden rounded-2xl border border-background/10 bg-background/5 transition-smooth hover:border-primary-glow/50"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={img} alt={title} loading="lazy" width={1200} height={1500} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <h3 className="font-display text-2xl font-extrabold tracking-[-0.02em] text-background md:text-3xl">{title}</h3>
                    <p className="mt-3 text-sm font-medium text-background/80">{desc}</p>
                    <div className="mt-5 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.2em] text-primary-glow">
                      Learn more <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {["White-labelled per client", "Custom workflows", "Region-specific analytics", "API-first"].map((t) => (
              <span key={t} className="rounded-full border border-background/15 bg-background/5 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-background/80">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
