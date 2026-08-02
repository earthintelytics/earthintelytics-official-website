import heroBg from "@/assets/real/hero-products.jpeg";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "lucide-react";
import farmerPortraitImg from "@/assets/real/farmer-portrait.jpg";
import ndviImg from "@/assets/real/ndvi.jpg";
import suitabilityMapImg from "@/assets/real/suitability-map.png";
import { FAQSection } from "@/components/FAQ";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products | EarthIntelytics" },
      {
        name: "description",
        content: "Discover EarthIntelytics, core products: FarmIntelytics, MineIntelytics, and SuitabilityIntelytics.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-cover bg-center border-b border-border" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url(${heroBg})` }}>
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-12">
          <Reveal>
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.35em] text-primary">
              Our Products
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="max-w-4xl font-display text-4xl sm:text-5xl font-extrabold leading-[0.92] tracking-tight text-white md:text-7xl">
              Specialized suites for <span className="text-primary">critical industries.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-2xl text-lg font-medium leading-normal text-white/80">
              We focus our Earth intelligence platform into three robust products: FarmIntelytics, MineIntelytics, and SuitabilityIntelytics.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            
            {/* FarmIntelytics */}
            <Reveal className="flex flex-col rounded-2xl border border-border overflow-hidden bg-surface hover:shadow-glow transition-smooth">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={farmerPortraitImg}
                  alt="FarmIntelytics"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-block rounded-full bg-emerald-600 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider mb-2">
                    Agriculture & Crops
                  </span>
                  <h2 className="text-3xl font-extrabold font-display">FarmIntelytics</h2>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-base text-muted-foreground leading-normal">
                    A comprehensive agriculture intelligence suite. Includes satellite crop monitoring, vegetation index tracking, AI advisory, and sensor integration for farming operations.
                  </p>
                  
                  <div className="mt-8 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                      <span>Crop Analytics & Vegetation index tracking</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                      <span>Farm Advisor meteorological & crop alerts</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                      <span>Developer API integrations</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <Link
                    to="/modules"
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-smooth hover:bg-primary/95"
                  >
                    Open FarmIntelytics <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* MineIntelytics */}
            <Reveal delay={100} className="flex flex-col rounded-2xl border border-border overflow-hidden bg-surface hover:shadow-glow transition-smooth">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={ndviImg}
                  alt="MineIntelytics"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-block rounded-full bg-emerald-600 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider mb-2">
                    Mining & Resources
                  </span>
                  <h2 className="text-3xl font-extrabold font-display">MineIntelytics</h2>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-base text-muted-foreground leading-normal">
                    Bringing precision and safety to mining operations. Track excavation, tailings dams, and logistics networks in real time from space.
                  </p>
                  
                  <div className="mt-8 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                      <span>Pit & excavation change detection</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                      <span>Tailings dam millimeter displacement tracking</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                      <span>Environmental hazard and perimeter geofencing</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <Link
                    to="/mining"
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-smooth hover:bg-primary/95"
                  >
                    Open MineIntelytics <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* SuitabilityIntelytics */}
            <Reveal delay={200} className="flex flex-col rounded-2xl border border-border overflow-hidden bg-surface hover:shadow-glow transition-smooth">
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={suitabilityMapImg}
                  alt="SuitabilityIntelytics"
                  className="h-full w-full object-cover mix-blend-screen opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-block rounded-full bg-[#1A9E8F] px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider mb-2">
                    Land & Climate
                  </span>
                  <h2 className="text-3xl font-extrabold font-display">SuitabilityIntelytics</h2>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-base text-muted-foreground leading-normal">
                    A suitability analysis platform with vector overlay uploads, analysis-ready data, and integrated FAO suitability maps for global land planning.
                  </p>
                  
                  <div className="mt-8 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>Vector overlay uploads (Shapefiles, GeoJSON)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>FAO GAEZ suitability data integration</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>Multi-criteria spatial analysis & heatmaps</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <Link
                    to="/suitability"
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-smooth hover:bg-primary/95"
                  >
                    Open SuitabilityIntelytics <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      <FAQSection />
    </PageShell>
  );
}
