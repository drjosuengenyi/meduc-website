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
            className="object-cover opacity-45"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/50"
            aria-hidden
          />
        </div>
        <div className="container-site relative py-24 md:py-32">
          <p className="font-serif text-4xl text-gold md:text-5xl">
            MEDUC <span className="text-[#1a6fd4]">GM</span>
          </p>
          <h1 className="mt-4 max-w-2xl font-serif text-3xl text-cream md:text-5xl">
            À propos de notre mission
          </h1>
          <p className="mt-5 max-w-xl text-justify text-base text-cream/80 md:text-lg">
            Nous œuvrons pour que chaque communauté dispose d&apos;un accès
            fiable aux soins essentiels et à une information sanitaire claire.
          </p>
        </div>
      </section>

      {/* Identité institutionnelle */}
      <section
        className="section-pad bg-navy"
        aria-labelledby="identite-institutionnelle"
      >
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="font-serif text-sm tracking-[0.2em] text-gold">
              INSTITUTIONNEL
            </p>
            <h2
              id="identite-institutionnelle"
              className="mt-3 font-serif text-3xl text-cream md:text-4xl"
            >
              Identité institutionnelle
            </h2>
            <p className="mt-6 text-justify text-sm leading-relaxed text-cream/80 md:text-base">
              Meduc GM est une société HealthTech et FinTech double-incorporée,
              opérant en République Démocratique du Congo et en Afrique du Sud.
              Enregistrée en RDC sous le numéro{" "}
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
            <dl className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-navy-soft/80 px-4 py-3">
                <dt className="text-[10px] font-semibold uppercase tracking-wider text-gold">
                  RDC
                </dt>
                <dd className="mt-1 font-mono text-[11px] leading-snug text-cream/75">
                  CD/KNG/RCCM/25-B-01820
                </dd>
              </div>
              <div className="rounded-xl border border-white/10 bg-navy-soft/80 px-4 py-3">
                <dt className="text-[10px] font-semibold uppercase tracking-wider text-gold">
                  Afrique du Sud
                </dt>
                <dd className="mt-1 font-mono text-[11px] leading-snug text-cream/75">
                  2025/780904/07
                </dd>
              </div>
              <div className="rounded-xl border border-white/10 bg-navy-soft/80 px-4 py-3">
                <dt className="text-[10px] font-semibold uppercase tracking-wider text-gold">
                  D-U-N-S
                </dt>
                <dd className="mt-1 font-mono text-[11px] leading-snug text-cream/75">
                  366868380
                </dd>
              </div>
            </dl>
          </div>

          <div className="order-1 lg:order-2">
            <figure className="relative mx-auto max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-[#050508] shadow-[0_24px_64px_rgba(0,0,0,0.45)] ring-1 ring-gold/20">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/meduc-gm-card.png"
                  alt="Carte MEDUC GM et smartphone — identité institutionnelle HealthTech FinTech"
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  priority
                />
              </div>
              <figcaption className="border-t border-white/10 px-5 py-3 text-center text-[11px] tracking-wide text-cream/55">
                Identité visuelle MEDUC GM — HealthTech &amp; FinTech
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Mission et produit */}
      <section
        className="section-pad bg-cream"
        aria-labelledby="mission-produit"
      >
        <div className="container-site max-w-3xl">
          <p className="font-serif text-sm tracking-[0.2em] text-gold-deep">
            PRODUIT
          </p>
          <h2
            id="mission-produit"
            className="mt-3 font-serif text-3xl text-navy md:text-4xl"
          >
            Mission et produit
          </h2>
          <p className="mt-6 text-justify text-sm leading-relaxed text-ink-muted md:text-base">
            Meduc GM développe et opère MeducAHT — l&apos;Africa Health
            e-Voucher — le premier système de financement de soins de santé à
            réserve intégrale conçu pour les 115 millions de citoyens
            congolais, dont 50 millions sont non-bancarisés et structurellement
            exclus des soins. Propulsé par Microsoft Azure, MeducAHT permet
            l&apos;accès aux soins ICD-10 via USSD *707# sans smartphone ni
            compte bancaire, avec une distribution automatique et immuable des
            flux financiers entre prestataires, État et plateforme.
          </p>
        </div>
      </section>

      <section className="section-pad bg-cream-muted">
        <div className="container-site flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl">Découvrir l&apos;équipe</h2>
            <p className="mt-3 text-justify text-ink-muted">
              Des profils de santé publique, d&apos;opérations et de
              partenariats au service de la mission.
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
