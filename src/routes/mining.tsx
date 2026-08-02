import heroBg from "@/assets/real/hero-mining.jpeg";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import {
  Compass,
  Layers,
  ShieldAlert,
  Activity,
  Fingerprint,
  HardHat,
  ChevronRight,
} from "lucide-react";
import satImg from "@/assets/real/ndvi.jpg";
import controlImg from "@/assets/real/mon-controlroom.jpg";

export const Route = createFileRoute("/mining")({
  head: () => ({
    meta: [
      { title: "MineIntelytics | EarthIntelytics Mining Intelligence" },
      {
        name: "description",
        content:
          "MineIntelytics provides active pit change detection, mineral mapping, tailings dam stability monitoring, worker biometrics, and ESG compliance.",
      },
      { property: "og:title", content: "MineIntelytics, Mining Operations Suite" },
      {
        property: "og:description",
        content:
          "Bring precision and safety to mining operations. Track excavation, tailings dams, and logistics networks in real time.",
      },
      { property: "og:image", content: satImg },
    ],
  }),
  component: MiningPage,
});

const CAPABILITIES = [
  {
    icon: Compass,
    title: "Mineral & Ore Mapping",
    desc: "Multi-spectral and hyperspectral orbital bands analyze surface geology, identify target anomalies, and optimize exploration fields.",
  },
  {
    icon: Layers,
    title: "Pit & Change Detection",
    desc: "Active-radar (SAR) and high-resolution optical comparisons measure volumetric changes in open pits, stockpiles, and waste dumps.",
  },
  {
    icon: ShieldAlert,
    title: "Tailings Dam Monitoring",
    desc: "Continuous millimeter-level displacement tracking and structural health assessments of tailings dams to mitigate hazards.",
  },
  {
    icon: HardHat,
    title: "Worker Safety & Biometrics",
    desc: "Integrate shift clock-in with biometrics, and verify personnel location against active blast zones or restricted geofences.",
  },
];

const WORKFLOW = [
  {
    step: "01",
    title: "Orbital Acquisition",
    desc: "Tasking of high-frequency SAR and optical constellations over your mine lease coordinates.",
  },
  {
    step: "02",
    title: "Change Extraction",
    desc: "AI pipelines filter atmospheric noise and extract exact surface displacement or mineral variations.",
  },
  {
    step: "03",
    title: "Operational Alerting",
    desc: "Real-time SMS and dashboard triggers flag structural issues, safety breaches, or logistical delays.",
  },
];

