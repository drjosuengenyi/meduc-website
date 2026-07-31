const AUDIENCES = [
  {
    title: "Ménages & patients",
    description:
      "Accéder à des soins essentiels via le dispositif e-voucher, avec un parcours simple et transparent.",
  },
  {
    title: "Établissements de santé",
    description:
      "Intégrer un réseau partenaire pour accueillir des bénéficiaires et renforcer la continuité des soins.",
  },
  {
    title: "Autorités & partenaires",
    description:
      "Suivre l'impact des programmes, aligner les priorités nationales et élargir la couverture sanitaire.",
  },
  {
    title: "Agents communautaires",
    description:
      "Disposer d'outils d'éducation sanitaire pour accompagner les familles au plus près du terrain.",
  },
] as const;

export default function AudienceGrid() {
  return (
    <section
      className="section-pad bg-cream-muted"
      aria-labelledby="audience-heading"
    >
      <div className="container-site">
        <div className="max-w-2xl">
          <h2 id="audience-heading" className="text-3xl md:text-4xl">
            Pour qui nous agissons
          </h2>
          <p className="mt-3 text-ink-muted">
            MEDUC sert plusieurs publics autour d&apos;un même objectif :
            rapprocher les soins des personnes.
          </p>
        </div>
        <ul className="mt-12 grid gap-8 sm:grid-cols-2">
          {AUDIENCES.map((item) => (
            <li
              key={item.title}
              className="border-l-2 border-gold pl-5"
            >
              <h3 className="text-xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
