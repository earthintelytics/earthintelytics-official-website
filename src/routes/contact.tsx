import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { CONTACT_EMAIL } from "@/lib/site";

const WIDE = "mx-auto w-full max-w-[1400px] px-6 lg:px-12";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Earthintelytics" },
      {
        name: "description",
        content:
          "Talk to Earthintelytics about FarmIntelytics, custom geospatial platforms, land suitability, EUDR checks, or consultancy.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", organisation: "", message: "" });
  const send = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Enquiry from ${form.name}${form.organisation ? `, ${form.organisation}` : ""}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(form.message)}`;
  };
  const input =
    "w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none";

  return (
    <PageShell>
      <section className="border-b border-border bg-gradient-to-b from-[#F1F8F4] to-background">
        <div className={`${WIDE} py-14 md:py-20`}>
          <p className="text-sm font-semibold text-primary">Contact us</p>
          <h1 className="mt-2 max-w-3xl font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl md:leading-[1.08]">
            Talk to us
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Tell us about your land, crops, site or supply chain, and what you need to know. We reply by email.
          </p>
        </div>
      </section>

      <section className="bg-surface">
        <div className={`${WIDE} grid gap-10 py-14 md:grid-cols-2 md:py-20`}>
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">Direct email</h2>
            <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
              Reach our team directly for FarmIntelytics estate walkthroughs, consultancy briefs, or platform builds.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:underline"
            >
              <Mail className="h-4 w-4" /> {CONTACT_EMAIL}
            </a>
          </div>
          <form onSubmit={send} className="space-y-4">
            <label className="block text-sm font-medium text-foreground">
              Your name
              <input
                required
                className={`mt-1.5 ${input}`}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </label>
            <label className="block text-sm font-medium text-foreground">
              Organisation
              <input
                className={`mt-1.5 ${input}`}
                value={form.organisation}
                onChange={(e) => setForm({ ...form, organisation: e.target.value })}
              />
            </label>
            <label className="block text-sm font-medium text-foreground">
              How can we help?
              <textarea
                required
                rows={5}
                className={`mt-1.5 ${input}`}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Write to us <ArrowRight className="h-4 w-4" />
            </button>
            <p className="text-xs text-muted-foreground">
              This opens your email app with your message, addressed to {CONTACT_EMAIL}.
            </p>
          </form>
        </div>
      </section>
    </PageShell>
  );
}
