/**
 * Five pages of hot-n-now.com (home, menu, about, careers, locations) rebuilt
 * as stacked golden grids under the GIFcommit brand, in the manner of the
 * chain's LEGACY branding: the 1992 mark's navy, gold and red, the white
 * building with its slanted red roof, and the blue drive-thru board with
 * its coloured strips.
 *
 * The content is the current brand's: its menu, its locations, its values,
 * its questions and answers, as its site published them on October 8, 2026.
 * The FACTS are carried over; the WORDING is this study's own, and none of
 * the site's sentences, slogans, photographs or marks is reproduced. The
 * history before the relaunch is from Wikipedia. GIFcommit is not the
 * restaurant: nothing here can be ordered.
 */
import type { IconName } from "./icons";
import type { SourceKey } from "./sources";

export type Tone = "navy" | "red" | "gold" | "white" | "cream" | "board" | "purple" | "green" | "orange";
export interface Fact {
  label?: string; line: string; fitClass?: string;
  body?: string; long?: string; icon?: IconName; tone?: Tone;
  list?: string[];
  href?: string; cta?: string;
  source?: SourceKey;
  btn?: { label: string; href: string; variant?: "gold" | "red" | "line" };
}
/** The caption is marketing copy for a product, never a description of the picture (that is the alt text). */
export interface Pic { photo: string; kicker?: string; caption?: string; long?: string; pos?: string; href?: string; cta?: string }
export interface Strip { label?: string; strip: string; sub?: string; href?: string; tone?: Tone; icon?: IconName; source?: SourceKey }
/** A menu item: its square opens into the order builder. */
export interface ItemSq { item: string }
export type Sq = Fact | Pic | Strip | ItemSq;
export const isPic = (s: Sq): s is Pic => "photo" in s;
export const isStrip = (s: Sq): s is Strip => "strip" in s;
export const isItem = (s: Sq): s is ItemSq => "item" in s;

export const CAPTURED = "October 8, 2026";
const REF = "https://www.hot-n-now.com";
export const SOURCE = {
  home: { label: "the home page", url: `${REF}/` },
  menu: { label: "the menu", url: `${REF}/menu` },
  about: { label: "the about page", url: `${REF}/about` },
  careers: { label: "the careers page", url: `${REF}/careers` },
  locations: { label: "the locations page", url: `${REF}/locations` },
};

const H = "./index.html", M = "./menu.html", A = "./about.html", C = "./careers.html", L = "./locations.html";
export const PAGES = { H, M, A, C, L };
export const NAV: [string, string][] = [["Menu", M], ["About", A], ["Careers", C], ["Locations", L]];
const NUM = "fit--display fit--num";

// --- The menu ---------------------------------------------------------------------

export type Cat = "mains" | "sides" | "drinks" | "deals";
export interface Item {
  id: string; name: string; cat: Cat; photo?: string; pos?: string;
  /** What the board lists under the name. */
  sizes: string[];
  flavours?: string[];
  includes?: string[];
  /** Burgers take the add-ons; popcorn chicken comes with one sauce. */
  addons?: boolean; sauce?: boolean;
  /** A selling line, set over the photograph. */
  pitch: string;
  /** What it is, in a sentence. */
  about: string;
}
export const ADDONS = ["Extra patty", "Olive spread", "Cheese"];
export const SAUCES = ["BBQ", "Ranch", "Honey mustard"];
export const SOFT_DRINKS = ["Coca-Cola", "Diet Coke", "Coke Zero", "Cherry Coke", "Sprite", "Vernors", "Barq's Root Beer", "Minute Maid Lemonade"];

