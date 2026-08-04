"use client";

import Image from "next/image";
import Link from "next/link";
import EvoucherParcours from "@/components/EvoucherParcours";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import "./evoucher-parcours.css";

export default function EvoucherPage() {
  const { t } = useLanguage();
  const e = t.evoucherPage;

  return (
    <>
      <section className="relative overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <Image
            src="/images/evoucher-care.svg"
            alt={e.heroAlt}
            fill
            priority
            className="object-cover opacity-45"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/45"
            aria-hidden
          />
        </div>
        <div className="container-site relative py-24 md:py-32">
          <p className="font-serif text-4xl text-gold md:text-5xl">
            MEDUC <span className="text-[#1a6fd4]">GM</span>
          </p>
          <h1 className="mt-4 max-w-2xl font-serif text-3xl text-cream md:text-5xl">
            {e.h1}
          </h1>
          <p className="mt-5 max-w-xl text-base text-cream/80 md:text-lg">
            {e.lead}
          </p>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-site">
          <h2 className="max-w-2xl text-3xl md:text-4xl">{e.howTitle}</h2>
          <EvoucherParcours />
        </div>
      </section>

      <section className="section-pad bg-cream-muted">
        <div className="container-site grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl">{e.facilitiesTitle}</h2>
            <p className="mt-4 text-justify text-ink-muted">{e.facilitiesLead}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/partenaires/" className="btn-outline">
              {e.networkCta}
            </Link>
            <Link href="/contact/" className="btn-primary">
              {e.demoCta}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
