"use client";

import type { CSSProperties } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function ImpactCounter() {
  const { t } = useLanguage();
  const impact = t.impact;
  const currentValue = 38;
  const targetValue = 112;

  return (
    <section
      className="section-pad bg-navy text-cream"
      aria-labelledby="impact-heading"
    >
      <div className="container-site">
        <div className="max-w-2xl">
          <p className="eyebrow text-gold">{impact.eyebrow}</p>
          <h2
            id="impact-heading"
            className="mt-3 text-3xl text-cream md:text-4xl"
          >
            {impact.title}
          </h2>
          <p className="mt-3 text-cream/75">{impact.description}</p>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-[1fr_auto_1fr] sm:items-end">
          <div>
            <p className="text-sm tracking-wide text-gold">
              {impact.currentLabel}
            </p>
            <p className="mt-2 flex items-baseline gap-1 font-serif text-5xl text-cream md:text-6xl">
              <span
                className="impact-count"
                style={
                  {
                    "--count-target": currentValue,
                    "--count-delay": "0.15s",
                  } as CSSProperties
                }
                aria-hidden
              />
              <span className="sr-only">{currentValue}</span>
              <span className="text-3xl text-gold md:text-4xl">M</span>
            </p>
          </div>

          <p
            className="hidden font-serif text-4xl text-gold/60 sm:block"
            aria-hidden
          >
            /
          </p>

          <div>
            <p className="text-sm tracking-wide text-gold">
              {impact.targetLabel}
            </p>
            <p className="mt-2 flex items-baseline gap-1 font-serif text-5xl text-cream md:text-6xl">
              <span
                className="impact-count"
                style={
                  {
                    "--count-target": targetValue,
                    "--count-delay": "0.45s",
                  } as CSSProperties
                }
                aria-hidden
              />
              <span className="sr-only">{targetValue}</span>
              <span className="text-3xl text-gold md:text-4xl">M</span>
            </p>
            <p className="mt-2 text-sm text-cream/60">{impact.horizon}</p>
          </div>
        </div>

        <div className="mt-10 max-w-2xl">
          <div
            className="h-1.5 w-full overflow-hidden rounded-full bg-cream/10"
            role="progressbar"
            aria-valuenow={currentValue}
            aria-valuemin={0}
            aria-valuemax={targetValue}
            aria-label={`${currentValue}M / ${targetValue}M`}
          >
            <div
              className="impact-bar h-full rounded-full bg-gradient-to-r from-gold-deep to-gold"
              style={
                {
                  "--progress": `${Math.round((currentValue / targetValue) * 100)}%`,
                } as CSSProperties
              }
            />
          </div>
          <p className="mt-4 font-serif text-xl text-gold-soft md:text-2xl">
            {currentValue}M / {targetValue}M {impact.horizon}
          </p>
        </div>
      </div>
    </section>
  );
}
