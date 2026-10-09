/** Where the facts come from. A square names its source by key; the colophon lists every source the page drew on. */
export const SOURCES = {
  site: { short: "hot-n-now.com", full: "Hot 'n Now, hot-n-now.com (menu, about, careers and locations pages), read October 8, 2026", url: "https://www.hot-n-now.com/" },
  wiki: { short: "Wikipedia", full: "Wikipedia, \"Hot 'n Now\" (CC BY-SA 4.0), read October 8, 2026", url: "https://en.wikipedia.org/wiki/Hot_%27n_Now" },
} as const;
export type SourceKey = keyof typeof SOURCES;

/** Sources drawn on by the squares rendered on this page, for the colophon. */
export const cited = new Set<SourceKey>();
