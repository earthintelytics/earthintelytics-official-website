import heroBg from "@/assets/real/hero-home.jpeg";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import {
  ArrowRight,
  Satellite,
  Brain,
  Radar,
  Globe,
  Layers,
  Shield,
  Activity,
  Leaf,
  Plane,
} from "lucide-react";
import ndviOverlayImg from "@/assets/real/ndvi-overlay.jpg";
import mineSatelliteImg from "@/assets/real/mine-satellite.png";
import heroVideo from "@/assets/real/hero-video.mp4.asset.json";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EarthIntelytics | Earth Intelligence Platform" },
      {
        name: "description",
        content:
          "EarthIntelytics unifies remote sensing, GIS, AI, and IoT sensors into verified monitoring solutions for agriculture and mining.",
      },
      { property: "og:title", content: "EarthIntelytics | Earth Intelligence Platform" },
      {
        property: "og:description",
        content:
          "From Earth observation to actionable intelligence. EarthIntelytics serves agriculture, mining, climate, and security sectors.",
      },
    ],
  }),
  component: HomePage,
});

const PRODUCTS = [
  {
    label: "Vegetative Intelligence",
    name: "FarmIntelytics",
    desc: "Global food security, biomass analysis, and multi-spectral vegetative intelligence suite, AI disease detection, and climate intelligence for farming operations.",
    to: "/modules",
    img: ndviOverlayImg,
    color: "from-emerald-950/80",
  },
  {
    label: "Subsurface Intelligence",
    name: "MineIntelytics",
    desc: "Topographical displacement mapping, anomaly detection, and secure geofenced perimeter monitoring.",
    to: "/mining",
    img: mineSatelliteImg,
    color: "from-emerald-950/80",
  },
];

const STATS = [
  { value: "10+", label: "Intelligence Products" },
  { value: "4+", label: "Sectors Served" },
  { value: "3", label: "Data Layers Fused" },
  { value: "1", label: "Unified Platform" },
];

