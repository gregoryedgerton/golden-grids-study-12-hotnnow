import { useState } from "react";
import { GridBand } from "../bands/bands";
import { Fit } from "./fit";
import { useViewport } from "./viewport";
import { MAP, MICHIGAN, PINS } from "../map";
import { PLACES, type Place } from "../content";
import { cited } from "../sources";

/**
 * The locations, as a map that answers. The reference lists two addresses;
 * here Michigan is drawn from its outline, the four places that matter to
 * the story are pinned on it, and choosing one (on the map or from the
 * list) fills the square beside it.
 */
const maps = (p: Place) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Hot 'n Now, ${p.address.join(", ")}`)}`;

export function PlaceMap() {
  cited.add("site"); cited.add("wiki");
  const v = useViewport();
  const desktop = v === "desktop";
  const [sel, setSel] = useState("wayland");
  const place = PLACES.find((p) => p.id === sel)!;

  const map = (
    <div key="map" className="box box--map">
      <p className="box__label">Michigan</p>
      <svg className="map" viewBox={`-10 -10 ${MAP.width + 20} ${MAP.height + 20}`} role="group" aria-label="Map of Michigan with four places marked">
        {MICHIGAN.map((d, i) => <path key={i} d={d} className="map__land" />)}
        {PLACES.map((p) => {
          const [x, y] = PINS[p.id];
          const on = p.id === sel;
          const left = p.id === "alpena";
          return (
            <g key={p.id} className={`map__pin map__pin--${p.kind}${on ? " is-on" : ""}`} role="button" tabIndex={0} aria-pressed={on} aria-label={`${p.name}: ${p.status}`}
              onClick={() => setSel(p.id)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setSel(p.id); } }}>
              <circle cx={x} cy={y} r="22" className="map__hit" />
              <circle cx={x} cy={y} r={on ? 11 : 7} className="map__dot" />
              <text x={left ? x - 16 : x + 16} y={y + 5} textAnchor={left ? "end" : "start"} className="map__name">{p.name}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
  const detailBody = (
    <>
      <p className="place__status">{place.status}</p>
      <address>{place.address.map((l) => <span key={l}>{l}</span>)}{place.phone && <span><a href={`tel:${place.phone.replace(/\D/g, "")}`}>{place.phone}</a></span>}</address>
      <p className="place__note">{place.note}</p>
      {(place.kind === "new" || place.kind === "soon") && <p><a className="btn btn--gold" href={maps(place)}>Directions</a></p>}
    </>
  );
  const detail = (
    <div key="detail" className="box box--navy box--place" aria-live="polite">
      <p className="box__label">Selected</p>
      <div className="box__fit"><Fit as="p" className="fit--display" min={14} max={120}>{place.name}</Fit></div>
      <div className="place">{detailBody}</div>
    </div>
  );
  const picker = (
    <div key="pick" className={desktop ? "box box--white box--picker" : "picker-flat"} role="group" aria-label="Choose a place">
      {desktop && <p className="box__label">Choose a place</p>}
      <div className="picker">
        {PLACES.map((p) => <button key={p.id} type="button" className={p.id === sel ? "is-on" : undefined} aria-pressed={p.id === sel} onClick={() => setSel(p.id)}><strong>{p.name}</strong><span>{p.status}</span></button>)}
      </div>
    </div>
  );
  const stat = (label: string, n: string, tone: string) => (
    <div key={label} className={`box box--${tone}`}>
      <p className="box__label">{label}</p>
      <div className="box__fit"><Fit as="p" className="fit--display fit--num" min={12} max={150}>{n}</Fit></div>
    </div>
  );

  return (
    <GridBand id="map" kicker="New locations" title="Where to find one" variant={0}
      cells={desktop ? [map, detail, picker, stat("Open now", "1", "gold")] : [map, stat("Open now", "1", "gold"), stat("Coming soon", "1", "red")]}
      flat={desktop ? undefined : <div className="place-flat">{picker}<div className="place-flat__card"><h3>{place.name}</h3>{detailBody}</div></div>} />
  );
}
