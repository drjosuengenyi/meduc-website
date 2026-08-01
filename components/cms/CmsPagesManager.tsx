"use client";

import { Eye, Pencil, Trash2 } from "lucide-react";
import type { CmsPage } from "@/types/cms";

export default function CmsPagesManager({
  pages,
  onEdit,
  onDelete,
  onPreview,
}: {
  pages: CmsPage[];
  onEdit: (page: CmsPage) => void;
  onDelete: (id: string) => void;
  onPreview: (page: CmsPage) => void;
}) {
  const sorted = [...pages].sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
  );

  return (
    <div className="cms-view">
      <div className="mb-5">
        <h2 className="text-base font-bold text-slate-50">Gestionnaire de pages</h2>
        <p className="text-xs text-slate-400">
          Toutes les pages du site — édition, prévisualisation, suppression
        </p>
      </div>

      <div className="cms-glass overflow-hidden rounded-xl">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-slate-800 bg-slate-900/40 text-xs uppercase tracking-wide text-slate-400">
              <tr>
                <th className="px-4 py-3 font-semibold">Titre</th>
                <th className="px-4 py-3 font-semibold">Type</th>
                <th className="px-4 py-3 font-semibold">Statut</th>
                <th className="px-4 py-3 font-semibold">Modifié</th>
                <th className="px-4 py-3 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((page) => (
                <tr
                  key={page.id}
                  className="border-b border-slate-800/70 last:border-0 hover:bg-white/[0.02]"
                >
                  <td className="px-4 py-3">
                    <div className="font-semibold text-slate-100">
                      {page.title || "(Sans titre)"}
                    </div>
                    <div className="text-xs text-slate-500">
                      {page.sourceRoute || page.subtitle || "—"}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-slate-300">{page.templateLabel}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                        page.status === "published"
                          ? "bg-[rgba(212,175,55,0.15)] text-[#FACC15]"
                          : "bg-[rgba(34,211,238,0.12)] text-[#22D3EE]"
                      }`}
                    >
                      {page.status === "published" ? "Publié" : "Brouillon"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-400">
                    {new Date(page.updatedAt).toLocaleString("fr-FR")}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        className="rounded-md p-2 text-slate-300 hover:bg-white/10 hover:text-[#FACC15]"
                        title="Éditer"
                        onClick={() => onEdit(page)}
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        className="rounded-md p-2 text-slate-300 hover:bg-white/10 hover:text-[#FACC15]"
                        title="Prévisualiser"
                        onClick={() => onPreview(page)}
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        className="rounded-md p-2 text-slate-300 hover:bg-white/10 hover:text-red-400"
                        title="Supprimer"
                        onClick={() => onDelete(page.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
