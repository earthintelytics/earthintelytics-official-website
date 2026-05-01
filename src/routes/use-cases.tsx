import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Building2, Landmark, HeartHandshake, Users2, Sprout, TrendingUp } from "lucide-react";
import droneImg from "@/assets/real/drone.jpg";

export const Route = createFileRoute("/use-cases")({
  head: () => ({
    meta: [
      { title: "Use Cases · FarmIntelytics" },
      {
        name: "description",
        content:
          "Built for agribusiness, government programs, NGOs and cooperatives. From plantation operations to subsidy verification.",
      },
      { property: "og:title", content: "FarmIntelytics Use Cases" },
      {
        property: "og:description",
        content: "How agribusinesses, governments, NGOs and cooperatives deploy FarmIntelytics.",
      },
      { property: "og:image", content: droneImg },
    ],
  }),
  component: UseCasesPage,
});

const CASES = [
  {
    icon: Building2,
    title: "Agribusiness & Plantations",
    desc: "Monitor large-scale palm oil and cocoa estates. Verify every shift, geofence every block, automate payroll, track every truck out.",
    metrics: [
      ["~30%", "labor cost recovered"],
      ["100%", "geo-verified work"],
    ],
  },
  {
    icon: Landmark,
    title: "Government Programs",
    desc: "Track subsidies, fertilizer distribution and beneficiary verification. End ghost beneficiaries with biometric enrollment.",
    metrics: [
      ["1:1", "biometric to beneficiary"],
      ["Audit", "ready by default"],
    ],
  },
  {
    icon: HeartHandshake,
    title: "NGOs & Development",
    desc: "Verify program impact with geo-tagged evidence. Generate funder-ready reports automatically from field activity.",
    metrics: [
      ["Real-time", "impact reporting"],
      ["GPS", "evidence trail"],
    ],
  },
  {
    icon: Users2,
    title: "Farmer Cooperatives",
    desc: "Manage farmer registries, aggregate produce, settle payments digitally. Build credit history from verified activity.",
    metrics: [
      ["Wallets", "for every member"],
      ["Credit", "score from activity"],
    ],
  },
];

const FUTURE = [
  { icon: TrendingUp, t: "Predictive yield modeling", d: "Forecast harvest from spatial + activity data." },
  { icon: Sprout, t: "Carbon & climate reporting", d: "Quantify carbon outcomes for credit markets." },
  { icon: Building2, t: "Embedded finance", d: "Loans and insurance underwritten on verified activity." },
  { icon: HeartHandshake, t: "Marketplace integration", d: "Direct route from verified farms to buyers." },
];

function UseCasesPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-hero noise">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-2 md:items-center md:py-32">
          <SectionHeading
            eyebrow="Who it's for"
            title="From plantations to ministries , one platform."
            description="FarmIntelytics adapts to the workflow, crops and compliance requirements of the organisation deploying it."
          />
          <div className="relative overflow-hidden rounded-2xl border border-border shadow-elevated">
            <img
              src={droneImg}
              alt="Drone over palm oil plantation"
              loading="lazy"
              width={1280}
              height={960}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-5 md:grid-cols-2">
            {CASES.map(({ icon: Icon, title, desc, metrics }, i) => (
              <Reveal
                key={title}
                as="article"
                delay={(i % 2) * 130}
                className="group hover-lift relative overflow-hidden rounded-2xl border border-border bg-gradient-card p-7 shadow-card hover:border-primary/40"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-smooth group-hover:bg-gradient-primary group-hover:text-primary-foreground group-hover:rotate-6 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-5">
                  {metrics.map(([v, l]) => (
                    <div key={l}>
                      <div className="font-display text-2xl font-semibold text-gradient">{v}</div>
                      <div className="mt-0.5 text-[11px] uppercase tracking-widest text-muted-foreground">
                        {l}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/50 bg-surface/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="What's next"
            title="The roadmap beyond v1."
            description="As verified activity data grows, the platform unlocks entirely new financial and climate use cases."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {FUTURE.map(({ icon: Icon, t, d }, i) => (
              <Reveal
                key={t}
                delay={i * 100}
                className="hover-lift rounded-2xl border border-border bg-gradient-card p-6 shadow-card hover:border-primary/40"
              >
                <Icon className="mb-3 h-5 w-5 text-primary" />
                <h3 className="font-display text-base font-semibold">{t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
