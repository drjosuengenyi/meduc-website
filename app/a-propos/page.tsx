import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Mission, vision et valeurs de MEDUC pour un accès équitable aux soins en Afrique.",
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
          <p className="font-serif text-4xl text-gold md:text-5xl">MEDUC</p>
          <h1 className="mt-4 max-w-2xl font-serif text-3xl text-cream md:text-5xl">
            À propos de notre mission
          </h1>
          <p className="mt-5 max-w-xl text-base text-cream/80 md:text-lg">
            Nous œuvrons pour que chaque communauté dispose d&apos;un accès
            fiable aux soins essentiels et à une information sanitaire claire.
          </p>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl">Notre raison d&apos;être</h2>
            <div className="prose-meduc mt-5">
              <p>
                MEDUC est une organisation dédiée à l&apos;accès aux soins et à
                l&apos;éducation sanitaire. Nous concevons des programmes qui
                réduisent les freins pratiques entre les ménages et les
                établissements de santé.
              </p>
              <p>
                Notre approche combine accompagnement terrain, outils numériques
                simples comme l&apos;e-voucher, et partenariats durables avec les
                autorités et les acteurs locaux.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <div className="border-l-2 border-gold pl-5">
              <h3 className="text-xl">Vision</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Des systèmes de santé plus inclusifs, où l&apos;information et
                les services essentiels sont à portée de chaque famille.
              </p>
            </div>
            <div className="border-l-2 border-gold pl-5">
              <h3 className="text-xl">Valeurs</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Dignité des patients, transparence des parcours, responsabilité
                partagée avec les partenaires, et ancrage communautaire.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream-muted">
        <div className="container-site flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl">Découvrir l&apos;équipe</h2>
            <p className="mt-3 text-ink-muted">
              Des profils de santé publique, d&apos;opérations et de
              partenariats au service de la mission.
            </p>
          </div>
          <Link href="/equipe/" className="btn-outline">
            Voir l&apos;équipe
          </Link>
        </div>
      </section>
    </>
  );
}
