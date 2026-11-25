import { useState, useMemo } from "react";
import { Reveal } from "../hooks";
import { REC_OPTIONS } from "../data/data";
import { PageHeader } from "../components/PageHeader";
import { Link } from "../components/Link";

function getRecommendation(cmfTotal: number, samsungTotal: number, logitechTotal: number, selectedIds: string[]) {
  if (selectedIds.length === 0) return null;

  const hasGaming = selectedIds.includes("gaming");
  const hasCalls = selectedIds.includes("calls");
  const hasComfort = selectedIds.includes("comfort");
  const hasBass = selectedIds.includes("bass");
  const hasAnc = selectedIds.includes("anc");
  const hasTech = selectedIds.includes("tech");
  const hasValue = selectedIds.includes("value");

  // Pokud je gaming prioritou -> Logitech vítěz
  if (hasGaming && logitechTotal >= 2) {
    return {
      winner: "Logitech G Pro X Wireless",
      score: { cmf: cmfTotal, samsung: samsungTotal, logitech: logitechTotal },
      reasoning:
        "Pro gaming je Logitech v jiné lize: LIGHTSPEED <20 ms, DTS:X 2.0 surround, Blue VO!CE mikrofon. " +
        "CMF a Samsung jsou jen pro mobilní/casual hry přes Bluetooth.",
    };
  }

  // 3-way comparison
  const scores = { cmf: cmfTotal, samsung: samsungTotal, logitech: logitechTotal };
  const maxScore = Math.max(cmfTotal, samsungTotal, logitechTotal);
  const winners = Object.entries(scores).filter(([, v]) => v === maxScore).map(([k]) => k);

  if (winners.length === 1) {
    const winner = winners[0];
    const names = { cmf: "CMF Buds Pro 2", samsung: "Samsung Galaxy Buds Live", logitech: "Logitech G Pro X Wireless" };
    let reasoning = "";

    if (winner === "cmf") {
      reasoning = "Priority sedí na uzavřený in-ear s funkcemi 2024. " +
        (hasBass ? "Basy a seal jsou hlavní argument CMF. " : "") +
        (hasAnc ? "ANC má u špuntů fyzický náskok. " : "") +
        (hasTech ? "Smart Dial, Dirac, LDAC, Dual Driver – CMF nabídne víc technologií. " : "") +
        (hasValue ? "Nejlepší poměr cena/výkon v TWS kategorii. " : "") +
        "Pořád to nejsou studiové monitory.";
    } else if (winner === "samsung") {
      reasoning = "Priority sedí spíš na open bean. " +
        (hasComfort ? "Celodenní tlak v uchu je u Live jiná disciplína. " : "") +
        (hasCalls ? "Dobré mikrofony na hovory, ale Logitech je pro comms lepší. " : "") +
        "Méně feature names, jiný pocit z hudby. Starší model — ověř dostupnost a appku na svém telefonu.";
    } else {
      reasoning = "Priority sedí na gaming headset. " +
        (hasCalls ? "Blue VO!CE = broadcast kvalita mikrofonu. " : "") +
        (hasComfort ? "Velour náušnice + přepínání = celodenní pohodlí i s brýlemi. " : "") +
        (hasTech ? "LIGHTSPEED, DTS:X, G-Shift, on-board memory – gaming reference. " : "") +
        "Ne pro hudbu na cestách, ne pro ANC, neskládá se do kapsy.";
    }

    return {
      winner: names[winner as keyof typeof names],
      score: scores,
      reasoning,
    };
  }

  // Tie or close
  const diffCMF_Samsung = cmfTotal - samsungTotal;
  const diffCMF_Logitech = cmfTotal - logitechTotal;
  const diffSamsung_Logitech = samsungTotal - logitechTotal;

  return {
    winner: "Těsné — záleží na konkrétních prioritách",
    score: scores,
    reasoning:
      "Skóre jsou blízko u sebe. " +
      (hasGaming ? "Máte gaming? Logitech. " : "") +
      (hasAnc ? "Chcete ANC? CMF. " : "") +
      (hasComfort ? "Chcete pohodlí? Samsung (open) nebo Logitech (velour). " : "") +
      "Když můžeš, vyzkoušej fit. Tabulka ti ucho nenahradí.",
  };
}