export const ITEMS: Item[] = [
  { id: "olive", name: "The Olive Burger", cat: "mains", photo: "olive", sizes: ["Single", "Double", "Combo"], addons: true,
    pitch: "Olives on a burger. Michigan was right all along.",
    about: "The house signature and a Michigan original: a burger under olive spread. The spread can go on any sandwich on the board." },
  { id: "cheeseburger", name: "Cheeseburger", cat: "mains", photo: "cheeseburger", sizes: ["Single", "Double", "Combo"], addons: true,
    pitch: "Cheese, patty, bun. Stop us when it gets complicated.",
    about: "A hamburger with cheese, as a single, a double or a combo." },
  { id: "hamburger", name: "Hamburger", cat: "mains", photo: "hamburger", sizes: ["Single", "Double", "Combo"], addons: true,
    pitch: "The one that started the line at the window.",
    about: "The plain original, as a single, a double or a combo." },
  { id: "popcorn", name: "Popcorn Chicken", cat: "mains", photo: "popcorn", sizes: ["One size", "Combo"], sauce: true,
    pitch: "Bite-sized, sauce included, gone by the next light.",
    about: "One size or a combo, and one sauce comes with it: BBQ, ranch or honey mustard." },
  { id: "fries", name: "French Fries", cat: "sides", photo: "fries", sizes: ["One size"],
    pitch: "One size. The right one.",
    about: "French fries, in the one size the board lists." },
  { id: "taters", name: "Cheesy Taters", cat: "sides", photo: "taters", sizes: ["One size"],
    pitch: "Potatoes went and got a better idea.",
    about: "Potato bites with cheese, a favourite carried over from the old menu." },
  { id: "turnover", name: "Apple Turnover", cat: "sides", photo: "turnover", sizes: ["One count"],
    pitch: "Dessert that fits in a cup holder.",
    about: "A single apple turnover." },
  { id: "soda", name: "20 oz Soft Drink", cat: "drinks", photo: "soda", sizes: ["20 oz"], flavours: SOFT_DRINKS,
    pitch: "Eight taps. Yes, one of them is Vernors.",
    about: "Twenty ounces of any of eight soft drinks, Michigan's own ginger ale among them." },
  { id: "shake", name: "12 oz Shake", cat: "drinks", photo: "shake-choc", sizes: ["12 oz"], flavours: ["Chocolate", "Vanilla"],
    pitch: "Two flavours. Both correct.",
    about: "A twelve-ounce shake in chocolate or vanilla." },
  { id: "bigbolt", name: "Big Bolt Combo", cat: "deals", sizes: ["Combo"], includes: ["The Olive Burger", "Cheesy Taters", "Apple Turnover", "Soft drink"], flavours: SOFT_DRINKS,
    pitch: "The whole board in one bag.",
    about: "The Olive Burger, Cheesy Taters, an Apple Turnover and a soft drink together." },
  { id: "powerpack", name: "The Power Pack", cat: "deals", sizes: ["10 cheeseburgers"], includes: ["10 cheeseburgers"],
    pitch: "Ten cheeseburgers. Bring friends, or don't.",
    about: "Ten cheeseburgers, packed to travel." },
];
export const byId = Object.fromEntries(ITEMS.map((i) => [i.id, i]));

