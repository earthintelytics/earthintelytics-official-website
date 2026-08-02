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

const TABS = [
  { id: "overview", label: "Core Modules" },
  { id: "crops", label: "Crops Covered" },
  { id: "monitoring", label: "Monitoring Layers" },
  { id: "api", label: "Developer API" },
  { id: "architecture", label: "Architecture" },
  { id: "use-cases", label: "Use Cases & ESG" },
];

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

const CASES = [
  {
    icon: Building2,
    title: "Agribusiness & Plantations",
    desc: "Monitor large-scale palm oil and cocoa estates. Verify every shift, geofence every block, automate payroll, track every truck out.",
    metrics: [
      ["~30%", "labor cost recovered"],
      ["100%", "geo-verified work"],
    ],
  },
  {
    icon: Landmark,
    title: "Government Programs",
    desc: "Track subsidies, fertilizer distribution and beneficiary verification. End ghost beneficiaries with biometric enrollment.",
    metrics: [
      ["1:1", "biometric to beneficiary"],
      ["Audit", "ready by default"],
    ],
  },
  {
    icon: HeartHandshake,
    title: "NGOs & Development",
    desc: "Verify program impact with geo-tagged evidence. Generate funder-ready reports automatically from field activity.",
    metrics: [
      ["Real-time", "impact reporting"],
      ["GPS", "evidence trail"],
    ],
  },
  {
    icon: Users2,
    title: "Farmer Cooperatives",
    desc: "Manage farmer registries, aggregate produce, settle payments digitally. Build credit history from verified activity.",
    metrics: [
      ["Wallets", "for every member"],
      ["Credit", "score from activity"],
    ],
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
  const search = useSearch({ from: "/modules" });
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(search.tab || "overview");
  const [apiLang, setApiLang] = useState<"curl" | "python" | "js">("curl");

  // Keep state in sync with URL queries
  useEffect(() => {
    if (search.tab && search.tab !== activeTab) {
      setActiveTab(search.tab);
    }
  }, [search.tab]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    navigate({
      to: "/modules",
      search: { tab: tabId },
    });
  };

  return (
    <PageShell>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-hero border-b border-border">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-5 md:items-center md:py-28">
          <div className="md:col-span-3">
            <Reveal>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-6xl">
                FarmIntelytics
              </h1>
              <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-muted-foreground">
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

      {/* Tabs Navigation */}
      <div className="sticky top-20 z-20 border-b border-border bg-background/95 backdrop-blur py-2">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap gap-2 overflow-x-auto no-scrollbar py-1">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`whitespace-nowrap rounded-md px-4 py-2 text-sm font-semibold transition-smooth ${
                  activeTab === tab.id
                    ? "bg-[#009688] text-white shadow-sm"
                    : "text-muted-foreground hover:bg-surface hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Contents */}
      <div className="py-16 min-h-[50vh]">
        {/* ─── TAB 1: CORE MODULES ─── */}
        {activeTab === "overview" && (
          <section className="mx-auto max-w-7xl px-6">
            <Reveal>
              <SectionHeading
                title="Twelve modules. One unified system."
                description="Each module works standalone, but the real power emerges when they share one identity, one map and one source of truth."
              />
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

            <div className="mt-20 grid gap-12 border-t border-border pt-20 md:grid-cols-2 md:items-center">
              <div className="relative overflow-hidden rounded-2xl border border-border">
                <img
                  src={biometricImg}
                  alt="Biometric verification"
                  className="h-full w-full object-cover aspect-[4/3]"
                />
              </div>
              <div>
                <SectionHeading
                  title="Every record begins with a verified human."
                  description="Biometric identity is the foundation. Workers, farmers and field officers are enrolled once, then linked to every activity, payment, and parcel they touch to eliminate ghost records entirely."
                />
              </div>
            </div>

            <div className="mt-20 grid gap-12 border-t border-border pt-20 md:grid-cols-2 md:items-center">
              <div>
                <SectionHeading
                  title="A pocket-sized window into the whole farm."
                  description="Each registered farmer gets a personal app: their plot boundaries, NDVI snapshots, tasks, wallet balance and weather alerts, fully functional on any phone."
                />
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-border">
                <img
                  src={portalImg}
                  alt="Farmer mobile portal"
                  className="h-full w-full object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </section>
        )}

        {/* ─── TAB 2: CROPS COVERED ─── */}
        {activeTab === "crops" && (
          <section className="mx-auto max-w-7xl px-6">
            <Reveal>
              <SectionHeading
                title="From rice paddies to rubber estates."
                description="FarmIntelytics is crop-aware. Each commodity gets its own growth model, AI detector, and remote-sensing pipeline, so the same platform serves a smallholder cassava farm and a 10,000-hectare palm estate."
              />
            </Reveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                      <p className="mt-1.5 text-xs leading-relaxed text-white/90">{desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-20 border-t border-border pt-20">
              <SectionHeading
                title="Plant smarter. Predict earlier."
                description="We don't just monitor what's there. GeoAI helps you decide where to plant, when to act, and how much you'll harvest."
              />
              <div className="mt-12 grid gap-6 md:grid-cols-3">
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

              <Reveal delay={200} className="mt-12 overflow-hidden rounded-xl border border-border bg-white shadow-elevated">
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

            <div className="mt-20 border-t border-border pt-20">
              <div className="rounded-xl border border-border bg-card p-8 shadow-card md:p-12">
                <div className="flex flex-col gap-6 md:flex-row md:items-center">
                  <div className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-md bg-[#009688]/10 text-[#009688]">
                    <Bluetooth className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-display text-3xl font-bold tracking-tight">Bluetooth weight scale integration</h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      Pair any Bluetooth-enabled scale to log harvest weights directly into the platform. No paperwork, no shrinkage, no disputes. Each weighing is biometrically signed, geo-stamped, and linked to the producing block.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ─── TAB 3: MONITORING LAYERS ─── */}
        {activeTab === "monitoring" && (
          <section className="mx-auto max-w-7xl px-6">
            <Reveal>
              <SectionHeading
                title="Eight live layers of agricultural monitoring."
                description="Our platform connects identity, locations, activities, assets, and finance into one verifiable source of truth."
              />
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {LAYERS.map(({ icon: Icon, title, items, img }, i) => (
                <Reveal
                  key={title}
                  delay={i * 80}
                  className="flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-smooth hover:border-[#009688]/40 sm:flex-row"
                >
                  <div className="relative aspect-[4/3] w-full shrink-0 sm:w-48">
                    <img src={img} alt={title} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-[#004d40]/10" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3 text-[#009688]">
                      <Icon className="h-5 w-5" />
                      <h4 className="font-sans text-[16px] font-bold text-foreground">{title}</h4>
                    </div>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-semibold text-muted-foreground">
                      {items.map((it) => (
                        <li key={it} className="flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#009688]/40" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-20 border-t border-border pt-20">
              <SectionHeading
                title="In-Season Advisor Channels"
                description="How we communicate warnings, anomalies, and weather reports directly to the field teams."
              />
              <div className="mt-12 grid gap-8 md:grid-cols-3">
                <div className="rounded-xl border border-border bg-card p-8">
                  <span className="font-mono text-xs font-bold text-[#009688] uppercase tracking-wider">01 · Real-time SMS</span>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Auto-triggered messages sent to field crews regarding geofence violations, weather warnings, or harvest scheduling updates.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-8">
                  <span className="font-mono text-xs font-bold text-[#009688] uppercase tracking-wider">02 · Weather Updates</span>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Location-tuned daily rainfall index alerts and spraying suitability windows synced directly from orbital parameters.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-8">
                  <span className="font-mono text-xs font-bold text-[#009688] uppercase tracking-wider">03 · Advisor Bulletins</span>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Personalized regional advisory updates tailored to local crops and development progress for enrolled smallholders.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ─── TAB 4: DEVELOPER API ─── */}
        {activeTab === "api" && (
          <section className="mx-auto max-w-7xl px-6">
            <Reveal>
              <SectionHeading
                title="Build on verified agricultural data."
                description="Banks underwrite loans on real yields. Insurers price risk on NDVI history. Buyers prove origin cryptographically. The FarmIntelytics API makes any of it integration-ready."
              />
            </Reveal>

            <div className="mt-12 grid gap-12 lg:grid-cols-2 items-start">
              <div className="grid gap-6 sm:grid-cols-2">
                {API_FEATURES.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="rounded-xl border border-border bg-card p-6">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#009688]/10 text-[#009688] mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="font-sans text-[16px] font-bold text-foreground">{title}</h4>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              {/* Interactive Code Console */}
              <div className="overflow-hidden rounded-xl border border-border bg-foreground text-background">
                <div className="flex items-center justify-between border-b border-background/10 bg-background/5 px-6 py-4">
                  <span className="font-mono text-xs text-background/80">API Code Example</span>
                  <div className="flex gap-2">
                    {(["curl", "python", "js"] as const).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setApiLang(lang)}
                        className={`rounded px-2.5 py-1 font-mono text-xs font-semibold ${
                          apiLang === lang
                            ? "bg-primary text-primary-foreground"
                            : "text-background/60 hover:text-background"
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <pre className="overflow-x-auto font-mono text-xs text-background/90 leading-relaxed no-scrollbar">
                    <code>{CODE_EXAMPLES[apiLang]}</code>
                  </pre>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ─── TAB 5: ARCHITECTURE ─── */}
        {activeTab === "architecture" && (
          <section className="mx-auto max-w-7xl px-6">
            <Reveal>
              <SectionHeading
                title="A four-layer system built for scale."
                description="From sensor to dashboard, every layer is designed to run reliably across rural connectivity, multiple organisations, and millions of records."
              />
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
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

            <div className="mt-20 border-t border-border pt-20">
              <SectionHeading
                title="Architectural Principles"
                description="The core tenets that guide the technical design and deployment of the platform."
              />
              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {PRINCIPLES.map(({ k, v }) => (
                  <div key={k} className="rounded-xl border border-border bg-card p-6">
                    <h4 className="font-sans text-[16px] font-bold text-[#009688]">{k}</h4>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ─── TAB 6: USE CASES & ESG ─── */}
        {activeTab === "use-cases" && (
          <section className="mx-auto max-w-7xl px-6">
            <Reveal>
              <SectionHeading
                title="Who it's for & how it impacts our planet."
                description="Agribusinesses, governments, NGOs, and cooperatives deploy FarmIntelytics to scale productivity and verify ESG metrics."
              />
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {CASES.map(({ icon: Icon, title, desc, metrics }) => (
                <div key={title} className="rounded-xl border border-border bg-card p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3 text-[#009688]">
                      <Icon className="h-5 w-5" />
                      <h4 className="font-sans text-[16px] font-bold text-foreground">{title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border grid grid-cols-2 gap-4">
                    {metrics.map(([val, lbl]) => (
                      <div key={lbl} className="border-l-2 border-[#009688]/20 pl-3">
                        <div className="text-2xl font-black text-foreground">{val}</div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{lbl}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 border-t border-border pt-20">
              <SectionHeading
                title="Sustainability & ESG Modeling"
                description="Fusing AI, climate science, and global compliance standards to measure outcomes accurately."
              />
              <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {SUSTAIN.map(({ img, eyebrow, title, desc }) => (
                  <div key={title} className="group overflow-hidden rounded-xl border border-border bg-card transition-smooth hover:border-[#009688]/40">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img src={img} alt={title} className="h-full w-full object-cover" />
                    </div>
                    <div className="p-6">
                      <span className="font-mono text-[9px] font-black uppercase tracking-wider text-[#009688]">{eyebrow}</span>
                      <h4 className="mt-1 font-sans text-[15px] font-bold text-foreground">{title}</h4>
                      <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-20 border-t border-border pt-20">
              <SectionHeading
                title="Global Deployments"
                description="Deployed exactly where and how your organization requires security."
              />
              <div className="mt-12 grid gap-8 md:grid-cols-3">
                {DEPLOY.map(({ img, title, desc }) => (
                  <div key={title} className="rounded-xl border border-border bg-card p-6">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-lg mb-4">
                      <img src={img} alt={title} className="h-full w-full object-cover" />
                    </div>
                    <h4 className="font-sans text-[16px] font-bold text-foreground">{title}</h4>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </PageShell>
  );
}
