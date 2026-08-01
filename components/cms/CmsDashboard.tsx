"use client";

import { FileCheck2, Images, PenLine, UserPlus } from "lucide-react";
import type { CmsActivity, CmsPage } from "@/types/cms";
import { CmsIcon } from "./CmsIcon";

function relativeTime(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const h = Math.floor(diff / 3600000);
  if (h < 1) return "à l'instant";
  if (h < 24) return `il y a ${h}h`;
  const d = Math.floor(h / 24);
  if (d === 1) return "hier";
  return `il y a ${d} jours`;
}

export default function CmsDashboard({
  pages,
  activity,
}: {
  pages: CmsPage[];
  activity: CmsActivity[];
}) {
  const published = pages.filter((p) => p.status === "published").length;
  const drafts = pages.filter((p) => p.status === "draft").length;
  const mediaCount = pages.reduce((n, p) => n + p.media.length, 0);

  return (
    <div className="cms-view space-y-8">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
        {[
          {
            label: "Pages publiées",
            value: published,
            icon: FileCheck2,
            tone: "text-[#FACC15]",
          },
          {
            label: "Brouillons",
            value: drafts,
            icon: PenLine,
            tone: "text-[#22D3EE]",
          },
          {
            label: "Inscriptions (30j)",
            value: "—",
            icon: UserPlus,
            tone: "text-[#FACC15]",
          },
          {
            label: "Médias stockés",
            value: mediaCount,
            icon: Images,
            tone: "text-[#22D3EE]",
          },
        ].map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.label} className="cms-glass rounded-xl p-5">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs uppercase tracking-wide text-slate-400">
                  {card.label}
                </span>
                <Icon className={`h-4 w-4 ${card.tone}`} />
              </div>
              <div className="text-2xl font-extrabold text-slate-50">
                {card.value}
              </div>
            </div>
          );
        })}
      </div>

      <div className="cms-glass rounded-xl p-6">
        <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-[#FACC15]">
          Activité récente
        </h2>
        <ul className="space-y-3 text-sm">
          {activity.slice(0, 8).map((item, idx) => (
            <li
              key={item.id}
              className={`flex items-center justify-between ${
                idx < Math.min(activity.length, 8) - 1
                  ? "border-b border-slate-800/70 pb-3"
                  : ""
              }`}
            >
              <span className="flex items-center gap-2 text-slate-300">
                <CmsIcon name={item.icon} className="h-4 w-4 text-[#FACC15]" />
                {item.message}
              </span>
              <span className="text-xs text-slate-500">
                {relativeTime(item.at)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
