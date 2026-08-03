import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Identité institutionnelle, mission et produit de MEDUC GM — Africa Health e-Voucher.",
};

export default function AProposPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <Image
            src="/images/about-community.svg"
            alt="Communauté réunie autour d'un centre de santé de proximité"
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
            À propos de nous
          </h1>
        </div>
      </section>

      <section
        className="bg-navy pb-16 pt-10 md:pb-20 md:pt-12"
        aria-labelledby="a-propos-contenu"
      >
        <div className="container-site grid items-stretch gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* Colonne texte : à propos + produit, même hauteur que l'image */}
          <div
            id="a-propos-contenu"
            className="flex flex-col justify-between gap-8 rounded-2xl border border-white/10 bg-navy-soft/50 p-6 md:p-8"
          >
            <article>
              <p className="font-serif text-[11px] tracking-[0.22em] text-gold">
                INSTITUTIONNEL
              </p>
              <h2 className="mt-2 font-serif text-2xl text-cream md:text-[1.75rem]">
                Identité institutionnelle
              </h2>
              <p className="mt-4 text-justify text-[13.5px] leading-[1.75] text-cream/80">
                Meduc GM est une société HealthTech et FinTech
                double-incorporée, opérant en République Démocratique du Congo
                et en Afrique du Sud. Enregistrée en RDC sous le numéro{" "}
                <strong className="font-semibold text-cream">
                  RCCM CD/KNG/RCCM/25-B-01820
                </strong>
                , et en Afrique du Sud sous le numéro{" "}
                <strong className="font-semibold text-cream">
                  PTY (LTD) 2025/780904/07
                </strong>
                , avec le numéro D-U-N-S international{" "}
                <strong className="font-semibold text-cream">366868380</strong>,
                Meduc GM bénéficie d&apos;une structure juridique solide et
                vérifiable sur deux juridictions africaines. Cette double
                incorporation reflète une ambition clairement pan-africaine,
                ancrée dans les réalités du terrain congolais.
              </p>
            </article>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

            <article>
              <p className="font-serif text-[11px] tracking-[0.22em] text-gold">
                PRODUIT
              </p>
              <h2 className="mt-2 font-serif text-2xl text-cream md:text-[1.75rem]">
                Mission et produit
              </h2>
              <p className="mt-4 text-justify text-[13.5px] leading-[1.75] text-cream/80">
                Meduc GM développe et opère MeducAHT — l&apos;Africa Health
                e-Voucher — le premier système de financement de soins de santé
                à réserve intégrale conçu pour les 115 millions de citoyens
                congolais, dont 50 millions sont non-bancarisés et
                structurellement exclus des soins. Propulsé par Microsoft Azure,
                MeducAHT permet l&apos;accès aux soins ICD-10 via USSD *707#
                sans smartphone ni compte bancaire, avec une distribution
                automatique et immuable des flux financiers entre prestataires,
                État et plateforme.
              </p>
            </article>
          </div>

          {/* Image — même ligne, contour unifié */}
          <figure className="relative min-h-[320px] overflow-hidden rounded-2xl border border-white/10 bg-[#050508] shadow-[0_20px_48px_rgba(0,0,0,0.4)] ring-1 ring-gold/15 lg:min-h-0">
            <Image
              src="/images/meduc-gm-card.png"
              alt="Carte MEDUC GM et smartphone — identité institutionnelle HealthTech FinTech"
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
            <h2 className="font-serif text-2xl text-navy">
              Découvrir l&apos;équipe
            </h2>
            <p className="mt-1 text-sm text-ink-muted">
              Leadership et opérations au service de la mission.
            </p>
          </div>
          <Link href="/equipe/" className="btn-outline shrink-0">
            Voir l&apos;équipe
          </Link>
        </div>
      </section>
    </>
  );
}
