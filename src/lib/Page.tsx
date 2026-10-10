import type { ReactNode } from "react";
import { Tools } from "./tools";
import { StudyBanner, StudyDisclosure } from "./study";
import { Credits } from "./modules";
import { NAV, SOURCE, PAGES } from "../content";

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
      <StudyBanner />
      <Tools />
      <header className="top">
        <div className="wrap top__bar">
          <a className="wordmark" href={PAGES.H}>
            <span className="wordmark__mark" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M14 1 4 13h6l-3 10 13-14h-7l3-8z" /></svg></span>
            <span className="wordmark__name">GIFn'now</span>
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
            <span className="wordmark__name">GIFn'now</span>
          </a>
          <ul className="foot__links">
            {NAV.map(([label, href]) => <li key={label}><a href={href}>{label}</a></li>)}
            <li><a href={SOURCE.home.url}>The real Hot 'n Now</a></li>
          </ul>
        </div>
      </footer>
      <StudyDisclosure>
        <p>This page follows <a href={source.url}>{source.label}</a> on the reference site.</p>
        <Credits />
      </StudyDisclosure>
    </>
  );
}
