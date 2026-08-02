import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import {
  Map,
  Layers,
  Database,
  Globe,
  BarChart,
  ChevronRight,
} from "lucide-react";
import suitabilityMapImg from "@/assets/real/suitability-map.png";

export const Route = createFileRoute("/suitability")({
  head: () => ({
    meta: [
      { title: "SuitabilityIntelytics | Location & Suitability Intelligence" },
      {
        name: "description",
        content:
          "SuitabilityIntelytics provides vector overlay uploads, analysis-ready data, and multi-criteria spatial analysis for infrastructure, agriculture, and global land planning.",
      },
      { property: "og:title", content: "SuitabilityIntelytics, Location Intelligence Suite" },
      {
        property: "og:description",
        content:
          "Suitability and location intelligence platform with analysis-ready data for infrastructure and global land planning.",
      },
    ],
  }),
  component: SuitabilityPage,
});

const CAPABILITIES = [
  {
    icon: Layers,
    title: "Vector Overlay Uploads",
    desc: "Import your custom shapefiles, GeoJSON, or KML boundaries to analyze suitability specifically within your areas of interest.",
  },
  {
    icon: Globe,
    title: "FAO GAEZ Integration",
    desc: "Visualize standard suitability maps for Africa and globally using FAO GAEZ v4/v5 suitability indices and attainable yield data.",
  },
  {
    icon: Database,
    title: "Analysis-Ready Data",
    desc: "Access robust data pipelines including soil health (SoilFER), climate scenarios, topography, land use, and water access.",
  },
  {
    icon: Map,
    title: "Suitability Heatmaps",
    desc: "Generate multi-criteria spatial heatmaps for restaurant suitability, flood planning, resettlement mapping, crop planning, and infrastructure investment, scoring locations from 0-100.",
  },
];

const WORKFLOW = [
  {
    step: "01",
    title: "Define Region",
    desc: "Upload custom vector bounds or select a region to establish the spatial extent of your analysis.",
  },
  {
    step: "02",
    title: "Select Criteria",
    desc: "Choose your target parameters (e.g. crop type, soil needs, or infrastructure slope/elevation constraints).",
  },
  {
    step: "03",
    title: "Generate Heatmap",
    desc: "Our platform processes the geospatial layers and outputs a comprehensive suitability score and visual heatmap.",
  },
];

function SuitabilityPage() {
  return (
    <PageShell>
      {/* Hero section, white background */}
      <section className="relative overflow-hidden bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-36">
          <Reveal>
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.35em] text-primary">
              SuitabilityIntelytics
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="max-w-4xl font-display text-5xl font-extrabold leading-[0.92] tracking-tight text-foreground md:text-7xl lg:text-[5.5rem]">
              Location intelligence <span className="text-primary">and suitability analysis.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-muted-foreground">
              A comprehensive location intelligence platform with vector overlay uploads and analysis-ready data for restaurant suitability, resettlement mapping, flood planning, crop planning, and infrastructure development.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-4 text-sm font-bold text-primary-foreground transition-smooth hover:bg-primary/90"
              >
                Request Suitability Demo <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-7 py-4 text-sm font-bold text-foreground transition-smooth hover:bg-surface"
              >
                View All Products
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Core Features"
            title="Smarter land planning. Better yields."
            description="SuitabilityIntelytics connects analysis-ready data with powerful visualization tools, allowing you to evaluate land suitability across multiple criteria effortlessly."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {CAPABILITIES.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <Reveal
                  key={cap.title}
                  delay={i * 100}
                  className="group rounded-xl border border-border bg-surface p-8 transition-smooth hover:border-primary/40 hover:shadow-glow"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {cap.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {cap.desc}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visual showcase */}
      <section className="py-28 border-t border-border bg-surface/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-5 md:items-center">
            <Reveal className="md:col-span-2">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-primary">
                Multi-Criteria Analysis
              </span>
              <h2 className="mt-4 font-display text-4xl font-extrabold text-foreground leading-tight">
                Evaluate suitability with unparalleled precision.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Overlay your custom boundaries on top of analysis-ready datasets. We integrate OGC-compliant WMS/WCS endpoints directly from global authorities to power your decisions.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "GAEZ v4/v5 Global Suitability Indices",
                  "SoilFER Sub-Saharan Africa integration",
                  "CropSuite high-resolution crop suitability",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-3 text-sm text-foreground/80">
                    <BarChart className="h-4 w-4 text-primary shrink-0" />
                    {t}
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120} className="md:col-span-3">
              <div className="relative overflow-hidden rounded-xl border border-border">
                <img
                  src={suitabilityMapImg}
                  alt="Suitability analysis heatmap and layer controls"
                  loading="lazy"
                  className="w-full object-cover aspect-video"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-28 bg-background border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="The Workflow"
            title="From data to decision"
            description="Our analysis pipeline ensures you receive actionable insights without dealing with raw geospatial complexity."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {WORKFLOW.map((flow, i) => (
              <Reveal
                key={flow.step}
                delay={i * 120}
                className="relative rounded-xl border border-border bg-surface p-8"
              >
                <span className="absolute right-6 top-6 font-mono text-3xl font-bold text-primary/15">
                  {flow.step}
                </span>
                <h3 className="font-display text-lg font-bold text-foreground pr-10">
                  {flow.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {flow.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-primary py-24 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h3 className="font-display text-3xl font-extrabold text-primary-foreground md:text-5xl">
            Start planning with SuitabilityIntelytics
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Reach out for a demonstration of our suitability mapping capabilities and data integration pipelines.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-primary transition-smooth hover:bg-primary-foreground/90"
            >
              Talk to our geospatial engineers
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