export const MENU = {
  note: "Combos come with french fries and a soft drink.",
  mains: {
    title: "Mains", lesson: "Four things, done one way each. A burger comes as a single, a double or a combo, and olive spread goes on any of them.",
    squares: [{ item: "olive" }, { item: "cheeseburger" }, { item: "hamburger" }, { item: "popcorn" }] as Sq[],
    strip: { label: "A combo adds", strip: "+2", sub: "fries and a soft drink", tone: "gold" } as Strip,
  },
  extras: {
    title: "Extras", lesson: "Six ways to change an order: three for a burger, three for the chicken.",
    squares: [
      { label: "For any sandwich", line: "3", fitClass: NUM, tone: "purple", icon: "olive", list: ADDONS,
        body: "add-ons: an extra patty, olive spread or cheese.", source: "site" },
      { label: "For the chicken", line: "3", fitClass: NUM, tone: "gold", icon: "chicken", list: SAUCES,
        body: "sauces: BBQ, ranch or honey mustard. One is included with popcorn chicken.", source: "site" },
      { label: "Make it a meal", line: "+2", fitClass: NUM, tone: "navy", icon: "fries",
        body: "A combo adds french fries and a soft drink to any main.", source: "site" },
    ] as Sq[],
  },
  sides: {
    title: "Sides", lesson: "Fries, the cheesy taters the old menu was known for, and one dessert.",
    squares: [{ item: "taters" }, { item: "fries" }, { item: "turnover" }] as Sq[],
    strip: { label: "Sizes", strip: "1", sub: "of each. No small, no large.", tone: "green" } as Strip,
  },
  drinks: {
    title: "Beverages", lesson: "A twenty-ounce soft drink from eight taps, or a twelve-ounce shake in two flavours.",
    squares: [
      { item: "soda" }, { item: "shake" },
      { label: "Soft drinks", line: "8", fitClass: NUM, tone: "board", icon: "cup", list: SOFT_DRINKS, body: "on tap: Coca-Cola, Diet Coke, Coke Zero, Cherry Coke, Sprite, Vernors, Barq's Root Beer and Minute Maid Lemonade.", source: "site" },
      { photo: "shake-van", kicker: "12 oz Shake", caption: "Vanilla is not the boring one. It is the confident one.", href: "#drinks", cta: "Order a shake",
        long: "A twelve-ounce shake, chocolate or vanilla. Open the shake's square to add one to the bag." },
    ] as Sq[],
    strip: { label: "Shake", strip: "12 oz", tone: "navy" } as Strip,
  },
  deals: {
    title: "More for less", lesson: "Two bundles on the board: one for a whole meal, one for a whole car.",
    squares: [{ item: "powerpack" }, { item: "bigbolt" },
      { label: "In the Power Pack", line: "10", fitClass: NUM, tone: "gold", icon: "bag", body: "cheeseburgers, packed to travel.", source: "site" },
      { label: "In the Big Bolt", line: "4", fitClass: NUM, tone: "red", icon: "bolt", list: ["The Olive Burger", "Cheesy Taters", "Apple Turnover", "Soft drink"], body: "things: the Olive Burger, Cheesy Taters, an Apple Turnover and a soft drink.", source: "site" },
    ] as Sq[],
  },
};

// --- Home -------------------------------------------------------------------------

export const HOME = {
  hero: [
    { label: "Drive-thru and walk-up", line: "Hungry now? Good timing.", fitClass: "fit--display", tone: "navy", icon: "bolt",
      body: "Hot 'n Now is back in Michigan: the short menu and the fast lane people remember, at prices that stay low because the menu stays short.",
      btn: { label: "See the menu", href: M, variant: "gold" as const } },
    { photo: "detroit", kicker: "The fast lane", caption: "Blink and it's in the bag.", href: L, cta: "Find a location",
      long: "No dining room, no detours: a drive-thru and a walk-up window, built around getting the order out." },
    { label: "Serving since", line: "1984", fitClass: NUM, tone: "gold", icon: "clock", source: "site",
      body: "Founded in Kalamazoo, Michigan, on one idea: good food, fast, with nothing extra.", href: A, cta: "The story" },
    { label: "Mains on the board", line: "4", fitClass: NUM, tone: "red", icon: "burger", source: "site",
      body: "Hamburger, cheeseburger, the Olive Burger and popcorn chicken.", href: M, cta: "The menu" },
  ] as Sq[],
  heroStrip: { label: "New locations", strip: "2", sub: "Wayland and Alpena", href: L, tone: "white", icon: "pin", source: "site" } as Strip,

  feature: {
    kicker: "Menu feature", title: "The Olive Burger",
    lesson: "A cult classic, and the reason some people drive across the state. Olive spread can be added to any sandwich on the board.",
    squares: [
      { item: "olive" },
      { label: "Ways to order it", line: "3", fitClass: NUM, tone: "red", icon: "burger", source: "site", list: ["Single", "Double", "Combo"],
        body: "a single, a double or a combo with fries and a soft drink.", btn: { label: "See the menu", href: M, variant: "line" as const } },
      { label: "Olive spread goes on", line: "Any", fitClass: "fit--display", tone: "gold", icon: "olive", source: "site",
        body: "sandwich on the board. It is listed with the extras.", href: `${M}#extras`, cta: "Extras" },
    ] as Sq[],
    strip: { label: "Since", strip: "1984", tone: "navy", source: "site" } as Strip,
  },

  lane: {
    kicker: "Hungry?", title: "Pull up, order, go",
    squares: [
      { label: "Indoor seats", line: "0", fitClass: NUM, tone: "navy", icon: "car", source: "site",
        body: "The new restaurants have a drive-thru and a walk-up window and no dining room, as the originals did. The building is there to move food.",
        btn: { label: "Find a location", href: L, variant: "gold" as const } },
      { photo: "drive", kicker: "Drive-thru", caption: "Follow the arrow. It knows a place.", href: L, cta: "Locations",
        long: "Wayland is open now and Alpena is on the way. Both are drive-thru and walk-up only." },
      { label: "What it stands for", line: "4", fitClass: NUM, tone: "white", icon: "check", source: "site", list: ["Taste", "Value", "Speed", "Simplicity"],
        body: "things: taste, value, speed and simplicity.", href: A, cta: "About" },
    ] as Sq[],
  },
};

