"use client";

import PartnerLogos from "@/components/PartnerLogos";
import partenairesData from "@/content/partenaires.json";
import type { PartenairesContent } from "@/types/content";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const partenaires = partenairesData as PartenairesContent;

export default function PartenairesPage() {
  const { t } = useLanguage();
  const p = t.partners;

  return (
    <>
      <section className="section-pad bg-cream border-b border-border">
        <div className="container-site max-w-3xl">
          <p className="font-serif text-4xl text-gold md:text-5xl">
            MEDUC <span className="text-[#1a6fd4]">GM</span>
          </p>
          <p className="mt-4 font-serif text-sm tracking-widest text-gold-deep">
            {p.eyebrow}
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl">{p.title}</h1>
          <p className="mt-4 text-lg text-ink-muted">{p.subtitle}</p>
        </div>
      </section>

      <section className="section-pad bg-cream" aria-label={p.listAria}>
        <div className="container-site">
          <PartnerLogos partners={partenaires.partners} />
        </div>
      </section>

      <section className="section-pad bg-cream-muted">
        <div className="container-site flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl">{p.ctaTitle}</h2>
            <p className="mt-3 text-ink-muted">{p.ctaBody}</p>
          </div>
          <Link href="/contact/" className="btn-primary">
            {p.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
