import { useState } from "react";
import { Reveal } from "../hooks";
import { PageHeader } from "../components/PageHeader";

const TOPICS = [
  {
    id: "bands",
    label: "Basy · středy · výšky",
    headline: "Tři patra, která slyšíš najednou",
    desc: "Basy (cca 20–250 Hz) jsou kick, sub, hluboká basová linka. Středy (cca 250 Hz–4 kHz) nesou vokál a většinu nástrojů. Výšky (nad 4 kHz) jsou vzduch, sykavky, činely. Když jedno patro křičí, ostatní zní menší — i když ve souboru jsou v pořádku.",
    cmf: "V-shape: bas a výšky dopředu. Středy můžou ustoupit.",
    samsung: "Otevřenější poměr. Středy často působí přirozeněji.",
    bass: 85,
    mid: 48,
    treble: 70,
  },
  {
    id: "kick",
    label: "Kick vs. bass",
    headline: "Proč se kopák a basová linka perou",
    desc: "V EDM, DnB i rapu žijí kick a bas blízko sebe. Mají se střídat, ne překrývat. Když sluchátka přifouknou bas, kick se schová do kaše — nebo naopak zní, že basu je dost, i když ve mixu chybí. To je důvod, proč se hotový beat pouští i na „běžných“ sluchátkách.",
    cmf: "Zábavný punch. Při kontrole vlastního beatu ověř i jinde.",
    samsung: "Méně maskování subem. Snáz uslyšíš, kde kick končí.",
    bass: 90,
    mid: 40,
    treble: 50,
  },
  {
    id: "vocals",
    label: "Vokály",
    headline: "Má se hlas číst přes instrumentál",
    desc: "Vokál má zůstat srozumitelný. Silný bas nebo ostré výšky ho umí schovat nebo naopak nafouknout. CMF i Live jsou kontrola spotřebitelského poslechu — ne náhrada za studiová sluchátka, pokud je máš.",
    cmf: "Čitelnost je slušná, basový EQ ji umí snížit.",
    samsung: "Open design středům často pomáhá.",
    bass: 40,
    mid: 88,
    treble: 58,
  },
  {
    id: "balance",
    label: "Rovnováha",
    headline: "Vyvážený zvuk není nuda",
    desc: "Rovnováha znamená, že žádné pásmo nese celou nahrávku. CMF cílí na zábavu. Live na otevřenější dojem. Ani jedno není plochá referenční křivka, dokud to nenaměříš — a my jsme to neměřili.",
    cmf: "Hudební, ne neutrální.",
    samsung: "Blíž „venku“, pořád s vlastním charakterem AKG tuningu.",
    bass: 55,
    mid: 55,
    treble: 55,
  },
  {
    id: "devices",
    label: "Víc zařízení",
    headline: "Hotový mix patří i mimo studio",
    desc: "Poslechni track na monitorech nebo studiových sluchátkách, pokud je máš. Pak telefon, notebook, auto, CMF, Live. Každý výstup ukáže jinou chybu: dunění, tloušťku, ztracený vokál. CMF je jedna z těch kontrol — „jak to zní lidem v in-ear s basy“.",
    cmf: "Test moderního in-ear s V-shape.",
    samsung: "Test open poslechu, kde okolí pořád existuje.",
    bass: 50,
    mid: 52,
    treble: 50,
  },
  {
    id: "bt",
    label: "Limity Bluetooth",
    headline: "Latence, EQ, ANC",
    desc: "Bluetooth komprimuje. LDAC méně než SBC, pořád to není USB audio. Sluchátka mají vlastní DSP. Silný bas zkreslí, jak vnímáš rovnováhu. ANC přidává zpracování — není to nástroj na mastering. Latence vadí při nahrávání, méně při poslechu hotového souboru.",
    cmf: "LDAC pomáhá datům. EQ a ANC zůstanou.",
    samsung: "Bez LDAC. Scalable hlavně v Galaxy telefonu.",
    bass: 52,
    mid: 52,
    treble: 52,
  },
];

export function MusicPage() {
  const [id, setId] = useState(TOPICS[0].id);
  const topic = TOPICS.find(t => t.id === id) ?? TOPICS[0];

  return (
    <section className="section-gap page-pad dot-grid-subtle">
      <div className="container">
        <Reveal>
          <PageHeader
            eyebrow="[ FL STUDIO · KONTEXT ]"
            title={
              <>
                Made for
                <br />
                Music Creators
              </>
            }
            desc="FL Studio je tady proto, že tě zajímá, jak hudba vzniká. CMF nejsou masteringová sluchátka. Jsou parťák na beat v MHD a na kontrolu, jak hotový mix zní mimo studio."
          />
        </Reveal>

        <Reveal>
          <div className="card mb-xl" style={{ borderColor: "var(--warning)" }}>
            <p className="text-label" style={{ color: "var(--warning)", marginBottom: "var(--space-sm)" }}>
              [ DŮLEŽITÉ ]
            </p>
            <p className="text-body-sm c-secondary">
              Nevíme, jestli už máš studiová sluchátka. Pokud ano, CMF jsou doplněk na běžný poslech.
              Pokud ne, pořád ti dají feedback — s vědomím, že barví basy a jedou přes Bluetooth.
            </p>
          </div>
        </Reveal>

        <div className="music-layout">
          <div className="flex flex-col" style={{ gap: "var(--space-sm)" }}>
            {TOPICS.map(t => (
              <button
                key={t.id}
                type="button"
                className={`rec-option ${id === t.id ? "selected" : ""}`}
                onClick={() => setId(t.id)}
                aria-pressed={id === t.id}
              >
                <span className="rec-option-label">{t.label}</span>
              </button>
            ))}
          </div>

          <Reveal>
            <article className="card">
              <p className="text-label c-disabled mb-sm">{topic.label}</p>
              <h2 className="story-title" style={{ marginBottom: "var(--space-md)" }}>
                {topic.headline}
              </h2>
              <p className="text-body-sm c-secondary" style={{ marginBottom: "var(--space-lg)" }}>
                {topic.desc}
              </p>
              <div className="freq-band" style={{ height: 72 }}>
                {["B", "B", "B", "M", "M", "M", "T", "T", "T"].map((band, j) => {
                  const h = band === "B" ? topic.bass : band === "M" ? topic.mid : topic.treble;
                  const cls = band === "B" ? "bass" : band === "M" ? "mid" : "treble";
                  return <div key={j} className={`freq-band-bar ${cls}`} style={{ height: `${h}%` }} />;
                })}
              </div>
              <p className="text-label c-disabled mb-md">[ OPACITA PÁSMA · ILUSTRACE ]</p>
              <p className="text-body-sm c-secondary mb-sm">
                <strong className="c-primary">CMF.</strong> {topic.cmf}
              </p>
              <p className="text-body-sm c-secondary">
                <strong className="c-primary">Live.</strong> {topic.samsung}
              </p>
            </article>
          </Reveal>
        </div>

        <Reveal>
          <p className="font-doto c-display mt-2xl" style={{ fontSize: "clamp(28px, 5vw, 48px)" }}>
            Poslouchej svůj mix na všem.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