// --- About ------------------------------------------------------------------------

export const ABOUT = {
  hero: [
    { label: "About", line: "Since 1984", fitClass: "fit--display", tone: "navy", icon: "roof", source: "site",
      body: "More than fast food: the pit stop between errands, the after-school craving, the late run. Food that shows up for the town it is in, with no frills attached.",
      btn: { label: "See the menu", href: M, variant: "gold" as const } },
    { photo: "building", kicker: "The original", caption: "Small building. Tall roof. Short wait.", href: "#history", cta: "The history",
      long: "Most of the original restaurants were drive-thru only: a small building under a tall slanted roof. This one was photographed in 2014." },
    { label: "Price that built the chain", line: "39¢", fitClass: NUM, tone: "gold", icon: "tag", source: "wiki",
      body: "for a hamburger, fries or a soda in the 1980s.", long: "Wikipedia credits the chain's fast growth to a simple operation and that price." },
  ] as Sq[],
  heroStrip: { label: "Peak", strip: "150+", sub: "locations", tone: "red", source: "wiki" } as Strip,

  values: {
    kicker: "A new era", title: "What it is all about",
    squares: [
      { label: "One", line: "Taste", fitClass: "fit--display", tone: "red", icon: "burger", source: "site", body: "Favourites made the same way every time, so the craving is worth acting on." },
      { label: "Two", line: "Value", fitClass: "fit--display", tone: "gold", icon: "tag", source: "site", body: "Good food at a good price, with no gimmicks and no costly extras." },
      { label: "Three", line: "Speed", fitClass: "fit--display", tone: "navy", icon: "bolt", source: "site", body: "Drive-thru and walk-up only, and a menu short enough to keep the line moving." },
      { label: "Four", line: "Simplicity", fitClass: "fit--display", tone: "white", icon: "check", source: "site", body: "The essentials and nothing else: a plain menu that delivers each time." },
    ] as Sq[],
  },

  history: {
    kicker: "Before the relaunch", title: "Forty years in five numbers",
    lesson: "The history before 2024 is from Wikipedia's article on the chain.",
    squares: [
      { label: "Locations at the peak", line: "150+", fitClass: NUM, tone: "navy", icon: "pin", source: "wiki",
        body: "across the United States. By 1990 there were more than 100 stores in 15 states, grown on a simple operation and a 39-cent price.",
        long: "William Van Domelen, who had opened Michigan's first Wendy's restaurants, founded the chain in Kalamazoo in 1984." },
      { photo: "board", kicker: "Sturgis", caption: "The board that never left.", href: "#faq", cta: "About Sturgis",
        long: "Sturgis, Michigan, kept its Hot 'n Now open through the lean years. It is locally owned and runs its own menu. The board was photographed in 2014." },
      { label: "Sold to PepsiCo", line: "1990", fitClass: NUM, tone: "red", icon: "tag", source: "wiki",
        body: "and placed under Taco Bell. The founder resigned soon after.", long: "Changes to the concept, beginning with the menu in 1992, frustrated franchisees." },
      { label: "Stores closed in a quarter", line: "80", fitClass: NUM, tone: "gold", icon: "clock", source: "wiki",
        body: "company-owned stores, in the first quarter of 1995. The chain was sold in 1996." },
    ] as Sq[],
    strip: { label: "Left by 2016", strip: "1", sub: "Sturgis", tone: "white", source: "wiki" } as Strip,
  },

  faq: {
    title: "Questions, answered",
    items: [
      ["Why bring it back?", "Fans asked for years. The relaunch is for a new generation: modern operations, a considered design and a trimmed menu, with the history and the simplicity that made the original a favourite left in place."],
      ["When will there be more locations?", "Franchising has not started. The first restaurants are meant to open well and run consistently before anything else; expansion is in the long-term plan, and franchise opportunities are expected later."],
      ["Who owns Hot 'n Now now?", "HNN Holdings, LLC, a partnership of Gun Lake Investments and Bcubed. Gun Lake Investments supplies the long-term investment; Bcubed supplies modular design and development."],
      ["What is different about the new restaurants?", "A shorter menu, flash-fryer equipment and modular buildings designed by Bcubed. The changes are there to keep service fast, costs low and value high."],
      ["How does Sturgis fit in?", "Sturgis is a heritage location, locally owned and operated since the 1990s, with a menu of its own. Wayland and Alpena are the relaunch: one menu, updated equipment and standard operations."],
      ["Is there indoor seating?", "No. Like the originals, the modular restaurants are built for speed: a drive-thru and a walk-up window."],
      ["Is anyone reading the feedback?", "Yes. It is reviewed regularly and used to guide the menu and the operation, though not every comment gets a reply."],
      ["Is there delivery?", "Not for now. The focus is the drive-thru; online ordering for pickup is said to be on the way."],
      ["Is it hiring?", "Yes. The careers page has the detail."],
    ] as [string, string][],
  },
};

