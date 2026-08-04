import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EvoucherParcours from "@/components/EvoucherParcours";
import "./evoucher-parcours.css";

export const metadata: Metadata = {
  title: "e-Voucher",
  description:
    "Le dispositif e-voucher MEDUC GM pour faciliter l'accès aux soins essentiels via USSD *707#.",
};

export default function EvoucherPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <Image
            src="/images/evoucher-care.svg"
            alt="Agent de santé remettant un e-voucher à un patient dans un centre de soins"
            fill
            priority
            className="object-cover opacity-45"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/45"
            aria-hidden
          />
        </div>
        <div className="container-site relative py-24 md:py-32">
          <p className="font-serif text-4xl text-gold md:text-5xl">
            MEDUC <span className="text-[#1a6fd4]">GM</span>
          </p>
          <h1 className="mt-4 max-w-2xl font-serif text-3xl text-cream md:text-5xl">
            e-Voucher : un accès simplifié aux soins
          </h1>
          <p className="mt-5 max-w-xl text-base text-cream/80 md:text-lg">
            Un dispositif numérique léger qui relie bénéficiaires et
            établissements partenaires, sans complexité inutile.
          </p>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-site">
          <h2 className="max-w-2xl text-3xl md:text-4xl">
            Comment fonctionne le parcours
          </h2>
          <EvoucherParcours />
        </div>
      </section>

      <section className="section-pad bg-cream-muted">
        <div className="container-site grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl">Pour les établissements</h2>
            <p className="mt-4 text-justify text-ink-muted">
              Rejoindre le réseau e-voucher, c&apos;est accueillir des
              bénéficiaires orientés, disposer d&apos;un flux de validation
              simple et renforcer la continuité des soins de proximité.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/partenaires/" className="btn-outline">
              Voir le réseau
            </Link>
            <Link href="/contact/" className="btn-primary">
              Demander une démo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
