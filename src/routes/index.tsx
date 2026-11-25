import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, ArrowUpRight, BookOpen, Check, ChevronDown, CloudRain, Droplets, Factory, Layers, Leaf, Mail, Map as MapIcon, Mountain, Satellite, TreePine, Wheat } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import heroImg from "@/assets/real/hero-home.webp";
import farmImg from "@/assets/real/palm-plantation.webp";
import gwonImg from "@/assets/real/gwon-map.webp";
import { CONTACT_EMAIL, PRODUCT_LINKS } from "@/lib/site";
import { HOW_WE_WORK, METHODS, PILLARS, PUBLICATIONS, SECTORS } from "@/lib/services";

const WIDE = "mx-auto w-full max-w-[1400px] px-6 lg:px-12";

/**
 * The Earthintelytics landing page: spatial intelligence and Earth observation across sectors (agriculture is one
 * of them), research and studies, and platforms, with FarmIntelytics as our own product. Full-width sections, plain
 * words, white surfaces. No invented clients, partners, projects or figures.
 */
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Earthintelytics | Spatial intelligence and Earth observation" },
      {
        name: "description",
        content:
          "Earthintelytics turns satellite, drone and field data into answers about land, across agriculture, forestry and carbon, mining, water, climate and planning: assessments, research and studies, and platforms.",
      },
    ],
  }),
  component: HomePage,
});

const SECTOR_ICON: Record<string, typeof Leaf> = {
  agriculture: Wheat, forestry: TreePine, mining: Mountain, water: Droplets, climate: CloudRain, planning: MapIcon,
};
const PILLAR_ICON = [Satellite, BookOpen, Layers];

const PLATFORM_POINTS = [
  "Your own platform, with your name, your logo and your colours",
  "Built on our engine: satellite and climate data, maps, analysis, advice, reports and APIs",
  "Your data and your users, with sign-in, roles and alerts",
  "Hosted, kept up to date and supported by our team",
];

const FARM_POINTS = [
  "Crop health and growth from satellite, block by block",
  "Water, weather and irrigation advice",
  "Land suitability: which crop fits where",
  "EUDR deforestation checks, and an API for your own systems",
];

function Kicker({ children }: { children: string }) {
  return <p className="text-sm font-semibold text-primary">{children}</p>;
}

function H2({ children }: { children: string }) {
  return <h2 className="mt-2 max-w-3xl font-display text-3xl font-semibold tracking-tight text-foreground md:text-5xl md:leading-[1.08]">{children}</h2>;
}