// --- Careers ----------------------------------------------------------------------

export const CAREERS = {
  hero: [
    { label: "Careers", line: "The jobs are here. Bring the drive.", fitClass: "fit--display", tone: "red", icon: "people",
      body: "The work moves fast and stays simple, and nobody messes about with the food or the people. Taking orders or leading a crew, there is room to grow.",
      btn: { label: "Apply on hot-n-now.com", href: SOURCE.careers.url, variant: "gold" as const } },
    { photo: "window", kicker: "Now hiring", caption: "Your new office has a window. One, but it's a good one.", href: SOURCE.careers.url, cta: "Apply on hot-n-now.com",
      long: "Every role serves the town it is in: quick service, good energy, food that is right each time." },
    { label: "Values", line: "5", fitClass: NUM, tone: "navy", icon: "check", source: "site", body: "things the crew is asked to do, set out below.", href: "#values", cta: "The five" },
  ] as Sq[],
  heroStrip: { label: "Hiring", strip: "Now", tone: "gold", href: SOURCE.careers.url, source: "site" } as Strip,

  values: {
    kicker: "How the crew works", title: "Five things",
    squares: [
      { label: "One", line: "Move fast", fitClass: "fit--display", tone: "navy", icon: "bolt", source: "site", body: "Speed is the point. Show up ready, stay sharp and keep the line moving." },
      { label: "Two", line: "Bring the energy", fitClass: "fit--display", tone: "gold", icon: "star", source: "site", body: "Attitude counts: hustle, pride and the effort that lifts the rest of the shift." },
      { label: "Three", line: "Keep it real", fitClass: "fit--display", tone: "red", icon: "check", source: "site", body: "Honest, grounded and respectful. No egos and no drama." },
      { label: "Four", line: "Deliver for everyone", fitClass: "fit--display", tone: "white", icon: "bag", source: "site", body: "Every guest gets the best there is: fast service and food that is right every time." },
      { label: "Five", line: "Push forward", fitClass: "fit--display", tone: "board", icon: "car", source: "site", body: "Stay curious, keep improving, and do not settle for good enough." },
    ] as Sq[],
  },

  hiring: {
    kicker: "Hiring", title: "Straight to it",
    squares: [
      { label: "If you are quick on your feet", line: "Apply", fitClass: "fit--display", tone: "navy", icon: "people",
        body: "Bring the pace and the appetite for more. Applications are taken on the restaurant's own site; this study takes none.",
        btn: { label: "Apply on hot-n-now.com", href: SOURCE.careers.url, variant: "gold" as const } },
      { photo: "fries", kicker: "Perks", caption: "You will smell like fries. People will follow you.", href: SOURCE.careers.url, cta: "Apply on hot-n-now.com" },
      { label: "Open now", line: "1", fitClass: NUM, tone: "red", icon: "pin", source: "site", body: "restaurant, in Wayland, with Alpena to follow.", href: L, cta: "Locations" },
    ] as Sq[],
  },
};

