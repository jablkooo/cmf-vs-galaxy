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
  "IP55 odolnost",
  "Bluetooth 5.3",
];

const LOGI_ONLY = [
  "LIGHTSPEED 2,4 GHz (<20 ms latence)",
  "Blue VO!CE (broadcast mic DSP)",
  "DTS Headphone:X 2.0 (virtuální 7.1)",
  "Odkládací boom mikrofon",
  "G-Shift (druhá vrstva maker)",
  "On-Board Memory (profily v headsetu)",
  "Vyměnitelné náušnice: leatherette + velour",
  "Fyzická tlačítka + kolo hlasitosti",
  "PRO-G 50 mm hybrid mesh driver",
  "G HUB (Win/macOS only)",
];

const SHARED = [
  "Hovory přes mikrofony",
  "USB-C nabíjení",
  "Režim nižší latence (Low Lag / Gaming / LIGHTSPEED)",
  "Přizpůsobitelné ovládání (appka)",
];

const LIVE_ONLY = [
  "Bean / open konstrukce",
  "12 mm + bass duct",
  "AKG tuning",
  "Samsung Scalable kodek",
  "Voice Pickup Unit",
  "Qi nabíjení pouzdra (oficiálně)",
  "Open-type ANC (UL low-band claim)",
  "IPX2",
  "Bluetooth 5.0",
];

export function DifferencePage() {
  return (
    <section className="section-gap page-pad">
      <div className="container">
        <Reveal>
          <PageHeader
            eyebrow="[ WHAT MAKES THEM DIFFERENT ]"
            title="Čtyři sloupce, ne skóre"
            desc="CMF navíc. Logitech navíc. Společné. Live navíc. Společné neznamená stejné — ANC u open beanu není ANC u špuntu, LIGHTSPEED není Bluetooth."
          />
        </Reveal>

        <div className="quad-grid">
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
            <div className="tri-col">
              <p className="text-label mb-lg" style={{ color: "var(--accent)" }}>
                Logitech navíc
              </p>
              <ul className="pro-con-list">
                {LOGI_ONLY.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <div className="tri-col tri-col-mid">
              <p className="text-label c-disabled mb-lg">Společné</p>
              <ul className="pro-con-list">
                {SHARED.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={3}>
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
            CMF = TWS s funkcemi 2024. Logitech = gaming headset reference. Live = otevřený bean design 2020.
            Tři různé filosofie, tři různé use-casy. Neexistuje univerzální vítěz.
          </p>
          <Link to="/hear" className="btn btn-secondary mt-lg">
            Co uslyšíš jinak
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
