import heroBg from "@/assets/real/deploy-cloud.jpg";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import {
  Code2,
  Plug,
  Lock,
  Gauge,
  Webhook,
  Database,
  ArrowRight,
  Terminal,
  Boxes,
} from "lucide-react";
import apiImg from "@/assets/real/api.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Developer, API as a Service · FarmIntelytics" },
      {
        name: "description",
        content:
          "Build on top of FarmIntelytics. REST and GraphQL APIs, real-time webhooks and verified agricultural data feeds for fintechs, insurers, banks and agtech developers.",
      },
      { property: "og:title", content: "FarmIntelytics for Developers" },
      {
        property: "og:description",
        content:
          "A full API platform for verified agricultural intelligence, NDVI, biometrics, payments, weather and yield.",
      },
      { property: "og:image", content: apiImg },
    ],
  }),
  component: DeveloperPage,
});

const API_FEATURES = [
  {
    icon: Code2,
    title: "REST + GraphQL",
    desc: "Modern, well-documented endpoints. SDKs for Node, Python and Go.",
  },
  {
    icon: Webhook,
    title: "Real-time webhooks",
    desc: "Subscribe to activity events, geofence breaches, weight readings and payment settlements.",
  },
  {
    icon: Database,
    title: "Verified data feeds",
    desc: "Farmer registry, biometric IDs, NDVI rasters, weather, prices and yield estimates.",
  },
  {
    icon: Lock,
    title: "Enterprise security",
    desc: "OAuth 2.0, scoped API keys, audit logs and SOC-2-aligned controls.",
  },
  {
    icon: Gauge,
    title: "Usage-based pricing",
    desc: "Pay for what you call. Free sandbox tier for development and testing.",
  },
  {
    icon: Plug,
    title: "ERP / bank ready",
    desc: "Pre-built connectors for SAP, Oracle, mobile-money rails and core banking systems.",
  },
];

function DeveloperPage() {
  return (
    <PageShell>
      {/* Hero, bold dark */}
      <section className="relative overflow-hidden bg-foreground text-background">
        <div className="absolute inset-0">
          <img src={apiImg} alt="" className="h-full w-full object-cover opacity-35" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/85 to-foreground/40" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-12">
          <Reveal>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.35em] text-primary-glow">
              Developer platform
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-5 max-w-5xl font-display text-4xl sm:text-5xl font-extrabold leading-[0.92] tracking-[-0.045em] md:text-7xl lg:text-8xl">
              Build on verified<br />
              <span className="text-primary-glow">agricultural data.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-7 max-w-2xl text-lg font-medium leading-normal text-background/85 md:text-xl">
              Banks underwrite loans on real yields. Insurers price risk on NDVI history. Buyers prove origin cryptographically. The FarmIntelytics API makes any of it shippable in days.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary-glow px-6 py-3 font-display text-sm font-bold text-white transition-smooth hover:bg-background hover:text-white"
              >
                Request API access <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#endpoints"
                className="inline-flex items-center gap-2 rounded-md border border-background/30 px-6 py-3 font-display text-sm font-bold text-background transition-smooth hover:border-primary-glow"
              >
                <Terminal className="h-4 w-4" /> View endpoints
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Endpoints showcase */}
      <section id="endpoints" className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-6 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.35em] text-primary">
                The agriculture data layer
              </p>
              <h2 className="mt-4 font-display text-4xl font-extrabold tracking-[-0.04em] text-foreground md:text-6xl">
                Endpoints your stack was missing.
              </h2>
              <p className="mt-5 text-lg font-medium text-foreground/75">
                NDVI rasters, biometric-verified farmers, geofenced activity, payment events and yield forecasts, all on a clean, predictable API.
              </p>
              <ul className="mt-7 space-y-3 text-sm font-semibold text-foreground/80">
                {[
                  "Sandbox keys in 2 minutes",
                  "Versioned, backwards-compatible APIs",
                  "99.95% uptime SLA on enterprise tier",
                  "Region-pinned data residency",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-7">
              <div className="overflow-hidden rounded-2xl border border-foreground/10 bg-foreground p-6 font-mono text-xs leading-normal text-background/90 shadow-elevated md:text-sm">
                <div className="mb-3 flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-primary-glow/70" />
                  <span className="ml-3 text-background/40">api.farmintelytics.com</span>
                </div>
                <div className="text-background/40"># Get NDVI for a registered farm</div>
                <div className="mt-1">
                  <span className="text-primary-glow">GET</span>{" "}
                  <span className="text-background">/v1/farms/&#123;farm_id&#125;/ndvi</span>
                </div>
                <div className="mt-4 text-background/40"># Stream verified worker activity</div>
                <div className="mt-1">
                  <span className="text-accent">SUBSCRIBE</span>{" "}
                  <span className="text-background">events.activity.verified</span>
                </div>
                <div className="mt-4 text-background/40"># Trigger a payout from a verified weight reading</div>
                <div className="mt-1">
                  <span className="text-primary-glow">POST</span>{" "}
                  <span className="text-background">/v1/payouts</span>
                </div>
                <div className="mt-4 text-background/40"># Yield forecast, block-level</div>
                <div className="mt-1">
                  <span className="text-primary-glow">GET</span>{" "}
                  <span className="text-background">/v1/blocks/&#123;block_id&#125;/yield/forecast</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API features grid */}
      <section className="border-t border-border bg-surface/40 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.35em] text-primary">
              Platform capabilities
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-[-0.04em] text-foreground md:text-6xl">
              Everything a serious integration needs.
            </h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {API_FEATURES.map(({ icon: Icon, title, desc }, i) => (
              <Reveal
                key={title}
                delay={(i % 3) * 100}
                className="group rounded-2xl border border-border bg-card p-7 transition-smooth hover:border-primary/40"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary transition-smooth group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-extrabold tracking-[-0.02em] text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm font-medium leading-normal text-foreground/70">
                  {desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-foreground py-16 text-background">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Boxes className="mx-auto h-10 w-10 text-primary-glow" />
          <h3 className="mt-6 font-display text-4xl font-extrabold tracking-[-0.04em] md:text-6xl">
            Power every partner.
          </h3>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-medium text-background/75">
            Whether you're a fintech building credit scores from verified activity or a buyer needing proof of origin, the FarmIntelytics API is the foundation.
          </p>
          <Link
            to="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-md bg-primary-glow px-7 py-3.5 font-display text-sm font-bold text-foreground transition-smooth hover:bg-background"
          >
            Talk to our team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
