"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Plus } from "lucide-react";
import type { CmsActivity, CmsNavView, CmsPage, CmsTemplate } from "@/types/cms";
import {
  createBlankPage,
  loadActivity,
  loadPages,
  nowIso,
  pushActivity,
  saveActivity,
  savePages,
  uid,
} from "@/lib/cms/storage";
import CmsSidebar from "./CmsSidebar";
import CmsDashboard from "./CmsDashboard";
import CmsPagesHub from "./CmsPagesHub";
import CmsPagesManager from "./CmsPagesManager";
import CmsEditor from "./CmsEditor";
import CmsStubView from "./CmsStubView";
import CmsToastHost, { type ToastItem } from "./CmsToastHost";

const VIEW_META: Record<CmsNavView, [string, string]> = {
  dashboard: ["Dashboard", "Vue d'ensemble de la plateforme de contenu MEDUC AHT"],
  pages: ["Générateur de Pages", "Choisissez un modèle pré-structuré pour démarrer"],
  manager: ["Gestionnaire", "Inventaire centralisé des pages du site"],
  editor: ["Éditeur de Page", "Modification en direct du contenu et des médias"],
  blog: ["Blog", "Articles éditoriaux publiés et brouillons"],
  communiques: ["Communiqués", "Annonces officielles MEDUC AHT"],
  boutique: ["Boutique", "Catalogue produits et services"],
  contacts: ["Contacts", "Messages reçus via les formulaires du site"],
  inscriptions: ["Inscriptions", "Formulaires d'inscription reçus"],
  booking: ["Booking & Events", "Réservations et événements"],
  media: ["Media Library", "Bibliothèque centrale des médias"],
  settings: ["Settings", "Paramètres généraux de la plateforme"],
};

