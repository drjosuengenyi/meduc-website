import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notre politique",
  description:
    "Principes de gouvernance, protection des données et engagement éthique de MEDUC.",
};

const POLICIES = [
  {
    title: "Gouvernance responsable",
    body: "Les décisions stratégiques sont prises avec des mécanismes de relecture claire, au service des bénéficiaires et des partenaires terrain.",
  },
  {
    title: "Protection des données",
    body: "Les informations personnelles liées aux parcours de soins sont traitées avec minimisation, finalité limitée et contrôles d'accès adaptés.",
  },
  {
    title: "Équité d'accès",
    body: "Nos programmes privilégient les populations éloignées des services essentiels, sans discrimination de genre, d'âge ou de statut social.",
  },
  {
    title: "Intégrité des partenariats",
    body: "Nous sélectionnons et suivons nos partenaires selon des critères de qualité des soins, de transparence et de respect des usagers.",
  },
] as const;

export default function NotrePolitiquePage() {
  return (
    <>
      <section className="section-pad bg-navy">
        <div className="container-site max-w-3xl">
          <p className="font-serif text-4xl text-gold">MEDUC</p>
          <h1 className="mt-4 text-4xl text-cream md:text-5xl">
            Notre politique
          </h1>
          <p className="mt-5 text-lg text-cream/80">
            Les règles qui encadrent notre action quotidienne et protègent les
            personnes que nous servons.
          </p>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-site grid gap-10 md:grid-cols-2">
          {POLICIES.map((item) => (
            <article key={item.title} className="border-t border-gold pt-6">
              <h2 className="text-2xl">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad bg-cream-muted">
        <div className="container-site max-w-2xl">
          <h2 className="text-3xl">Signalement & questions</h2>
          <p className="mt-4 text-ink-muted">
            Pour toute question relative à nos politiques ou pour signaler une
            préoccupation éthique, contactez-nous via la page dédiée. Chaque
            message est traité avec confidentialité.
          </p>
        </div>
      </section>
    </>
  );
}
