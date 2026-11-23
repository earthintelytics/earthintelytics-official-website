import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import heroImg from "@/assets/real/hero-home.jpeg";
import farmImg from "@/assets/real/palm-plantation.jpg";
import { CONTACT_EMAIL, PRODUCT_LINKS } from "@/lib/site";

/**
 * The Earthintelytics landing page: who we are, our product (FarmIntelytics), our consultancy and research (in
 * agriculture, and Earth-observation work across other sectors), and how to reach us. One page, plain words, white surfaces, no effects.
 */
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Earthintelytics | Agricultural intelligence, consultancy and Earth observation" },
      {
        name: "description",
        content:
          "Earthintelytics builds FarmIntelytics, its agriculture platform, and carries out consultancy, research and Earth-observation assessments for agriculture and other sectors.",
      },
    ],
  }),
  component: HomePage,
});

// ── Content ───────────────────────────────────────────────────────────────────────────────────────
const FARM_POINTS = [
  "Crop health and growth from satellite, block by block",
  "Water, weather and irrigation advice",
  "Land suitability: which crop fits where",
  "Smallholder groups, members and their parcels",
  "EUDR deforestation checks, and an API for your own systems",
];

// Consultancy and research. Agriculture first; Earth-observation work across other sectors as a service.
const AGRICULTURE = [
  { title: "Agricultural research and studies", text: "Crop, land and climate studies for farms, estates, programmes and researchers, from satellite records and field data." },
  { title: "Land suitability and site selection", text: "Where a crop or project fits best, from terrain, soil, rainfall and water, by the FAO land-evaluation method." },
  { title: "Monitoring and yield studies", text: "Setting up crop monitoring for estates and programmes, and studies of growth, stress and yield over seasons." },
  { title: "EUDR and supply-chain due diligence", text: "Mapping production plots, checking them against the 2020 cut-off, and preparing the files buyers ask for." },
  { title: "Training and capacity building", text: "Teaching teams to read satellite results, collect field data and use the tools in their daily work." },
];
const OTHER_SECTORS = [
  { title: "Earth-observation assessments", text: "Land cover, change over time and site condition for mining, forestry and carbon, water, infrastructure and the environment." },
  { title: "GIS and mapping", text: "Maps, spatial analysis and data for planning, reporting and decisions, from a single site to a region." },
  { title: "Custom geospatial systems", text: "Dashboards, data pipelines and integrations built around your own data and processes." },
];

const SECTORS = ["Agriculture", "Forestry and carbon", "Mining", "Water and hydrology", "Climate and environment", "Land planning"];

// ── Page ──────────────────────────────────────────────────────────────────────────────────────────
function HomePage() {
  return (
    <PageShell>
      {/* Hero: words on the left, a view of the Earth on the right */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-sm font-semibold text-primary">Earthintelytics</p>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl">
              Agricultural intelligence and Earth observation.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              We build FarmIntelytics, our agriculture platform, and we carry out consultancy, research and
              Earth-observation assessments for organisations in agriculture and other sectors.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#products" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                FarmIntelytics <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-surface">
                Talk to us
              </a>
            </div>
          </div>
          <img src={heroImg} alt="A coastline seen from space" className="aspect-[4/3] w-full rounded-xl object-cover" />
        </div>
      </section>

      {/* Our product: FarmIntelytics */}
      <section id="products" className="scroll-mt-20 border-b border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
          <img src={farmImg} alt="An oil palm plantation from the air" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover md:order-2" />
          <div>
            <p className="text-sm font-semibold text-primary">Our product</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">FarmIntelytics</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Satellite imagery turned into plain answers for farms, estates and co-operatives, in one platform.
            </p>
            <ul className="mt-5 space-y-2.5">
              {FARM_POINTS.map((x) => (
                <li key={x} className="flex gap-3 text-foreground"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{x}</li>
              ))}
            </ul>
            <a href={PRODUCT_LINKS.farmintelytics} {...(PRODUCT_LINKS.farmintelytics.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
               className="mt-7 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
              {PRODUCT_LINKS.farmintelytics.startsWith("http") ? "Visit FarmIntelytics" : "Ask about FarmIntelytics"} <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Consultancy and research */}
      <section id="services" className="scroll-mt-20 border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Consultancy and research</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">When you need a study, an assessment or a system built around your work, our team does it with you.</p>
          <h3 className="mt-10 text-sm font-semibold uppercase tracking-wider text-muted-foreground">In agriculture</h3>
          <div className="mt-5 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {AGRICULTURE.map((s) => <Service key={s.title} {...s} />)}
          </div>
          <h3 className="mt-12 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Across other sectors, including mining</h3>
          <div className="mt-5 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {OTHER_SECTORS.map((s) => <Service key={s.title} {...s} />)}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-20 border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.2fr_1fr] md:py-20">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">About us</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Earthintelytics was built on one conviction: the most important decisions about land, in agriculture and
              beyond, deserve the best possible information. We combine satellite imagery, drone data, field
              records and careful analysis into answers people can act on, built for the realities of Africa and other
              emerging markets.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">Where we work</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {SECTORS.map((s) => (
                <li key={s} className="rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground">{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Contact />
    </PageShell>
  );
}

function Service({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h4 className="font-display text-lg font-semibold text-foreground">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}

/** Contact: our email, and a short form that opens the visitor's email with their message (nothing is stored). */
function Contact() {
  const [form, setForm] = useState({ name: "", organisation: "", message: "" });
  const send = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Enquiry from ${form.name}${form.organisation ? `, ${form.organisation}` : ""}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(form.message)}`;
  };
  const input = "w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none";
  return (
    <section id="contact" className="scroll-mt-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Talk to us</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Tell us about your land, crops, site or supply chain, and what you need to know. We reply by email.
          </p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:underline">
            <Mail className="h-4 w-4" /> {CONTACT_EMAIL}
          </a>
        </div>
        <form onSubmit={send} className="space-y-4">
          <label className="block text-sm font-medium text-foreground">Your name
            <input required className={`mt-1.5 ${input}`} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </label>
          <label className="block text-sm font-medium text-foreground">Organisation
            <input className={`mt-1.5 ${input}`} value={form.organisation} onChange={(e) => setForm({ ...form, organisation: e.target.value })} />
          </label>
          <label className="block text-sm font-medium text-foreground">How can we help?
            <textarea required rows={5} className={`mt-1.5 ${input}`} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          </label>
          <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            Write to us <ArrowRight className="h-4 w-4" />
          </button>
          <p className="text-xs text-muted-foreground">This opens your email app with your message, addressed to {CONTACT_EMAIL}.</p>
        </form>
      </div>
    </section>
  );
}
