"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href.replace(/\/$/, "")) || pathname === href;
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const NAV_LINKS = [
    { href: "/", label: t.nav.home },
    { href: "/presentation/", label: t.nav.presentation },
    { href: "/a-propos/", label: t.nav.about },
    { href: "/equipe/", label: t.nav.team },
    { href: "/notre-politique/", label: t.nav.policy },
    { href: "/partenaires/", label: t.nav.partners },
    { href: "/evoucher/", label: t.nav.evoucher },
    { href: "/impact/", label: t.nav.impact },
    { href: "/contact/", label: t.nav.contact },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-cream/95 backdrop-blur-sm">
      <div className="container-site flex h-16 items-center justify-between gap-4 md:h-20">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-serif text-xl tracking-tight text-navy no-underline md:text-2xl"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/meduc-logo.png"
            alt="Logo MEDUC GM"
            width={44}
            height={44}
            className="h-10 w-10 object-contain md:h-11 md:w-11"
            priority
          />
          <span>
            MEDUC <span className="text-[#1a6fd4]">GM</span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 xl:flex"
          aria-label={t.nav.mainAria}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-sm px-2.5 py-2 text-sm no-underline ${
                isActive(pathname, link.href)
                  ? "font-semibold text-navy"
                  : "text-ink-muted hover:text-navy"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <LanguageToggle className="ml-2" />
        </nav>

        <div className="flex items-center gap-2 xl:hidden">
          <LanguageToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-navy"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{t.nav.menu}</span>
            <span aria-hidden className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 bg-navy transition ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-navy transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-navy transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-border bg-cream px-5 py-4 xl:hidden"
          aria-label={t.nav.mobileAria}
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded-sm px-3 py-3 text-base no-underline ${
                    isActive(pathname, link.href)
                      ? "bg-cream-muted font-semibold text-navy"
                      : "text-ink-muted"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
