import Image from "next/image";
import type { TeamMember } from "@/types/content";

type LeadershipCardProps = {
  member: TeamMember;
};

export default function LeadershipCard({ member }: LeadershipCardProps) {
  return (
    <article className="flex flex-col gap-5 sm:flex-row sm:gap-6">
      <div className="relative h-40 w-40 shrink-0 overflow-hidden bg-cream-muted sm:h-44 sm:w-44">
        <Image
          src={member.image}
          alt={member.imageAlt}
          fill
          className="object-cover"
          sizes="176px"
        />
      </div>
      <div className="min-w-0">
        <h3 className="text-2xl">{member.name}</h3>
        <p className="mt-1 text-sm font-semibold tracking-wide text-gold-deep">
          {member.role}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          {member.bio}
        </p>
      </div>
    </article>
  );
}
