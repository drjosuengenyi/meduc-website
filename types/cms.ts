export type CmsPageStatus = "draft" | "published";
export type CmsPageFormat = "html" | "pdf";
export type CmsTheme = "gold" | "navy" | "cyan";
export type CmsNavView =
  | "dashboard"
  | "pages"
  | "manager"
  | "editor"
  | "blog"
  | "communiques"
  | "boutique"
  | "contacts"
  | "inscriptions"
  | "booking"
  | "media"
  | "settings";

export interface CmsMediaItem {
  id: string;
  name: string;
  type: string;
  size: number;
  dataUrl: string;
}

export interface CmsPage {
  id: string;
  title: string;
  subtitle: string;
  bodyHtml: string;
  templateKey: string;
  templateLabel: string;
  status: CmsPageStatus;
  format: CmsPageFormat;
  backgroundColor: string;
  theme: CmsTheme;
  layout: string;
  mediaLayout: string;
  media: CmsMediaItem[];
  sourceRoute?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CmsTemplate {
  key: string;
  label: string;
  icon: string;
  desc: string;
  category: "content" | "institutional" | "commercial" | "legal";
}

export interface CmsActivity {
  id: string;
  icon: string;
  message: string;
  at: string;
}
