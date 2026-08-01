import type { Metadata } from "next";
import LeadershipCard from "@/components/LeadershipCard";
import equipeData from "@/content/equipe.json";
import type { EquipeContent } from "@/types/content";

const equipe = equipeData as EquipeContent;

export const metadata: Metadata = {
  title: "Équipe",
  description:
    "Direction et leadership de MEDUC engagés pour l'accès aux soins et l'éducation sanitaire.",
};

export default function EquipePage() {
  return (
    <>
      <section className="section-pad bg-cream border-b border-border">
        <div className="container-site max-w-3xl">
          <p className="font-serif text-sm tracking-widest text-gold-deep">
            LEADERSHIP
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl">{equipe.title}</h1>
          <p className="mt-4 text-lg text-ink-muted">{equipe.subtitle}</p>
        </div>
      </section>

      <section className="section-pad bg-cream" aria-label="Membres de l'équipe">
        <div className="container-site grid gap-14">
          {equipe.members.map((member) => (
            <LeadershipCard key={member.id} member={member} />
          ))}
        </div>
      </section>
    </>
  );
}
