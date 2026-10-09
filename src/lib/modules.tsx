import { useEffect, useState } from "react";
import { seen, photo } from "../photos";
import { SOURCES, cited, type SourceKey } from "../sources";
import type { ProseSection } from "../prose";

/** Flat modules: running text, lists and forms. They are not grids because their content has no hierarchy to descend. */

export function Prose({ section, inline }: { section: ProseSection; inline?: boolean }) {
  const { id, kicker, title, blocks, stat } = section;
  if (stat?.source) cited.add(stat.source);
  return (
    <section className={`prose${inline ? " prose--inline" : ""}`} id={id} aria-labelledby={title ? `${id}-title` : undefined}>
      <div className={`${inline ? "" : "wrap "}prose__grid${stat ? " prose__grid--stat" : ""}`}>
        <div className="prose__text">
          {kicker && <p className="prose__kicker">{kicker}</p>}
          {title && <h2 id={`${id}-title`} className="prose__title">{title}</h2>}
          {blocks.map((b, i) => typeof b === "string" ? <p key={i}>{b}</p>
            : "h" in b ? <h3 key={i}>{b.h}</h3>
            : <ul key={i} className="checks">{b.checks.map(([t, d]) => <li key={t}><div><strong>{t}</strong><p>{d}</p></div></li>)}</ul>)}
        </div>
        {stat && (
          <div className="prose__stat" role="group" aria-label="A figure">
            <p className="prose__num">{stat.line}</p>
            <p>{stat.text}</p>
            {stat.cite && <p className="prose__cite">{stat.source ? <a href={SOURCES[stat.source].url}>{stat.cite}</a> : stat.cite}</p>}
          </div>
        )}
      </div>
    </section>
  );
}

/** The reference ends every page with a sign-up form. This one sends nothing and says so. */
export function Signup() {
  const [sent, setSent] = useState(false);
  return (
    <section className="signup" aria-labelledby="signup-title">
      <div className="wrap signup__card">
        <h2 id="signup-title" className="signup__title">Want the news as it lands?</h2>
        <p className="signup__sub">The restaurant's own list is on its site. This form is a picture of one.</p>
        <form className="signup__form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <label>First name<input name="first" autoComplete="given-name" required /></label>
          <label>Last name<input name="last" autoComplete="family-name" required /></label>
          <label>Mobile (optional)<input name="mobile" type="tel" autoComplete="tel" /></label>
          <label>ZIP code<input name="zip" inputMode="numeric" autoComplete="postal-code" required /></label>
          <label className="signup__wide">Email<input name="email" type="email" autoComplete="email" required /></label>
          <button className="btn btn--red" type="submit">Submit</button>
        </form>
        <p className="note" role="status">{sent ? "Nothing was sent: this is a layout study, not the restaurant." : "A form that sends nothing."}</p>
      </div>
    </section>
  );
}

export function Faq({ id, title, items }: { id: string; title: string; items: [string, string][] }) {
  cited.add("site");
  return (
    <section className="faq" id={id} aria-labelledby={`${id}-title`}>
      <div className="wrap faq__wrap">
        <h2 id={`${id}-title`} className="prose__title">{title}</h2>
        <div className="faq__list">
          {items.map(([q, a]) => (
            <details key={q}>
              <summary><span>{q}</span><i aria-hidden="true" /></summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/** The photographers and sources this page drew on, listed once its squares have been drawn. */
export function Credits() {
  const [key, setKey] = useState("");
  const [skey, setSkey] = useState("");
  useEffect(() => {
    const k = [...seen].sort().join(","); setKey((prev) => (prev === k ? prev : k));
    const sk = [...cited].sort().join(","); setSkey((prev) => (prev === sk ? prev : sk));
  });
  const photos = key.split(",").filter(Boolean).map((k) => photo(k));
  const sources = skey.split(",").filter(Boolean) as SourceKey[];
  return (
    <>
      {sources.length > 0 && <p className="credits">Facts: {sources.map((k, i) => <span key={k}>{i > 0 ? "; " : ""}<a href={SOURCES[k].url}>{SOURCES[k].full}</a></span>)}.</p>}
      {photos.length > 0 && (
        <p className="credits">
          Photographs, none of them the restaurant's: {photos.map((p, i) => <span key={p.key}>{i > 0 ? "; " : ""}<a href={p.page}>{p.credit}</a> ({p.licence})</span>)}.
        </p>
      )}
    </>
  );
}
