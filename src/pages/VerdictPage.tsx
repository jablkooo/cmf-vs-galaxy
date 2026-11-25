import { Reveal } from "../hooks";
import { PageHeader } from "../components/PageHeader";
import { SourcesList } from "../components/SourcesList";

export function VerdictPage() {
  return (
    <section className="section-gap page-pad">
      <div className="container">
        <Reveal>
          <PageHeader eyebrow="[ THE FINAL CALL ]" title="Tři cesty, tři use-casy" />
        </Reveal>

        <Reveal>
          <div className="conclusion-split-three">
            <div className="conclusion-panel">
              <p className="conclusion-panel-id">[ CMF BUDS PRO 2 ]</p>
              <h2 className="conclusion-panel-name">Pro koho</h2>
              <ul className="pro-con-list mb-xl">
                {[
                  "Chceš bas a izolaci na cestu",
                  "Potřebuješ ANC, které má šanci těsnit",
                  "Baví tě Dial, LDAC, dual driver",
                  "Kontroluješ hotový mix na běžných in-ear",
                  "Nehledáš studiovou referenci",
                ].map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-label c-secondary mb-sm">Výhoda</p>
              <p className="text-body-sm c-secondary mb-lg">
                Novější stack: kodek, výdrž AAC, IP55, funkce v Nothing X.
              </p>
              <p className="text-label c-secondary mb-sm">Kompromis</p>
              <p className="text-body-sm c-secondary">
                V-shape a DSP barví. Špunt nemusí sedět celý den. LDAC zkrátí baterii.
              </p>
            </div>
            <div className="conclusion-panel">
              <p className="conclusion-panel-id" style={{ color: "var(--interactive)" }}>
                [ GALAXY BUDS LIVE ]
              </p>
              <h2 className="conclusion-panel-name">Pro koho</h2>
              <ul className="pro-con-list mb-xl">
                {[
                  "Nesnášíš klasické špunty",
                  "Chceš slyšet i stanici metra",
                  "Vokály a středy ti sedí víc než sub",
                  "Jsi v Galaxy telefonu",
                  "Hledáš bean, ne feature list 2024",
                ].map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-label c-secondary mb-sm">Výhoda</p>
              <p className="text-body-sm c-secondary mb-lg">
                Tvar a otevřenost. Qi. VPU. Jiné pohodlí, jiný poměr pásem.
              </p>
              <p className="text-label c-secondary mb-sm">Kompromis</p>
              <p className="text-body-sm c-secondary">
                2020. IPX2. Bez LDAC. ANC i bas drží konstrukce zpátky. Appka není stejně bohatá všude.
              </p>
            </div>
            <div className="conclusion-panel">
              <p className="conclusion-panel-id" style={{ color: "var(--accent)" }}>
                [ LOGITECH G PRO X WIRELESS ]
              </p>
              <h2 className="conclusion-panel-name">Pro koho</h2>
              <ul className="pro-con-list mb-xl">
                {[
                  "Primárně gaming (FPS, RPG, MMO)",
                  "Potřebuješ broadcast kvalitu mikrofonu (stream, team comms)",
                  "Chceš virtuální 7.1 surround (DTS:X 2.0)",
                  "Latence <20 ms (LIGHTSPEED) – kompetitivní hraní",
                  "Celodenní sessiony s brýlemi (velour pads)",
                  "LAN party / turnaje – on-board profily bez softwaru",
                ].map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-label c-secondary mb-sm">Výhoda</p>
              <p className="text-body-sm c-secondary mb-lg">
                Gaming reference: LIGHTSPEED, Blue VO!CE, DTS:X, G-Shift, 2 sady náušnic, on-board memory.
              </p>
              <p className="text-label c-secondary mb-sm">Kompromis</p>
              <p className="text-body-sm c-secondary">
                Žádné Bluetooth, žádné ANC, žádný multipoint, neskládá se do kapsy, přes 300 g. To není pro hudbu v metru.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <blockquote className="closing-quote">
            <p className="font-doto c-display">
              Každý produkt pro jiný use-case. CMF pro hudbu v metru, Live pro otevřenost, Logitech pro gaming.
              Neexistuje jeden vítěz – existuje jen ten správný pro tvůj účel.
            </p>
          </blockquote>
        </Reveal>

        <Reveal>
          <div className="flex gap-lg mt-xl" style={{ flexWrap: "wrap" }}>
            <a href="https://cmf.tech" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              cmf.tech
            </a>
            <a
              href="https://www.smarty.cz/Samsung-Galaxy-Buds-Live-cerna-4p56456"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Galaxy Buds Live
            </a>
            <a
              href="https://www.logitechg.com/en-gb/shop/p/pro-x-wireless-headset.981-000907"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Logitech G Pro X Wireless
            </a>
          </div>
        </Reveal>
        <SourcesList />
      </div>
    </section>
  );
}
