"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function NotrePolitiquePage() {
  const { t } = useLanguage();
  const p = t.policy;

  return (
    <>
      <section className="section-pad bg-navy">
        <div className="container-site max-w-3xl">
          <p className="font-serif text-4xl text-gold">
            MEDUC <span className="text-[#1a6fd4]">GM</span>
          </p>
          <h1 className="mt-4 text-4xl text-cream md:text-5xl">{p.h1}</h1>
          <p className="mt-5 text-justify text-lg text-cream/80">{p.lead}</p>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-site grid gap-10 md:grid-cols-2">
          {p.items.map((item) => (
            <article key={item.title} className="border-t border-gold pt-6">
              <h2 className={`text-2xl ${item.titleClass}`}>{item.title}</h2>
              <p className="mt-3 text-justify text-sm font-semibold leading-relaxed text-ink">
                {item.subtitle}
              </p>
              <p className="mt-2 text-justify text-sm leading-relaxed text-ink-muted">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad bg-cream-muted">
        <div className="container-site max-w-2xl">
          <h2 className="text-3xl">{p.reportTitle}</h2>
          <p className="mt-4 text-justify text-ink-muted">{p.reportBody}</p>
        </div>
      </section>
    </>
  );
}
