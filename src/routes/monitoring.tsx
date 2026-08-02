import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import {
  UserCheck,
  Sprout,
  Cloud,
  Wrench,
  Truck,
  CircleDollarSign,
  ShieldCheck,
  AlertTriangle,
  Newspaper,
  MessageSquare,
  MapPin,
  Bell,
  CloudRain,
} from "lucide-react";
import controlroom from "@/assets/real/mon-controlroom.jpg";
import fieldTablet from "@/assets/real/mon-field-tablet.jpg";
import dashboardImg from "@/assets/real/dashboard.jpg";
import ndvi from "@/assets/real/ndvi-overlay.jpg";
import portal from "@/assets/real/portal.jpg";
import biometric from "@/assets/real/biometric-hand.jpg";
import drone from "@/assets/real/drone-field.jpg";
import logistics from "@/assets/real/logistics.jpg";
import payments from "@/assets/real/payments.jpg";
import compliance from "@/assets/real/compliance.jpg";
import farmerImg from "@/assets/real/farmer-phone.jpg";
import advLocation from "@/assets/real/adv-location.jpg";
import advNewsletter from "@/assets/real/adv-newsletter.jpg";
import advSms from "@/assets/real/adv-sms.jpg";
import advWeather from "@/assets/real/adv-weather.jpg";
import advCropstage from "@/assets/real/adv-cropstage.jpg";
import advProgram from "@/assets/real/adv-program.jpg";

export const Route = createFileRoute("/monitoring")({
  head: () => ({
    meta: [
      { title: "Monitoring · FarmIntelytics" },
      {
        name: "description",
        content:
          "Eight live layers of agricultural monitoring , workers, farms, environment, equipment, logistics, finance, risk and alerts.",
      },
      { property: "og:title", content: "FarmIntelytics Monitoring Layers" },
      { property: "og:image", content: controlroom },
    ],
  }),
  component: MonitoringPage,
});

const LAYERS = [
  {
    icon: UserCheck,
    title: "Workers & People",
    items: ["Attendance & productivity", "Geo-verified movement", "Behavioural anomalies", "Health & safety logs"],
    img: biometric,
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
    img: ndvi,
  },
  {
    icon: Wrench,
    title: "Assets & Equipment",
    items: ["Tractor & drone hours", "Fuel & maintenance", "Warehouse occupancy", "Processing throughput"],
    img: drone,
  },
  {
    icon: Truck,
    title: "Logistics",
    items: ["Live vehicle tracking", "Delivery timelines", "Cold-chain temperature", "Loss & theft signals"],
    img: logistics,
  },
  {
    icon: CircleDollarSign,
    title: "Finance & Operations",
    items: ["Cost per activity", "ROI per region", "Budget vs actual", "Wage settlement"],
    img: payments,
  },
  {
    icon: ShieldCheck,
    title: "Risk & Compliance",
    items: ["Fraud alerts", "Audit trails (immutable)", "Regulatory tracking", "ESG reporting"],
    img: compliance,
  },
  {
    icon: AlertTriangle,
    title: "Smart Alerts",
    items: ["Geofence breach", "Disease outbreaks", "Weather warnings", "Payment anomalies"],
    img: portal,
  },
];

const ADVISOR = [
  { icon: MapPin, title: "Location-aware", desc: "Reports tailored to each farmer's GPS-registered farm, soil zone, climate band, crop calendar.", img: advLocation },
  { icon: Newspaper, title: "Weekly newsletter", desc: "Curated updates on weather, market prices, regional pests, government programs and best practices.", img: advNewsletter },
  { icon: MessageSquare, title: "SMS alerts", desc: "Critical notices delivered straight to any phone, no smartphone or data needed.", img: advSms },
  { icon: CloudRain, title: "Weather & risk", desc: "Rainfall forecasts, drought warnings, spraying windows and disease-pressure heads-up.", img: advWeather },
  { icon: Sprout, title: "Crop-stage guidance", desc: "Planting, fertilising and harvesting reminders matched to the crop and growth stage on file.", img: advCropstage },
  { icon: Bell, title: "Program updates", desc: "Subsidies, training sessions, input distribution and cooperative news pushed when they matter.", img: advProgram },
];

const SAMPLE_SMS = [
  { time: "Tue, 06:42", text: "FarmIntelytics: 18mm rain expected Wed PM in Ogun. Delay urea application 24h." },
  { time: "Thu, 14:10", text: "Cocoa Block C, black-pod risk HIGH. Inspect within 48h. Reply HELP for guidance." },
  { time: "Sat, 09:20", text: "₦12,400 settled to your wallet for 1.4 ha spraying logged Fri. View: bit.ly/fi-w" },
];

