import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/a-propos/", label: "À propos" },
  { href: "/equipe/", label: "Équipe" },
  { href: "/notre-politique/", label: "Notre politique" },
  { href: "/partenaires/", label: "Partenaires" },
  { href: "/evoucher/", label: "e-Voucher" },
  { href: "/contact/", label: "Contact" },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-navy text-cream">
      <div className="container-site section-pad grid gap-10 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="font-serif text-2xl text-cream">
            MEDUC <span className="text-[#5b9ef5]">GM</span>
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/75">
            Accès équitable aux soins et à l&apos;éducation sanitaire pour les
            communautés d&apos;Afrique.
          </p>
        </div>
        <nav aria-label="Liens de pied de page">
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
          <p>© {year} MEDUC GM. Tous droits réservés.</p>
          <p>Export statique · Azure Static Web Apps</p>
        </div>
      </div>
    </footer>
  );
}
