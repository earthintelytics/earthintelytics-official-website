import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, Briefcase, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers | EarthIntelytics" },
      {
        name: "description",
        content: "Join the EarthIntelytics team. We are building the definitive Earth intelligence platform for emerging and frontier markets.",
      },
    ],
  }),
  component: CareersPage,
});

const JOBS = [
  {
    title: "Senior GIS & Remote Sensing Engineer",
    department: "Engineering & Data Science",
    location: "Remote / Hybrid (Nairobi or Accra preferred)",
    type: "Full-Time",
    desc: "Build and scale our Earth observation pipelines. Experience with Sentinel, Planet Labs API, SAR data, and Google Earth Engine is required.",
  },
  {
    title: "Earth Data Scientist (AI & Crop Analytics)",
    department: "Data Science",
    location: "Remote (Global)",
    type: "Full-Time",
    desc: "Train and deploy machine learning models for crop classification, yield forecasting, and disease detection on multi-spectral imagery.",
  },
  {
    title: "Remote Sensing & IoT Integration Engineer",
    department: "Geospatial Engineering",
    location: "Lagos, Nigeria (with field travel)",
    type: "Full-Time",
    desc: "Deploy and optimize our satellite imagery pipelines, drone survey integrations, and IoT sensor networks for agricultural and mining monitoring operations.",
  },
  {
    title: "Full Stack Engineer (Vite / React / Node.js)",
    department: "Engineering",
    location: "Remote",
    type: "Full-Time",
    desc: "Own our customer-facing web dashboard and map analytics views. Strong experience with GIS mapping components, Mapbox, and TypeScript.",
  },
];

function CareersPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-12">
          <Reveal>
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.35em] text-primary">
              Join Our Team
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="max-w-4xl font-display text-4xl sm:text-5xl font-extrabold leading-[0.92] tracking-tight text-foreground md:text-7xl">
              Build the future of <span className="text-primary">Earth intelligence.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-2xl text-lg font-medium leading-normal text-muted-foreground">
              We are a remote-first team of engineers, remote sensing scientists, and field operation specialists building systems that bring clarity, safety, and efficiency to global operations.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-16 bg-surface/30 border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <Reveal className="flex flex-col gap-4">
              <h3 className="font-sans text-xl font-bold text-foreground">Meaningful Impact</h3>
              <p className="text-sm text-muted-foreground leading-normal">
                Our platform directly eliminates payroll fraud, monitors carbon stocks, and maps crop diseases to support food security and secure livelihoods.
              </p>
            </Reveal>
            <Reveal delay={100} className="flex flex-col gap-4">
              <h3 className="font-sans text-xl font-bold text-foreground">Cutting-Edge Tech</h3>
              <p className="text-sm text-muted-foreground leading-normal">
                Fuse satellite imagery, drone maps, and IoT sensor streams with state-of-the-art AI pipelines running at high scale.
              </p>
            </Reveal>
            <Reveal delay={200} className="flex flex-col gap-4">
              <h3 className="font-sans text-xl font-bold text-foreground">Remote-First Culture</h3>
              <p className="text-sm text-muted-foreground leading-normal">
                Work from anywhere in the world. We offer flexible hours, home office stipends, and gather annually for team summits.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            title="Open Positions"
            description="Explore our current opportunities and help us build the next generation of geospatial monitoring."
          />

          <div className="mt-8 space-y-6">
            {/* 
            {JOBS.map((job, i) => (
              <Reveal
                key={job.title}
                delay={i * 80}
                className="group flex flex-col justify-between rounded-xl border border-border bg-card p-8 hover:border-primary/40 hover:shadow-elevated transition-smooth lg:flex-row lg:items-center"
              >
                <div className="max-w-2xl">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-surface border border-border px-3 py-0.5 text-xs font-semibold text-muted-foreground">
                      <Briefcase className="h-3 w-3" /> {job.department}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-surface border border-border px-3 py-0.5 text-xs font-semibold text-muted-foreground">
                      <MapPin className="h-3 w-3" /> {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-surface border border-border px-3 py-0.5 text-xs font-semibold text-muted-foreground">
                      <Clock className="h-3 w-3" /> {job.type}
                    </span>
                  </div>
                  <h3 className="font-sans text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                    {job.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-normal">
                    {job.desc}
                  </p>
                </div>
                <div className="mt-6 lg:mt-0">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-smooth hover:bg-primary/95"
                  >
                    Apply Now <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
            */}
            
            <Reveal className="flex flex-col items-center justify-center rounded-xl border border-border bg-surface p-12 text-center">
              <h3 className="font-display text-2xl font-bold text-foreground">
                Positions Opening Soon
              </h3>
              <p className="mt-4 text-muted-foreground max-w-md">
                We are currently preparing our next phase of hiring. Check back shortly for new opportunities to join our mission.
              </p>
            </Reveal>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Don't see a role that fits? Email us anyway at{" "}
              <a href="mailto:careers@earthintelytics.com" className="text-primary font-bold hover:underline">
                careers@earthintelytics.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
