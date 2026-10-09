import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Page } from "../lib/Page";
import { useFontsReady } from "../lib/fonts";
import { Squares } from "../bands/bands";
import { Prose, Faq, Signup } from "../lib/modules";
import { ABOUT, SOURCE } from "../content";
import { PROSE } from "../prose";
import "../styles.css";

function App() {
  useFontsReady(["900 125% 1em Archivo", "500 1em Archivo", "800 1em Archivo"]);
  return (
    <Page current="about.html" source={SOURCE.about}>
      <h1 className="visually-hidden">About Hot 'n Now</h1>
      <Squares id="hero" title="Since 1984" quiet squares={ABOUT.hero} variant={2} from={3} strip={ABOUT.heroStrip} />
      <Prose section={PROSE.aboutStory} />
      <Squares id="values" kicker={ABOUT.values.kicker} title={ABOUT.values.title} squares={ABOUT.values.squares} variant={1} />
      <Squares id="history" kicker={ABOUT.history.kicker} title={ABOUT.history.title} lesson={ABOUT.history.lesson} squares={ABOUT.history.squares} variant={4} from={2} strip={ABOUT.history.strip} tone="navy" />
      <Faq id="faq" title={ABOUT.faq.title} items={ABOUT.faq.items} />
      <Signup />
    </Page>
  );
}
createRoot(document.getElementById("root")!).render(<StrictMode><App /></StrictMode>);
