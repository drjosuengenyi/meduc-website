import Link from "next/link";
import Image from "next/image";

type HeroProps = {
  title?: string;
  subtitle?: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  imageSrc?: string;
  imageAlt?: string;
};

export default function Hero({
  title = "Soins accessibles, communautés renforcées",
  subtitle = "MEDUC déploie des programmes d'accès aux soins et d'éducation sanitaire pour rapprocher les services essentiels des populations.",
  primaryCta = { href: "/evoucher/", label: "Découvrir e-Voucher" },
  secondaryCta = { href: "/a-propos/", label: "Notre mission" },
  imageSrc = "/images/hero-care.svg",
  imageAlt = "Professionnels de santé accompagnant une communauté dans un centre de soins",
}: HeroProps) {
  return (
    <section className="relative min-h-[min(92vh,820px)] overflow-hidden bg-navy">
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
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(212,175,55,0.18),transparent_55%)]"
          aria-hidden
        />
      </div>

      <div className="container-site relative flex min-h-[min(92vh,820px)] flex-col justify-end pb-16 pt-28 md:justify-center md:pb-24 md:pt-20">
        <p className="font-serif text-4xl tracking-tight text-gold sm:text-5xl md:text-6xl lg:text-7xl">
          MEDUC
        </p>
        <h1 className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-cream sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={primaryCta.href} className="btn-primary">
            {primaryCta.label}
          </Link>
          <Link href={secondaryCta.href} className="btn-secondary">
            {secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
