import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, ArrowUpRight, Check, Mail } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import heroImg from "@/assets/real/hero-home.webp";
import farmImg from "@/assets/real/palm-plantation.webp";
import { CONTACT_EMAIL, PRODUCT_LINKS } from "@/lib/site";
import { AGRICULTURE, OTHER_SECTORS, SECTORS } from "@/lib/services";

const WIDE = "mx-auto w-full max-w-[1400px] px-6 lg:px-12";

/**
 * The Earthintelytics landing page: who we are, our product (FarmIntelytics), our consultancy and research (in
 * agriculture, and Earth-observation work across other sectors; in full on /consultancy), and how to reach us. Full-width
 * sections, plain words, white surfaces, no effects.
 */
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Earthintelytics | Spatial intelligence and Earth observation" },
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

// ── Page ──────────────────────────────────────────────────────────────────────────────────────────
function HomePage() {
  return (
    <PageShell>
      {/* Hero: one full-width image of the Earth; a white fade on the left carries the words, aligned with the logo */}
      <section className="relative overflow-hidden border-b border-border">
        <img src={heroImg} alt="A coastline, forest and farmland seen from space" fetchPriority="high"
             className="absolute inset-0 h-full w-full object-cover object-[70%_50%]" />
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,#fff_0%,#fff_55%,rgba(255,255,255,0.75)_70%,rgba(255,255,255,0)_92%)] md:bg-[linear-gradient(90deg,#fff_0%,#fff_34%,rgba(255,255,255,0.85)_46%,rgba(255,255,255,0)_66%)]" />
        <div className={`${WIDE} relative flex min-h-[88vh] flex-col justify-center py-16`}>
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-primary">Earthintelytics</p>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-foreground md:text-6xl">
              Spatial intelligence and Earth observation.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We turn satellite, drone and field data into answers about land: through FarmIntelytics, our platform for
              farms, and through consultancy, research and Earth-observation assessments across agriculture, forestry,
              mining, water and the environment.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#products" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                FarmIntelytics <ArrowRight className="h-4 w-4" />
              </a>
              <a href="/consultancy" className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-surface">
                Consultancy and research
              </a>
            </div>
          </div>
          {/* The three things we do, one click away */}
          <div className="mt-14 grid max-w-4xl gap-3 sm:grid-cols-3">
            {[
              { href: "#products", title: "FarmIntelytics", text: "Our agriculture platform" },
              { href: "/consultancy#agriculture", title: "Consultancy and research", text: "Studies, suitability, EUDR, training" },
              { href: "/consultancy#sectors", title: "Earth observation", text: "Assessments across sectors" },
            ].map((c) => (
              <a key={c.title} href={c.href} className="group rounded-xl border border-border bg-background/95 p-5 hover:border-primary">
                <p className="flex items-center justify-between font-display text-base font-semibold text-foreground">{c.title}<ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5" /></p>
                <p className="mt-1 text-sm text-muted-foreground">{c.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Our product: FarmIntelytics */}
      <section id="products" className="scroll-mt-20 border-b border-border">
        <div className={`${WIDE} grid items-center gap-10 py-16 md:grid-cols-2 md:gap-16 md:py-24`}>
          <img src={farmImg} alt="An oil palm plantation from the air" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover" />
          <div>
            <p className="text-sm font-semibold text-primary">Our product</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">FarmIntelytics</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Satellite imagery turned into plain answers for farms, estates and co-operatives, in one platform.
            </p>
            <ul className="mt-5 space-y-2.5">
              {FARM_POINTS.map((x) => (
                <li key={x} className="flex gap-3 text-foreground"><Check className="mt-1 h-4 w-4 shrink-0 text-primary" />{x}</li>
              ))}
            </ul>
            <a href={PRODUCT_LINKS.farmintelytics} {...(PRODUCT_LINKS.farmintelytics.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
               className="mt-7 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
              {PRODUCT_LINKS.farmintelytics.startsWith("http") ? "Visit FarmIntelytics" : "Ask about FarmIntelytics"} <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Consultancy and research: a preview; the full list is on /consultancy */}
      <section id="services" className="scroll-mt-20 border-b border-border bg-surface">
        <div className={`${WIDE} py-16 md:py-24`}>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold text-primary">Consultancy and research</p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Studies, assessments and systems, built with you</h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">Agriculture first, and Earth-observation work across other sectors, including mining.</p>
            </div>
            <a href="/consultancy" className="inline-flex shrink-0 items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
              All consultancy and research <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {[...AGRICULTURE.slice(0, 3), OTHER_SECTORS[0]].map((s) => (
              <a key={s.title} href="/consultancy" className="group rounded-xl border border-border bg-background p-7 hover:border-primary">
                <h3 className="font-display text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">Read more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-20 border-b border-border">
        <div className={`${WIDE} grid gap-10 py-16 md:grid-cols-[1.2fr_1fr] md:py-24`}>
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
                <li key={s} className="rounded-md border border-border px-3 py-1.5 text-sm text-muted-foreground">{s}</li>
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
      <div className={`${WIDE} grid gap-10 py-16 md:grid-cols-2 md:py-24`}>
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
