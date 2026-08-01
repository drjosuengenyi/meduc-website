"use client";

import { ArrowRight } from "lucide-react";
import type { CmsTemplate } from "@/types/cms";
import { CATEGORY_LABELS, CMS_TEMPLATES } from "@/lib/cms/templates";
import { CmsIcon } from "./CmsIcon";

const ORDER: CmsTemplate["category"][] = [
  "content",
  "institutional",
  "commercial",
  "legal",
];

export default function CmsPagesHub({
  onSelectTemplate,
}: {
  onSelectTemplate: (tpl: CmsTemplate) => void;
}) {
  return (
    <div className="cms-view space-y-6">
      <div>
        <h2 className="text-base font-bold text-slate-50">Générateur de Pages</h2>
        <p className="text-xs text-slate-400">
          Choisissez un modèle pré-structuré pour démarrer une nouvelle page
        </p>
      </div>

      {ORDER.map((category) => {
        const items = CMS_TEMPLATES.filter((t) => t.category === category);
        return (
          <div key={category}>
            <h3 className="mb-3 text-[11px] font-bold uppercase tracking-widest text-[#FACC15]/80">
              {CATEGORY_LABELS[category]}
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((tpl) => (
                <button
                  key={tpl.key}
                  type="button"
                  onClick={() => onSelectTemplate(tpl)}
                  className="cms-tpl-card cms-glass rounded-xl border border-slate-800/80 p-5 text-left"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#9C7A2E]/30 to-[#FACC15]/10">
                    <CmsIcon name={tpl.icon} className="h-4 w-4 text-[#FACC15]" />
                  </div>
                  <div className="mb-1 text-sm font-bold text-slate-100">
                    {tpl.label}
                  </div>
                  <div className="text-xs leading-snug text-slate-400">
                    {tpl.desc}
                  </div>
                  <div className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-[#FACC15]/80">
                    <ArrowRight className="h-3 w-3" />
                    Créer une page
                  </div>
                </button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
