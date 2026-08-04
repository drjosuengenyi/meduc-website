export type Lang = "fr" | "en";

export const LANG_STORAGE_KEY = "meduc-lang";
export const DEFAULT_LANG: Lang = "fr";

export function isLang(value: unknown): value is Lang {
  return value === "fr" || value === "en";
}