function HomePage() {
  return (
    <PageShell>
      {/* Hero: the whole screen, the Earth behind; the words on a white fade, aligned with the logo */}
      <section className="relative overflow-hidden border-b border-border">
        <img src={heroImg} alt="Coast, forest, farmland and a mine seen from space" fetchPriority="high"
             className="absolute inset-0 h-full w-full object-cover object-[70%_50%]" />
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,#fff_0%,#fff_58%,rgba(255,255,255,0.78)_72%,rgba(255,255,255,0)_94%)] md:bg-[linear-gradient(90deg,#fff_0%,#fff_36%,rgba(255,255,255,0.86)_48%,rgba(255,255,255,0)_68%)]" />
        <div className={`${WIDE} relative flex min-h-[calc(100vh-4rem)] flex-col justify-center py-16`}>
          <div className="max-w-2xl">
            <Kicker>Earthintelytics</Kicker>
            <h1 className="mt-3 font-display text-5xl font-semibold leading-[1.04] tracking-tight text-foreground md:text-7xl">
              Spatial intelligence and Earth observation.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              We turn satellite, drone and field data into answers about land, for agriculture, forestry and carbon,
              mining, water, climate and planning.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#what-we-do" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                What we do <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-surface">
                Talk to us
              </a>
            </div>
          </div>
          {/* Every sector, one click away */}
          <div className="mt-14 grid max-w-3xl grid-cols-2 gap-2 sm:grid-cols-3">
            {SECTORS.map((s) => {
              const Icon = SECTOR_ICON[s.id] || Leaf;
              return (
                <a key={s.id} href={`#${s.id}`} className="group flex items-center gap-2.5 rounded-lg border border-border bg-background/95 px-3.5 py-3 text-sm font-medium text-foreground hover:border-primary">
                  <Icon className="h-4 w-4 shrink-0 text-primary" />{s.name}
                </a>
              );
            })}
          </div>
        </div>
        <a href="#what-we-do" aria-label="Scroll to see more"
           className="absolute bottom-0 left-1/2 z-10 hidden -translate-x-1/2 translate-y-1/2 flex-col items-center rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground sm:flex">
          Scroll to see more <ChevronDown className="h-4 w-4 animate-bounce motion-reduce:animate-none" />
        </a>
      </section>

      {/* What we do: three equal pillars */}
      <section id="what-we-do" className="scroll-mt-20 border-b border-border">
        <div className={`${WIDE} py-20 md:py-28`}>
          <Kicker>What we do</Kicker>
          <H2>From a single site to a whole region, the answers land needs</H2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PILLARS.map((p, i) => {
              const Icon = PILLAR_ICON[i];
              return (
                <article key={p.title} className="rounded-xl border border-border p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"><Icon className="h-6 w-6" /></span>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{p.text}</p>
                  <ul className="mt-6 space-y-2.5">
                    {p.points?.map((x) => <li key={x} className="flex gap-2.5 text-sm text-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{x}</li>)}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use cases, sector by sector */}
      <section id="use-cases" className="scroll-mt-20 border-b border-border bg-surface">
        <div className={`${WIDE} py-20 md:py-28`}>
          <Kicker>Use cases</Kicker>
          <H2>One way of seeing land, many sectors</H2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">The same satellites, methods and care, applied to the question in front of you.</p>
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {SECTORS.map((s) => {
              const Icon = SECTOR_ICON[s.id] || Leaf;
              return (
                <article key={s.id} id={s.id} className="scroll-mt-24 rounded-xl border border-border bg-background p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary"><Icon className="h-5 w-5" /></span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">{s.name}</h3>
                      <p className="text-sm text-muted-foreground">{s.text}</p>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-2.5 border-t border-border pt-5">
                    {s.uses.map((u) => <li key={u} className="flex gap-2.5 text-sm text-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{u}</li>)}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="border-b border-border">
        <div className={`${WIDE} py-20 md:py-28`}>
          <Kicker>How we work</Kicker>
          <H2>From your question to a decision</H2>
          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {HOW_WE_WORK.map((s, i) => (
              <li key={s.title} className="border-t-2 border-primary pt-5">
                <span className="font-display text-sm font-semibold text-primary">Step {i + 1}</span>
                <h3 className="mt-2 font-display text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Research and studies */}
      <section id="research" className="scroll-mt-20 border-b border-border bg-surface">
        <div className={`${WIDE} grid gap-14 py-20 md:py-28 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]`}>
          <div>
            <Kicker>Research and studies</Kicker>
            <H2>Methods we publish, and stand behind</H2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Every result we give names its data and its method, so it can be checked. Where we develop a method, we publish it.
            </p>
            {PUBLICATIONS.map((p) => (
              <figure key={p.ref} className="mt-10 rounded-xl border border-border bg-background p-7">
                <p className="text-xs font-semibold text-primary">Published · {p.year}</p>
                {p.title && <p className="mt-2 font-display text-lg font-semibold text-foreground">{p.title}</p>}
                <p className="mt-2 leading-relaxed text-foreground">{p.about}</p>
                <figcaption className="mt-4 text-sm text-muted-foreground">
                  {p.authors} ({p.year}). <span className="italic">{p.venue}</span>, {p.ref}.
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:pt-10">
            {METHODS.map((m) => (
              <article key={m.title} className="rounded-xl border border-border bg-background p-6">
                <h3 className="font-display text-lg font-semibold text-foreground">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
              </article>
            ))}
            <a href="/consultancy" className="group flex items-center justify-between rounded-xl border border-primary/40 bg-primary/5 p-6 font-semibold text-foreground hover:border-primary sm:col-span-2">
              Consultancy, research and studies with us <ArrowRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Our platform: FarmIntelytics */}
      <section id="products" className="scroll-mt-20 border-b border-border">
        <div className={`${WIDE} grid items-center gap-12 py-20 md:grid-cols-2 md:gap-16 md:py-28`}>
          <img src={farmImg} alt="An oil palm plantation from the air" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover" />
          <div>
            <Kicker>Our platform for agriculture</Kicker>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground md:text-5xl">FarmIntelytics</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Our spatial intelligence, built into one platform for farms, estates and co-operatives.
            </p>
            <ul className="mt-6 space-y-3">
              {FARM_POINTS.map((x) => (
                <li key={x} className="flex gap-3 text-foreground"><Check className="mt-1 h-4 w-4 shrink-0 text-primary" />{x}</li>
              ))}
            </ul>
            <a href={PRODUCT_LINKS.farmintelytics} {...(PRODUCT_LINKS.farmintelytics.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
               className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
              Visit FarmIntelytics <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Platforms we build and run */}
      <section id="platforms" className="scroll-mt-20 border-b border-border">
        <div className={`${WIDE} grid items-center gap-12 py-20 md:grid-cols-2 md:gap-16 md:py-28`}>
          <div className="md:order-2">
            <img src={gwonImg} alt="The GreenWall Observatory Nigeria map: vegetation across the eleven Great Green Wall frontline states" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover" />
            <p className="mt-3 text-sm text-muted-foreground">GreenWall Observatory Nigeria: a platform prototype we built for the National Agency for the Great Green Wall.</p>
          </div>
          <div className="md:order-1">
            <Kicker>Platforms we build and run</Kicker>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground md:text-5xl">Your own platform, managed by us</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              For agencies, programmes and companies that need a platform of their own, we design, build, host and
              manage it for you, on the same engine that powers FarmIntelytics.
            </p>
            <ul className="mt-6 space-y-3">
              {PLATFORM_POINTS.map((x) => (
                <li key={x} className="flex gap-3 text-foreground"><Check className="mt-1 h-4 w-4 shrink-0 text-primary" />{x}</li>
              ))}
            </ul>
            <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
              Talk to us about your platform <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-20 border-b border-border">
        <div className={`${WIDE} grid gap-12 py-20 md:grid-cols-[1.2fr_1fr] md:py-28`}>
          <div>
            <Kicker>About us</Kicker>
            <H2>Better information for decisions about land</H2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Earthintelytics was built on one conviction: the most important decisions about land deserve the best
              possible information. We combine satellite imagery, drone data, field records and careful analysis into
              answers people can act on, built for the realities of Africa and other emerging markets.
            </p>
          </div>
          <div className="rounded-xl border border-border p-8 self-start">
            <Factory className="h-6 w-6 text-primary" />
            <p className="mt-4 font-display text-lg font-semibold text-foreground">Where we work</p>
            <ul className="mt-4 space-y-2.5">
              {SECTORS.map((s) => <li key={s.id} className="flex gap-2.5 text-foreground"><Check className="mt-1 h-4 w-4 shrink-0 text-primary" />{s.name}</li>)}
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
    <section id="contact" className="scroll-mt-20 bg-surface">
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