function MiningPage() {
  return (
    <PageShell>
      {/* Hero section, white background */}
      <section className="relative overflow-hidden bg-cover bg-center border-b border-border" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url(${heroBg})` }}>
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-12">
          <Reveal>
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.35em] text-primary">
              MineIntelytics
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="max-w-4xl font-display text-4xl sm:text-5xl font-extrabold leading-[0.92] tracking-tight text-white md:text-7xl lg:text-[5.5rem]">
              Precision intelligence{" "}
              <span className="text-primary">for mining operations.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-2xl text-lg font-medium leading-normal text-white/80">
              MineIntelytics unifies radar displacement tracking, multispectral geology mapping, and biometric security into a single source of truth for mining operations worldwide.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-4 text-sm font-bold text-primary-foreground transition-smooth hover:bg-primary/90"
              >
                Request Mining Demo <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-md border border-transparent bg-white px-7 py-4 text-sm font-bold text-black transition-smooth hover:bg-white/90"
              >
                View All Products
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Core Features"
            title="Smarter exploration. Safer operations."
            description="MineIntelytics connects remote sensing intelligence with active site safety systems, allowing operators to monitor structural hazards, excavation volumes, and site perimeters simultaneously."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {CAPABILITIES.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <Reveal
                  key={cap.title}
                  delay={i * 100}
                  className="group rounded-xl border border-border bg-surface p-8 transition-smooth hover:border-primary/40 hover:shadow-glow"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {cap.title}
                  </h3>
                  <p className="mt-4 text-sm leading-normal text-muted-foreground">
                    {cap.desc}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visual showcase */}
      <section className="py-16 border-t border-border bg-surface/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-5 md:items-center">
            <Reveal className="md:col-span-2">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-primary">
                Continuous Oversight
              </span>
              <h2 className="mt-4 font-display text-4xl font-extrabold text-foreground leading-tight">
                Your entire mining operation, synchronized.
              </h2>
              <p className="mt-6 text-muted-foreground leading-normal">
                Connect ground-based safety devices, hauling vehicle logs, and multi-sensor satellite indices in real time. Safeguard workers, optimize yield, and assure compliance instantly.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Millimeter accuracy displacement alerts",
                  "Blast zone geofence synchronization",
                  "Automated volume change reports",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-3 text-sm text-foreground/80">
                    <Activity className="h-4 w-4 text-primary shrink-0" />
                    {t}
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120} className="md:col-span-3">
              <div className="overflow-hidden rounded-xl border border-border shadow-elevated">
                <img
                  src={controlImg}
                  alt="MineIntelytics control room showing multi-satellite feeds, boundary geofencing and metrics"
                  loading="lazy"
                  className="w-full object-cover aspect-video"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-16 bg-background border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="The Workflow"
            title="From signal to action"
            description="Our end-to-end processing pipeline ensures you receive actionable insights directly into your mine planning systems."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {WORKFLOW.map((flow, i) => (
              <Reveal
                key={flow.step}
                delay={i * 120}
                className="relative rounded-xl border border-border bg-surface p-8"
              >
                <span className="absolute right-6 top-6 font-mono text-3xl font-bold text-primary/15">
                  {flow.step}
                </span>
                <h3 className="font-display text-lg font-bold text-foreground pr-10">
                  {flow.title}
                </h3>
                <p className="mt-4 text-sm leading-normal text-muted-foreground">
                  {flow.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-surface/30 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <SectionHeading
            title="What our partners say"
            description="See how MineIntelytics is transforming operations on the ground."
            align="center"
          />
          <div className="mt-12 relative flex overflow-x-hidden">
            <div className="animate-marquee whitespace-nowrap flex items-stretch gap-6 sm:gap-8 pl-6 sm:pl-8 py-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-[300px] md:w-[400px] shrink-0 rounded-2xl border border-border bg-card p-6 shadow-sm relative isolate whitespace-normal flex flex-col justify-between">
                  <span className="absolute top-4 left-4 text-5xl text-primary/20 font-serif leading-none">"</span>
                  <p className="relative z-10 text-base font-medium text-foreground leading-relaxed italic mb-6 mt-4">
                    EarthIntelytics gave us an unprecedented view into our operational footprint. We were able to reduce surveying costs by 30% while identifying critical structural anomalies.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex shrink-0 items-center justify-center text-primary font-bold text-sm">
                      JD
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-foreground text-sm">John Doe {i + 1}</div>
                      <div className="text-xs text-muted-foreground">Operations Director, Global Mining</div>
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {[...Array(5)].map((_, i) => (
                <div key={`dup-${i}`} className="w-[300px] md:w-[400px] shrink-0 rounded-2xl border border-border bg-card p-6 shadow-sm relative isolate whitespace-normal flex flex-col justify-between">
                  <span className="absolute top-4 left-4 text-5xl text-primary/20 font-serif leading-none">"</span>
                  <p className="relative z-10 text-base font-medium text-foreground leading-relaxed italic mb-6 mt-4">
                    EarthIntelytics gave us an unprecedented view into our operational footprint. We were able to reduce surveying costs by 30% while identifying critical structural anomalies.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex shrink-0 items-center justify-center text-primary font-bold text-sm">
                      JD
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-foreground text-sm">John Doe {i + 1}</div>
                      <div className="text-xs text-muted-foreground">Operations Director, Global Mining</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-primary py-16 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h3 className="font-display text-3xl font-extrabold text-primary-foreground md:text-5xl">
            Integrate MineIntelytics today
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Reach out for pilot programs, custom satellite tasking configurations, and integration parameters.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-primary transition-smooth hover:bg-primary-foreground/90"
            >
              Talk to our mining engineers
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
