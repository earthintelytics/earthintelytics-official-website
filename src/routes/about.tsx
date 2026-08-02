import heroBg from "@/assets/real/hero-farm.jpg";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import {
  Globe, Layers, ShieldCheck, Zap,
  Sprout, HardHat, Droplets, Trees,
  Building2, Shield, Thermometer,
  Siren, Zap as EnergyIcon, Waves, Map,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Who We Are | EarthIntelytics" },
      {
        name: "description",
        content:
          "EarthIntelytics is building the definitive Earth intelligence platform for emerging and frontier markets, combining satellites, drones, AI, and biometrics into one trusted system.",
      },
      { property: "og:title", content: "Who We Are | EarthIntelytics" },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    icon: Globe,
    title: "Earth-Centered",
    desc: "Every solution we build starts with understanding the physical world, land, water, minerals, crops, not just data.",
  },
  {
    icon: ShieldCheck,
    title: "Accuracy First",
    desc: "We hold intelligence to the highest standard. Every insight we deliver is verifiable, traceable, and defensible.",
  },
  {
    icon: Layers,
    title: "Multi-Source Intelligence",
    desc: "Satellites, drones, IoT sensors, and ground biometrics, we fuse them all so nothing escapes detection.",
  },
  {
    icon: Zap,
    title: "Decision-Ready",
    desc: "We don't deliver data. We deliver decisions, clear, timely, and actionable intelligence for real-world operations.",
  },
];

function AboutPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cover bg-center border-b border-border" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url(${heroBg})` }}>
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-12">
          <Reveal>
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.35em] text-primary">
              Who We Are
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="max-w-4xl font-display text-4xl sm:text-5xl font-extrabold leading-[0.92] tracking-tight text-white md:text-7xl">
              The intelligence layer{" "}
              <span className="text-primary">for planet Earth.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-2xl text-lg font-medium leading-normal text-white/80">
              EarthIntelytics was built with a single conviction: that the world's most critical decisions, in agriculture, mining, climate, and security, deserve the best possible intelligence. We are building the platform to make that a reality.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 md:grid-cols-2 md:items-start">
            <Reveal>
              <SectionHeading
                eyebrow="Our Mission"
                title="Transforming Earth data into intelligence."
              />
              <p className="mt-6 text-muted-foreground leading-normal">
                We fuse satellite imagery, drone data, IoT sensors, AI models, and biometric verification into one unified platform. Our mission is to give operators, governments, and enterprises a verified, real-time picture of the physical world, so they can make better decisions, faster.
              </p>
              <p className="mt-4 text-muted-foreground leading-normal">
                We are inspired by the ambition of Palantir and Planet Labs, but built for the Earth observation challenges unique to emerging and frontier markets across Africa, Asia, and beyond.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <blockquote className="text-2xl font-display font-bold text-foreground leading-snug border-l-4 border-primary pl-8">
                "If you can see it from space, you can manage it from anywhere."
              </blockquote>
              <p className="mt-6 text-sm text-muted-foreground font-mono uppercase tracking-widest pl-8">
                - EarthIntelytics Founding Principle
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Our Values"
            title="What drives every decision we make."
            align="center"
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal
                  key={v.title}
                  delay={i * 100}
                  className="group rounded-xl border border-border bg-surface p-8 transition-smooth hover:border-primary/40 hover:shadow-glow"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {v.title}
                  </h3>
                  <p className="mt-4 text-sm leading-normal text-muted-foreground">
                    {v.desc}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platform scope */}
      <section className="py-16 bg-surface/40 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="What We Cover"
            title="One platform. Every sector. Every scale."
            description="EarthIntelytics is not a niche tool. It is a broad intelligence infrastructure designed to serve multiple industries under one unified brand."
          />
          <div className="mt-14 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {([
              { icon: Sprout, label: "Agriculture" },
              { icon: HardHat, label: "Mining" },
              { icon: Map, label: "Land Suitability & Planning" },
              { icon: Droplets, label: "Water & Hydrology" },
              { icon: Trees, label: "Forest & Carbon" },
              { icon: Building2, label: "Urban Planning" },
              { icon: Shield, label: "Security & Defence" },
              { icon: Thermometer, label: "Climate & Environment" },
              { icon: Siren, label: "Disaster Response" },
              { icon: EnergyIcon, label: "Energy Infrastructure" },
              { icon: Waves, label: "Coastal Monitoring" },
            ] as const).map(({ icon: Icon, label }, i) => (
              <Reveal
                key={label}
                delay={i * 60}
                className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-4 text-sm font-semibold text-foreground transition-smooth hover:border-primary/40"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" />
                </div>
                {label}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-primary py-16 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h3 className="font-display text-3xl font-extrabold text-primary-foreground md:text-4xl">
            Ready to see what EarthIntelytics can do?
          </h3>
          <p className="mt-4 text-primary-foreground/80">
            Book a demo or speak with our team about your specific intelligence needs.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-primary transition-smooth hover:bg-primary-foreground/90"
            >
              Book a Demo
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-smooth hover:bg-white/10"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
