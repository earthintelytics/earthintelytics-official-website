import heroBg from "@/assets/real/farmer-phone.jpg";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/PageShell";
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import contactImg from "@/assets/real/farmer-portrait.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · EarthIntelytics" },
      {
        name: "description",
        content:
          "Talk to the EarthIntelytics team about deploying the platform for your organisation, program or cooperative.",
      },
      { property: "og:title", content: "Contact EarthIntelytics" },
      {
        property: "og:description",
        content: "Request a demo or discuss a deployment with the EarthIntelytics team.",
      },
      { property: "og:image", content: contactImg },
    ],
  }),
  component: ContactPage,
});

const CONTACT_INFO = [
  { icon: Mail, label: "Email", value: "hello@earthintelytics.com" },
  { icon: Phone, label: "Phone", value: "+234 (0) 800 INTELY" },
  { icon: MapPin, label: "Office", value: "Lagos · Accra · Nairobi" },
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageShell>
      {/* Hero , bold dark */}
      <section className="relative overflow-hidden bg-foreground text-background">
        <div className="absolute inset-0 opacity-30">
          <img src={contactImg} alt="" className="h-full w-full object-cover object-top" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/95 to-foreground/40" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-12">
          <p className="font-sans text-sm font-bold uppercase tracking-[0.25em] text-primary-glow">
            Get in touch
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl sm:text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] md:text-7xl">
            Let's digitize<br />
            <span className="text-primary-glow">your operations.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg font-medium leading-normal text-background/85 md:text-xl">
            Tell us about your organisation. We'll come back with a tailored demo and
            deployment plan within one business day.
          </p>
        </div>
      </section>

      {/* Form + contact rail */}
      <section className="border-t border-border py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-5">
          {/* Left rail */}
          <div className="space-y-4 md:col-span-2">
            <div className="rounded-xl border border-border bg-card p-7">
              <p className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-primary">
                Direct lines
              </p>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
                Talk to Us
              </h2>
              <p className="mt-3 text-sm font-medium text-foreground/70">
                For partnerships, pilots or government deployments , pick the channel that
                works for you. We respond within 24 hours.
              </p>
            </div>

            {CONTACT_INFO.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-smooth hover:border-primary/40"
              >
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-foreground/50">
                    {label}
                  </div>
                  <div className="mt-1 font-display text-base font-bold text-foreground">
                    {value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center rounded-xl border-2 border-primary bg-card p-12 text-center">
                <CheckCircle2 className="h-14 w-14 text-primary" />
                <h3 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-foreground">
                  Message received.
                </h3>
                <p className="mt-3 max-w-sm text-sm font-medium text-foreground/70">
                  Our team will reach out within one business day to schedule your demo.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5 rounded-xl border border-border bg-card p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" name="name" required />
                  <Field label="Organisation" name="org" required />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field type="email" label="Work email" name="email" required />
                  <Field label="Phone" name="phone" />
                </div>
                <div>
                  <label className="mb-2 block font-sans text-sm font-bold uppercase tracking-[0.15em] text-foreground/70">
                    Type of organisation
                  </label>
                  <select
                    name="type"
                    className="w-full rounded-md border-2 border-border bg-background px-3 py-3 font-display text-sm font-semibold text-foreground outline-none transition-smooth focus:border-primary"
                  >
                    <option>Agribusiness / Plantation</option>
                    <option>Government program</option>
                    <option>NGO / Development</option>
                    <option>Farmer cooperative</option>
                    <option>Bank / Insurer</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block font-sans text-sm font-bold uppercase tracking-[0.15em] text-foreground/70">
                    Which platform are you interested in?
                  </label>
                  <select
                    name="platform"
                    className="w-full rounded-md border-2 border-border bg-background px-3 py-3 font-display text-sm font-semibold text-foreground outline-none transition-smooth focus:border-primary"
                  >
                    <option>FarmIntelytics (Agriculture)</option>
                    <option>MineIntelytics (Mining)</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block font-sans text-sm font-bold uppercase tracking-[0.15em] text-foreground/70">
                    Tell us about your needs
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full resize-none rounded-md border-2 border-border bg-background px-3 py-3 text-sm font-medium text-foreground outline-none transition-smooth focus:border-primary"
                    placeholder="Crops, hectares, workforce size, current challenges..."
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-4 font-display text-sm font-bold uppercase tracking-wider text-primary-foreground transition-smooth hover:bg-primary/90"
                >
                  Send message
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block font-sans text-sm font-bold uppercase tracking-[0.15em] text-foreground/70">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border-2 border-border bg-background px-3 py-3 text-sm font-semibold text-foreground outline-none transition-smooth focus:border-primary"
      />
    </div>
  );
}