function MonitoringPage() {
  return (
    <PageShell>
      {/* Hero , bold dark image-led */}
      <section className="relative overflow-hidden bg-foreground text-background">
        <div className="absolute inset-0">
          <img src={controlroom} alt="" className="h-full w-full object-cover opacity-40" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/85 to-foreground/40" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-12">
          <Reveal>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.35em] text-primary-glow">
              Multi-layer intelligence
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-5 max-w-4xl font-display text-5xl font-extrabold leading-[0.92] tracking-[-0.045em] md:text-7xl lg:text-8xl">
              If it happens on the farm,<br />
              <span className="text-primary-glow">you see it.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-7 max-w-2xl text-lg font-medium leading-normal text-background/85 md:text-xl">
              People, plants, weather, equipment, money and movement , unified through one identity and one map, in real time.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Layer cards , image first, bold typography */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {LAYERS.map(({ icon: Icon, title, items, img }, i) => (
              <Reveal
                key={title}
                as="article"
                delay={(i % 2) * 120}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-smooth hover:border-primary/40"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={img}
                    alt={title}
                    loading="lazy"
                    width={1280}
                    height={720}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent" />
                  <div className="absolute left-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-md bg-background/95 text-primary shadow-card backdrop-blur">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="absolute right-5 top-5 rounded-full bg-background/90 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/70 backdrop-blur">
                    Layer {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="absolute bottom-5 left-5 right-5 font-display text-2xl font-extrabold tracking-[-0.02em] text-background md:text-3xl">
                    {title}
                  </h3>
                </div>
                <ul className="grid gap-2 p-6 text-sm font-semibold text-foreground/80 sm:grid-cols-2">
                  {items.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {it}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closed loop strip */}
      <section className="border-t border-border bg-foreground py-12 text-background">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.35em] text-primary-glow">The closed loop</p>
          <h2 className="mt-5 font-display text-4xl font-extrabold tracking-[-0.04em] text-background md:text-6xl">
            Activity → Verification → Payment → Insight.
          </h2>
          <p className="mt-5 text-lg font-medium text-background/75">
            Every datapoint flows back into intelligence, sharper forecasts, smarter payouts, fewer surprises.
          </p>
        </div>
      </section>

      {/* Farm Advisor, part of monitoring */}
      <section className="border-t border-border py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-6 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.35em] text-primary">
                Farm Advisor
              </p>
              <h2 className="mt-4 font-display text-4xl font-extrabold tracking-[-0.04em] text-foreground md:text-6xl">
                Monitoring that talks back to the farmer.
              </h2>
              <p className="mt-5 text-lg font-medium text-foreground/75">
                Once a farmer is enrolled, Farm Advisor turns on automatically. We push location-aware newsletters and SMS alerts so insights from the platform reach the people working the land.
              </p>
              <ul className="mt-7 space-y-3 text-sm font-semibold text-foreground/80">
                {[
                  "Activates the moment a farmer is biometrically registered",
                  "Email newsletter and SMS alerts in one workflow",
                  "Tailored to farm coordinates, crops and growth stage",
                  "Two-way SMS for replies, opt-outs and quick polls",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-7">
              <div className="overflow-hidden rounded-2xl border border-border shadow-elevated">
                <img
                  src={farmerImg}
                  alt="Farmer reading FarmIntelytics SMS update on a phone"
                  loading="lazy"
                  width={1400}
                  height={933}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ADVISOR.map(({ icon: Icon, title, desc, img }, i) => (
              <Reveal
                key={title}
                delay={(i % 3) * 100}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-smooth hover:border-primary/40"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/15 to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-md bg-background/90 text-primary backdrop-blur">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="absolute bottom-4 left-4 right-4 font-display text-lg font-extrabold tracking-tight text-background">
                    {title}
                  </h3>
                </div>
                <p className="p-5 text-sm font-medium leading-normal text-foreground/75">{desc}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-5">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.35em] text-primary">What a farmer receives</p>
              <h3 className="mt-4 font-display text-3xl font-extrabold tracking-[-0.04em] text-foreground md:text-4xl">
                Three messages. One season saved.
              </h3>
              <p className="mt-4 text-base font-medium text-foreground/70">
                Concise, actionable, never spammy. Farmers can reply STOP at any time, opt-outs are honored across every channel.
              </p>
            </div>
            <div className="space-y-3 rounded-2xl border border-border bg-card p-5 shadow-card md:col-span-7">
              {SAMPLE_SMS.map((m) => (
                <div key={m.text} className="rounded-xl border border-border bg-surface p-4">
                  <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    SMS · {m.time}
                  </div>
                  <p className="mt-1.5 text-sm font-medium text-foreground">{m.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard preview */}
      <section className="border-t border-border py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.35em] text-primary">Operator portal</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-[-0.04em] text-foreground md:text-6xl">
              The dashboard your team already wants.
            </h2>
            <p className="mt-5 text-lg font-medium text-foreground/70">
              Live KPIs, satellite map of every block, anomaly alerts and an activity feed, built for control rooms and field offices alike.
            </p>
          </div>
          <Reveal delay={120} className="overflow-hidden rounded-2xl border border-border shadow-elevated">
            <img
              src={dashboardImg}
              alt="FarmIntelytics monitoring dashboard"
              loading="lazy"
              width={1920}
              height={1080}
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
