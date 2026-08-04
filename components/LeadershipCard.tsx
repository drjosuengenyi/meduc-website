"use client";

import Image from "next/image";
import type { TeamMember } from "@/types/content";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

type LeadershipCardProps = {
  member: TeamMember;
};

export default function LeadershipCard({ member }: LeadershipCardProps) {
  const { t } = useLanguage();
  const localized = t.team.members[member.id];
  const role = localized?.role ?? member.role;
  const bio = localized?.bio ?? member.bio;
  const imageAlt = localized?.imageAlt ?? member.imageAlt;
  const hasPhoto = member.image.endsWith(".png") || member.image.endsWith(".jpg");

  return (
    <article className="flex flex-col gap-5 sm:flex-row sm:gap-6">
      <div
        className={`relative h-40 w-40 shrink-0 overflow-hidden bg-cream-muted sm:h-44 sm:w-44 ${
          hasPhoto ? "rounded-full ring-2 ring-gold/40" : ""
        }`}
      >
        <Image
          src={member.image}
          alt={imageAlt}
          fill
          className="object-cover object-top"
          sizes="176px"
          priority={member.id === "founder-01"}
        />
      </div>
      <div className="min-w-0">
        <h3 className="text-2xl">{member.name}</h3>
        <p className="mt-1 text-sm font-semibold tracking-wide text-gold-deep">
          {role}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">{bio}</p>
        {member.email ? (
          <p className="mt-3">
            <a
              href={`mailto:${member.email}`}
              className="text-sm font-semibold text-navy underline-offset-4 hover:text-gold-deep hover:underline"
            >
              {member.email}
            </a>
          </p>
        ) : null}
      </div>
    </article>
  );
}
