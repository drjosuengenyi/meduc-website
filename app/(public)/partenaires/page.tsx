import type { Metadata } from "next";
import PartnerLogos from "@/components/PartnerLogos";
import partenairesData from "@/content/partenaires.json";
import type { PartenairesContent } from "@/types/content";
import Link from "next/link";

const partenaires = partenairesData as PartenairesContent;

export const metadata: Metadata = {
  title: "Partenaires",
  description:
    "Réseau de partenaires institutionnels et organisations engagées avec MEDUC.",
};

export default function PartenairesPage() {
  return (
    <>
      <section className="section-pad bg-cream border-b border-border">
        <div className="container-site max-w-3xl">
          <p className="font-serif text-4xl text-gold md:text-5xl">
            MEDUC <span className="text-[#1a6fd4]">GM</span>
          </p>
          <p className="mt-4 font-serif text-sm tracking-widest text-gold-deep">
            RÉSEAU
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl">{partenaires.title}</h1>
          <p className="mt-4 text-lg text-ink-muted">{partenaires.subtitle}</p>
        </div>
      </section>

      <section className="section-pad bg-cream" aria-label="Liste des partenaires">
        <div className="container-site">
          <PartnerLogos partners={partenaires.partners} />
        </div>
      </section>

      <section className="section-pad bg-cream-muted">
        <div className="container-site flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl">Devenir partenaire</h2>
            <p className="mt-3 text-ink-muted">
              Vous représentez une institution, une ONG ou un établissement de
              santé ? Écrivons ensemble la suite.
            </p>
          </div>
          <Link href="/contact/" className="btn-primary">
            Proposer un partenariat
          </Link>
        </div>
      </section>
    </>
  );
}
