import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, CloudSun, Droplets, Layers, Leaf, Map as MapIcon, Mountain, Satellite, Sprout, TreePine, Wheat } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import heroImg from "@/assets/real/hero-home.webp";
import farmImg from "@/assets/photos/oilpalm.webp";
import gwonImg from "@/assets/real/gwon-map.webp";

// Real photographs (credited in the footer); the AI-made picture is used only in the hero above.
import p_agriculture from "@/assets/photos/agriculture.webp";
import p_forestry from "@/assets/photos/forestry.webp";
import p_environment from "@/assets/photos/environment.webp";
import p_geology from "@/assets/photos/geology.webp";
import p_water from "@/assets/photos/water.webp";
import p_climate from "@/assets/photos/climate.webp";
import p_planning from "@/assets/photos/planning.webp";
import p_research from "@/assets/photos/research.webp";
import p_farmland from "@/assets/photos/farmland.webp";
const PHOTOS: Record<string, string> = { agriculture: p_agriculture, forestry: p_forestry, environment: p_environment, geology: p_geology, water: p_water, climate: p_climate, planning: p_planning, research: p_research, farmland: p_farmland };
const photo = (k: string) => PHOTOS[k];
import { PRODUCT_LINKS } from "@/lib/site";
import { HOW_WE_WORK, PILLARS, SECTORS } from "@/lib/services";

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
          "Earthintelytics turns satellite, drone and field data into answers about land, across agriculture, forestry and carbon, the environment, geology, water, climate and planning: assessments, research and studies, and platforms.",
      },
    ],
  }),
  component: HomePage,
});

const SECTOR_ICON: Record<string, typeof Leaf> = {
  agriculture: Wheat, forestry: TreePine, environment: Sprout, geology: Mountain, water: Droplets, climate: CloudSun, planning: MapIcon,
};
const PILLAR_ICON = [Satellite, Layers, Layers];
const PILLAR_PHOTO = ["gwon", "research", "farmland"];

const PLATFORM_POINTS = [
  "Your own platform, with your name, your logo and your colours",
  "Built on our engine: satellite and climate data, maps, analysis, advice, reports and APIs",
  "Your data and your users, with sign-in, roles and alerts",
  "Hosted, kept up to date and supported by our team",
];

const FARM_POINTS = [
  "FFB Counter: offline AI bunch counting and pre-payroll verification",
  "Crop health and growth from satellite, block by block",
  "Land suitability: 16-crop FAO evaluation before planting",
  "EUDR deforestation checks, water advice and APIs",
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
              the environment, geology, water, climate and planning.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#products" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                Explore FarmIntelytics <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#what-we-do" className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-surface">
                What we do
              </a>
              <a href="/contact" className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-surface">
                Talk to us
              </a>
            </div>
          </div>
          {/* Every sector, one click away */}
          <div className="mt-14 grid max-w-3xl grid-cols-2 gap-2 sm:grid-cols-3">
            {SECTORS.map((s) => {
              const Icon = SECTOR_ICON[s.id] || Leaf;
              return (
                <a key={s.id} href={`/use-cases#${s.id}`} className="group flex items-center gap-2.5 rounded-lg border border-border bg-background/95 px-3.5 py-3 text-sm font-medium text-foreground hover:border-primary">
                  <Icon className="h-4 w-4 shrink-0 text-primary" />{s.name}
                </a>
              );
            })}
          </div>
        </div>
        <a href="#products" aria-label="Scroll to see FarmIntelytics and our prototypes"
           className="absolute bottom-0 left-1/2 z-10 hidden -translate-x-1/2 translate-y-1/2 flex-col items-center rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground sm:flex">
          Scroll to see more <ChevronDown className="h-4 w-4 animate-bounce motion-reduce:animate-none" />
        </a>
      </section>

      {/* Our platform: FarmIntelytics (first section after Hero so visitors see our product immediately) */}
      <section id="products" className="scroll-mt-20 border-b border-border bg-gradient-to-b from-[#F1F8F4] to-background">
        <div className={`${WIDE} grid items-center gap-12 py-14 md:grid-cols-2 md:gap-12 md:py-16`}>
          <img src={farmImg} alt="An oil palm plantation" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover" />
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

      {/* Platforms we build and run (GreenWall Observatory Nigeria prototype right after FarmIntelytics) */}
      <section id="platforms" className="scroll-mt-20 border-b border-border">
        <div className={`${WIDE} grid items-center gap-12 py-14 md:grid-cols-2 md:gap-12 md:py-16`}>
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
            <a href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
              Talk to us about your platform <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* What we do: three equal pillars */}
      <section id="what-we-do" className="scroll-mt-20 border-b border-border">
        <div className={`${WIDE} py-14 md:py-16`}>
          <Kicker>What we do</Kicker>
          <H2>From a single site to a whole region, the answers land needs</H2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {PILLARS.map((p, i) => {
              const Icon = PILLAR_ICON[i];
              return (
                <article key={p.title} className="overflow-hidden rounded-xl border border-border bg-background">
                  <img src={i === 0 ? gwonImg : photo(PILLAR_PHOTO[i])} alt="" loading="lazy" className="h-36 w-full object-cover" />
                  <div className="p-8">
                  <Icon className="h-7 w-7 text-primary" />
                  <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{p.text}</p>
                  <ul className="mt-6 space-y-2.5">
                    {p.points?.map((x) => <li key={x} className="flex gap-2.5 text-sm text-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{x}</li>)}
                  </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="border-b border-border">
        <div className={`${WIDE} py-14 md:py-16`}>
          <Kicker>How we work</Kicker>
          <H2>From your question to a decision</H2>
          <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
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
    </PageShell>
  );
}
