import Hero from "@/components/Hero";
import TrustPillars from "@/components/TrustPillars";
import AudienceGrid from "@/components/AudienceGrid";
import ImpactCounter from "@/components/ImpactCounter";
import PartnerLogos from "@/components/PartnerLogos";
import partenairesData from "@/content/partenaires.json";
import type { PartenairesContent } from "@/types/content";
import Link from "next/link";

const partenaires = partenairesData as PartenairesContent;

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustPillars />
      <ImpactCounter />
      <AudienceGrid />
      <section className="section-pad bg-cream" aria-labelledby="home-partners">
        <div className="container-site">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <h2 id="home-partners" className="text-3xl md:text-4xl">
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
      <section className="border-t border-border bg-cream-muted section-pad">
        <div className="container-site flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl">Parlons de votre contexte</h2>
            <p className="mt-3 text-ink-muted">
              Autorité sanitaire, établissement ou organisation partenaire :
              échangeons sur vos priorités d&apos;accès aux soins.
            </p>
          </div>
          <Link href="/contact/" className="btn-primary">
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  );
}
