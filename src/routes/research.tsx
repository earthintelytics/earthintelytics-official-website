import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { METHODS, PUBLICATIONS } from "@/lib/services";

const WIDE = "mx-auto w-full max-w-[1400px] px-6 lg:px-12";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research and Studies | Earthintelytics" },
      {
        name: "description",
        content:
          "Published, repeatable methods for land evaluation, greenness classes, EUDR deforestation checks, and radar-optical time series.",
      },
    ],
  }),
  component: ResearchPage,
});

function ResearchPage() {
  return (
    <PageShell>
      <section className="border-b border-border bg-gradient-to-b from-[#F1F8F4] to-background">
        <div className={`${WIDE} py-14 md:py-20`}>
          <p className="text-sm font-semibold text-primary">Research and studies</p>
          <h1 className="mt-2 max-w-3xl font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl md:leading-[1.08]">
            Methods we publish, and stand behind
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Every result we give names its data and its method, so it can be checked. Where we develop a method, we publish it.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className={`${WIDE} grid gap-14 py-14 md:py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]`}>
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">Publications</h2>
            {PUBLICATIONS.map((p) => (
              <figure key={p.ref} className="mt-6 rounded-xl border border-border bg-background p-7">
                <p className="text-xs font-semibold text-primary">Published · {p.year}</p>
                {p.title && <p className="mt-2 font-display text-lg font-semibold text-foreground">{p.title}</p>}
                <p className="mt-2 leading-relaxed text-foreground">{p.about}</p>
                <figcaption className="mt-4 text-sm text-muted-foreground">
                  {p.authors} ({p.year}). <span className="italic">{p.venue}</span>, {p.ref}.
                </figcaption>
              </figure>
            ))}
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">Core analytical methods</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {METHODS.map((m) => (
                <article key={m.title} className="rounded-xl border border-border bg-background p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
                </article>
              ))}
              <a
                href="/consultancy"
                className="group flex items-center justify-between rounded-xl border border-primary/40 bg-primary/5 p-6 font-semibold text-foreground hover:border-primary sm:col-span-2"
              >
                Consultancy, research and studies with us
                <ArrowRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
