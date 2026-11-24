import { Reveal } from "../hooks";
import { PageHeader } from "../components/PageHeader";
import { Link } from "../components/Link";

const CMF_ONLY = [
  "Smart Dial na pouzdře",
  "11 mm + 6 mm dual driver",
  "Ultra Bass 2.0 (název CMF)",
  "Dirac Opteo",
  "LDAC",
  "Spatial Audio (CMF implementace)",
  "Ear Tip Fit Test",
];

const SHARED = [
  "ANC (jiné limity)",
  "Hovory přes mikrofony",
  "USB-C pouzdro",
  "Dotykové ovládání",
  "Multipoint / přepínání zařízení",
  "Hledání sluchátka v appce",
  "Režim nižší latence (Low Lag / Gaming)",
];

const LIVE_ONLY = [
  "Bean / open konstrukce",
  "12 mm + bass duct",
  "AKG tuning",
  "Samsung Scalable kodek",
  "Voice Pickup Unit",
  "Qi nabíjení pouzdra (oficiálně)",
  "Open-type ANC (UL low-band claim)",
];

export function DifferencePage() {
  return (
    <section className="section-gap page-pad">
      <div className="container">
        <Reveal>
          <PageHeader
            eyebrow="[ WHAT MAKES THEM DIFFERENT ]"
            title="Tři sloupce, ne skóre"
            desc="CMF navíc. Společné. Live navíc. Společné neznamená stejné — ANC u open beanu není ANC u špuntu."
          />
        </Reveal>

        <div className="tri-grid">
          <Reveal>
            <div className="tri-col">
              <p className="text-label mb-lg">CMF navíc</p>
              <ul className="pro-con-list">
                {CMF_ONLY.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="tri-col tri-col-mid">
              <p className="text-label c-disabled mb-lg">Společné</p>
              <ul className="pro-con-list">
                {SHARED.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <div className="tri-col">
              <p className="text-label mb-lg" style={{ color: "var(--interactive)" }}>
                Live navíc
              </p>
              <ul className="pro-con-list">
                {LIVE_ONLY.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <p className="text-body-sm c-secondary mt-2xl" style={{ maxWidth: 640 }}>
            Adaptivní ANC, šest mikrofonů a přizpůsobitelný Dial jsou u CMF konkrétní implementace.
            Live má míň „feature names“ a víc jedné konstrukční myšlenky: otevřené ucho.
          </p>
          <Link to="/hear" className="btn btn-secondary mt-lg">
            Co uslyšíš jinak
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
