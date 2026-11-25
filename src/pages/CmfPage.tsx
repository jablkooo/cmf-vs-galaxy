import { Reveal } from "../hooks";
import { PageHeader } from "../components/PageHeader";
import { CmfBudArt } from "../components/ProductArt";
import { Link } from "../components/Link";
import { SourcesList } from "../components/SourcesList";

const BLOCKS = [
  {
    label: "Konstrukce",
    title: "Uzavřený in-ear",
    text: "Silikonový nástavec má těsnit kanál. Seal drží bas, pomáhá ANC a odděluje tě od autobusu. Špatná velikost = tenký zvuk. Proto existuje Ear Tip Fit Test.",
  },
  {
    label: "Měniče",
    title: "11 mm + 6 mm",
    text: "11mm měnič bere bas. 6mm micro-planar tweeter bere výšky. Analogie: malý woofer a tweeter v jednom pouzdru, místo jednoho reproduktoru, který má hrát všechno.",
  },
  {
    label: "Basy",
    title: "Punch, ne studio",
    text: "Ultra Bass 2.0 a uzavřená konstrukce tlačí nízké pásmo dopředu. Pro EDM a rap je to zábava. Pro kontrolu mixu je to filtr — bas může znít silnější, než ve studiu je.",
  },
  {
    label: "Vokály",
    title: "Čitelné, ne vždy vpředu",
    text: "Tweeter pomáhá sykavkám a vzduchu. Silný bas ale může vokál „zatlačit“. V aplikaci jdou EQ a Dirac Opteo. Pořád to není referenční střední pásmo.",
  },
  {
    label: "Výšky",
    title: "Oddělený tweeter",
    text: "Výšky nemusí vytlačovat stejná membrána jako sub-bas. Cymbály a detaily mají šanci zůstat čitelnější než u jednoho malého driveru s basovým boostem.",
  },
  {
    label: "ANC",
    title: "Hybrid, deklarace až 50 dB",
    text: "Číslo je maximum výrobce v ideálních podmínkách, ne denní průměr. Adaptivní / Smart ANC mění parametry podle okolí a usazení. Hlasy potlačí hůř než motor vlaku.",
  },
  {
    label: "Mikrofony",
    title: "Šest + vítr",
    text: "Tři mikrofony na každé sluchátko. Clear Voice a Wind Noise Reduction 2.0 cílí na hovory, ne na nahrávání vokálu do FL Studia.",
  },
  {
    label: "Výdrž",
    title: "Záleží na kodeku",
    text: "AAC, ANC off: až 11 h / 43 h s pouzdrem (výrobce, 50 % hlasitosti). S ANC: 6,5 h / 26 h. LDAC výdrž zkrátí. 10 min nabití: až 7 h se pouzdrem v AAC bez ANC.",
  },
  {
    label: "Pouzdro",
    title: "Dial nahoře",
    text: "Čtvercové pouzdro 53,4 mm. Smart Dial je na víku. Defaultně bez funkce — nastavíš v Nothing X. Výrobce uvádí test 10 000 stisků / cyklů víka.",
  },
  {
    label: "Kodeky",
    title: "SBC · AAC · LDAC",
    text: "LDAC umí až 990 kbps. Dirac Opteo a LDAC nejde zapnout současně (vzorkovací limit dle CMF). Bluetooth 5.3. Dual Connection ke dvěma zařízením.",
  },
  {
    label: "Aplikace",
    title: "Nothing X",
    text: "EQ presety včetně Dirac Opteo, Spatial Audio, Fit Test, Low Lag, Find My. Android i iOS. Není to DAW plugin — je to spotřebitelská appka.",
  },
];

const ROWS = [
  ["Konstrukce", "In-ear, silikon"],
  ["Měniče", "11 mm + 6 mm micro-planar"],
  ["ANC", "Hybrid, až 50 dB (výrobce)"],
  ["Kodeky", "SBC · AAC · LDAC"],
  ["Bluetooth", "5.3"],
  ["Mikrofony", "6"],
  ["Hmotnost", "4,9 g"],
  ["IP", "IP55 (sluchátka)"],
  ["App", "Nothing X"],
];

export function CmfPage() {
  return (
    <section className="section-gap page-pad">
      <div className="container">
        <div className="product-hero">
          <div>
            <Reveal>
              <PageHeader
                eyebrow="[ PRODUKT 01 · CMF ]"
                title={
                  <>
                    CMF
                    <br />
                    <span style={{ fontWeight: 300 }}>Buds Pro 2</span>
                  </>
                }
                desc="Každodenní poslech, basy, ANC a gadgety. Ne studiový mastering. Dual driver a Smart Dial jsou tady proto, aby hudba bavila cestou, ne aby nahradila monitory."
              />
            </Reveal>
            <Reveal delay={1}>
              <p className="font-doto c-display product-hero-metric">11+6</p>
              <p className="text-label c-secondary">mm · bass + tweeter · každé sluchátko</p>
            </Reveal>
          </div>
          <Reveal delay={2}>
            <div className="product-art-wrap" style={{ color: "var(--text-secondary)" }}>
              <CmfBudArt className="product-art" />
              <p className="text-label c-disabled mt-md">CMF Buds Pro 2</p>
            </div>
          </Reveal>
        </div>

        <div className="story-stack">
          {BLOCKS.map((b, i) => (
            <Reveal key={b.label} delay={(i % 3) as 0 | 1 | 2}>
              <article className="story-block">
                <p className="text-label c-disabled">{b.label}</p>
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
            <Link to="/features" className="btn btn-primary">
              Hidden features
            </Link>
            <Link to="/samsung" className="btn btn-secondary">
              Galaxy Buds Live
            </Link>
            <Link to="/logitech" className="btn btn-secondary" style={{ background: "var(--accent)", color: "var(--black)" }}>
              Logitech G Pro X
            </Link>
          </div>
        </Reveal>
        <SourcesList />
      </div>
    </section>
  );
}
