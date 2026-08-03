import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez l'équipe MEDUC pour un partenariat, une question programme ou un accompagnement e-voucher.",
};

export default function ContactPage() {
  return (
    <>
      <section className="section-pad bg-navy">
        <div className="container-site max-w-3xl">
          <p className="font-serif text-4xl text-gold">
            MEDUC <span className="text-[#1a6fd4]">GM</span>
          </p>
          <h1 className="mt-4 text-4xl text-cream md:text-5xl">Contact</h1>
          <p className="mt-5 text-lg text-cream/80">
            Une question sur nos programmes, un projet de partenariat ou une
            demande d&apos;information sur l&apos;e-voucher : écrivez-nous.
          </p>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="text-2xl">Coordonnées</h2>
            <dl className="mt-6 space-y-5 text-sm">
              <div>
                <dt className="font-semibold text-navy">Courriel</dt>
                <dd className="mt-1 text-ink-muted">
                  <a
                    href="mailto:contact@meduc.tech"
                    className="text-navy underline-offset-4 hover:text-gold-deep hover:underline"
                  >
                    contact@meduc.tech
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-navy">Bureau SA</dt>
                <dd className="mt-1 text-ink-muted">
                  144, Begonia Rd, Kyalami,
                  <br />
                  Johannesburg 1684, SA
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-navy">Téléphone</dt>
                <dd className="mt-1 text-ink-muted">
                  <a
                    href="tel:+27617692109"
                    className="text-navy underline-offset-4 hover:text-gold-deep hover:underline"
                  >
                    +27617692109
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-navy">Horaires</dt>
                <dd className="mt-1 text-ink-muted">
                  Du lundi au vendredi, 9h–17h (heure locale).
                </dd>
              </div>
            </dl>
          </div>

          <form
            className="space-y-5"
            action="mailto:contact@meduc.tech"
            method="post"
            encType="text/plain"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-navy">
                Nom complet
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="mt-2 w-full border border-border bg-cream-muted px-4 py-3 text-sm text-ink outline-none focus:border-gold"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-navy">
                Courriel
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="mt-2 w-full border border-border bg-cream-muted px-4 py-3 text-sm text-ink outline-none focus:border-gold"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-navy">
                Objet
              </label>
              <select
                id="subject"
                name="subject"
                className="mt-2 w-full border border-border bg-cream-muted px-4 py-3 text-sm text-ink outline-none focus:border-gold"
                defaultValue="partenariat"
              >
                <option value="partenariat">Partenariat</option>
                <option value="evoucher">e-Voucher</option>
                <option value="programme">Programme / mission</option>
                <option value="autre">Autre</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-navy">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="mt-2 w-full resize-y border border-border bg-cream-muted px-4 py-3 text-sm text-ink outline-none focus:border-gold"
              />
            </div>
            <button type="submit" className="btn-primary">
              Envoyer le message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
