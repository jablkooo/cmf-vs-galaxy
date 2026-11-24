import { Reveal } from "../hooks";
import { PageHeader } from "../components/PageHeader";
import { LiveBudArt } from "../components/ProductArt";
import { Link } from "../components/Link";
import { SourcesList } from "../components/SourcesList";

const BLOCKS = [
  {
    label: "Bean",
    title: "Leží, netěsní",
    text: "Tvar fazole sedí na vstupu kanálu. Žádný silikonový špunt. Méně „zátky v uchu“, víc úniku vzduchu. To je celý zvukový i ANC příběh tohoto modelu.",
  },
  {
    label: "Usazení",
    title: "Pohodlí vs. seal",
    text: "Pro spoustu uší je to celodenní komfort. Pro jiné bean padá nebo tlačí. Bez sealu nejde „dotáhnout bas“ výměnou nástavce — sedí tvar, nebo ne.",
  },
  {
    label: "Zvuk",
    title: "12 mm + bass duct",
    text: "Samsung a AKG: velký měnič, kanál pro bas, ventilační otvory proti okluzi. Cíl je živější, vzdušnější scéna. Fyzika open designu pořád omezuje sub-bas proti uzavřenému in-ear.",
  },
  {
    label: "Basy",
    title: "Méně tlaku",
    text: "Bass duct pomáhá, vzduch ale uniká. Kick může znít čistěji, sub méně fyzicky. Není to chyba — je to kompromis tvaru.",
  },
  {
    label: "ANC",
    title: "Open-type, ne ticho",
    text: "Samsung inzeroval první open-type ANC u Galaxy TWS. UL ověření: až 97 % v nízkých pásmech. I tak okolí slyšíš víc než u špuntů. Ambient jako u pozdějších Buds tu klasicky není — okolí je součástí konstrukce.",
  },
  {
    label: "Mikrofony",
    title: "3 + VPU",
    text: "Dva vnější, jeden vnitřní, plus Voice Pickup Unit na vibrace čelisti. Hovory, ne studiový vstup. Gaming Mode snižuje latenci u her.",
  },
  {
    label: "Výdrž",
    title: "Oficiální čísla 2020",
    text: "ANC off a Bixby off: až 8 h / 29 h. ANC on: 6 h / 21 h. ANC + Bixby: 5,5 h / 20 h. 5 min v pouzdře ≈ 1 h poslechu. Qi bezdrátové nabíjení je oficiální.",
  },
  {
    label: "Ovládání",
    title: "Dotyk, ne dial",
    text: "Plochy na sluchátku. Pouzdro je krabička bez otočného voliče. Aplikace Galaxy Wearable (Android) nebo Galaxy Buds (iOS). Plný ekosystém je nejsilnější na Galaxy telefonu.",
  },
  {
    label: "Kompatibilita",
    title: "Android i iPhone, s limity",
    text: "Oficiálně Android 5+ / iPhone 7+ iOS 10+. Kodeky SBC, AAC a Samsung Scalable (Scalable hlavně se Samsung zdrojem). Bluetooth 5.0. IPX2 — kapičky, ne sportovní déšť.",
  },
];

const ROWS = [
  ["Konstrukce", "Open bean"],
  ["Měnič", "12 mm + bass duct · AKG"],
  ["ANC", "Open-type"],
  ["Kodeky", "SBC · AAC · Scalable"],
  ["Bluetooth", "5.0"],
  ["Mikrofony", "3 + VPU"],
  ["Hmotnost", "5,6 g"],
  ["IP", "IPX2"],
  ["Rok", "2020"],
];

export function SamsungPage() {
  return (
    <section className="section-gap page-pad">
      <div className="container">
        <div className="product-hero">
          <div>
            <Reveal>
              <PageHeader
                eyebrow="[ PRODUKT 02 · SAMSUNG ]"
                title={
                  <>
                    Galaxy
                    <br />
                    <span style={{ fontWeight: 300 }}>Buds Live</span>
                  </>
                }
                desc="Jiná filozofie než CMF: otevřenější tvar, jiný tlak v uchu, jiný poměr středů k basům. Starší model (2020) — pořád relevantní, pokud ti vadí špunty."
              />
            </Reveal>
            <Reveal delay={1}>
              <p className="font-doto c-display product-hero-metric">OPEN</p>
              <p className="text-label c-secondary">bean · 12 mm · bass duct</p>
            </Reveal>
          </div>
          <Reveal delay={2}>
            <div className="product-art-wrap" style={{ color: "var(--interactive)" }}>
              <LiveBudArt className="product-art" />
              <p className="text-label c-disabled mt-md">Galaxy Buds Live</p>
            </div>
          </Reveal>
        </div>

        <div className="story-stack">
          {BLOCKS.map((b, i) => (
            <Reveal key={b.label} delay={(i % 3) as 0 | 1 | 2}>
              <article className="story-block">
                <p className="text-label c-secondary" style={{ color: "var(--interactive)" }}>
                  {b.label}
                </p>
                <h2 className="story-title">{b.title}</h2>
                <p className="text-body-sm c-secondary">{b.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-2xl">
            <p className="text-label c-secondary mb-lg">Technický list</p>
            {ROWS.map(([k, v]) => (
              <div className="feature-row" key={k}>
                <span className="feature-row-label">{k}</span>
                <span className="feature-row-value">{v}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="flex gap-md mt-2xl" style={{ flexWrap: "wrap" }}>
            <Link to="/hear" className="btn btn-primary">
              Co uslyšíš jinak
            </Link>
            <Link to="/cmf" className="btn btn-secondary">
              CMF Buds Pro 2
            </Link>
          </div>
        </Reveal>
        <SourcesList />
      </div>
    </section>
  );
}
