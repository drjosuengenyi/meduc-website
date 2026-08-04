"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function TrustPillars() {
  const { t } = useLanguage();
  const trust = t.trust;

  return (
    <section className="section-pad bg-cream" aria-labelledby="trust-heading">
      <div className="container-site">
        <div className="max-w-2xl">
          <p className="eyebrow text-gold-deep">{trust.eyebrow}</p>
          <h2 id="trust-heading" className="mt-3 text-3xl md:text-4xl">
            {trust.title}
          </h2>
          <p className="mt-3 text-ink-muted">{trust.lead}</p>
        </div>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {trust.pillars.map((pillar, index) => (
            <li
              key={pillar.title}
              className="card-lift group relative border border-border bg-cream p-7"
            >
              <span
                className="absolute left-0 top-0 h-0.5 w-12 bg-gold transition-all duration-300 group-hover:w-full"
                aria-hidden
              />
              <p className="font-serif text-sm tracking-widest text-gold-deep">
                0{index + 1}
              </p>
              <h3 className="mt-3 text-xl">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {pillar.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
