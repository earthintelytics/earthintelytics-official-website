import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import {
  Fingerprint,
  Satellite,
  MapPin,
  Plane,
  Wallet,
  Brain,
  Truck,
  ShieldCheck,
  ArrowRight,
  Sprout,
  Leaf,
} from "lucide-react";
import heroImg from "@/assets/real/hero-farm.jpg";
import dashboardImg from "@/assets/real/dashboard.jpg";
import biometricImg from "@/assets/real/biometric-hand.jpg";
import droneImg from "@/assets/real/drone-field.jpg";
import ndviImg from "@/assets/real/ndvi-overlay.jpg";
import farmerImg from "@/assets/real/farmer-portrait.jpg";
import heroVideo from "@/assets/real/hero-video.mp4.asset.json";
import droneVideo from "@/assets/real/drone-video.mp4.asset.json";
import farmerHandsVideo from "@/assets/real/farmer-hands-video.mp4.asset.json";
import geofencingImg from "@/assets/real/geofencing.jpg";
import paymentsImg from "@/assets/real/payments.jpg";
import diseaseImg from "@/assets/real/disease-detection.jpg";
import logisticsImg from "@/assets/real/logistics.jpg";
import complianceImg from "@/assets/real/compliance.jpg";
import carbonImg from "@/assets/real/carbon-climate.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FarmIntelytics , One-stop Farm Intelligence Suite" },
      {
        name: "description",
        content:
          "FarmIntelytics unifies biometrics, geospatial intelligence, AI, payments and logistics into one verified source of truth for modern agriculture.",
      },
      { property: "og:title", content: "FarmIntelytics , Farm Intelligence Suite" },
      {
        property: "og:description",
        content:
          "Verify workers, geofence farms, monitor crops from space, automate payments, and predict yields , all in one platform.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const CAPABILITIES = [
  { icon: Fingerprint, title: "Biometric Identity", desc: "Fingerprint + facial verification ends ghost workers.", img: biometricImg },
  { icon: Satellite, title: "Geospatial Intelligence", desc: "NDVI, soil moisture and boundary tracking from orbit.", img: ndviImg },
  { icon: Plane, title: "Drone Surveillance", desc: "Live aerial inspection and high-resolution crop analysis.", img: droneImg },
  { icon: Sprout, title: "Crop AI & Advisory", desc: "Counting, disease detection and stage-aware guidance per crop.", img: farmerImg },
];

const FEATURES = [
  { icon: MapPin, title: "Geofencing", desc: "Validate every activity against farm boundaries in real time.", img: geofencingImg },
  { icon: Wallet, title: "Verified Payments", desc: "Pay only for work that biometrics and GPS confirm.", img: paymentsImg },
  { icon: Brain, title: "AI Disease Detection", desc: "Spot pests, deficiencies and outbreaks from a photo.", img: diseaseImg },
  { icon: Truck, title: "Logistics Tracking", desc: "Follow produce from field to warehouse to buyer.", img: logisticsImg },
  { icon: ShieldCheck, title: "Fraud & Compliance", desc: "Audit trails, anomaly alerts and regulatory reporting.", img: complianceImg },
  { icon: Leaf, title: "Carbon & Climate", desc: "GHG accounting, FAO water models and climate intelligence.", img: carbonImg },
];

