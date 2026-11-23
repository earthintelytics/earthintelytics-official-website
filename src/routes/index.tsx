import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import heroImg from "@/assets/real/hero-home.jpeg";
import farmImg from "@/assets/real/palm-plantation.jpg";
import mineImg from "@/assets/real/mine-satellite.png";
import { CONTACT_EMAIL, PRODUCT_LINKS } from "@/lib/site";

/**
 * The Earthintelytics landing page: who we are, our products (each with its own site), our services and
 * consultancy, and how to reach us. One page, plain words, white surfaces, no effects.
 */
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Earthintelytics | Earth intelligence for agriculture and mining" },
      {
        name: "description",
        content:
          "Earthintelytics builds Earth-observation products (FarmIntelytics, MineIntelytics) and provides geospatial services and consultancy for agriculture, mining and the environment.",
      },
    ],
  }),
  component: HomePage,
});

// ── Content ───────────────────────────────────────────────────────────────────────────────────────
const PRODUCTS = [
  {
    name: "FarmIntelytics",
    tag: "Agriculture",
    text: "Crop health and growth from satellite, water and weather advice, land suitability, smallholder and co-operative management, and EUDR deforestation checks, including an API for your own systems.",
    href: PRODUCT_LINKS.farmintelytics,
    img: farmImg,
  },
  {
    name: "MineIntelytics",
    tag: "Mining",
    text: "Site monitoring for mining operations: land change, surface disturbance and rehabilitation, read from satellite and drone imagery.",
    href: PRODUCT_LINKS.mineintelytics,
    img: mineImg,
  },
];

const SERVICES = [
  { title: "Remote sensing and GIS studies", text: "Satellite and drone mapping, land cover and change over time, for a site, a region or a supply chain." },
  { title: "Land suitability and site selection", text: "Where a crop or project fits best, from terrain, soil, rainfall and water, by the FAO land-evaluation method." },
  { title: "EUDR and deforestation due diligence", text: "Mapping production plots, checking them against the 2020 cut-off, and preparing the geolocation files buyers ask for." },
  { title: "Farm and estate monitoring set-up", text: "Boundaries, blocks and alerts set up for your estates, with your team trained to use them." },
  { title: "Mining and environmental monitoring", text: "Tracking disturbance, rehabilitation and the land around a site, with reports for regulators and investors." },
  { title: "Custom geospatial platforms", text: "Dashboards, data pipelines and integrations built around your own data and processes." },
];

const SECTORS = ["Agriculture", "Land suitability and planning", "Forest and carbon", "Water and hydrology", "Mining", "Climate and environment"];

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
              Earth intelligence for agriculture and mining.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              We build products that turn satellite and drone imagery into clear answers, and we work with organisations
              as geospatial consultants on their land, crops, sites and supply chains.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#products" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                Our products <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-surface">
                Talk to us
              </a>
            </div>
          </div>
          <img src={heroImg} alt="A coastline seen from space" className="aspect-[4/3] w-full rounded-xl object-cover" />
        </div>
      </section>

      {/* Products */}
      <section id="products" className="scroll-mt-20 border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Products</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">Each product has its own site, where you can sign in, read how it works and contact its team.</p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {PRODUCTS.map((p) => (
              <article key={p.name} className="overflow-hidden rounded-xl border border-border bg-background">
                <img src={p.img} alt="" loading="lazy" className="aspect-[16/9] w-full object-cover" />
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{p.tag}</p>
                  <h3 className="mt-1 font-display text-2xl font-semibold text-foreground">{p.name}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{p.text}</p>
                  <a href={p.href} {...(p.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                     className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
                    {p.href.startsWith("http") ? `Visit ${p.name}` : `Ask about ${p.name}`} <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services and consultancy */}
      <section id="services" className="scroll-mt-20 border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Services and consultancy</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">When you need a study, a set-up or a system built around your work, our team does it with you.</p>
          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div key={s.title}>
                <h3 className="font-display text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-20 border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.2fr_1fr] md:py-20">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">About us</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Earthintelytics was built on one conviction: the most important decisions about land, in agriculture, mining
              and the environment, deserve the best possible information. We combine satellite imagery, drone data, field
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
