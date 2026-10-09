/**
 * Flat drawings made for the study, in the legacy sign's manner: solid
 * shapes, no outlines, hard corners. Used large and low in a square, behind
 * its text. The bolt is this study's own drawing, not the chain's mark.
 * 24-unit grid, currentColor; decorative, so aria-hidden where placed.
 */
export type IconName = "bolt" | "burger" | "olive" | "fries" | "cup" | "shake" | "clock" | "pin" | "bag" | "car" | "window" | "roof" | "check" | "people" | "star" | "tag" | "chicken" | "pie";

const PATHS: Record<IconName, string> = {
  bolt: "M14 1 4 13h6l-3 10 13-14h-7l3-8z",
  burger: "M3 10a9 7 0 0 1 18 0zM2 12h20v3H2zM3 17h18v1a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z",
  olive: "M12 3a7 9 0 1 0 0 18 7 9 0 0 0 0-18zm0 5a2.5 3 0 1 1 0 6 2.5 3 0 0 1 0-6z",
  fries: "M5 10h14l-2 12H7zM6 3h2v6H6zM9.5 1h2v8h-2zM13 2h2v7h-2zM16.5 4h2v5h-2z",
  cup: "M5 6h14l-2 16H7zM4 3h16v2H4zM13 0h2v4h-2z",
  shake: "M6 8h12l-1.5 14h-9zM5 5h14v2H5zM9 5a3 3 0 0 1 6 0zM14 0l2 .6-1 4-2-.6z",
  clock: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1 4h2v6l4 2.5-1 1.7-5-3.2z",
  pin: "M12 1a8 8 0 0 0-8 8c0 6 8 14 8 14s8-8 8-14a8 8 0 0 0-8-8zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z",
  bag: "M5 7h14l1 15H4zM8 7V5a4 4 0 0 1 8 0v2h-2V5a2 2 0 0 0-4 0v2z",
  car: "M5 8l2-4h10l2 4 3 1v8h-3v2h-3v-2H8v2H5v-2H2V9zM7.6 6l-1 2h10.800l-1-2zM6 11.500a1.500 1.500 0 1 0 0 3 1.500 1.500 0 0 0 0-3zm12 0a1.500 1.500 0 1 0 0 3 1.500 1.500 0 0 0 0-3z",
  window: "M3 3h18v18H3zM6 6v6h12V6zM6 14v4h12v-4z",
  roof: "M2 20 14 3h6v17h-5V9l-8 11z",
  check: "M9.500 17.800 3.700 12l2.100-2.100 3.700 3.700 8.700-8.700 2.100 2.100z",
  people: "M8 3a3.500 3.500 0 1 1 0 7 3.500 3.500 0 0 1 0-7zm8 0a3.500 3.500 0 1 1 0 7 3.500 3.500 0 0 1 0-7zM1 21v-4a5 5 0 0 1 5-5h4a5 5 0 0 1 2 .4 5 5 0 0 1 2-.4h4a5 5 0 0 1 5 5v4z",
  star: "M12 1l2.300 4.700 4.700-2.300-1.200 5.100 5.100 1.200-3.800 3.600 3.300 4.100-5.200.300-.500 5.200-4.700-2.700-4.700 2.700-.500-5.200-5.200-.300 3.300-4.100-3.800-3.600 5.100-1.200L5 3.400l4.700 2.300z",
  tag: "M2 2h10l10 10-10 10L2 12zM7 5.500a1.500 1.500 0 1 0 0 3 1.500 1.500 0 0 0 0-3z",
  chicken: "M7 3a4 4 0 0 1 6 3 4 4 0 0 1 5 5 4 4 0 0 1-3 6l-1 5h-3l-1-4a4 4 0 0 1-6-3 4 4 0 0 1-1-6 4 4 0 0 1 4-6z",
  pie: "M3 14a9 9 0 0 1 18 0v2H3zM2 17h20l-2 4H4zM8 9l1 3M12 8v4M16 9l-1 3",
};

export function Imprint({ name }: { name: IconName }) {
  return (
    <svg className="box__imprint" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d={PATHS[name]} />
    </svg>
  );
}

export function Icon({ name, size = 24 }: { name: IconName; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d={PATHS[name]} />
    </svg>
  );
}
