import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, CloudSun, Droplets, Layers, Leaf, Map as MapIcon, Mountain, Sprout, TreePine, Wheat } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { SECTORS } from "@/lib/services";

import p_agriculture from "@/assets/photos/agriculture.webp";
import p_forestry from "@/assets/photos/forestry.webp";
import p_environment from "@/assets/photos/environment.webp";
import p_geology from "@/assets/photos/geology.webp";
import p_water from "@/assets/photos/water.webp";
import p_climate from "@/assets/photos/climate.webp";
import p_planning from "@/assets/photos/planning.webp";

const PHOTOS: Record<string, string> = {
  agriculture: p_agriculture,
  forestry: p_forestry,
  environment: p_environment,
  geology: p_geology,
  water: p_water,
  climate: p_climate,
  planning: p_planning,
};

const SECTOR_ICON: Record<string, typeof Leaf> = {
  agriculture: Wheat,
  forestry: TreePine,
  environment: Sprout,
  geology: Mountain,
  water: Droplets,
  climate: CloudSun,
  planning: MapIcon,
};

const WIDE = "mx-auto w-full max-w-[1400px] px-6 lg:px-12";

export const Route = createFileRoute("/use-cases")({
  head: () => ({
    meta: [
      { title: "Use Cases | Earthintelytics" },
      {
        name: "description",
        content:
          "How Earthintelytics applies satellite, drone and field intelligence across agriculture, forestry and carbon, environment, geology, water, climate and land planning.",
      },
    ],
  }),
  component: UseCasesPage,
});

function UseCasesPage() {
  return (
    <PageShell>
      <section className="border-b border-border bg-gradient-to-b from-[#F1F8F4] to-background">
        <div className={`${WIDE} py-14 md:py-20`}>
          <p className="text-sm font-semibold text-primary">Use cases</p>
          <h1 className="mt-2 max-w-3xl font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl md:leading-[1.08]">
            One way of seeing land, many sectors
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            The same satellites, methods and care, applied to the question in front of you.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-[#FBF8F1]">
        <div className={`${WIDE} py-14 md:py-16`}>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {SECTORS.map((s) => {
              const Icon = SECTOR_ICON[s.id] || Leaf;
              return (
                <article key={s.id} id={s.id} className="scroll-mt-24 overflow-hidden rounded-xl border border-border bg-background">
                  <div className="relative h-36">
                    <img src={PHOTOS[s.photo]} alt={s.name} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-start gap-2.5">
                      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <h2 className="font-display text-base font-semibold text-foreground">{s.name}</h2>
                        <p className="text-xs text-muted-foreground">{s.text}</p>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-1.5 border-t border-border pt-3">
                      {s.uses.map((u) => (
                        <li key={u} className="flex gap-2 text-[13px] leading-snug text-foreground">
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                          {u}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}

            <a href="/contact" className="group flex flex-col justify-between rounded-xl border border-border bg-background p-6">
              <div>
                <Layers className="h-6 w-6 text-primary" />
                <h2 className="mt-4 font-display text-lg font-semibold text-foreground">Your sector</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Land questions come from everywhere: energy, health, insurance, disaster response. Tell us yours and we will show you what the data can answer.
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Talk to us <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
