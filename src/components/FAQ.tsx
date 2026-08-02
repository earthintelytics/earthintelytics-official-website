import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const FAQS = [
  {
    q: "How frequently is the satellite data updated?",
    a: "Update frequency depends on the constellation. Our optical imagery (like Planet Labs) updates daily, while high-resolution SAR and multi-spectral baseline data updates every 3 to 12 days depending on your subscription tier and tasking requirements.",
  },
  {
    q: "What regions do you cover?",
    a: "EarthIntelytics provides global coverage. However, our algorithms and anomaly detection models are specifically trained and calibrated for emerging and frontier markets across Africa, South America, and Southeast Asia.",
  },
  {
    q: "Can I integrate EarthIntelytics data into my own ERP or GIS tools?",
    a: "Yes. Our platform provides data via standard OGC web services (WMS/WCS) and we are currently rolling out our Developer API for direct integrations into systems like SAP, Esri ArcGIS, and custom dashboards.",
  },
  {
    q: "How do you handle cloud cover in optical imagery?",
    a: "We fuse optical data with Synthetic Aperture Radar (SAR), which penetrates clouds and weather systems. This ensures you maintain continuous visibility and anomaly detection even during heavy rainy seasons.",
  },
  {
    q: "Is my operational data secure?",
    a: "Absolutely. We employ end-to-end encryption and enterprise-grade role-based access control. Your proprietary shapefiles and vector overlays remain completely confidential.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 bg-surface/30 border-t border-border">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Common Questions"
          title="Frequently Asked Questions"
          align="center"
        />
        <div className="mt-8 space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={index} delay={index * 50}>
                <div 
                  className={`rounded-xl border transition-smooth overflow-hidden ${
                    isOpen ? "border-primary/40 bg-surface shadow-sm" : "border-border bg-background hover:border-primary/20"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none"
                  >
                    <span className={`font-display font-bold ${isOpen ? "text-primary" : "text-foreground"}`}>
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6 text-muted-foreground leading-normal">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
