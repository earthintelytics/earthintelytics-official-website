import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Factory } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { SECTORS } from "@/lib/services";

const WIDE = "mx-auto w-full max-w-[1400px] px-6 lg:px-12";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Earthintelytics" },
      {
        name: "description",
        content:
          "Earthintelytics combines satellite imagery, drone data, field records and spatial analysis into answers people can act on.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <section className="border-b border-border bg-gradient-to-b from-[#F1F8F4] to-background">
        <div className={`${WIDE} py-14 md:py-20`}>
          <p className="text-sm font-semibold text-primary">About us</p>
          <h1 className="mt-2 max-w-3xl font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl md:leading-[1.08]">
            Better information for decisions about land
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Earthintelytics was built on one conviction: the most important decisions about land deserve the best
            possible information. We combine satellite imagery, drone data, field records and careful analysis into
            answers people can act on, built for the realities of Africa and other emerging markets.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Talk to us <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/use-cases"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-surface"
            >
              Explore use cases
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className={`${WIDE} grid gap-12 py-14 md:grid-cols-[1.2fr_1fr] md:py-16`}>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <h2 className="font-display text-2xl font-semibold text-foreground">Built for real operational conditions</h2>
            <p>
              From oil palm and cocoa estates to national restoration observatories, we design software and analytical
              studies that work reliably in the field — including offline mobile workflows, open satellite archives,
              and transparent, peer-reviewed methodology.
            </p>
            <p>
              Every assessment states its data sources, assumptions, and limits clearly so leadership teams, lenders,
              and public agencies can make high-stakes land decisions with confidence.
            </p>
          </div>
          <div className="self-start rounded-xl border border-border p-8">
            <Factory className="h-6 w-6 text-primary" />
            <p className="mt-4 font-display text-lg font-semibold text-foreground">Where we work</p>
            <ul className="mt-4 space-y-2.5">
              {SECTORS.map((s) => (
                <li key={s.id} className="flex gap-2.5 text-foreground">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  {s.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
