"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  const FOOTER_LINKS = [
    { href: "/a-propos/", label: t.nav.about },
    { href: "/equipe/", label: t.nav.team },
    { href: "/notre-politique/", label: t.nav.policy },
    { href: "/partenaires/", label: t.nav.partners },
    { href: "/evoucher/", label: t.nav.evoucher },
    { href: "/impact/", label: t.nav.impact },
    { href: "/contact/", label: t.nav.contact },
  ] as const;

  return (
    <footer className="border-t border-border bg-navy text-cream">
      <div className="container-site section-pad grid gap-10 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="font-serif text-2xl text-cream">
            MEDUC <span className="text-[#5b9ef5]">GM</span>
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/75">
            {t.footer.tagline}
          </p>
        </div>
        <nav aria-label={t.footer.navAria}>
          <ul className="grid grid-cols-2 gap-3 text-sm">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-cream/80 no-underline hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-5 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {t.footer.rights}
          </p>
          <p>{t.footer.techNote}</p>
        </div>
      </div>
    </footer>
  );
}
