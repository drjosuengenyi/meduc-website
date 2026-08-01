import type { CmsTemplate } from "@/types/cms";

export const CMS_TEMPLATES: CmsTemplate[] = [
  {
    key: "blog",
    label: "Blog Post",
    icon: "PenLine",
    desc: "Article éditorial avec image de couverture et catégories.",
    category: "content",
  },
  {
    key: "communique",
    label: "Communiqué",
    icon: "Megaphone",
    desc: "Annonce officielle avec date, portée et pièce jointe.",
    category: "content",
  },
  {
    key: "boutique",
    label: "Boutique Product Page",
    icon: "Store",
    desc: "Fiche produit avec prix, galerie et description.",
    category: "content",
  },
  {
    key: "contact",
    label: "Contact Form",
    icon: "Contact",
    desc: "Formulaire de contact avec routage par profil de visiteur.",
    category: "content",
  },
  {
    key: "inscription",
    label: "Registration Form (Inscription)",
    icon: "UserPlus",
    desc: "Formulaire d'inscription multi-étapes avec validation.",
    category: "content",
  },
  {
    key: "booking",
    label: "Booking / Events Page",
    icon: "CalendarCheck",
    desc: "Page d'événement avec réservation et rappel automatique.",
    category: "content",
  },
  {
    key: "about",
    label: "About / Team Page",
    icon: "Landmark",
    desc: "Notre Histoire, mission, vision et valeurs.",
    category: "institutional",
  },
  {
    key: "team",
    label: "Équipe / Direction",
    icon: "Users",
    desc: "Trombinoscope interactif des dirigeants et experts.",
    category: "institutional",
  },
  {
    key: "careers",
    label: "Carrières / Recrutement",
    icon: "Briefcase",
    desc: "Offres d'emploi avec dépôt de CV et lettre de motivation.",
    category: "institutional",
  },
  {
    key: "partners",
    label: "Partenaires & Écosystème",
    icon: "Handshake",
    desc: "Vitrine des partenaires, institutions et labels associés.",
    category: "institutional",
  },
  {
    key: "services",
    label: "Services / Solutions",
    icon: "Network",
    desc: "Présentation détaillée des offres et prestations.",
    category: "commercial",
  },
  {
    key: "pricing",
    label: "Pricing & Plans",
    icon: "Table",
    desc: "Grille tarifaire comparative Starter / Pro / Entreprise.",
    category: "commercial",
  },
  {
    key: "portfolio",
    label: "Portfolio / Case Studies",
    icon: "Award",
    desc: "Réalisations, projets et témoignages clients.",
    category: "commercial",
  },
  {
    key: "faq",
    label: "FAQ / Help Center",
    icon: "CircleHelp",
    desc: "Accordéon de questions/réponses pour lever les objections.",
    category: "commercial",
  },
  {
    key: "privacy",
    label: "Politique de Confidentialité",
    icon: "Shield",
    desc: "Gestion des données personnelles, conformité.",
    category: "legal",
  },
  {
    key: "cgu",
    label: "CGU",
    icon: "FileText",
    desc: "Conditions Générales d'Utilisation de la plateforme.",
    category: "legal",
  },
  {
    key: "cgv",
    label: "CGV",
    icon: "FileSpreadsheet",
    desc: "Conditions Générales de Vente pour la Boutique et services.",
    category: "legal",
  },
  {
    key: "legal",
    label: "Mentions Légales",
    icon: "Scale",
    desc: "Informations obligatoires sur l'éditeur et l'hébergeur.",
    category: "legal",
  },
];

export const CATEGORY_LABELS: Record<CmsTemplate["category"], string> = {
  content: "Contenu & Engagement",
  institutional: "Pages Institutionnelles & de Présentation",
  commercial: "Pages Commerciales & de Conversion",
  legal: "Pages Légales & de Conformité",
};

export const QUICK_COLORS = [
  "#FFFFFF",
  "#000000",
  "#0A1628",
  "#111827",
  "#D4AF37",
  "#FACC15",
  "#22D3EE",
  "#4ADE80",
  "#F87171",
  "#F59E0B",
  "#60A5FA",
  "#94A3B8",
];

export const PAGE_LAYOUTS = [
  { key: "full", label: "Pleine Largeur" },
  { key: "single", label: "Colonne Unique" },
  { key: "two-col", label: "Deux Colonnes" },
  { key: "sidebar-left", label: "Lat. Gauche" },
  { key: "sidebar-right", label: "Lat. Droite" },
  { key: "grid", label: "Grille" },
] as const;

export const MEDIA_LAYOUTS = [
  { key: "full", label: "Pleine Largeur" },
  { key: "left", label: "Image + Texte à Droite" },
  { key: "right", label: "Texte à Gauche + Image" },
  { key: "center", label: "Centre" },
  { key: "gallery", label: "Galerie Grille" },
  { key: "hero", label: "Bandeau / Hero" },
] as const;
