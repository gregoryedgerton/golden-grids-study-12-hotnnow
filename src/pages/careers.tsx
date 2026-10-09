import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Page } from "../lib/Page";
import { useFontsReady } from "../lib/fonts";
import { Squares } from "../bands/bands";
import { Prose, Signup } from "../lib/modules";
import { CAREERS, SOURCE } from "../content";
import { PROSE } from "../prose";
import "../styles.css";

function App() {
  useFontsReady(["900 125% 1em Archivo", "500 1em Archivo", "800 1em Archivo"]);
  return (
    <Page current="careers.html" source={SOURCE.careers}>
      <h1 className="visually-hidden">Careers at Hot 'n Now</h1>
      <Squares id="hero" title="The jobs are here. Bring the drive." quiet squares={CAREERS.hero} variant={4} from={3} strip={CAREERS.heroStrip} />
      <Prose section={PROSE.careersIntro} />
      <Squares id="values" kicker={CAREERS.values.kicker} title={CAREERS.values.title} squares={CAREERS.values.squares} variant={2} />
      <Squares id="hiring" kicker={CAREERS.hiring.kicker} title={CAREERS.hiring.title} squares={CAREERS.hiring.squares} variant={7} tone="navy" />
      <Signup />
    </Page>
  );
}
createRoot(document.getElementById("root")!).render(<StrictMode><App /></StrictMode>);
