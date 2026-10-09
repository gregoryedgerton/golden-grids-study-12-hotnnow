import type { ReactNode, Ref } from "react";

/**
 * A band is one small-range grid with one editorial job. Bands stack; they
 * do not nest. This wrapper adds the section landmark, the heading and the
 * standfirst, and the hidden props readout.
 *
 * The heading is the legacy building's roof: a red standing-seam slope with
 * a slanted gable, the title set on it like the sign. A `board` band is the
 * old drive-thru menu board instead: a blue frame with a cream header and
 * the title in red. A `quiet` band has no heading drawn: its content is the
 * heading, and the title is spoken.
 */
export function Band({
  id, kicker, title, lesson, note, aside, quiet, tone, wrapRef, before, children,
}: {
  /** Content between the heading and the grid, at full width. */
  before?: ReactNode;
  /** The element whose width the grid takes, for a band that must choose a grid by the room it has. */
  wrapRef?: Ref<HTMLDivElement>;
  id: string;
  kicker?: string;
  title: string;
  lesson?: string;
  note?: string;
  aside?: { href: string; label: string };
  quiet?: boolean;
  /** `navy` sets the band on the building's navy base; `board` frames it as the menu board. */
  tone?: "navy" | "board";
  children: ReactNode;
}) {
  return (
    <section className={`band${tone ? ` band--${tone}` : ""}${quiet ? " band--quiet" : ""}`} id={id} aria-labelledby={`${id}-title`}>
      <div className="wrap">
        <div className="band__frame">
          {quiet ? (
            <h2 id={`${id}-title`} className="visually-hidden">{title}</h2>
          ) : (
            <header className="band__roof">
              <div>
                {kicker && <p className="band__kicker">{kicker}</p>}
                <h2 id={`${id}-title`} className="band__title">{title}</h2>
              </div>
              {aside && <a className="band__aside" href={aside.href}>{aside.label}</a>}
            </header>
          )}
          {(lesson || note) && (
            <div className="band__intro">
              {lesson && <p className="band__lesson">{lesson}</p>}
              {note && <p className="band__note">{note}</p>}
            </div>
          )}
          {before}
          <div className="band__wrap" ref={wrapRef}>{children}</div>
        </div>
      </div>
    </section>
  );
}
