import heroBg from "@/assets/real/hero-modules.jpeg";
import { createFileRoute, Link, useSearch, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
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
  ArrowRight,
  Wheat,
  TreePalm,
  Nut,
  Candy,
  Bean,
  Sprout,
  Leaf,
  MapPinned,
  LineChart,
  Bluetooth,
  UserCheck,
  Cloud,
  Wrench,
  CircleDollarSign,
  ShieldCheck,
  AlertTriangle,
  Bell,
  CloudRain,
  Code2,
  Plug,
  Lock,
  Gauge,
  Webhook,
  Database,
  Terminal,
  Smartphone,
  Cpu,
  Building2,
  Landmark,
  HeartHandshake,
  Users2,
  TrendingUp,
  Layers,
} from "lucide-react";

// Assets imports
import biometricImg from "@/assets/real/biometric-hand.jpg";
import portalImg from "@/assets/real/portal.jpg";
import farmerImg from "@/assets/real/farmer-portrait.jpg";
import satImg from "@/assets/real/ndvi.jpg";
import croplandImg from "@/assets/real/cropland-aerial.jpg";
import riceImg from "@/assets/real/rice-paddy.jpg";
import rubberImg from "@/assets/real/rubber.jpg";
import cashewImg from "@/assets/real/cashew.jpg";
import sugarcaneImg from "@/assets/real/sugarcane.jpg";
import cocoaImg from "@/assets/real/cocoa-pods.jpg";
import palmImg from "@/assets/real/palm-plantation.jpg";
import cassavaImg from "@/assets/real/cassava.jpg";
import maizeImg from "@/assets/real/maize.jpg";
import fieldTablet from "@/assets/real/mon-field-tablet.jpg";
import ndviOverlayImg from "@/assets/real/ndvi-overlay.jpg";
import droneImg from "@/assets/real/drone-field.jpg";
import logisticsImg from "@/assets/real/logistics.jpg";
import paymentsImg from "@/assets/real/payments.jpg";
import complianceImg from "@/assets/real/compliance.jpg";
import farmerPhoneImg from "@/assets/real/farmer-phone.jpg";
import apiImg from "@/assets/real/api.jpg";
import archCollection from "@/assets/real/arch-collection.jpg";
import archIntelligence from "@/assets/real/arch-intelligence.jpg";
import archCore from "@/assets/real/arch-core.jpg";
import archExperience from "@/assets/real/arch-experience.jpg";
import susSoil from "@/assets/real/sus-soil.jpg";
import susWater from "@/assets/real/sus-water.jpg";
import susClimate from "@/assets/real/sus-climate.jpg";
import susCarbon from "@/assets/real/sus-carbon.jpg";
import deployCloud from "@/assets/real/deploy-cloud.jpg";
import deployOnprem from "@/assets/real/deploy-onprem.jpg";
import deployMobile from "@/assets/real/deploy-mobile.jpg";
import diseaseImg from "@/assets/real/disease-detection.jpg";

export const Route = createFileRoute("/modules")({
  validateSearch: (search: Record<string, unknown>): { tab?: string } => {
    return {
      tab: search.tab as string | undefined,
    };
  },
  head: () => ({
    meta: [
      { title: "FarmIntelytics | Agriculture Intelligence Suite" },
      {
        name: "description",
        content: "FarmIntelytics integrates crop health, biometrics, GIS monitoring, developer APIs, architecture, and sustainability on a single platform.",
      },
    ],
  }),
  component: ModulesPage,
});