export default function CmsApp() {
  const [ready, setReady] = useState(false);
  const [view, setView] = useState<CmsNavView>("dashboard");
  const [pages, setPages] = useState<CmsPage[]>([]);
  const [activity, setActivity] = useState<CmsActivity[]>([]);
  const [editing, setEditing] = useState<CmsPage | null>(null);
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  useEffect(() => {
    setPages(loadPages());
    setActivity(loadActivity());
    setReady(true);
  }, []);

  const toast = useCallback((message: string) => {
    setToasts((prev) => [...prev, { id: uid("toast"), message }]);
  }, []);

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  function persistPages(next: CmsPage[]) {
    setPages(next);
    savePages(next);
  }

  function persistActivity(next: CmsActivity[]) {
    setActivity(next);
    saveActivity(next);
  }

  function navigate(next: CmsNavView) {
    setView(next);
    if (next !== "editor") setEditing(null);
  }

  function openTemplate(tpl: CmsTemplate) {
    const page = createBlankPage(tpl.key, tpl.label);
    setEditing(page);
    setView("editor");
  }

  function openEdit(page: CmsPage) {
    setEditing({ ...page });
    setView("editor");
  }

  function upsertEditing(status: CmsPage["status"]) {
    if (!editing) return;
    const saved: CmsPage = {
      ...editing,
      status,
      updatedAt: nowIso(),
      title: editing.title.trim() || editing.templateLabel,
    };
    const exists = pages.some((p) => p.id === saved.id);
    const next = exists
      ? pages.map((p) => (p.id === saved.id ? saved : p))
      : [saved, ...pages];
    persistPages(next);
    setEditing(saved);
    const act = pushActivity(
      activity,
      status === "published" ? "Rocket" : "PenLine",
      status === "published"
        ? `Page « ${saved.title} » publiée`
        : `Brouillon « ${saved.title} » enregistré`,
    );
    persistActivity(act);
    toast(
      status === "published"
        ? "Page publiée avec succès."
        : "Brouillon enregistré avec succès.",
    );
    if (status === "published" && saved.format === "pdf") {
      window.print();
    }
  }

  function deletePage(id: string) {
    const target = pages.find((p) => p.id === id);
    if (!target) return;
    if (!window.confirm(`Supprimer « ${target.title || "Sans titre"} » ?`)) return;
    persistPages(pages.filter((p) => p.id !== id));
    persistActivity(
      pushActivity(activity, "Trash", `Page « ${target.title} » supprimée`),
    );
    toast("Page supprimée.");
  }

  function previewPage(page: CmsPage) {
    if (page.format === "pdf") {
      setEditing(page);
      setTimeout(() => window.print(), 50);
      toast("Ouverture de l'aperçu avant impression / export PDF.");
      return;
    }
    const win = window.open("", "_blank");
    if (!win) {
      toast("Autorisez les pop-ups pour prévisualiser.");
      return;
    }
    win.document.write(`<!DOCTYPE html><html lang="fr"><head><meta charset="utf-8"><title>${page.title}</title>
      <style>body{font-family:Georgia,serif;margin:0;padding:40px;background:${page.backgroundColor};color:#edf2f7}h1{font-size:28px}p{color:#94a3b8}</style>
      </head><body><h1>${page.title || "Titre"}</h1><p>${page.subtitle || ""}</p><div>${page.bodyHtml || ""}</div></body></html>`);
    win.document.close();
    toast("Aperçu HTML ouvert dans un nouvel onglet.");
  }

  const meta = VIEW_META[view];
  const mediaLibrary = useMemo(
    () => pages.flatMap((p) => p.media.map((m) => ({ ...m, pageTitle: p.title }))),
    [pages],
  );

  if (!ready) {
    return (
      <div className="cms-root flex min-h-screen items-center justify-center text-slate-400">
        Chargement du CMS…
      </div>
    );
  }

  return (
    <div className="cms-root flex h-screen overflow-hidden">
      <CmsSidebar active={view} onNavigate={navigate} />
      <main className="cms-scrollbar flex-1 overflow-y-auto">
        <header className="cms-glass sticky top-0 z-20 flex items-center justify-between border-b border-slate-800/80 px-8 py-4">
          <div>
            <h1 className="text-lg font-bold text-slate-50">{meta[0]}</h1>
            <p className="text-xs text-slate-400">{meta[1]}</p>
          </div>
          <button
            type="button"
            onClick={() => navigate("pages")}
            className="cms-shadow-gold flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#9C7A2E] to-[#D4AF37] px-4 py-2 text-sm font-bold text-[#0B0F19] transition hover:brightness-110"
          >
            <Plus className="h-4 w-4" /> Nouvelle Page
          </button>
        </header>

        <div className="space-y-8 p-8">
          {view === "dashboard" && (
            <CmsDashboard pages={pages} activity={activity} />
          )}
          {view === "pages" && <CmsPagesHub onSelectTemplate={openTemplate} />}
          {view === "manager" && (
            <CmsPagesManager
              pages={pages}
              onEdit={openEdit}
              onDelete={deletePage}
              onPreview={previewPage}
            />
          )}
          {view === "editor" && editing && (
            <CmsEditor
              page={editing}
              onChange={setEditing}
              onBack={() => navigate("pages")}
              onSaveDraft={() => upsertEditing("draft")}
              onPublish={() => upsertEditing("published")}
              onPreview={() => previewPage(editing)}
            />
          )}
          {view === "blog" && (
            <CmsStubView
              icon="PenLine"
              title="Blog"
              description="Liste des articles de blog publiés et brouillons."
            />
          )}
          {view === "communiques" && (
            <CmsStubView
              icon="Megaphone"
              title="Communiqués"
              description="Historique des communiqués officiels MEDUC AHT."
            />
          )}
          {view === "boutique" && (
            <CmsStubView
              icon="Store"
              title="Boutique"
              description="Catalogue des produits et services de la Boutique."
            />
          )}
          {view === "contacts" && (
            <CmsStubView
              icon="Contact"
              title="Contacts"
              description="Messages reçus via les formulaires de contact du site."
            />
          )}
          {view === "inscriptions" && (
            <CmsStubView
              icon="UserPlus"
              title="Inscriptions"
              description="Liste des inscriptions reçues via les formulaires dédiés."
            />
          )}
          {view === "booking" && (
            <CmsStubView
              icon="CalendarCheck"
              title="Booking & Events"
              description="Calendrier des événements et réservations en cours."
            />
          )}
          {view === "media" && (
            <div className="cms-view">
              <div className="cms-glass rounded-xl p-6">
                <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-[#FACC15]">
                  Bibliothèque média ({mediaLibrary.length})
                </h2>
                {mediaLibrary.length === 0 ? (
                  <p className="text-sm text-slate-400">
                    Aucun média pour l’instant — ajoutez-en depuis l’éditeur.
                  </p>
                ) : (
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6">
                    {mediaLibrary.map((m) => (
                      <div
                        key={m.id}
                        className="overflow-hidden rounded-lg border border-slate-700"
                      >
                        {m.type.startsWith("image/") ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={m.dataUrl}
                            alt={m.name}
                            className="aspect-square w-full object-cover"
                          />
                        ) : (
                          <div className="flex aspect-square items-center justify-center bg-slate-900 text-xs text-[#FACC15]">
                            Vidéo
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
          {view === "settings" && (
            <CmsStubView
              icon="Shield"
              title="Settings"
              description="Persistance locale (localStorage) — compatible export Azure Static Web Apps. Les pages créées restent éditables sur ce navigateur."
            />
          )}
        </div>
      </main>

      <CmsToastHost toasts={toasts} onDismiss={dismissToast} />

      <div id="cms-print-export" style={{ display: "none" }}>
        <h1>{editing?.title || "Titre de la page"}</h1>
        <p>{editing?.subtitle || ""}</p>
        <div
          dangerouslySetInnerHTML={{ __html: editing?.bodyHtml || "" }}
        />
      </div>
    </div>
  );
}
