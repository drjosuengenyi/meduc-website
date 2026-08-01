"use client";

import { useEffect, useRef, useState } from "react";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  CloudUpload,
  Eye,
  Italic,
  Rocket,
  Save,
  Underline,
} from "lucide-react";
import type { CmsMediaItem, CmsPage, CmsTheme } from "@/types/cms";
import {
  MEDIA_LAYOUTS,
  PAGE_LAYOUTS,
  QUICK_COLORS,
} from "@/lib/cms/templates";
import { uid } from "@/lib/cms/storage";

type Props = {
  page: CmsPage;
  onChange: (page: CmsPage) => void;
  onBack: () => void;
  onSaveDraft: () => void;
  onPublish: () => void;
  onPreview: () => void;
};

function humanFileSize(bytes: number) {
  if (bytes < 1024) return `${bytes} o`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(1)} Ko`;
  return `${(kb / 1024).toFixed(1)} Mo`;
}

export default function CmsEditor({
  page,
  onChange,
  onBack,
  onSaveDraft,
  onPublish,
  onPreview,
}: Props) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const savedRange = useRef<Range | null>(null);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.innerHTML = page.bodyHtml || "";
    }
    // Sync richtext DOM only when switching pages
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page.id]);

  useEffect(() => {
    const onSel = () => {
      const sel = window.getSelection();
      if (!sel || sel.rangeCount === 0 || !bodyRef.current) return;
      const range = sel.getRangeAt(0);
      if (bodyRef.current.contains(range.startContainer)) {
        savedRange.current = range;
      }
    };
    document.addEventListener("selectionchange", onSel);
    return () => document.removeEventListener("selectionchange", onSel);
  }, []);

  function patch(partial: Partial<CmsPage>) {
    onChange({ ...page, ...partial, updatedAt: new Date().toISOString() });
  }

  function restoreSelection() {
    bodyRef.current?.focus();
    if (!savedRange.current) return;
    const sel = window.getSelection();
    sel?.removeAllRanges();
    sel?.addRange(savedRange.current);
  }

  function runCmd(cmd: string, value?: string) {
    restoreSelection();
    document.execCommand(cmd, false, value);
    if (bodyRef.current) patch({ bodyHtml: bodyRef.current.innerHTML });
  }

  function addFiles(files: FileList | File[]) {
    const list = Array.from(files);
    list.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        const item: CmsMediaItem = {
          id: uid("media"),
          name: file.name,
          type: file.type,
          size: file.size,
          dataUrl: String(reader.result || ""),
        };
        patch({ media: [...page.media, item] });
      };
      reader.readAsDataURL(file);
    });
  }

  const themeClass: Record<CmsTheme, string> = {
    gold: "bg-[#D4AF37]",
    navy: "bg-[#1B2536]",
    cyan: "bg-[#22D3EE]",
  };

  return (
    <div className="cms-view space-y-6">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onBack}
          className="text-sm text-slate-400 hover:text-[#FACC15]"
        >
          ← Retour aux modèles
        </button>
        <span className="text-slate-600">/</span>
        <span className="text-sm font-bold text-[#FACC15]">
          {page.templateLabel}
        </span>
      </div>

      <div className="cms-glass mb-2 rounded-xl p-6">
        <h3 className="mb-4 text-xs font-bold uppercase tracking-wide text-[#FACC15]">
          Format & Présentation de la Page
        </h3>
        <div className="flex flex-wrap items-end gap-8">
          <div>
            <label className="mb-1 block text-xs text-slate-400">
              Format de sortie
            </label>
            <select
              value={page.format}
              onChange={(e) =>
                patch({ format: e.target.value as CmsPage["format"] })
              }
              className="rounded-lg border border-slate-700 bg-[#151E2E]/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
            >
              <option value="html">HTML (page web)</option>
              <option value="pdf">PDF (document imprimable)</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-xs text-slate-400">
              Couleur de fond de la page
            </label>
            <div className="flex flex-wrap items-center gap-2">
              {QUICK_COLORS.map((color) => (
                <button
                  key={color}
                  type="button"
                  title={color}
                  className="h-5 w-5 rounded border border-slate-500/40"
                  style={{ backgroundColor: color }}
                  onClick={() => patch({ backgroundColor: color })}
                />
              ))}
              <input
                type="color"
                value={page.backgroundColor}
                onChange={(e) => patch({ backgroundColor: e.target.value })}
                className="h-9 w-9 cursor-pointer rounded-lg border border-slate-700 bg-transparent p-0"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="space-y-6 xl:col-span-2">
          <div className="cms-glass rounded-xl p-6">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wide text-[#FACC15]">
              Titre & Sous-titre
            </h3>
            <label className="mb-1 block text-xs text-slate-400">
              Titre principal
            </label>
            <input
              type="text"
              value={page.title}
              onChange={(e) => patch({ title: e.target.value })}
              placeholder="Ex. Une nouvelle étape pour l'inclusion sanitaire"
              className="mb-4 w-full rounded-lg border border-slate-700 bg-[#151E2E]/70 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
            />
            <label className="mb-1 block text-xs text-slate-400">
              Sous-titre professionnel
            </label>
            <textarea
              rows={2}
              value={page.subtitle}
              onChange={(e) => patch({ subtitle: e.target.value })}
              placeholder="Une phrase d'accroche claire et institutionnelle"
              className="w-full rounded-lg border border-slate-700 bg-[#151E2E]/70 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
            />
          </div>

          <div className="cms-glass rounded-xl p-6">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wide text-[#FACC15]">
              Corps de la page
            </h3>
            <div className="mb-3 flex flex-wrap items-center gap-1.5 rounded-lg border border-slate-700 bg-[#151E2E]/60 p-2">
              <select
                className="rounded-md border border-slate-700 bg-[#0B0F19] px-2 py-1.5 text-xs"
                defaultValue="Inter, system-ui, sans-serif"
                onChange={(e) => runCmd("fontName", e.target.value)}
              >
                <option value="Inter, system-ui, sans-serif">Inter</option>
                <option value="Georgia, 'Times New Roman', serif">Georgia</option>
                <option value="Arial, sans-serif">Arial</option>
              </select>
              <select
                className="rounded-md border border-slate-700 bg-[#0B0F19] px-2 py-1.5 text-xs"
                defaultValue="3"
                onChange={(e) => runCmd("fontSize", e.target.value)}
              >
                <option value="2">Petit</option>
                <option value="3">Normal</option>
                <option value="4">Moyen</option>
                <option value="5">Grand</option>
                <option value="6">Très grand</option>
              </select>
              <span className="mx-1 h-6 w-px bg-slate-700" />
              {[
                { cmd: "bold", Icon: Bold },
                { cmd: "italic", Icon: Italic },
                { cmd: "underline", Icon: Underline },
                { cmd: "justifyLeft", Icon: AlignLeft },
                { cmd: "justifyCenter", Icon: AlignCenter },
                { cmd: "justifyRight", Icon: AlignRight },
                { cmd: "justifyFull", Icon: AlignJustify },
              ].map(({ cmd, Icon }) => (
                <button
                  key={cmd}
                  type="button"
                  className="flex h-8 w-8 items-center justify-center rounded-md text-slate-200 hover:bg-white/10 hover:text-[#FACC15]"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => runCmd(cmd)}
                >
                  <Icon className="h-3.5 w-3.5" />
                </button>
              ))}
              <span className="mx-1 h-6 w-px bg-slate-700" />
              {QUICK_COLORS.slice(0, 8).map((color) => (
                <button
                  key={color}
                  type="button"
                  className="h-5 w-5 rounded border border-slate-500/40"
                  style={{ backgroundColor: color }}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => runCmd("foreColor", color)}
                />
              ))}
            </div>
            <div
              ref={bodyRef}
              contentEditable
              suppressContentEditableWarning
              data-placeholder="Rédigez le contenu ici..."
              className="cms-richbody min-h-[180px] w-full rounded-lg border border-slate-700 px-3 py-2.5 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
              style={{ backgroundColor: page.backgroundColor }}
              onInput={() => {
                if (bodyRef.current) patch({ bodyHtml: bodyRef.current.innerHTML });
              }}
            />
          </div>

          <div className="cms-glass rounded-xl p-6">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wide text-[#FACC15]">
              Gestionnaire de Médias
            </h3>
            <div
              className={`cms-dropzone cursor-pointer rounded-xl border-2 border-dashed border-slate-700 p-8 text-center transition ${
                dragging ? "dragover" : ""
              }`}
              onClick={() => fileRef.current?.click()}
              onDragOver={(e) => {
                e.preventDefault();
                setDragging(true);
              }}
              onDragLeave={() => setDragging(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragging(false);
                if (e.dataTransfer.files.length) addFiles(e.dataTransfer.files);
              }}
            >
              <CloudUpload className="mx-auto mb-2 h-8 w-8 text-[#FACC15]/70" />
              <p className="text-sm text-slate-300">
                Glissez-déposez des images ou vidéos ici
              </p>
              <p className="mt-1 text-xs text-slate-500">
                ou cliquez pour parcourir (JPG, PNG, MP4)
              </p>
              <input
                ref={fileRef}
                type="file"
                className="hidden"
                accept="image/*,video/*"
                multiple
                onChange={(e) => {
                  if (e.target.files?.length) addFiles(e.target.files);
                }}
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4">
              {page.media.map((m) => (
                <div
                  key={m.id}
                  className="relative flex aspect-square items-center justify-center overflow-hidden rounded-lg border border-slate-700 bg-[#151E2E]/60"
                >
                  {m.type.startsWith("image/") ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={m.dataUrl}
                      alt={m.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-xs text-[#FACC15]">Vidéo</span>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 truncate bg-black/60 px-1.5 py-1 text-[10px] text-slate-200">
                    {m.name} ({humanFileSize(m.size)})
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-slate-800 pt-5">
              <h4 className="mb-1 text-[11px] font-bold uppercase tracking-wide text-[#FACC15]/80">
                Disposition du Media sur la Page
              </h4>
              <div className="mb-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {MEDIA_LAYOUTS.map((layout) => (
                  <button
                    key={layout.key}
                    type="button"
                    onClick={() => patch({ mediaLayout: layout.key })}
                    className={`rounded-lg border border-slate-700 p-2 text-left text-[10px] text-slate-400 transition hover:border-[#FACC15] ${
                      page.mediaLayout === layout.key ? "cms-layout-selected" : ""
                    }`}
                  >
                    {layout.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="cms-glass rounded-xl p-6">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wide text-[#FACC15]">
              Personnalisation du Thème
            </h3>
            <div className="flex items-center gap-3">
              {(
                [
                  ["gold", "from-[#9C7A2E] to-[#FACC15]"],
                  ["navy", "from-[#1B2536] to-[#111827]"],
                  ["cyan", "from-[#22D3EE] to-[#0891B2]"],
                ] as const
              ).map(([theme, gradient]) => (
                <button
                  key={theme}
                  type="button"
                  onClick={() => patch({ theme })}
                  className={`h-9 w-9 rounded-full bg-gradient-to-br ${gradient} ${
                    page.theme === theme ? "cms-theme-selected" : ""
                  }`}
                  title={theme}
                />
              ))}
            </div>
          </div>

          <div className="cms-glass rounded-xl p-6">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wide text-[#FACC15]">
              Disposition de la Page
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {PAGE_LAYOUTS.map((layout) => (
                <button
                  key={layout.key}
                  type="button"
                  onClick={() => patch({ layout: layout.key })}
                  className={`rounded-lg border border-slate-700 p-2 text-left text-[10px] text-slate-400 hover:border-[#FACC15] ${
                    page.layout === layout.key ? "cms-layout-selected" : ""
                  }`}
                >
                  {layout.label}
                </button>
              ))}
            </div>
          </div>

          <div className="cms-glass rounded-xl p-6">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wide text-[#FACC15]">
              Aperçu en direct
            </h3>
            <div
              className="rounded-lg border border-slate-700 p-5"
              style={{ backgroundColor: page.backgroundColor }}
            >
              <div
                className={`mb-3 h-1 w-16 rounded-full ${themeClass[page.theme]}`}
              />
              <div className="text-sm font-bold text-slate-100">
                {page.title || "Titre de la page"}
              </div>
              <div className="mt-1 text-xs text-slate-400">
                {page.subtitle || "Sous-titre professionnel"}
              </div>
              {page.media[0]?.type.startsWith("image/") ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={page.media[0].dataUrl}
                  alt={page.media[0].name}
                  className="mt-4 h-20 w-full rounded object-cover"
                />
              ) : null}
            </div>
          </div>

          <div className="cms-glass space-y-3 rounded-xl p-6">
            <button
              type="button"
              onClick={onPreview}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-700 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-[#FACC15]"
            >
              <Eye className="h-4 w-4" /> Prévisualiser
            </button>
            <button
              type="button"
              onClick={onSaveDraft}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#1B2536] py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-[#151E2E]"
            >
              <Save className="h-4 w-4" /> Enregistrer Brouillon
            </button>
            <button
              type="button"
              onClick={onPublish}
              className="cms-shadow-gold flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#9C7A2E] to-[#D4AF37] py-2.5 text-sm font-bold text-[#0B0F19] transition hover:brightness-110"
            >
              <Rocket className="h-4 w-4" /> Publier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
