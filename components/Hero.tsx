import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";

type HeroProps = {
  title?: string;
  subtitle?: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  imageSrc?: string;
  imageAlt?: string;
};

const HERO_STATS = [
  { value: "38M", label: "personnes déjà touchées" },
  { value: "112M", label: "ambition d'ici 2030" },
  { value: "6", label: "réseaux partenaires actifs" },
] as const;

function delay(seconds: number): CSSProperties {
  return { "--rise-delay": `${seconds}s` } as CSSProperties;
}

export default function Hero({
  title = "Accès Inclusif aux Soins de Santé.",
  subtitle = "De la Crise sanitaire à l'opportunité d'Investissement et emplois des jeunes. La RDC se reconstruit, l'Afrique innove.",
  primaryCta = { href: "/evoucher/", label: "Découvrir e-Voucher" },
  secondaryCta = { href: "/a-propos/", label: "Notre mission" },
  imageSrc = "/images/hero-care.svg",
  imageAlt = "Professionnels de santé accompagnant une communauté dans un centre de soins",
}: HeroProps) {
  return (
    <section className="relative min-h-[min(94vh,860px)] overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover object-center opacity-55"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_35%,rgba(212,175,55,0.2),transparent_55%)]"
          aria-hidden
        />
        <div
          className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy to-transparent"
          aria-hidden
        />
      </div>

      <div className="container-site relative flex min-h-[min(94vh,860px)] flex-col justify-end pb-10 pt-28 md:justify-center md:pb-16 md:pt-20">
        <p className="hero-rise eyebrow text-gold" style={delay(0)}>
          Santé · Éducation · Impact
        </p>

        <p
          className="hero-rise mt-4 font-serif text-4xl tracking-tight text-gold sm:text-5xl md:text-6xl lg:text-7xl"
          style={delay(0.1)}
        >
          MEDUC <span className="text-[#5b9ef5]">GM</span>
        </p>

        <h1
          className="hero-rise mt-4 max-w-2xl font-serif text-3xl leading-tight text-cream sm:text-4xl md:text-5xl"
          style={delay(0.2)}
        >
          {title}
        </h1>

        <p
          className="hero-rise mt-5 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg"
          style={delay(0.3)}
        >
          {subtitle}
        </p>

        <div className="hero-rise mt-8 flex flex-wrap gap-3" style={delay(0.4)}>
          <Link href={primaryCta.href} className="btn-primary">
            {primaryCta.label}
          </Link>
          <Link href={secondaryCta.href} className="btn-secondary">
            {secondaryCta.label}
          </Link>
        </div>

        <dl
          className="hero-rise mt-14 grid max-w-2xl grid-cols-1 gap-6 border-t border-gold/25 pt-8 sm:grid-cols-3"
          style={delay(0.55)}
        >
          {HERO_STATS.map((stat) => (
            <div key={stat.label}>
              <dt className="order-2 text-xs uppercase tracking-wide text-cream/60">
                {stat.label}
              </dt>
              <dd className="font-serif text-3xl text-gold md:text-4xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
