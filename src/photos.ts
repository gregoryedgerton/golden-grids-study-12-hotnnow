import meta from "./photos.json";

/**
 * Photographs are third parties', under Creative Commons licences or in the
 * public domain, from Wikimedia Commons and Flickr; none is Hot 'n Now's.
 * `photos.json` records each one's author, licence and page, and its alt
 * text, which is the only place a picture is described.
 */
export interface Photo { key: string; src: string; alt: string; credit: string; licence: string; page: string; source: string }
type Meta = Record<string, { credit: string; licence: string; page: string; source: string; alt: string }>;

export function photo(key: string): Photo {
  const m = (meta as Meta)[key];
  if (!m) throw new Error(`photo "${key}" is not in photos.json`);
  return { key, src: `${import.meta.env.BASE_URL}assets/s12-${key}.jpg`, alt: m.alt, credit: m.credit, licence: m.licence, page: m.page, source: m.source };
}

/** Photographs that have been drawn on this page, for the credits in the footer. */
export const seen = new Set<string>();
