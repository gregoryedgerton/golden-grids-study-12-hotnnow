import type { ReactNode } from "react";
import { Tools } from "./tools";
import { Credits } from "./modules";
import { NAV, SOURCE, CAPTURED, PAGES } from "../content";

/**
 * The shell. The reference's is a mark in the corner and four links; this
 * one takes its manner from the legacy building: a white wall, the sign in
 * red, and a navy base with a red line over it at the foot. Where the
 * reference says who it is, this says what it is: a layout study.
 */
export function Page({ current, source, children }: { current: string; source: { label: string; url: string }; children: ReactNode }) {
  return (
    <>
      <a className="skip" href="#content">Skip to content</a>
      <Tools />
      <aside className="notice" aria-label="About this site"><p>A layout study by GIFcommit of <a href={SOURCE.home.url}>hot-n-now.com</a>, drawn in the chain's old colours. <strong>GIFcommit is not the restaurant</strong>: nothing here can be ordered and no form sends anything.</p></aside>
      <header className="top">
        <div className="wrap top__bar">
          <a className="wordmark" href={PAGES.H}>
            <span className="wordmark__mark" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M14 1 4 13h6l-3 10 13-14h-7l3-8z" /></svg></span>
            <span className="wordmark__name">GIFcommit</span>
          </a>
          <nav className="nav" aria-label="Primary">
            <ul>{NAV.map(([label, href]) => <li key={label}><a href={href} aria-current={href.endsWith(current) ? "page" : undefined}>{label}</a></li>)}</ul>
          </nav>
        </div>
      </header>
      <main id="content">{children}</main>
      <footer className="foot">
        <div className="wrap foot__row">
          <a className="wordmark wordmark--foot" href={PAGES.H}>
            <span className="wordmark__mark" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M14 1 4 13h6l-3 10 13-14h-7l3-8z" /></svg></span>
            <span className="wordmark__name">GIFcommit</span>
          </a>
          <ul className="foot__links">
            {NAV.map(([label, href]) => <li key={label}><a href={href}>{label}</a></li>)}
            <li><a href={SOURCE.home.url}>The real Hot 'n Now</a></li>
          </ul>
        </div>
        <div className="wrap colophon">
          <p>
            A layout study of five pages of <a href={SOURCE.home.url}>hot-n-now.com</a>, read {CAPTURED}: <a href={SOURCE.home.url}>home</a>, <a href={SOURCE.menu.url}>menu</a>,{" "}
            <a href={SOURCE.about.url}>about</a>, <a href={SOURCE.careers.url}>careers</a> and <a href={SOURCE.locations.url}>locations</a>. This page follows {source.label}.
            The menu, the addresses and the facts are Hot 'n Now's as its site gives them; the sentences are this study's, and none of the site's copy, photographs or marks is reproduced.
            The colours and manner are taken from the chain's legacy branding (the 1992 mark, the red-roofed building, the blue drive-thru board); the bolt is this study's own drawing.
            GIFcommit is a layout-study brand, not affiliated with or endorsed by Hot 'n Now or HNN Holdings, LLC. Built with{" "}
            <a href="https://github.com/gregoryedgerton/golden-grids">Golden Grids</a> · <a href="https://www.npmjs.com/package/@gifcommit/golden-grids">npm</a> ·{" "}
            <a href="https://gregoryedgerton.github.io/golden-grids/">generator</a>.
          </p>
          <Credits />
        </div>
      </footer>
    </>
  );
}
