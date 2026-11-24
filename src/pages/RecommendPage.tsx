import { useState, useMemo } from "react";
import { Reveal } from "../hooks";
import { REC_OPTIONS } from "../data/data";
import { PageHeader } from "../components/PageHeader";
import { Link } from "../components/Link";

function getRecommendation(cmfTotal: number, samsungTotal: number, selectedIds: string[]) {
  if (selectedIds.length === 0) return null;
  const diff = cmfTotal - samsungTotal;
  const hasComfort = selectedIds.includes("comfort");
  const hasBass = selectedIds.includes("bass");
  const hasAnc = selectedIds.includes("anc");

  if (diff >= 6) {
    return {
      winner: "CMF Buds Pro 2",
      score: { cmf: cmfTotal, samsung: samsungTotal },
      reasoning:
        "Priority sedí na uzavřený in-ear s funkcemi 2024. " +
        (hasBass ? "Basy a seal jsou hlavní argument CMF. " : "") +
        (hasAnc ? "ANC má u špuntů fyzický náskok. " : "") +
        "Pořád to nejsou studiové monitory.",
    };
  }

  if (diff <= -4) {
    return {
      winner: "Samsung Galaxy Buds Live",
      score: { cmf: cmfTotal, samsung: samsungTotal },
      reasoning:
        "Priority sedí spíš na open bean. " +
        (hasComfort ? "Celodenní tlak v uchu je u Live jiná disciplína. " : "") +
        "Méně feature names, jiný pocit z hudby. Starší model — ověř dostupnost a appku na svém telefonu.",
    };
  }

  return {
    winner: diff > 0 ? "CMF, těsně" : diff < 0 ? "Live, těsně" : "Remíza — rozhodne ucho",
    score: { cmf: cmfTotal, samsung: samsungTotal },
    reasoning:
      "Priority se perou. CMF = izolace, bas, Dial, LDAC. Live = open, středy, jiný komfort. " +
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
    for (const opt of REC_OPTIONS) {
      if (selected.has(opt.id)) {
        cmf += opt.cmfPoints;
        samsung += opt.samsungPoints;
      }
    }
    return getRecommendation(cmf, samsung, [...selected]);
  }, [selected]);

  return (
    <section className="section-gap page-pad">
      <div className="container">
        <Reveal>
          <PageHeader
            eyebrow="[ HOW DO YOU LISTEN ]"
            title="How do you listen to music?"
            desc="Víc možností najednou. Váhy jsou z vlastností modelů, ne z toho, která značka je novější."
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
