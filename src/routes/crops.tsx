import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import {
  Wheat,
  TreePalm,
  Nut,
  Candy,
  Bean,
  Sprout,
  Leaf,
  Citrus,
  Satellite,
  MapPinned,
  LineChart,
  Bluetooth,
} from "lucide-react";
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

export const Route = createFileRoute("/crops")({
  head: () => ({
    meta: [
      { title: "Crops & Site Intelligence · FarmIntelytics" },
      {
        name: "description",
        content:
          "Rice, rubber, cashew, sugarcane, cocoa, palm oil, cassava and maize , site selection, yield forecasting and progress tracking powered by remote sensing.",
      },
      { property: "og:title", content: "FarmIntelytics , Crops Covered" },
      {
        property: "og:description",
        content:
          "From rice paddies to rubber estates , remote sensing pinpoints where to plant and tracks every hectare to harvest.",
      },
      { property: "og:image", content: croplandImg },
    ],
  }),
  component: CropsPage,
});

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

function CropsPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="relative mx-auto grid max-w-7xl gap-6 px-6 py-16 md:grid-cols-5 md:items-center md:py-12">
          <div className="md:col-span-2">
            <SectionHeading
              eyebrow="Crops we cover"
              title="From rice paddies to rubber estates."
              description="FarmIntelytics is crop-aware. Each commodity gets its own growth model, AI detector, and remote-sensing pipeline , so the same platform serves a smallholder cassava farm and a 10,000-hectare palm estate."
            />
          </div>
          <Reveal delay={120} className="md:col-span-3">
            <div className="overflow-hidden rounded-xl border border-border shadow-elevated">
              <img
                src={croplandImg}
                alt="Aerial view of patchwork cropland"
                loading="lazy"
                width={1600}
                height={1067}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Image-led crop grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CROPS.map(({ icon: Icon, name, desc, img }, i) => (
              <Reveal
                key={name}
                as="article"
                delay={(i % 4) * 80}
                className="group relative overflow-hidden rounded-xl border border-border bg-card transition-smooth hover:border-primary/40"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={img}
                    alt={name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-background/90 text-primary backdrop-blur">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="font-display text-2xl font-bold tracking-tight text-background">{name}</h3>
                    <p className="mt-1.5 text-xs leading-normal text-background/80">{desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface/40 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Remote sensing & GeoAI"
            title="Plant smarter. Predict earlier."
            description="We don't just monitor what's there, GeoAI helps you decide where to plant, when to act, and how much you'll harvest."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {STEPS.map(({ icon: Icon, title, desc }, i) => (
              <Reveal
                key={title}
                delay={i * 140}
                className="group rounded-2xl border border-border bg-card p-8 transition-smooth hover:border-primary/40"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary transition-smooth group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-extrabold tracking-[-0.02em] text-foreground">{title}</h3>
                <p className="mt-2 text-sm font-medium text-foreground/70">{desc}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-8 overflow-hidden rounded-xl border border-border bg-white shadow-elevated">
            <img
              src={satImg}
              alt="NDVI vegetation health satellite map showing color-coded crop blocks"
              loading="lazy"
              width={1920}
              height={1080}
              className="h-full w-full object-cover"
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
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-xl border border-border bg-card p-10 shadow-card md:p-14">
            <div className="flex flex-col gap-6 md:flex-row md:items-center">
              <div className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Bluetooth className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-display text-3xl font-bold tracking-tight">Bluetooth weight scale integration</h3>
                <p className="mt-3 text-muted-foreground">
                  Pair any Bluetooth-enabled scale to log harvest weight directly into the platform ,
                  no paperwork, no shrinkage, no disputes. Each weighing is biometrically signed,
                  geo-stamped and linked to the producing block.
                </p>
              </div>
            </div>
            <div className="mt-7 grid gap-3 border-t border-border pt-7 sm:grid-cols-3">
              <div className="flex items-center gap-2 text-sm text-foreground/90">
                <Citrus className="h-4 w-4 text-primary" /> Per-bunch / per-bag capture
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/90">
                <Citrus className="h-4 w-4 text-primary" /> Auto-aggregated to block totals
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/90">
                <Citrus className="h-4 w-4 text-primary" /> Triggers payment instantly
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
