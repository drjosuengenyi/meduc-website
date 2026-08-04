"use client";

import Hero from "@/components/Hero";
import TrustPillars from "@/components/TrustPillars";
import AudienceGrid from "@/components/AudienceGrid";
import ImpactCounter from "@/components/ImpactCounter";
import PartnerLogos from "@/components/PartnerLogos";
import partenairesData from "@/content/partenaires.json";
import type { PartenairesContent } from "@/types/content";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const partenaires = partenairesData as PartenairesContent;

export default function PresentationPage() {
  const { t } = useLanguage();
  const p = t.presentation;

  return (
    <>
      <Hero />
      <TrustPillars />

      <section
        className="section-pad border-y border-border bg-cream-muted"
        aria-labelledby="home-evoucher"
      >
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden border border-border">
            <Image
              src="/images/evoucher-care.svg"
              alt={p.evoucherAlt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div
              className="absolute inset-0 bg-gradient-to-tr from-navy/30 to-transparent"
              aria-hidden
            />
          </div>
          <div>
            <p className="eyebrow text-gold-deep">{p.evoucherEyebrow}</p>
            <h2 id="home-evoucher" className="mt-3 text-3xl md:text-4xl">
              {p.evoucherTitle}
            </h2>
            <p className="mt-4 text-ink-muted">{p.evoucherLead}</p>
            <ul className="mt-6 space-y-3">
              {p.evoucherPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm">
                  <span
                    className="mt-1.5 h-2 w-2 shrink-0 rotate-45 bg-gold"
                    aria-hidden
                  />
                  <span className="text-ink-muted">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link href="/evoucher/" className="btn-primary">
                {p.evoucherCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ImpactCounter />
      <AudienceGrid />

      <section className="bg-navy-soft py-16 md:py-20" aria-label="Citation">
        <div className="container-site max-w-3xl text-center">
          <span className="mx-auto block h-px w-16 bg-gold" aria-hidden />
          <blockquote className="mt-8 font-serif text-2xl leading-relaxed text-cream md:text-3xl">
            {p.quote}
          </blockquote>
          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-gold">
            {p.quoteBy}
          </p>
        </div>
      </section>

      <section className="section-pad bg-cream" aria-labelledby="home-partners">
        <div className="container-site">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="eyebrow text-gold-deep">{p.partnersEyebrow}</p>
              <h2 id="home-partners" className="mt-3 text-3xl md:text-4xl">
                {p.partnersTitle}
              </h2>
              <p className="mt-3 text-ink-muted">{p.partnersLead}</p>
            </div>
            <Link href="/partenaires/" className="btn-outline shrink-0">
              {p.partnersCta}
            </Link>
          </div>
          <div className="mt-10">
            <PartnerLogos partners={partenaires.partners} compact />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-navy section-pad">
        <div className="container-site flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl text-cream">{p.ctaTitle}</h2>
            <p className="mt-3 text-cream/70">{p.ctaLead}</p>
          </div>
          <Link href="/contact/" className="btn-primary shrink-0">
            {p.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
