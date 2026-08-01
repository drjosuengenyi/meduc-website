import type { CmsActivity, CmsPage } from "@/types/cms";

const PAGES_KEY = "meduc-cms-pages-v1";
const ACTIVITY_KEY = "meduc-cms-activity-v1";

function nowIso() {
  return new Date().toISOString();
}

function uid(prefix = "pg") {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}_${Date.now().toString(36)}`;
}

export function createSeedPages(): CmsPage[] {
  const stamp = nowIso();
  const sitePages: Array<Pick<CmsPage, "title" | "subtitle" | "templateKey" | "templateLabel" | "sourceRoute">> = [
    {
      title: "Accueil",
      subtitle: "Soins accessibles, communautés renforcées",
      templateKey: "about",
      templateLabel: "About / Team Page",
      sourceRoute: "/",
    },
    {
      title: "À propos",
      subtitle: "Mission, vision et valeurs de MEDUC",
      templateKey: "about",
      templateLabel: "About / Team Page",
      sourceRoute: "/a-propos/",
    },
    {
      title: "Équipe",
      subtitle: "Leadership engagé pour l'accès aux soins",
      templateKey: "team",
      templateLabel: "Équipe / Direction",
      sourceRoute: "/equipe/",
    },
    {
      title: "Notre politique",
      subtitle: "Gouvernance, données et équité d'accès",
      templateKey: "privacy",
      templateLabel: "Politique de Confidentialité",
      sourceRoute: "/notre-politique/",
    },
    {
      title: "Partenaires",
      subtitle: "Réseau d'institutions et d'organisations",
      templateKey: "partners",
      templateLabel: "Partenaires & Écosystème",
      sourceRoute: "/partenaires/",
    },
    {
      title: "e-Voucher",
      subtitle: "Accès simplifié aux soins essentiels",
      templateKey: "services",
      templateLabel: "Services / Solutions",
      sourceRoute: "/evoucher/",
    },
    {
      title: "Contact",
      subtitle: "Écrire à l'équipe MEDUC",
      templateKey: "contact",
      templateLabel: "Contact Form",
      sourceRoute: "/contact/",
    },
  ];

  return sitePages.map((page) => ({
    id: uid("site"),
    title: page.title,
    subtitle: page.subtitle,
    bodyHtml: `<p>${page.subtitle}</p>`,
    templateKey: page.templateKey,
    templateLabel: page.templateLabel,
    status: "published",
    format: "html",
    backgroundColor: "#0B0F19",
    theme: "gold",
    layout: "full",
    mediaLayout: "hero",
    media: [],
    sourceRoute: page.sourceRoute,
    createdAt: stamp,
    updatedAt: stamp,
  }));
}

export function createSeedActivity(): CmsActivity[] {
  return [
    {
      id: uid("act"),
      icon: "Megaphone",
      message: 'Communiqué "Extension provinciale AHT" publié',
      at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: uid("act"),
      icon: "PenLine",
      message: 'Article de blog "Inclusion sanitaire" — brouillon enregistré',
      at: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: uid("act"),
      icon: "Store",
      message: "Nouvelle fiche produit Boutique ajoutée",
      at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    },
  ];
}

function canUseStorage() {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

export function loadPages(): CmsPage[] {
  if (!canUseStorage()) return createSeedPages();
  try {
    const raw = window.localStorage.getItem(PAGES_KEY);
    if (!raw) {
      const seed = createSeedPages();
      window.localStorage.setItem(PAGES_KEY, JSON.stringify(seed));
      return seed;
    }
    return JSON.parse(raw) as CmsPage[];
  } catch {
    return createSeedPages();
  }
}

export function savePages(pages: CmsPage[]) {
  if (!canUseStorage()) return;
  window.localStorage.setItem(PAGES_KEY, JSON.stringify(pages));
}

export function loadActivity(): CmsActivity[] {
  if (!canUseStorage()) return createSeedActivity();
  try {
    const raw = window.localStorage.getItem(ACTIVITY_KEY);
    if (!raw) {
      const seed = createSeedActivity();
      window.localStorage.setItem(ACTIVITY_KEY, JSON.stringify(seed));
      return seed;
    }
    return JSON.parse(raw) as CmsActivity[];
  } catch {
    return createSeedActivity();
  }
}

export function saveActivity(items: CmsActivity[]) {
  if (!canUseStorage()) return;
  window.localStorage.setItem(ACTIVITY_KEY, JSON.stringify(items.slice(0, 40)));
}

export function createBlankPage(
  templateKey: string,
  templateLabel: string,
): CmsPage {
  const stamp = nowIso();
  return {
    id: uid("pg"),
    title: "",
    subtitle: "",
    bodyHtml: "",
    templateKey,
    templateLabel,
    status: "draft",
    format: "html",
    backgroundColor: "#0B0F19",
    theme: "gold",
    layout: "full",
    mediaLayout: "full",
    media: [],
    createdAt: stamp,
    updatedAt: stamp,
  };
}

export function pushActivity(
  current: CmsActivity[],
  icon: string,
  message: string,
): CmsActivity[] {
  return [
    {
      id: uid("act"),
      icon,
      message,
      at: nowIso(),
    },
    ...current,
  ].slice(0, 40);
}

export { uid, nowIso };
