"use client";

import LeadershipCard from "@/components/LeadershipCard";
import equipeData from "@/content/equipe.json";
import type { EquipeContent } from "@/types/content";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const equipe = equipeData as EquipeContent;

export default function EquipePage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="section-pad bg-cream border-b border-border">
        <div className="container-site max-w-3xl">
          <p className="font-serif text-4xl text-gold md:text-5xl">
            MEDUC <span className="text-[#1a6fd4]">GM</span>
          </p>
          <p className="mt-4 font-serif text-sm tracking-widest text-gold-deep">
            {t.team.eyebrow}
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl">{t.team.title}</h1>
          <p className="mt-4 text-lg text-ink-muted">{t.team.subtitle}</p>
        </div>
      </section>

      <section className="section-pad bg-cream" aria-label={t.team.aria}>
        <div className="container-site grid gap-14">
          {equipe.members.map((member) => (
            <LeadershipCard key={member.id} member={member} />
          ))}
        </div>
      </section>
    </>
  );
}
