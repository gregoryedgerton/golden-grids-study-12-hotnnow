import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Page } from "../lib/Page";
import { useFontsReady } from "../lib/fonts";
import { Squares } from "../bands/bands";
import { Prose, Signup } from "../lib/modules";
import { PlaceMap } from "../lib/PlaceMap";
import { LOCATIONS, SOURCE } from "../content";
import { PROSE } from "../prose";
import "../styles.css";

function App() {
  useFontsReady(["900 125% 1em Archivo", "500 1em Archivo", "800 1em Archivo"]);
  return (
    <Page current="locations.html" source={SOURCE.locations}>
      <h1 className="visually-hidden">Hot 'n Now locations</h1>
      <Squares id="hero" title="Find the bolt" quiet squares={LOCATIONS.hero} variant={6} from={3} strip={LOCATIONS.heroStrip} />
      <Prose section={PROSE.locationsIntro} />
      <PlaceMap />
      <Squares id="franchise" kicker={LOCATIONS.franchise.kicker} title={LOCATIONS.franchise.title} squares={LOCATIONS.franchise.squares} variant={3} tone="navy" />
      <Signup />
    </Page>
  );
}
createRoot(document.getElementById("root")!).render(<StrictMode><App /></StrictMode>);
