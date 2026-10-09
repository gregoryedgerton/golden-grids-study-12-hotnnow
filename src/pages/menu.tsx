import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Page } from "../lib/Page";
import { useFontsReady } from "../lib/fonts";
import { Squares } from "../bands/bands";
import { Prose, Signup } from "../lib/modules";
import { Bag } from "../lib/order";
import { MENU, SOURCE } from "../content";
import { PROSE } from "../prose";
import "../styles.css";

function App() {
  useFontsReady(["900 125% 1em Archivo", "500 1em Archivo", "800 1em Archivo"]);
  return (
    <Page current="menu.html" source={SOURCE.menu}>
      <div className="wrap pagehead">
        <h1 className="title">Menu</h1>
        <p className="intro">{MENU.note} Open a square to build it and add it to the bag.</p>
      </div>
      <Squares id="mains" title={MENU.mains.title} lesson={MENU.mains.lesson} squares={MENU.mains.squares} variant={0} from={2} strip={MENU.mains.strip} tone="board" />
      <Squares id="extras" title={MENU.extras.title} lesson={MENU.extras.lesson} squares={MENU.extras.squares} variant={3} />
      <Squares id="sides" title={MENU.sides.title} lesson={MENU.sides.lesson} squares={MENU.sides.squares} variant={6} from={3} strip={MENU.sides.strip} tone="board" />
      <Prose section={PROSE.menuNote} />
      <Squares id="drinks" title={MENU.drinks.title} lesson={MENU.drinks.lesson} squares={MENU.drinks.squares} variant={1} from={2} strip={MENU.drinks.strip} tone="board" />
      <Squares id="deals" title={MENU.deals.title} lesson={MENU.deals.lesson} squares={MENU.deals.squares} variant={5} />
      <Bag />
      <Signup />
    </Page>
  );
}
createRoot(document.getElementById("root")!).render(<StrictMode><App /></StrictMode>);
