"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function AProposPage() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <>
      <section className="relative overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <Image
            src="/images/about-community.svg"
            alt={a.heroAlt}
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-navy via-navy/85 to-navy/55"
            aria-hidden
          />
        </div>
        <div className="container-site relative py-16 md:py-20">
          <p className="font-serif text-3xl text-gold md:text-4xl">
            MEDUC <span className="text-[#1a6fd4]">GM</span>
          </p>
          <h1 className="mt-3 max-w-2xl font-serif text-3xl text-cream md:text-4xl">
            {a.h1}
          </h1>
        </div>
      </section>

      <section
        className="bg-navy pb-16 pt-10 md:pb-20 md:pt-12"
        aria-labelledby="a-propos-contenu"
      >
        <div className="container-site grid items-stretch gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div
            id="a-propos-contenu"
            className="flex flex-col justify-between gap-8 rounded-2xl border border-white/10 bg-navy-soft/50 p-6 md:p-8"
          >
            <article>
              <p className="font-serif text-[11px] tracking-[0.22em] text-gold">
                {a.identityEyebrow}
              </p>
              <h2 className="mt-2 font-serif text-2xl text-cream md:text-[1.75rem]">
                {a.identityTitle}
              </h2>
              <p className="mt-4 text-justify text-[13.5px] leading-[1.8] text-cream/85 hyphens-auto">
                {a.identityBody}
              </p>
            </article>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

            <article>
              <p className="font-serif text-[11px] tracking-[0.22em] text-gold">
                {a.productEyebrow}
              </p>
              <h2 className="mt-2 font-serif text-2xl text-cream md:text-[1.75rem]">
                {a.productTitle}
              </h2>
              <p className="mt-4 text-justify text-[13.5px] leading-[1.8] text-cream/85 hyphens-auto">
                {a.productBody}
              </p>
            </article>
          </div>

          <figure className="relative min-h-[320px] overflow-hidden rounded-2xl border border-white/10 bg-[#050508] shadow-[0_20px_48px_rgba(0,0,0,0.4)] ring-1 ring-gold/15 lg:min-h-0">
            <Image
              src="/images/meduc-gm-card.png"
              alt={a.cardAlt}
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 45vw, 90vw"
              priority
            />
          </figure>
        </div>
      </section>

      <section className="border-t border-border bg-cream-muted py-12 md:py-14">
        <div className="container-site flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-serif text-2xl text-navy">{a.ctaTitle}</h2>
            <p className="mt-1 text-sm text-ink-muted">{a.ctaSubtitle}</p>
          </div>
          <Link href="/equipe/" className="btn-outline shrink-0">
            {a.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
