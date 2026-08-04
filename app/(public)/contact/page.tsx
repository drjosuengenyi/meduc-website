"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function ContactPage() {
  const { t } = useLanguage();
  const c = t.contact;

  return (
    <>
      <section className="section-pad bg-navy">
        <div className="container-site max-w-3xl">
          <p className="font-serif text-4xl text-gold">
            MEDUC <span className="text-[#1a6fd4]">GM</span>
          </p>
          <h1 className="mt-4 text-4xl text-cream md:text-5xl">{c.h1}</h1>
          <p className="mt-5 text-justify text-lg text-cream/80">{c.lead}</p>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="text-2xl">{c.coords}</h2>
            <dl className="mt-6 space-y-5 text-sm">
              <div>
                <dt className="font-semibold text-navy">{c.email}</dt>
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
                <dt className="font-semibold text-navy">{c.officeSa}</dt>
                <dd className="mt-1 text-ink-muted">
                  144, Begonia Rd, Kyalami,
                  <br />
                  Johannesburg 1684, SA
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-navy">{c.phone}</dt>
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
                <dt className="font-semibold text-navy">{c.hours}</dt>
                <dd className="mt-1 text-ink-muted">{c.hoursValue}</dd>
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
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-navy"
              >
                {c.name}
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
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-navy"
              >
                {c.email}
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
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-navy"
              >
                {c.subject}
              </label>
              <select
                id="subject"
                name="subject"
                className="mt-2 w-full border border-border bg-cream-muted px-4 py-3 text-sm text-ink outline-none focus:border-gold"
                defaultValue="partenariat"
              >
                <option value="partenariat">{c.subjectPartnership}</option>
                <option value="evoucher">{c.subjectEvoucher}</option>
                <option value="programme">{c.subjectProgram}</option>
                <option value="autre">{c.subjectOther}</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-navy"
              >
                {c.message}
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
              {c.submit}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
