const PILLARS = [
  {
    title: "Accès aux soins",
    description:
      "Des parcours simplifiés pour que les ménages rejoignent plus facilement les établissements de santé partenaires.",
  },
  {
    title: "Éducation sanitaire",
    description:
      "Des messages clairs et locaux pour renforcer la prévention et l'autonomie des communautés.",
  },
  {
    title: "Partenariats durables",
    description:
      "Une collaboration étroite avec les autorités, les ONG et les prestataires pour un impact partagé.",
  },
] as const;

export default function TrustPillars() {
  return (
    <section className="section-pad bg-cream" aria-labelledby="trust-heading">
      <div className="container-site">
        <div className="max-w-2xl">
          <h2 id="trust-heading" className="text-3xl md:text-4xl">
            Ce qui guide notre action
          </h2>
          <p className="mt-3 text-ink-muted">
            Trois piliers pour bâtir la confiance et mesurer la pertinence de
            chaque programme.
          </p>
        </div>
        <ul className="mt-12 grid gap-10 md:grid-cols-3">
          {PILLARS.map((pillar, index) => (
            <li key={pillar.title} className="relative pt-6">
              <span
                className="absolute left-0 top-0 h-0.5 w-12 bg-gold"
                aria-hidden
              />
              <p className="font-serif text-sm tracking-widest text-gold-deep">
                0{index + 1}
              </p>
              <h3 className="mt-3 text-xl">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {pillar.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
