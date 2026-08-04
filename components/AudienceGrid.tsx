"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function AudienceGrid() {
  const { t } = useLanguage();
  const a = t.audience;

  return (
    <section
      className="section-pad bg-cream-muted"
      aria-labelledby="audience-heading"
    >
      <div className="container-site">
        <div className="max-w-2xl">
          <p className="eyebrow text-gold-deep">{a.eyebrow}</p>
          <h2 id="audience-heading" className="mt-3 text-3xl md:text-4xl">
            {a.title}
          </h2>
          <p className="mt-3 text-ink-muted">{a.lead}</p>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {a.items.map((item) => (
            <li
              key={item.title}
              className="card-lift border border-border bg-cream p-7"
            >
              <span className="block h-0.5 w-10 bg-gold" aria-hidden />
              <h3 className="mt-4 text-xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {item.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