// --- Locations --------------------------------------------------------------------

export interface Place { id: string; name: string; status: string; address: string[]; phone?: string; note: string; kind: "new" | "soon" | "heritage" | "origin" }
export const PLACES: Place[] = [
  { id: "wayland", name: "Wayland", status: "Now open", kind: "new", address: ["1146 129th Avenue", "Wayland, MI 49348"], phone: "269.397.2084",
    note: "The first restaurant of the relaunch. Wikipedia gives its opening as October 13, 2025." },
  { id: "alpena", name: "Alpena", status: "Coming soon", kind: "soon", address: ["320 Johnson St", "Alpena, MI 49707"],
    note: "The second new restaurant, announced and not yet open." },
  { id: "sturgis", name: "Sturgis", status: "Heritage location", kind: "heritage", address: ["Sturgis, MI"],
    note: "Locally owned and operated since the 1990s, with a menu of its own. It is not part of the relaunch, and for years it was the only Hot 'n Now left." },
  { id: "kalamazoo", name: "Kalamazoo", status: "Where it began", kind: "origin", address: ["Kalamazoo, MI"],
    note: "The chain was founded here in 1984. No restaurant is listed here today." },
];

export const LOCATIONS = {
  hero: [
    { label: "Locations", line: "Find the bolt", fitClass: "fit--display", tone: "navy", icon: "pin",
      body: "The first new restaurant is open in Michigan and a second is on the way. Whether you remember the original or have only heard about it, this is where to pull up.",
      btn: { label: "See the map", href: "#map", variant: "gold" as const } },
    { photo: "road", kicker: "Michigan", caption: "Two exits from a cheeseburger. Possibly one.", href: "#map", cta: "See the map",
      long: "Wayland is south of Grand Rapids, just off US-131. Alpena is on Lake Huron, in the north-east of the Lower Peninsula." },
    { label: "New locations", line: "2", fitClass: NUM, tone: "gold", icon: "pin", source: "site", body: "Wayland, now open, and Alpena, coming soon." },
  ] as Sq[],
  heroStrip: { label: "Heritage", strip: "1", sub: "Sturgis", tone: "red", source: "site" } as Strip,

  franchise: {
    kicker: "Franchising", title: "Not yet, but soon",
    squares: [
      { label: "Franchises open today", line: "0", fitClass: NUM, tone: "red", icon: "tag", source: "site",
        body: "Franchising is close but has not begun. The company wants its first restaurants running well before it sells any; people ready to move quickly are told to keep watching." },
      { photo: "storm", kicker: "Coming", caption: "Forecast: scattered burgers, moving east.", href: A, cta: "About the relaunch",
        long: "Expansion is in the long-term plan and franchise opportunities are expected later. The about page has the owners' answers." },
      { label: "Owner", line: "HNN", fitClass: "fit--display", tone: "navy", icon: "roof", source: "site", body: "Holdings, LLC: Gun Lake Investments and Bcubed.", href: `${A}#faq`, cta: "Who owns it" },
    ] as Sq[],
  },
};
