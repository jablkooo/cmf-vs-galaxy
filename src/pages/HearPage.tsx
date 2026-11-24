import { Reveal } from "../hooks";
import { Link } from "../components/Link";

const CMF = [
  { label: "Basy", text: "Uzavřený in-ear + Ultra Bass 2.0. Kick a sub mají fyzický dopad. Stejný track může působit hutněji." },
  { label: "Úpravy zvuku", text: "Nothing X, Dirac Opteo, Spatial Audio. Charakter jde měnit. Neutralita není výchozí stav." },
  { label: "ANC", text: "Těsnící nástavce + adaptivní ANC. Méně okolí, víc „uvnitř“ nahrávky — i na cestě." },
  { label: "Technologie", text: "Dual driver a LDAC ovlivňují, kolik detailů se k uchu dostane ze zdroje." },
];

const LIVE = [
  { label: "Konstrukce", text: "Bean leží na vstupu kanálu. Vzduch uniká. Bas i izolace jsou fyzicky omezené." },
  { label: "Usazení", text: "Jiný tlak, jiný seal. Stejná skladba má jiný poměr středů k basům." },
  { label: "Pocit", text: "Hudba sedí blíž „venku“. Vokály a středy často působí otevřeněji." },
  { label: "Okolí", text: "Menší přirozená izolace. Část scény tvoří i místnost — záměr, ne chyba." },
];

export function HearPage() {
  return (
    <section className="section-gap page-pad">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <p className="section-eyebrow">[ CHARAKTER POSLECHU ]</p>
            <h1 className="section-title">What Will You Hear Differently?</h1>
            <p className="section-desc">
              Nejde o to, která sluchátka „hrají líp“. Stejný soubor na obou modelech
              projde jinou akustikou ucha a jiným zpracováním signálu.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <p className="text-label c-disabled mb-xl">[ INTERPRETACE CHARAKTERU · NE LABORATORNÍ MĚŘENÍ ]</p>
        </Reveal>

        <div className="hear-grid">
          <Reveal>
            <article className="hear-panel hear-panel-cmf">
              <p className="text-label" style={{ color: "var(--accent)" }}>
                [ CMF BUDS PRO 2 ]
              </p>
              <h2 className="hear-name">Uvnitř tracku</h2>
              <ul className="pro-con-list">
                {CMF.map(row => (
                  <li key={row.label}>
                    <span>
                      <strong className="c-primary">{row.label}.</strong> {row.text}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
          <Reveal delay={1}>
            <article className="hear-panel hear-panel-live">
              <p className="text-label" style={{ color: "var(--interactive)" }}>
                [ GALAXY BUDS LIVE ]
              </p>
              <h2 className="hear-name">Vedle tracku</h2>
              <ul className="pro-con-list">
                {LIVE.map(row => (
                  <li key={row.label}>
                    <span>
                      <strong className="c-primary">{row.label}.</strong> {row.text}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>

        <Reveal>
          <div className="card mt-2xl">
            <p className="text-label c-secondary mb-sm">[ PROČ STEJNÁ SKLADBA ]</p>
            <p className="text-body-sm c-secondary" style={{ maxWidth: 720 }}>
              Seal mění basový tlak. Open design pouští výšky i hluk. EQ a ANC mění fázi
              a rovnováhu. Proto může EDM drop na CMF „bouchat“ a na Live znít vzdušněji —
              ani jedno není nutně správnější. Záleží, jestli chceš izolaci a punch, nebo
              přirozenější středy a kontakt s okolím.
            </p>
            <div className="flex gap-md mt-lg" style={{ flexWrap: "wrap" }}>
              <Link to="/sound" className="btn btn-secondary">
                Žánry a pásma
              </Link>
              <Link to="/recommend" className="btn btn-primary">
                Jak posloucháš?
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
