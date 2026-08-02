import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { Terminal, Database, Webhook, Shield, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/api-docs")({
  head: () => ({
    meta: [
      { title: "API Documentation | EarthIntelytics" },
      {
        name: "description",
        content: "Integrate EarthIntelytics data into your own platforms. API documentation coming soon.",
      },
    ],
  }),
  component: ApiDocsPage,
});

const ENDPOINTS = [
  { name: "/v1/imagery/ndvi", desc: "Retrieve multi-spectral vegetation indices for a given polygon bounding box.", method: "GET" },
  { name: "/v1/radar/displacement", desc: "Fetch time-series SAR displacement metrics for infrastructure.", method: "GET" },
  { name: "/v1/suitability/score", desc: "Calculate crop suitability indices based on multi-criteria inputs.", method: "POST" },
  { name: "/v1/webhooks/alerts", desc: "Register endpoints to receive automated hazard and geofence alerts.", method: "POST" },
];

function ApiDocsPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-background min-h-[80vh] flex flex-col justify-center border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 backdrop-blur mb-8">
                <Terminal className="h-4 w-4 text-primary" />
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">
                  Developer Portal
                </span>
              </div>
              <h1 className="font-display text-5xl font-extrabold leading-[1] tracking-tight text-foreground md:text-6xl">
                Intelligence API <br/>
                <span className="text-primary">Coming Soon.</span>
              </h1>
              <p className="mt-8 text-lg font-medium leading-normal text-muted-foreground">
                We are preparing to open our platform. Soon, you will be able to pipe satellite imagery, radar displacement data, and AI analytics directly into your own enterprise software, ERPs, and dashboards.
              </p>
              
              <div className="mt-10 p-6 border border-border bg-surface rounded-xl">
                <h3 className="font-display font-bold mb-2">Request Early Access</h3>
                <p className="text-sm text-muted-foreground mb-4">Are you building something that requires Earth intelligence? Let us know.</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-smooth hover:bg-primary/95"
                >
                  Contact Engineering <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={200} className="lg:pl-10">
              <div className="rounded-2xl border border-border bg-[#0B2545] p-6 shadow-elevated text-left font-mono">
                <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="text-xs text-white/40 ml-2">api.earthintelytics.com</span>
                </div>
                
                <div className="space-y-6">
                  {ENDPOINTS.map((ep) => (
                    <div key={ep.name}>
                      <div className="flex items-center gap-3 mb-1.5">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${ep.method === 'GET' ? 'bg-blue-500/20 text-blue-300' : 'bg-green-500/20 text-green-300'}`}>
                          {ep.method}
                        </span>
                        <span className="text-sm text-[#1A9E8F] font-bold">{ep.name}</span>
                      </div>
                      <p className="text-xs text-white/50 pl-11">{ep.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            
          </div>
        </div>
      </section>
    </PageShell>
  );
}
