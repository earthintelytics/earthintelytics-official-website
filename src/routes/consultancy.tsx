import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import heroImg from "@/assets/real/hero-home.webp";
import { EO_SERVICES, HOW_WE_WORK, SECTOR_NAMES, SECTOR_SERVICES, type Service } from "@/lib/services";
import { CONTACT_EMAIL } from "@/lib/site";

/** /consultancy: our consultancy and research, in agriculture and across other sectors, and how we work. */
export const Route = createFileRoute("/consultancy")({
  head: () => ({
    meta: [
      { title: "Consultancy and research | Earthintelytics" },
      { name: "description", content: "Agricultural research, land suitability, monitoring, EUDR due diligence and training; Earth-observation assessments, GIS and geospatial systems across sectors." },
    ],
  }),
  component: ConsultancyPage,
});

const WIDE = "mx-auto w-full max-w-[1400px] px-6 lg:px-12";

function ConsultancyPage() {
  return (
    <PageShell>
      {/* Hero, the full width of the screen */}
      <section className="relative overflow-hidden border-b border-border">
        <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover object-[70%_50%]" />
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,#fff_0%,#fff_60%,rgba(255,255,255,0.8)_75%,rgba(255,255,255,0)_95%)] md:bg-[linear-gradient(90deg,#fff_0%,#fff_36%,rgba(255,255,255,0.85)_48%,rgba(255,255,255,0)_68%)]" />
        <div className={`${WIDE} relative flex min-h-[72vh] items-center py-16`}>
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-primary">Consultancy and research</p>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-6xl">
              Answers about land, from people who read it every day.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Studies, assessments and systems built with you: across agriculture, forestry and carbon, mining, water,
              climate and planning.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#sectors" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                What we do <ArrowRight className="h-4 w-4" />
              </a>
              <a href="/#contact" className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-surface">
                Talk to us
              </a>
            </div>
            <p className="mt-10 text-sm text-muted-foreground"><span className="font-semibold text-foreground">Sectors: </span>{SECTOR_NAMES.join(" · ")}</p>
          </div>
        </div>
      </section>

      <ServiceBlock id="sectors" kicker="Across every sector" title="Earth observation, spatial analysis and geospatial systems" items={EO_SERVICES} />
      <ServiceBlock id="agriculture" kicker="Studies, suitability and due diligence" title="Research and studies for land, crops and supply chains" items={SECTOR_SERVICES} tinted />

      {/* How we work */}
      <section className="border-b border-border">
        <div className={`${WIDE} py-16 md:py-24`}>
          <p className="text-sm font-semibold text-primary">How we work</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">From your question to a decision</h2>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {HOW_WE_WORK.map((s, i) => (
              <li key={s.title} className="rounded-xl border border-border p-6">
                <span className="font-display text-3xl font-semibold text-primary">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-primary text-primary-foreground">
        <div className={`${WIDE} flex flex-col gap-6 py-14 md:flex-row md:items-center md:justify-between`}>
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight">Have a question about your land?</h2>
            <p className="mt-2 opacity-90">Tell us what you need to know; we reply by email, at {CONTACT_EMAIL}.</p>
          </div>
          <a href="/#contact" className="inline-flex shrink-0 items-center gap-2 rounded-md bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-surface">
            Talk to us <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </PageShell>
  );
}

function ServiceBlock({ id, kicker, title, items, tinted = false }: { id: string; kicker: string; title: string; items: Service[]; tinted?: boolean }) {
  return (
    <section id={id} className={`scroll-mt-20 border-b border-border ${tinted ? "bg-surface" : ""}`}>
      <div className={`${WIDE} py-16 md:py-24`}>
        <p className="text-sm font-semibold text-primary">{kicker}</p>
        <h2 className="mt-2 max-w-3xl font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">{title}</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((s) => (
            <article key={s.title} className="rounded-xl border border-border bg-background p-7">
              <h3 className="font-display text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              {s.points && (
                <ul className="mt-5 space-y-2">
                  {s.points.map((p) => <li key={p} className="flex gap-2.5 text-sm text-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{p}</li>)}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
