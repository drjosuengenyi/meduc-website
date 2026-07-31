import Image from "next/image";
import type { Partner } from "@/types/content";

type PartnerLogosProps = {
  partners: Partner[];
  compact?: boolean;
};

export default function PartnerLogos({
  partners,
  compact = false,
}: PartnerLogosProps) {
  return (
    <ul
      className={
        compact
          ? "grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6"
          : "grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      }
    >
      {partners.map((partner) => (
        <li key={partner.id}>
          {compact ? (
            <div className="flex h-24 items-center justify-center border border-border bg-cream px-4">
              <Image
                src={partner.logo}
                alt={partner.logoAlt}
                width={140}
                height={48}
                className="h-10 w-auto max-w-full object-contain"
              />
            </div>
          ) : (
            <article className="flex h-full flex-col gap-4 border-t border-border pt-6">
              <div className="flex h-16 items-center">
                <Image
                  src={partner.logo}
                  alt={partner.logoAlt}
                  width={160}
                  height={56}
                  className="h-12 w-auto max-w-full object-contain"
                />
              </div>
              <h3 className="text-lg">{partner.name}</h3>
              <p className="text-sm leading-relaxed text-ink-muted">
                {partner.description}
              </p>
              {partner.url ? (
                <a
                  href={partner.url}
                  className="mt-auto text-sm font-semibold text-navy underline-offset-4 hover:text-gold-deep hover:underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  En savoir plus
                  <span className="sr-only"> sur {partner.name}</span>
                </a>
              ) : null}
            </article>
          )}
        </li>
      ))}
    </ul>
  );
}
