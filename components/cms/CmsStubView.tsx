"use client";

import type { LucideIcon } from "lucide-react";
import { CmsIcon } from "./CmsIcon";

export default function CmsStubView({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="cms-view">
      <div className="cms-glass rounded-xl p-8 text-center text-sm text-slate-400">
        <CmsIcon name={icon} className="mx-auto mb-3 h-8 w-8 text-[#FACC15]/70" />
        <p className="mb-1 font-semibold text-slate-200">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export type { LucideIcon };
