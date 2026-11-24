import { useState } from "react";
import { Reveal } from "../hooks";
import { DID_YOU_KNOW } from "../data/data";
import { PageHeader } from "../components/PageHeader";

export function FactsPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-gap page-pad dot-grid-subtle">
      <div className="container">
        <Reveal>
          <PageHeader
            eyebrow="[ DID YOU KNOW ]"
            title="Čísla s větou navíc"
            desc="Ne seznam datasheetu. Každá karta má proč to vůbec řešit."
          />
        </Reveal>
        <div className="facts-stack">
          {DID_YOU_KNOW.map((fact, i) => {
            const active = open === i;
            return (
              <button
                key={fact.title}
                type="button"
                className={`fact-row ${active ? "open" : ""}`}
                onClick={() => setOpen(active ? null : i)}
                aria-expanded={active}
              >
                <span className="fact-num">{fact.number}</span>
                <span className="fact-copy">
                  <span className="fact-title">{fact.title}</span>
                  {active ? <span className="fact-desc">{fact.desc}</span> : null}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