export function RecommendPage() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const rec = useMemo(() => {
    if (selected.size === 0) return null;
    let cmf = 0;
    let samsung = 0;
    let logitech = 0;
    for (const opt of REC_OPTIONS) {
      if (selected.has(opt.id)) {
        cmf += opt.cmfPoints;
        samsung += opt.samsungPoints;
        logitech += opt.logitechPoints;
      }
    }
    return getRecommendation(cmf, samsung, logitech, [...selected]);
  }, [selected]);

  return (
    <section className="section-gap page-pad">
      <div className="container">
        <Reveal>
          <PageHeader
            eyebrow="[ HOW DO YOU LISTEN ]"
            title="How do you listen?"
            desc="Víc možností najednou. Váhy jsou z vlastností modelů, ne z brandu. Tři produkty = tři use-casy."
          />
        </Reveal>

        <Reveal>
          <div className="flex flex-col" style={{ gap: "var(--space-sm)", maxWidth: 640 }}>
            {REC_OPTIONS.map(opt => (
              <div
                key={opt.id}
                className={`rec-option ${selected.has(opt.id) ? "selected" : ""}`}
                onClick={() => toggle(opt.id)}
                role="checkbox"
                tabIndex={0}
                aria-checked={selected.has(opt.id)}
                onKeyDown={e => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggle(opt.id);
                  }
                }}
              >
                <div className="rec-option-check">
                  {selected.has(opt.id) ? (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="1,6 4.5,9.5 11,2" />
                    </svg>
                  ) : null}
                </div>
                <span className="rec-option-label">{opt.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {rec ? (
          <Reveal>
            <div className="rec-result">
              <div className="rec-result-title">[ DOPORUČENÍ ]</div>
              <div className="rec-winner c-display">{rec.winner}</div>
              <div style={{ display: "flex", gap: "var(--space-xl)", marginBottom: "var(--space-lg)", flexWrap: "wrap" }}>
                <div>
                  <div className="flex items-center gap-sm mb-sm">
                    <span className="text-label">CMF</span>
                    <span className="font-mono c-display" style={{ fontSize: 20 }}>
                      {rec.score.cmf}
                    </span>
                  </div>
                  <div className="seg-bar" style={{ width: 160 }}>
                    {Array.from({ length: 15 }).map((_, j) => (
                      <div key={j} className={`seg-bar-segment ${j < rec.score.cmf ? "filled" : ""}`} style={{ height: 8 }} />
                    ))}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-sm mb-sm">
                    <span className="text-label" style={{ color: "var(--interactive)" }}>LIVE</span>
                    <span className="font-mono c-display" style={{ fontSize: 20 }}>
                      {rec.score.samsung}
                    </span>
                  </div>
                  <div className="seg-bar" style={{ width: 160 }}>
                    {Array.from({ length: 15 }).map((_, j) => (
                      <div
                        key={j}
                        className="seg-bar-segment"
                        style={{
                          height: 8,
                          background: j < rec.score.samsung ? "var(--interactive)" : "var(--border)",
                          opacity: j < rec.score.samsung ? 0.7 : 1,
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-sm mb-sm">
                    <span className="text-label" style={{ color: "var(--accent)" }}>LOGI</span>
                    <span className="font-mono c-display" style={{ fontSize: 20 }}>
                      {rec.score.logitech}
                    </span>
                  </div>
                  <div className="seg-bar" style={{ width: 160 }}>
                    {Array.from({ length: 15 }).map((_, j) => (
                      <div
                        key={j}
                        className="seg-bar-segment"
                        style={{
                          height: 8,
                          background: j < rec.score.logitech ? "var(--accent)" : "var(--border)",
                          opacity: j < rec.score.logitech ? 0.7 : 1,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="rec-reasoning">{rec.reasoning}</p>
              <div style={{ marginTop: "var(--space-lg)", paddingTop: "var(--space-lg)", borderTop: "1px solid var(--border)" }}>
                {REC_OPTIONS.filter(o => selected.has(o.id)).map(o => (
                  <p key={o.id} className="text-body-sm c-secondary mb-sm">
                    — {o.note}
                  </p>
                ))}
              </div>
              <Link to="/verdict" className="btn btn-primary mt-lg">
                Závěr
              </Link>
            </div>
          </Reveal>
        ) : (
          <Reveal>
            <p className="text-label c-disabled mt-xl">[ VYBER ALESPOŇ JEDNU PRIORITU ]</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
