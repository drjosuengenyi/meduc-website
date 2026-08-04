"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { Lang } from "@/lib/i18n/config";

type Props = {
  variant?: "light" | "dark";
  className?: string;
};

export default function LanguageToggle({
  variant = "light",
  className = "",
}: Props) {
  const { lang, setLang } = useLanguage();

  const isDark = variant === "dark";
  const shell = isDark
    ? "border border-white/15 bg-white/5"
    : "border border-border bg-cream-muted";
  const idle = isDark ? "text-cream/50 hover:text-cream" : "text-ink-muted hover:text-navy";
  const active = isDark
    ? "bg-gold text-navy"
    : "bg-navy text-cream";

  const btn = (code: Lang, label: string) => (
    <button
      type="button"
      key={code}
      onClick={() => setLang(code)}
      aria-pressed={lang === code}
      className={`px-2.5 py-1.5 font-mono text-[10px] font-bold tracking-wider transition ${
        lang === code ? active : idle
      }`}
    >
      {label}
    </button>
  );

  return (
    <div
      className={`inline-flex overflow-hidden rounded-md ${shell} ${className}`}
      role="group"
      aria-label="Language / Langue"
    >
      {btn("fr", "FR")}
      {btn("en", "EN")}
    </div>
  );
}
