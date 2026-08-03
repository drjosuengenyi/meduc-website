import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustPillars from "@/components/TrustPillars";
import AudienceGrid from "@/components/AudienceGrid";
import ImpactCounter from "@/components/ImpactCounter";
import PartnerLogos from "@/components/PartnerLogos";
import partenairesData from "@/content/partenaires.json";
import type { PartenairesContent } from "@/types/content";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Présentation",
};

const partenaires = partenairesData as PartenairesContent;

const EVOUCHER_POINTS = [
  "Bons numériques remis aux ménages éligibles",
  "Orientation claire vers les établissements du réseau",
  "Validation simple et prise en charge sur place",
] as const;

export default function HomePage() {
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
              alt="Agent de santé remettant un e-voucher à un patient dans un centre de soins"
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
            <p className="eyebrow text-gold-deep">Notre dispositif phare</p>
            <h2 id="home-evoucher" className="mt-3 text-3xl md:text-4xl">
              e-Voucher : le soin à portée de main
            </h2>
            <p className="mt-4 text-ink-muted">
              Un outil numérique léger qui relie bénéficiaires et
              établissements partenaires, sans complexité inutile.
            </p>
            <ul className="mt-6 space-y-3">
              {EVOUCHER_POINTS.map((point) => (
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
                Comprendre le parcours
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ImpactCounter />
      <AudienceGrid />

      <section className="bg-navy-soft py-16 md:py-20" aria-label="Citation">
        <div className="container-site max-w-3xl text-center">
          <span
            className="mx-auto block h-px w-16 bg-gold"
            aria-hidden
          />
          <blockquote className="mt-8 font-serif text-2xl leading-relaxed text-cream md:text-3xl">
            « Chaque famille mérite un chemin clair vers les soins essentiels.
            C&apos;est la promesse que nous tenons, communauté après
            communauté. »
          </blockquote>
          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-gold">
            L&apos;équipe MEDUC
          </p>
        </div>
      </section>

      <section className="section-pad bg-cream" aria-labelledby="home-partners">
        <div className="container-site">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="eyebrow text-gold-deep">Écosystème</p>
              <h2 id="home-partners" className="mt-3 text-3xl md:text-4xl">
                Ils avancent avec nous
              </h2>
              <p className="mt-3 text-ink-muted">
                Institutions, ONG et acteurs de terrain engagés pour un accès
                équitable aux soins.
              </p>
            </div>
            <Link href="/partenaires/" className="btn-outline shrink-0">
              Tous les partenaires
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
            <h2 className="text-3xl text-cream">Parlons de votre contexte</h2>
            <p className="mt-3 text-cream/70">
              Autorité sanitaire, établissement ou organisation partenaire :
              échangeons sur vos priorités d&apos;accès aux soins.
            </p>
          </div>
          <Link href="/contact/" className="btn-primary shrink-0">
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  );
}
