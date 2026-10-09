import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Page } from "../lib/Page";
import { useFontsReady } from "../lib/fonts";
import { Squares } from "../bands/bands";
import { Prose, Signup } from "../lib/modules";
import { HOME, SOURCE } from "../content";
import { PROSE } from "../prose";
import "../styles.css";

function App() {
  useFontsReady(["900 125% 1em Archivo", "500 1em Archivo", "800 1em Archivo"]);
  return (
    <Page current="index.html" source={SOURCE.home}>
      <h1 className="visually-hidden">Hot 'n Now is back in Michigan</h1>
      <Squares id="hero" title="Hungry now? Good timing." quiet squares={HOME.hero} variant={0} from={2} strip={HOME.heroStrip} />
      <Prose section={PROSE.homeDeal} />
      <Squares id="feature" kicker={HOME.feature.kicker} title={HOME.feature.title} lesson={HOME.feature.lesson} squares={HOME.feature.squares} variant={3} from={3} strip={HOME.feature.strip} />
      <Squares id="lane" kicker={HOME.lane.kicker} title={HOME.lane.title} squares={HOME.lane.squares} variant={4} tone="navy" />
      <Signup />
    </Page>
  );
}
createRoot(document.getElementById("root")!).render(<StrictMode><App /></StrictMode>);