function HomePage() {
  return (
    <PageShell>

      {/* ─── HERO ─── */}
      <section className="relative isolate overflow-hidden min-h-[90vh] flex items-center">
        {/* Animated Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center animate-ken-burns" 
          style={{ backgroundImage: `url(${heroBg})` }} 
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/30 to-black/60 pointer-events-none" />

        {/* Animated Satellite */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="animate-orbit absolute top-0 left-0 text-white/40 drop-shadow-lg">
            <Satellite className="w-24 h-24" strokeWidth={1} />
          </div>
        </div>

        {/* Animated Drone */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="animate-drone absolute top-0 left-0 text-white/50 drop-shadow-lg">
            <Plane className="w-16 h-16 -scale-x-100" strokeWidth={1.5} />
          </div>
        </div>

        {/* Subtle geometric wireframe globe watermark in background */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 opacity-[0.05] text-[#009688] select-none pointer-events-none hidden md:block z-0">
          <svg
            width="600"
            height="600"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="1" />
            <path d="M15 35 H85" stroke="currentColor" strokeWidth="0.8" />
            <path d="M8 50 H92" stroke="currentColor" strokeWidth="0.8" />
            <path d="M15 65 H85" stroke="currentColor" strokeWidth="0.8" />
            <path d="M50 8 V92" stroke="currentColor" strokeWidth="0.8" />
            <path d="M50 8 C25 25, 25 75, 50 92" stroke="currentColor" strokeWidth="0.8" />
            <path d="M50 8 C75 25, 75 75, 50 92" stroke="currentColor" strokeWidth="0.8" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-8 md:py-10 md:py-44 w-full">
          <Reveal delay={100}>
            <h1 className="max-w-5xl font-sans text-4xl sm:text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              See Earth.{" "}
              <span className="text-[#009688]">Understand Change.</span>
              <br />
              Make Better Decisions.
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-8 max-w-xl text-lg font-medium leading-normal text-white/80 md:text-xl">
              EarthIntelytics provides enterprise-grade spatial intelligence, fusing satellite constellations, autonomous drone networks, and IoT telemetry to power sustainable agriculture, responsible mining, ESG reporting, and global infrastructure development.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-md bg-[#009688] px-7 py-4 text-sm font-bold text-white transition-all hover:bg-[#00796B]"
              >
                Explore Products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-transparent bg-white px-7 py-4 text-sm font-bold text-black transition-all hover:bg-white/90"
              >
                Book a Demo
              </Link>
            </div>
          </Reveal>

          {/* Stats row */}
          <Reveal delay={400}>
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 max-w-2xl">
              {STATS.map((s) => (
                <div key={s.label} className="border-l-2 border-[#009688]/20 pl-4">
                  <div className="font-sans text-3xl font-extrabold text-white">{s.value}</div>
                  <div className="mt-1 font-sans text-xs text-white/80 uppercase tracking-wider font-semibold">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>


      {/* ─── TWO PLATFORMS. ONE PARTNER. ─── */}
      <section className="py-10 md:py-8 md:py-10 bg-surface/30 border-t border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              title="Two Platforms. One Command Center."
              description="Deploy actionable intelligence across vast agricultural estates, critical infrastructure, and mining sites. We unify multi-spectral orbital data and real-time telemetry to drive sustainability, ESG compliance, and operational excellence."
            />
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {PRODUCTS.map(({ label, name, desc, to, img, color }, i) => (
              <Reveal
                key={name}
                delay={i * 80}
                className="group flex flex-col rounded-2xl border border-border overflow-hidden bg-card hover:shadow-glow transition-smooth"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={img}
                    alt={name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${color} via-transparent to-transparent`} />
                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <span className="inline-block rounded-full bg-background px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-wider text-foreground mb-3 shadow-sm">
                      {label}
                    </span>
                    <h3 className="font-sans text-3xl font-extrabold text-white">{name}</h3>
                    <p className="mt-3 text-sm text-white/90 max-w-sm leading-normal">{desc}</p>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <p className="text-sm text-muted-foreground leading-normal">
                    {name === "FarmIntelytics"
                      ? "Execute biomass intelligence operations over vast vegetative zones, calculate carbon sequestration, and forecast global food security using advanced spatial models."
                      : "Monitor topographical displacement, identify high-grade surface geology anomalies, track asset structural integrity, and enforce secure geofenced perimeters."}
                  </p>
                  <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                    <Link
                      to={to}
                      className="inline-flex items-center gap-2 font-sans text-[15px] font-semibold text-primary transition-all hover:gap-3"
                    >
                      Explore {name} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── METRICS & INTERACTIVE DISPLAY ─── */}
      <section className="py-10 md:py-8 md:py-10 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <Reveal className="space-y-6">
              <h2 className="font-sans text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Mission success depends on verified ground truth.
              </h2>
              <p className="text-base text-muted-foreground leading-normal">
                EarthIntelytics delivers a comprehensive, 360-degree operational picture of your asset's spatial, topographical, and environmental status. Telemetry is streamed instantly to your command center, autonomously flagging anomalies and generating intelligence reports.
              </p>
              <div className="pt-4">
                <Link
                  to="/modules"
                  className="inline-flex items-center gap-2 rounded-md bg-[#009688] px-6 py-3.5 text-sm font-bold text-white transition-smooth hover:bg-[#00796B]"
                >
                  Explore Global Intelligence Modules <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={120} className="relative rounded-2xl border border-border bg-surface p-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-30" />
              <div className="relative z-10 grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                  <span className="font-mono text-xs font-bold text-primary uppercase tracking-wider">Global Intelligence</span>
                  <div className="mt-3 text-4xl font-black text-foreground">30%</div>
                  <div className="mt-1 text-xs text-muted-foreground">Reduction in operational overhead</div>
                </div>
                <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                  <span className="font-mono text-xs font-bold text-primary uppercase tracking-wider">Asset Monitoring</span>
                  <div className="mt-3 text-4xl font-black text-foreground">+20%</div>
                  <div className="mt-1 text-xs text-muted-foreground">Increase in anomaly detection accuracy</div>
                </div>
                <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                  <span className="font-mono text-xs font-bold text-primary uppercase tracking-wider">Subsurface Intel</span>
                  <div className="mt-3 text-4xl font-black text-foreground">98.5%</div>
                  <div className="mt-1 text-xs text-muted-foreground">Topographical displacement precision</div>
                </div>
                <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                  <span className="font-mono text-xs font-bold text-primary uppercase tracking-wider">Perimeter Security</span>
                  <div className="mt-3 text-4xl font-black text-foreground">Zero</div>
                  <div className="mt-1 text-xs text-muted-foreground">Undetected geofence breaches</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── WHY EARTHINTELYTICS ─── */}
      <section className="border-t border-border py-10 md:py-8 md:py-10 bg-surface/20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              title="The intelligence layer for operations."
              description="Conventional tools solve single points. EarthIntelytics integrates space-level insight with ground-level verification so nothing happens in the dark."
              align="center"
            />
          </Reveal>

          <div className="mt-8 grid gap-px border border-border rounded-2xl overflow-hidden md:grid-cols-3 bg-border">
            {[
              { icon: Satellite, title: "Sensor Fusion", desc: "Satellite data, SAR active-radar, drone orthomosaics, and IoT sensor streams combined into one verified monitoring platform." },
              { icon: Activity, title: "In-Season Insights", desc: "Get real-time automated notifications regarding crop disease vectors, volume change, or geofence violations." },
              { icon: Leaf, title: "Verifiable & Auditable", desc: "Every metric gathered is timestamped, geo-tagged, and biometrically confirmed to provide complete compliance security." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <Reveal
                key={title}
                delay={i * 100}
                className="flex flex-col gap-5 bg-card p-10 transition-smooth hover:bg-surface/85"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-sans text-xl font-bold text-foreground">{title}</h3>
                <p className="text-sm leading-normal text-muted-foreground">{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-10 md:py-8 md:py-10 bg-background">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <Reveal>
            <SectionHeading
              title="What our partners say"
              description="See how EarthIntelytics is transforming operations on the ground."
              align="center"
            />
          </Reveal>
          
          <div className="mt-12 relative flex overflow-x-hidden">
            <div className="animate-marquee whitespace-nowrap flex items-stretch gap-6 sm:gap-8 pl-6 sm:pl-8 py-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-[300px] md:w-[400px] shrink-0 rounded-2xl border border-border bg-surface p-6 shadow-sm relative isolate whitespace-normal flex flex-col justify-between">
                  <span className="absolute top-4 left-4 text-5xl text-primary/20 font-serif leading-none">"</span>
                  <p className="relative z-10 text-base font-medium text-foreground leading-relaxed italic mb-6 mt-4">
                    EarthIntelytics gave us an unprecedented view into our operational footprint. We were able to reduce surveying costs by 30% while identifying critical anomalies.
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
                <div key={`dup-${i}`} className="w-[300px] md:w-[400px] shrink-0 rounded-2xl border border-border bg-surface p-6 shadow-sm relative isolate whitespace-normal flex flex-col justify-between">
                  <span className="absolute top-4 left-4 text-5xl text-primary/20 font-serif leading-none">"</span>
                  <p className="relative z-10 text-base font-medium text-foreground leading-relaxed italic mb-6 mt-4">
                    EarthIntelytics gave us an unprecedented view into our operational footprint. We were able to reduce surveying costs by 30% while identifying critical anomalies.
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

      {/* ─── CLIENTS LOGO MARQUEE ─── */}
      <section className="py-8 md:py-10 bg-surface/50 border-t border-border overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground mb-10">
            Trusted by organizations worldwide
          </p>
          
          <div className="relative flex overflow-x-hidden">
            <div className="animate-marquee whitespace-nowrap flex items-center gap-12 sm:gap-24 pl-12 sm:pl-24">
              {[...Array(6)].map((_, i) => (
                <img key={`okomu-${i}`} src="/clients/okomu.png" alt="Okomu Oil Plantation" className="h-12 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-smooth" />
              ))}
              
              {/* Duplicate set for seamless loop */}
              {[...Array(6)].map((_, i) => (
                <img key={`okomu-dup-${i}`} src="/clients/okomu.png" alt="Okomu Oil Plantation" className="h-12 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-smooth" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-[#0D1B2A] py-10 md:py-8 md:py-10">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h2 className="font-sans text-4xl font-extrabold text-white md:text-5xl">
              Ready to see Earth intelligence in action?
            </h2>
            <p className="mt-5 text-white/60 md:text-lg">
              Book a demo and we'll show you exactly what EarthIntelytics can do for your operations.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-[#009688] px-8 py-4 font-sans text-sm font-bold text-white transition-all hover:bg-[#00796B]"
              >
                Book a Demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-8 py-4 font-sans text-sm font-bold text-white transition-all hover:bg-white/5"
              >
                Who We Are
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
