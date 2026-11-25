import { Reveal } from "../hooks";
import { PageHeader } from "../components/PageHeader";
import { LogitechArt } from "../components/ProductArt";
import { Link } from "../components/Link";
import { SourcesList } from "../components/SourcesList";

const BLOCKS = [
  {
    label: "LIGHTSPEED",
    title: "Bezdrátový jako kabel",
    text: "Vlastní 2,4 GHz protokol přes USB dongle. Latence pod 20 ms, dosah 15 m. Žádné párování, žádné Bluetooth kompromisy. Plug & play na PC/Mac/PS5/PS4/Switch (dock).",
  },
  {
    label: "Blue VO!CE",
    title: "Broadcast kvalita mikrofonu",
    text: "Odkládací boom mikrofon + DSP v reálném čase (EQ, kompresor, limiter, de-esser, noise gate, noise reduction). Stejná technologie co Blue Yeti mikrofony. Profil se uloží do headsetu (on-board memory).",
  },
  {
    label: "DTS Headphone:X 2.0",
    title: "Virtuální 7.1 surround",
    text: "Objektový prostorový zvuk pro gaming. Hra pošle 5.1/7.1/Atmos, DTS:X to mapuje na stereonaušnice přes HRTF. Funguje jen na PC v G HUB. Ve FPS slyšíš kroky za sebou, výšku výstřelu.",
  },
  {
    label: "Ovládání",
    title: "Fyzická tlačítka + G-Shift",
    text: "Na levém sluchátku: hlasitost (kolo), mikrofon mute, G-tlačítko. G-Shift = druhá vrstva funkcí (držíš G + jiná tlačítka = makra, DTS zap/vyp, EQ profily). Vše bez minimalizace hry.",
  },
  {
    label: "Naušnice",
    title: "Dvě sady v balení",
    text: "Leatherette (izolace, basy) + Velour (pohodlí, dechování, pro brýle). Mechanická výměna za sekundy. Většina headsetů dává jen jednu sadu – Logitech dává výběr hned z krabice.",
  },
  {
    label: "Výdrž",
    title: "20+ hodin reálných",
    text: "SoundGuys test: 21h 33min při 75 dB. Logitech deklaruje '20+ hodin' – realita je lepší. Nabíjení USB-C, pár hodin na plné. Žádné pouzdro na dobíjení – headset je velký, drží najetý den.",
  },
  {
    label: "On-Board Memory",
    title: "Profily v headsetu",
    text: "EQ, Blue VO!CE, DTS:X, G-Shift nastavení se uloží přímo do headsetu. Fungují na jakémkoli PC bez instalace G HUB. Přepínáš tlačítkem na sluchátku. Ideální pro LAN party, turnaje, cizí PC.",
  },
  {
    label: "Konstrukce",
    title: "Ocel + hliník + paměťová pěna",
    text: "Ocelové zářezové šarže, hliníková vilice, přepínací pásek s paměťovou pěnou. Hmotnost ~340 g. Velour náušnice = glasses-friendly (brýle netlačí). Leatherette = lepší izolace.",
  },
  {
    label: "Aplikace",
    title: "G HUB (Windows/macOS)",
    text: "Všechnastavení v jedné aplikaci. Žádná mobilní aplikace – to je záměr (gaming headset). Profily se syncují přes cloud, ale fungují i offline díky on-board memory.",
  },
  {
    label: "Limity",
    title: "Ne pro hudbu na cestách",
    text: "Žádné Bluetooth, žádné ANC, žádný multipoint, neskládá se do kapsy. To není chyba – je to gaming headset. Pro hudbu v metru, letadle, kancelář: CMF nebo Samsung. Pro gaming: Logitech.",
  },
];

const ROWS = [
  ["Konstrukce", "Over-ear, uzavřená"],
  ["Měnič", "PRO-G 50 mm hybrid mesh"],
  ["ANC", "Ne (pasivní izolace)"],
  ["Bezdrát", "LIGHTSPEED 2,4 GHz (USB dongle)"],
  ["Bluetooth", "Ne"],
  ["Mikrofon", "Odkládací boom + Blue VO!CE"],
  ["Výdrž", "20+ hodin (testováno ~21,5 h)"],
  ["Nabíjení", "USB-C (přímo na headsetu)"],
  ["Hmotnost", "~340 g"],
  ["IP", "Neuvedeno"],
  ["App", "G HUB (Win/macOS)"],
  ["Surround", "DTS Headphone:X 2.0"],
  ["Cena", "cca 3 500–5 000 Kč"],
  ["Rok", "2021 (Pro X Wireless)"],
];

export function LogitechPage() {
  return (
    <section className="section-gap page-pad">
      <div className="container">
        <div className="product-hero">
          <div>
            <Reveal>
              <PageHeader
                eyebrow="[ PRODUKT 03 · LOGITECH ]"
                title={
                  <>
                    G Pro X
                    <br />
                    <span style={{ fontWeight: 300 }}>Wireless</span>
                  </>
                }
                desc="Gaming headset référence. LIGHTSPEED <20 ms, Blue VO!CE broadcast mic, DTS:X 2.0 surround, on-board memory. Ne pro hudbu v metru – pro vyhrané klipy,-rank a čisté comms."
              />
            </Reveal>
            <Reveal delay={1}>
              <p className="font-doto c-display product-hero-metric" style={{ color: "var(--accent)" }}>
                {"<20 ms"}
              </p>
              <p className="text-label c-secondary">LIGHTSPEED latency · broadcast mic</p>
            </Reveal>
          </div>
          <Reveal delay={2}>
            <div className="product-art-wrap" style={{ color: "var(--accent)" }}>
              <LogitechArt className="product-art" />
              <p className="text-label c-disabled mt-md">Logitech G Pro X Wireless</p>
            </div>
          </Reveal>
        </div>

        <div className="story-stack">
          {BLOCKS.map((b, i) => (
            <Reveal key={b.label} delay={(i % 3) as 0 | 1 | 2}>
              <article className="story-block">
                <p className="text-label c-secondary" style={{ color: "var(--accent)" }}>
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
            <Link to="/compare" className="btn btn-primary">
              Porovnat všechny tři
            </Link>
            <Link to="/sound" className="btn btn-secondary">
              Zvukové srovnání
            </Link>
          </div>
        </Reveal>
        <SourcesList />
      </div>
    </section>
  );
}