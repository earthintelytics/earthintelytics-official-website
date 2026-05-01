import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import {
  Fingerprint,
  Users,
  ClipboardList,
  Brain,
  Satellite,
  Plane,
  Truck,
  LayoutDashboard,
  Wallet,
  MapPin,
  ShieldAlert,
  Newspaper,
} from "lucide-react";
import biometricImg from "@/assets/real/biometric-hand.jpg";
import portalImg from "@/assets/real/portal.jpg";
import farmerImg from "@/assets/real/farmer-portrait.jpg";

export const Route = createFileRoute("/modules")({
  head: () => ({
    meta: [
      { title: "Modules · FarmIntelytics" },
      {
        name: "description",
        content:
          "Twelve integrated modules , biometrics, AI workforce, geospatial intelligence, payments, drones, logistics and more.",
      },
      { property: "og:title", content: "FarmIntelytics Modules" },
      {
        property: "og:description",
        content: "Twelve modules covering identity, operations, intelligence, payments and logistics.",
      },
    ],
  }),
  component: ModulesPage,
});

const MODULES = [
  {
    icon: Fingerprint,
    title: "Biometric Identity System",
    points: [
      "Fingerprint registration",
      "Facial recognition (dual verification)",
      "Eliminates ghost workers and duplicates",
      "Secure farmer & worker database",
    ],
  },
  {
    icon: Users,
    title: "AI Workforce Management",
    points: [
      "Task assignment and tracking",
      "Attendance and productivity analytics",
      "Anomaly & ghost worker detection",
      "Performance leaderboards",
    ],
  },
  {
    icon: ClipboardList,
    title: "Farm Activity & Operations",
    points: [
      "Daily logs: harvesting, planting, spraying",
      "Time-stamped, geo-referenced records",
      "Input usage tracking",
      "Operations history per block",
    ],
  },
  {
    icon: Brain,
    title: "Crop & Disease Intelligence",
    points: [
      "AI image recognition for diseases",
      "Pest infestation detection",
      "Nutrient deficiency alerts",
      "Supports palm oil, cocoa & cash crops",
    ],
  },
  {
    icon: Satellite,
    title: "Remote Sensing, Satellite & GeoAI",
    points: [
      "NDVI, EVI & SAR vegetation indices",
      "GeoAI models for land classification & change detection",
      "Soil moisture estimation, weather tracking",
      "Land use, boundary & encroachment monitoring",
    ],
  },
  {
    icon: Plane,
    title: "Drone Monitoring",
    points: [
      "Live drone feed integration",
      "Field inspection & surveillance",
      "High-resolution crop analysis",
      "Precision agriculture support",
    ],
  },
  {
    icon: MapPin,
    title: "Geospatial Intelligence & Geofencing",
    points: [
      "Farm boundary mapping",
      "GPS-based location tracking",
      "Geofence breach alerts",
      "Spatial analytics & encroachment detection",
    ],
  },
  {
    icon: Wallet,
    title: "Payments & Financial System",
    points: [
      "Digital payments to workers, farmers, vendors",
      "Wallets + bank & mobile money integration",
      "Payroll automated from verified work logs",
      "Input financing tracking",
    ],
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    points: [
      "Track produce & input movement",
      "Live route monitoring",
      "Delivery verification",
      "Reduces diversion and losses",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Risk, Fraud & Compliance",
    points: [
      "Real-time fraud alerts",
      "Data inconsistency flags",
      "Regulatory compliance tracking",
      "Immutable audit trails",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards & Portals",
    points: [
      "Executive strategic insights",
      "Field manager operations view",
      "Farmer personal portal",
      "Organisation-wide analytics",
    ],
  },
  {
    icon: Newspaper,
    title: "Farm Advisor",
    points: [
      "Location-aware newsletters per farmer",
      "SMS alerts on weather, pests, programs",
      "Crop-stage reminders auto-tuned",
      "Activates the moment a farmer is enrolled",
    ],
  },
];

function ModulesPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-5 md:items-center md:py-32">
          <div className="md:col-span-3">
            <SectionHeading
              eyebrow="The suite"
              title="Twelve modules. One unified system."
              description="Each module works standalone , but the real power emerges when they share one identity, one map and one source of truth."
            />
          </div>
          <Reveal delay={120} className="md:col-span-2">
            <div className="overflow-hidden rounded-xl border border-border shadow-elevated">
              <img
                src={farmerImg}
                alt="Farmer using FarmIntelytics on a phone in a green field"
                loading="lazy"
                width={1600}
                height={1067}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {MODULES.map(({ icon: Icon, title, points }, i) => (
              <Reveal
                key={title}
                as="article"
                delay={(i % 3) * 100}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-smooth hover:border-primary/40 hover:shadow-elevated"
              >
                <div className="mb-6 flex items-start justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary transition-smooth group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-display text-3xl font-extrabold leading-none tracking-[-0.04em] text-foreground/15">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display text-xl font-extrabold tracking-[-0.02em] text-foreground">{title}</h3>
                <ul className="mt-3 space-y-2 text-sm font-medium text-foreground/70">
                  {points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/50 bg-surface/40 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div className="relative overflow-hidden rounded-2xl border border-border shadow-elevated">
            <img
              src={biometricImg}
              alt="Biometric verification close-up"
              loading="lazy"
              width={1280}
              height={960}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Identity is the foundation"
              title="Every record begins with a verified human."
              description="Biometric identity is the spine of FarmIntelytics. Workers, farmers and field officers are enrolled once, then linked to every activity, payment and field they touch."
            />
          </div>
        </div>
      </section>

      {/* Portal mockup */}
      <section className="border-t border-border py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <SectionHeading
              eyebrow="Farmer portal"
              title="A pocket-sized window into the whole farm."
              description="Each registered farmer gets a personal app: their plot, NDVI snapshot, today's tasks, wallet balance and weather alerts , works on any phone."
            />
          </div>
          <Reveal delay={120} className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-card">
            <img
              src={portalImg}
              alt="Farmer mobile portal mockup showing tasks, wallet and weather alerts"
              loading="lazy"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
