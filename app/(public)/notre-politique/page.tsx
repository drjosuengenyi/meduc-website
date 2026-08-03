import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notre politique",
  description:
    "Principes de gouvernance, protection des données et engagement éthique de MEDUC.",
};

const POLICIES = [
  {
    title: "Gouvernance responsable",
    subtitle: "Transparence et traçabilité au cœur de notre modèle",
    body: "Meduc GM est gouverné selon des principes de transparence totale et de responsabilité institutionnelle. Chaque décision financière irréversible est soumise au droit de véto irrévocable du Directeur Général & Fondateur. Sur la plateforme MeducAHT, chaque transaction est enregistrée de manière immuable sur le Microsoft Azure Confidential Ledger — accessible en temps réel aux autorités de régulation, aux auditeurs et aux partenaires institutionnels. Aucun acteur, y compris Meduc GM, ne peut modifier ou effacer un enregistrement. La traçabilité n’est pas une option — elle est garantie par l’architecture même du système.",
  },
  {
    title: "Protection des données",
    subtitle: "Conformité HAIPPA & Contrat de confiance Microsoft Azure",
    body: "La protection des données de santé est une priorité absolue. MeducAHT est conçu en conformité avec la loi congolaise sur le numérique, le protocole HAIPPA et les standards internationaux RGPD. L’infrastructure repose entièrement sur Microsoft Azure. Le Contrat de Confiance Microsoft encadre juridiquement le traitement des données, complété par Azure Key Vault HSM (clés non-exportables), Private Endpoints (zéro exposition Internet) et Microsoft Defender for Cloud. La sécurité des données n’est pas une promesse — c’est une architecture.",
  },
  {
    title: "Équité d'accès",
    subtitle: "Des soins accessibles à tous, sur base du barème officiel ICD-10",
    body: "MeducAHT intègre les barèmes de prix fixés par l’autorité de régulation des prix de santé en RDC, traduits en actes médicaux codés ICD-10. Chaque e-voucher AHT donne accès à des soins tarifés de manière uniforme et transparente — qu’il soit utilisé à Kinshasa ou dans une zone rurale du Nord-Kivu. Aucune discrimination tarifaire. Aucune négociation informelle. Le même acte médical, le même prix, pour chaque Congolais — partout sur les 26 provinces. L’équité d’accès cesse d’être une aspiration : elle devient une garantie encodée dans la plateforme.",
  },
  {
    title: "Intégrité des partenariats",
    subtitle: "Une plateforme de confiance, pas un substitut aux acteurs de santé",
    body: "Meduc GM ne se substitue à aucun acteur du secteur de la santé. MeducAHT est une plateforme de soutien et d’amplification : elle renforce l’efficacité des hôpitaux, des prestataires, des opérateurs et des institutions publiques qui agissent déjà sur le terrain. Fondée sur la technologie éprouvée de Microsoft Azure — partenaire de confiance reconnu mondialement — notre plateforme rend l’action du pouvoir public et de ses partenaires plus efficace, plus traçable et à impact directement ressenti par la population. Nous construisons avec les acteurs existants, pas à leur place.",
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
              <p className="mt-3 text-sm font-semibold leading-relaxed text-ink">
                {item.subtitle}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
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
