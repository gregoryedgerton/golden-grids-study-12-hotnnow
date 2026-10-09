import type { SourceKey } from "./sources";

/** Running text set between the grids: a measured column with an optional panel for one figure. */
export type Block = string | { h: string } | { checks: [string, string][] };
export interface ProseSection {
  id: string; kicker?: string; title?: string; blocks: Block[];
  stat?: { line: string; text: string; cite?: string; source?: SourceKey };
}

export const PROSE: Record<string, ProseSection> = {
  homeDeal: {
    id: "deal", kicker: "The deal", title: "Recharged, and back on the road",
    blocks: [
      "Hot 'n Now has been brought back for people who remember it and for people who have only heard the stories. What returns is the part worth returning: service measured in seconds, a board short enough to read from the car, and prices kept down by not doing anything unnecessary.",
      "There are no gimmicks to explain. The promise is speed, food that tastes right, and the small pleasure of getting exactly what was ordered, straight away.",
    ],
    stat: { line: "2", text: "new restaurants so far: Wayland, open now, and Alpena, coming soon.", cite: "hot-n-now.com", source: "site" },
  },
  menuNote: {
    id: "meal", kicker: "How the board works", title: "Make it a meal",
    blocks: [
      "The board has four mains, three sides and two kinds of drink. Any main becomes a combo, which adds french fries and a soft drink. The extras are few: a second patty, olive spread or cheese for a sandwich, and three sauces for the chicken.",
      "Open any square to build it. The site this study follows lists no prices, so the bag below counts what is in it and leaves the arithmetic to the window.",
    ],
  },
  aboutStory: {
    id: "story", kicker: "The relaunch", title: "A new era for an old favourite",
    blocks: [
      "The name has been around since 1984, and it has always meant a little more than fast food: the stop between errands, the after-school craving, the late run. It is the kind of place that belongs to its town.",
      "The relaunch keeps that and updates the rest. The restaurants are modular buildings with a drive-thru and a walk-up window and no dining room; the kitchens use flash fryers; the menu is cut down to what sold. The company behind it, HNN Holdings, says it will get its first restaurants right before it opens more.",
    ],
    stat: { line: "1984", text: "The year the first Hot 'n Now opened, in Kalamazoo, Michigan.", cite: "Wikipedia", source: "wiki" },
  },
  careersIntro: {
    id: "work", kicker: "Working here", title: "Hungry for the next thing?",
    blocks: [
      "The pitch to applicants is short. The work is quick, the rules are simple, and the standard for the food and for how people treat each other is not up for discussion. Every job, from the window to the shift lead, is a way of looking after the town the restaurant is in.",
      "The company lists five things it asks of a crew. They are set out below as it gives them, in this study's words.",
    ],
  },
  locationsIntro: {
    id: "where", kicker: "Where to pull up", title: "One open, one on the way",
    blocks: [
      "The relaunch began in Wayland, between Grand Rapids and Kalamazoo. Alpena, on the Lake Huron shore, is next. Sturgis, near the Indiana line, never closed: it has been locally owned since the 1990s and keeps its own menu, apart from the relaunch.",
      "Choose a place on the map or from the list. The addresses and the telephone number are the ones the restaurant's site publishes.",
    ],
  },
};