const MODULES = [
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

const CROPS = [
  { icon: Wheat, name: "Rice", desc: "Paddy mapping, water-cycle tracking, panicle-stage yield forecasts.", img: riceImg },
  { icon: TreePalm, name: "Rubber", desc: "Tapping cycles, latex yield per tree-block, encroachment alerts.", img: rubberImg },
  { icon: Nut, name: "Cashew", desc: "Flowering windows, nut-set monitoring and pest pressure scoring.", img: cashewImg },
  { icon: Candy, name: "Sugarcane", desc: "Ratoon tracking, sucrose-stage forecasting, mill-ready scheduling.", img: sugarcaneImg },
  { icon: Bean, name: "Cocoa", desc: "Pod count by AI image, black-pod risk, shade-canopy health.", img: cocoaImg },
  { icon: TreePalm, name: "Palm Oil", desc: "FFB yield estimation, harvest rounds, mill throughput sync.", img: palmImg },
  { icon: Sprout, name: "Cassava", desc: "AI tuber & disease detection, root-bulking stage, fraud-proof counting.", img: cassavaImg },
  { icon: Leaf, name: "Maize", desc: "AI plant counting, tasseling detection, drought-stress alerts.", img: maizeImg },
];

const STEPS = [
  {
    icon: MapPinned,
    title: "Where to plant",
    desc: "GeoAI scores soil, slope, rainfall and historical yield to identify the best parcels for each crop.",
  },
  {
    icon: Satellite,
    title: "How it's progressing",
    desc: "NDVI, EVI and SAR imagery track every growth stage from emergence to harvest, block by block.",
  },
  {
    icon: LineChart,
    title: "What it will yield",
    desc: "Spatial and activity data feed yield models so you forecast tonnage weeks before harvest.",
  },
];

const LAYERS = [
  {
    icon: UserCheck,
    title: "Workers & People",
    items: ["Attendance & productivity", "Geo-verified movement", "Behavioural anomalies", "Health & safety logs"],
    img: biometricImg,
  },
  {
    icon: Sprout,
    title: "Farms & Crops",
    items: ["Growth stages by block", "Yield estimation", "Input usage tracking", "Field activity history"],
    img: fieldTablet,
  },
  {
    icon: Cloud,
    title: "Environment",
    items: ["Rainfall & temperature", "Soil moisture", "Drought / flood risk", "Spraying windows"],
    img: ndviOverlayImg,
  },
  {
    icon: Wrench,
    title: "Assets & Equipment",
    items: ["Tractor & drone hours", "Fuel & maintenance", "Warehouse occupancy", "Processing throughput"],
    img: droneImg,
  },
  {
    icon: Truck,
    title: "Logistics",
    items: ["Live vehicle tracking", "Delivery timelines", "Cold-chain temperature", "Loss & theft signals"],
    img: logisticsImg,
  },
  {
    icon: CircleDollarSign,
    title: "Finance & Operations",
    items: ["Cost per activity", "ROI per region", "Budget vs actual", "Wage settlement"],
    img: paymentsImg,
  },
  {
    icon: ShieldCheck,
    title: "Risk & Compliance",
    items: ["Fraud alerts", "Audit trails (immutable)", "Regulatory tracking", "ESG reporting"],
    img: complianceImg,
  },
  {
    icon: AlertTriangle,
    title: "Smart Alerts",
    items: ["Geofence breach", "Disease outbreaks", "Weather warnings", "Payment anomalies"],
    img: portalImg,
  },
];

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

const ARCH_LAYERS = [
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

const CODE_EXAMPLES = {
  curl: `curl -X GET "https://api.earthintelytics.com/v1/ndvi/health?block_id=blk_4901" \\
  -H "Authorization: Bearer sec_live_8Fh3..."`,
  python: `import requests

url = "https://api.earthintelytics.com/v1/ndvi/health"
headers = {"Authorization": "Bearer sec_live_8Fh3..."}
params = {"block_id": "blk_4901"}

response = requests.get(url, headers=headers, params=params)
print(response.json())`,
  js: `fetch("https://api.earthintelytics.com/v1/ndvi/health?block_id=blk_4901", {
  headers: {
    "Authorization": "Bearer sec_live_8Fh3..."
  }
})
.then(res => res.json())
.then(data => console.log(data));`,
};

function ModulesPage() {
  return (
    <PageShell>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-cover bg-center border-b border-border text-white" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url(${heroBg})` }}>
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative mx-auto grid max-w-7xl gap-6 px-6 py-12 md:grid-cols-5 md:items-center md:py-16">
          <div className="md:col-span-3">
            <Reveal>
              <h1 className="font-display text-4xl sm:text-4xl sm:text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl">
                FarmIntelytics
              </h1>
              <p className="mt-6 max-w-xl text-lg font-medium leading-normal text-white/80">
                Our complete agricultural intelligence platform. Fusing satellite metrics, crops analysis, live monitoring layers, developer APIs, and ESG reporting into one source of truth.
              </p>
            </Reveal>
          </div>
          <Reveal delay={120} className="md:col-span-2">
            <div className="overflow-hidden rounded-xl border border-border shadow-elevated">
              <img
                src={farmerImg}
                alt="Farmer using FarmIntelytics on a phone"
                loading="lazy"
                className="h-full w-full object-cover aspect-[4/3]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      

      {/* Tab Contents */}
      <div className="py-16 min-h-[50vh]">
        <section className="mx-auto max-w-7xl px-6">
            <Reveal>
              <SectionHeading
                title="Twelve modules. One unified system."
                description="Each module works standalone, but the real power emerges when they share one identity, one map and one source of truth."
              />
            </Reveal>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {MODULES.map(({ icon: Icon, title, points }, i) => (
                <Reveal
                  key={title}
                  as="article"
                  delay={(i % 3) * 80}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-smooth hover:border-[#009688]/40 hover:shadow-elevated"
                >
                  <div className="mb-6 flex items-start justify-between">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-[#009688]/10 text-[#009688] transition-smooth group-hover:bg-[#009688] group-hover:text-white">
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
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#009688]" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
            <div className="mt-8 border-t border-border pt-12">
              <Reveal>
                <SectionHeading
                  title="From rice paddies to rubber estates."
                  description="FarmIntelytics is crop-aware. Each commodity gets its own growth model, AI detector, and remote-sensing pipeline, so the same platform serves a smallholder cassava farm and a 10,000-hectare palm estate."
                />
              </Reveal>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {CROPS.map(({ icon: Icon, name, desc, img }, i) => (
                <Reveal
                  key={name}
                  as="article"
                  delay={(i % 4) * 80}
                  className="group relative overflow-hidden rounded-xl border border-border bg-card transition-smooth hover:border-[#009688]/40"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={img}
                      alt={name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#004d40]/90 via-foreground/20 to-transparent" />
                    <div className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-background/90 text-[#009688] backdrop-blur">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <h3 className="font-display text-2xl font-bold tracking-tight text-white">{name}</h3>
                      <p className="mt-1.5 text-xs leading-normal text-white/90">{desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-10 border-t border-border pt-12">
              <SectionHeading
                title="Plant smarter. Predict earlier."
                description="We don't just monitor what's there. GeoAI helps you decide where to plant, when to act, and how much you'll harvest."
              />
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {STEPS.map(({ icon: Icon, title, desc }, i) => (
                  <Reveal
                    key={title}
                    delay={i * 120}
                    className="group rounded-2xl border border-border bg-card p-8 transition-smooth hover:border-[#009688]/40"
                  >
                    <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-md bg-[#009688]/10 text-[#009688] transition-smooth group-hover:bg-[#009688] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-xl font-extrabold tracking-[-0.02em] text-foreground">{title}</h3>
                    <p className="mt-2 text-sm font-medium text-muted-foreground">{desc}</p>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={200} className="mt-8 overflow-hidden rounded-xl border border-border bg-white shadow-elevated">
                <img
                  src={satImg}
                  alt="NDVI map"
                  className="w-full object-cover"
                />
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border bg-surface/60 px-5 py-3 text-xs text-muted-foreground">
                  <span className="font-mono uppercase tracking-widest">NDVI · Vegetation Health Index</span>
                  <span className="flex items-center gap-3 font-mono">
                    <span className="flex items-center gap-1.5"><span className="h-2 w-3 rounded-sm" style={{ background: "#d4f04a" }} /> Stressed</span>
                    <span className="flex items-center gap-1.5"><span className="h-2 w-3 rounded-sm" style={{ background: "#ff7a3d" }} /> Critical</span>
                    <span className="flex items-center gap-1.5"><span className="h-2 w-3 rounded-sm" style={{ background: "#1f9d3f" }} /> Healthy</span>
                  </span>
                </div>
              </Reveal>
            </div>

            <div className="mt-10 border-t border-border pt-12">
              <div className="rounded-xl border border-border bg-card p-8 shadow-card md:p-12">
                <div className="flex flex-col gap-6 md:flex-row md:items-center">
                  <div className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-md bg-[#009688]/10 text-[#009688]">
                    <Bluetooth className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-display text-3xl font-bold tracking-tight">Bluetooth weight scale integration</h3>
                    <p className="mt-3 text-muted-foreground leading-normal">
                      Pair any Bluetooth-enabled scale to log harvest weights directly into the platform. No paperwork, no shrinkage, no disputes. Each weighing is biometrically signed, geo-stamped, and linked to the producing block.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        <div className="mt-8 border-t border-border pt-12" />
        <section className="mx-auto max-w-7xl px-6">
            <Reveal>
              <SectionHeading
                title="A four-layer system built for scale."
                description="From sensor to dashboard, every layer is designed to run reliably across rural connectivity, multiple organisations, and millions of records."
              />
            </Reveal>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {ARCH_LAYERS.map(({ n, icon: Icon, label, tagline, items, img }) => (
                <div key={label} className="rounded-xl border border-border bg-card p-8 flex flex-col md:flex-row gap-6">
                  <div className="relative aspect-[4/3] w-full md:w-36 shrink-0 overflow-hidden rounded-lg">
                    <img src={img} alt={label} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-[#009688]">
                      <span className="font-mono text-xs font-bold">{n}</span>
                      <Icon className="h-5 w-5" />
                      <h4 className="font-sans text-[16px] font-bold text-foreground">{label}</h4>
                    </div>
                    <p className="text-xs font-semibold text-muted-foreground">{tagline}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {items.map((it) => (
                        <span key={it} className="rounded bg-surface px-2 py-0.5 text-[10px] font-bold text-foreground">
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-border pt-12">
              <SectionHeading
                title="Architectural Principles"
                description="The core tenets that guide the technical design and deployment of the platform."
              />
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {PRINCIPLES.map(({ k, v }) => (
                  <div key={k} className="rounded-xl border border-border bg-card p-6">
                    <h4 className="font-sans text-[16px] font-bold text-[#009688]">{k}</h4>
                    <p className="mt-2 text-xs text-muted-foreground leading-normal">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* TESTIMONIALS */}
          <section className="py-16 bg-surface/30 border-t border-border">
            <div className="mx-auto max-w-7xl px-6 text-center">
              <SectionHeading
                title="What our partners say"
                description="See how FarmIntelytics is transforming operations on the ground."
                align="center"
              />
              <div className="mt-12 relative flex overflow-x-hidden">
                <div className="animate-marquee whitespace-nowrap flex items-stretch gap-6 sm:gap-8 pl-6 sm:pl-8 py-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-[300px] md:w-[400px] shrink-0 rounded-2xl border border-border bg-card p-6 shadow-sm relative isolate whitespace-normal flex flex-col justify-between">
                      <span className="absolute top-4 left-4 text-5xl text-[#009688]/20 font-serif leading-none">"</span>
                      <p className="relative z-10 text-base font-medium text-foreground leading-relaxed italic mb-6 mt-4">
                        EarthIntelytics gave us an unprecedented view into our agricultural footprint. We were able to optimize our harvest schedules by 30% and detect disease vectors weeks before they became visible on the ground.
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-[#009688]/20 flex shrink-0 items-center justify-center text-[#009688] font-bold text-sm">
                          SM
                        </div>
                        <div className="text-left">
                          <div className="font-bold text-foreground text-sm">Sarah Miller {i + 1}</div>
                          <div className="text-xs text-muted-foreground">Chief Agronomist, Global AgriCorp</div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {[...Array(5)].map((_, i) => (
                    <div key={`dup-${i}`} className="w-[300px] md:w-[400px] shrink-0 rounded-2xl border border-border bg-card p-6 shadow-sm relative isolate whitespace-normal flex flex-col justify-between">
                      <span className="absolute top-4 left-4 text-5xl text-[#009688]/20 font-serif leading-none">"</span>
                      <p className="relative z-10 text-base font-medium text-foreground leading-relaxed italic mb-6 mt-4">
                        EarthIntelytics gave us an unprecedented view into our agricultural footprint. We were able to optimize our harvest schedules by 30% and detect disease vectors weeks before they became visible on the ground.
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-[#009688]/20 flex shrink-0 items-center justify-center text-[#009688] font-bold text-sm">
                          SM
                        </div>
                        <div className="text-left">
                          <div className="font-bold text-foreground text-sm">Sarah Miller {i + 1}</div>
                          <div className="text-xs text-muted-foreground">Chief Agronomist, Global AgriCorp</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </PageShell>
  );
}