function HomePage() {
  return (
    <PageShell>
      {/* Hero with cinematic video background */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <video
            src={heroVideo.url}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40 lg:py-52">
          <Reveal>
            <p className="mb-6 font-mono text-xs font-bold uppercase tracking-[0.35em] text-primary">
              One-stop · Farm Intelligence Suite
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="max-w-6xl font-display text-[2.75rem] font-extrabold leading-[0.92] tracking-[-0.045em] text-foreground sm:text-6xl md:text-7xl lg:text-[6.5rem]">
              We take your farm{" "}
              <span className="text-primary">digital</span>.
              <br />
              You think{" "}
              <span className="italic text-accent">harvest</span>.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-foreground/80 md:text-xl">
              FarmIntelytics unifies biometrics, satellites, AI, payments and logistics ,
              turning fragmented agriculture into one verified, monitored, data-driven system.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-smooth hover:bg-primary/90"
              >
                Book a demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/modules"
                className="inline-flex items-center gap-2 rounded-md border-2 border-foreground/20 bg-background/70 px-7 py-4 text-sm font-bold uppercase tracking-wider text-foreground backdrop-blur-md transition-smooth hover:border-primary hover:text-primary"
              >
                Explore the suite
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Marquee , bold scrolling capabilities */}
      <section className="overflow-hidden border-y border-border bg-foreground py-8">
        <div className="flex gap-12 whitespace-nowrap animate-marquee">
          {[
            "BIOMETRIC IDENTITY",
            "SATELLITE NDVI",
            "DRONE SURVEILLANCE",
            "AI DISEASE DETECTION",
            "GEOFENCED PAYMENTS",
            "CARBON & GHG",
            "FARM ADVISOR SMS",
            "API AS A SERVICE",
            "BLOCKCHAIN AUDIT",
            "YIELD PREDICTION",
          ].concat([
            "BIOMETRIC IDENTITY",
            "SATELLITE NDVI",
            "DRONE SURVEILLANCE",
            "AI DISEASE DETECTION",
            "GEOFENCED PAYMENTS",
            "CARBON & GHG",
            "FARM ADVISOR SMS",
            "API AS A SERVICE",
            "BLOCKCHAIN AUDIT",
            "YIELD PREDICTION",
          ]).map((label, i) => (
            <span
              key={`${label}-${i}`}
              className="font-display text-2xl font-extrabold tracking-tight text-background md:text-4xl"
            >
              {label}
              <span className="ml-12 text-primary">●</span>
            </span>
          ))}
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-border bg-surface/60">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-8 text-sm">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
            Solving complex problems for
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 font-display font-bold text-foreground/70">
            <span>Agribusiness</span>
            <span className="h-1 w-1 rounded-full bg-foreground/20" />
            <span>Government Programs</span>
            <span className="h-1 w-1 rounded-full bg-foreground/20" />
            <span>Cooperatives</span>
            <span className="h-1 w-1 rounded-full bg-foreground/20" />
            <span>NGOs</span>
            <span className="h-1 w-1 rounded-full bg-foreground/20" />
            <span>Banks & Insurers</span>
          </div>
        </div>
      </section>

      {/* Capabilities , image-led */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="The advantage"
            title="One platform. Every layer of the farm."
            description="Most tools solve one problem. FarmIntelytics connects identity, location, activity, payment and intelligence so nothing happens in the dark."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {CAPABILITIES.map(({ icon: Icon, title, desc, img }, i) => (
              <Reveal
                key={title}
                delay={i * 100}
                className="group relative overflow-hidden rounded-xl border border-border bg-card transition-smooth hover:border-primary/40"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={img}
                    alt={title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-background/90 text-primary backdrop-blur">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Secondary feature row , image cards */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ icon: Icon, title, desc, img }, i) => (
              <Reveal
                key={title}
                delay={i * 80}
                className="group relative overflow-hidden rounded-xl border border-border bg-card transition-smooth hover:border-primary/40"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={img}
                    alt={title}
                    loading="lazy"
                    width={1200}
                    height={750}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-md bg-background/90 text-primary backdrop-blur">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="absolute bottom-4 left-4 right-4 font-display text-lg font-extrabold tracking-tight text-background">
                    {title}
                  </h3>
                </div>
                <p className="p-5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard , large showcase */}
      <section className="border-t border-border bg-surface/40 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-5 md:items-center">
            <div className="md:col-span-2">
              <SectionHeading
                eyebrow="One pane of glass"
                title="The portal your operators will live in."
                description="Executive dashboards, field manager portals and farmer mobile apps , every role gets a tailored view of the same verified data."
              />
              <ul className="mt-8 space-y-3">
                {[
                  "Live KPIs across every farm and block",
                  "Satellite NDVI overlay with anomaly heat-map",
                  "Activity, payment and logistics feeds in one timeline",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-foreground/90">
                    <Sprout className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <Reveal delay={120} className="md:col-span-3">
              <div className="overflow-hidden rounded-xl border border-border bg-white shadow-elevated">
                <img
                  src={dashboardImg}
                  alt="FarmIntelytics dashboard with live KPIs, satellite map of farm blocks and activity feed"
                  loading="lazy"
                  width={1920}
                  height={1080}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Motion showcase , dual cinematic video */}
      <section className="relative overflow-hidden border-t border-border bg-foreground py-28 text-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <Reveal className="md:col-span-5">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.35em] text-primary-glow">
                On the ground · From the sky
              </p>
              <h2 className="mt-5 font-display text-4xl font-extrabold leading-[0.95] tracking-tight md:text-6xl">
                Built for the<br />
                <span className="text-primary-glow">real farm</span>.
              </h2>
              <p className="mt-6 max-w-md text-base font-medium text-background/75 md:text-lg">
                From a smallholder's hand to a satellite over the cooperative , every layer of
                modern agriculture, captured, verified and turned into intelligence.
              </p>
            </Reveal>

            <div className="grid gap-4 md:col-span-7 md:grid-cols-2">
              <Reveal delay={120} className="overflow-hidden rounded-xl border border-background/10">
                <div className="relative aspect-[4/5]">
                  <video
                    src={droneVideo.url}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/90 to-transparent p-5">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-primary-glow">
                      Aerial · NDVI
                    </p>
                    <p className="mt-1 font-display text-lg font-extrabold">From the sky</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={240} className="overflow-hidden rounded-xl border border-background/10 md:mt-12">
                <div className="relative aspect-[4/5]">
                  <video
                    src={farmerHandsVideo.url}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/90 to-transparent p-5">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-primary-glow">
                      Field · Crop AI
                    </p>
                    <p className="mt-1 font-display text-lg font-extrabold">On the ground</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Closed loop */}
      <section className="border-t border-border py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <div>
              <SectionHeading
                eyebrow="The closed loop"
                title="Activity. Verified. Paid."
                description="Every shift is biometrically signed in, geo-stamped to a farm boundary, validated by AI, and only then converted into wages. It's a trust infrastructure for agriculture."
              />
              <ul className="mt-8 space-y-3">
                {[
                  "No ghost workers. No fake field reports.",
                  "No payment without verified, geo-tagged work.",
                  "No mystery yields , every hectare is measured.",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-foreground/90">
                    <Sprout className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-3">
              {[
                { step: "01", k: "Biometric clock-in", v: "Fingerprint + face match · 2.4s" },
                { step: "02", k: "Geofence verified", v: "Inside Block B · 6.2°N, 3.4°E" },
                { step: "03", k: "Activity logged", v: "Spraying · 1.4 ha · AI confirmed" },
                { step: "04", k: "Auto payment", v: "₦4,200 → mobile wallet · settled" },
              ].map((row, i) => (
                <Reveal
                  key={row.step}
                  delay={i * 140}
                  className="flex items-center gap-4 rounded-lg border border-border bg-card p-5 transition-smooth hover:border-primary/40"
                >
                  <span className="font-mono text-xs text-primary">{row.step}</span>
                  <div className="flex-1">
                    <div className="font-display text-sm font-bold text-foreground">{row.k}</div>
                    <div className="font-mono text-xs text-muted-foreground">{row.v}</div>
                  </div>
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Farm Advisor + API */}
      <section className="border-t border-border bg-surface/40 py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2">
          <Reveal className="rounded-xl border border-border bg-card p-10 transition-smooth hover:border-primary/40">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
              Farm Advisor
            </span>
            <h3 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl">
              Newsletter + SMS for every registered farmer.
            </h3>
            <p className="mt-4 text-muted-foreground">
              Once a farmer is in our system, we keep them informed , weather, prices,
              crop-stage tips and program updates, delivered by email and SMS to any phone.
            </p>
            <Link
              to="/services"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
            >
              Explore Farm Advisor <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal delay={120} className="rounded-xl border border-border bg-card p-10 transition-smooth hover:border-primary/40">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
              API as a Service
            </span>
            <h3 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl">
              Build on verified agricultural data.
            </h3>
            <p className="mt-4 text-muted-foreground">
              REST + GraphQL endpoints, real-time webhooks and SDKs. Banks, insurers and
              buyers integrate FarmIntelytics directly into their stack.
            </p>
            <Link
              to="/services"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
            >
              See the API <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden border-t border-border">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt=""
            aria-hidden
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/85" />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 py-28 text-center">
          <h3 className="font-display text-4xl font-bold tracking-tight text-background md:text-6xl">
            Ready to digitize your operations?
          </h3>
          <p className="mx-auto mt-5 max-w-2xl text-background/80 md:text-lg">
            We onboard agribusinesses, government programs and cooperatives directly. Tailored
            configuration, training and integration included.
          </p>
          <Link
            to="/contact"
            className="group mt-9 inline-flex items-center gap-2 rounded-md bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-smooth hover:bg-background/90"
          >
            Talk to the team
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
