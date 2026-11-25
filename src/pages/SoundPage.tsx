import { useState } from "react";
import { Reveal } from "../hooks";
import { SOUND_DIMENSIONS, GENRES, type Genre } from "../data/data";
import { PageHeader } from "../components/PageHeader";

function GenreDetail({ genre }: { genre: Genre }) {
  const ratingColor = (r: Genre["cmfRating"]) =>
    r === "great" ? "var(--success)" : r === "good" ? "var(--warning)" : "var(--text-disabled)";
  const ratingLabel = (r: Genre["cmfRating"]) =>
    r === "great" ? "SEDÍ" : r === "good" ? "JDE" : "JINÝ CHARAKTER";

  return (
    <div className="card-raised" style={{ borderRadius: 16, padding: "var(--space-xl)" }}>
      <div className="grid-3" style={{ gap: "var(--space-lg)" }}>
        <div>
          <div className="flex items-center gap-sm mb-md">
            <span className="text-label" style={{ color: "var(--text-display)" }}>CMF</span>
            <span className="tag" style={{ borderColor: ratingColor(genre.cmfRating), color: ratingColor(genre.cmfRating), fontSize: 10 }}>
              {ratingLabel(genre.cmfRating)}
            </span>
          </div>
          <p className="text-body-sm c-secondary">{genre.cmfNote}</p>
        </div>
        <div>
          <div className="flex items-center gap-sm mb-md">
            <span className="text-label" style={{ color: "var(--interactive)" }}>LIVE</span>
            <span className="tag" style={{ borderColor: ratingColor(genre.samsungRating), color: ratingColor(genre.samsungRating), fontSize: 10 }}>
              {ratingLabel(genre.samsungRating)}
            </span>
          </div>
          <p className="text-body-sm c-secondary">{genre.samsungNote}</p>
        </div>
        <div>
          <div className="flex items-center gap-sm mb-md">
            <span className="text-label" style={{ color: "var(--accent)" }}>LOGITECH</span>
            <span className="tag" style={{ borderColor: ratingColor(genre.logitechRating), color: ratingColor(genre.logitechRating), fontSize: 10 }}>
              {ratingLabel(genre.logitechRating)}
            </span>
          </div>
          <p className="text-body-sm c-secondary">{genre.logitechNote}</p>
        </div>
      </div>
      <div style={{ marginTop: "var(--space-lg)", paddingTop: "var(--space-md)", borderTop: "1px solid var(--border)" }}>
        <span className="text-label c-secondary" style={{ marginRight: 8 }}>[ NA CO SE ZAMĚŘIT ]</span>
        <span className="text-body-sm c-secondary">{genre.tip}</span>
      </div>
    </div>
  );
}

export function SoundPage() {
  const [activeGenre, setActiveGenre] = useState<string | null>("edm");
  const selectedGenre = GENRES.find(g => g.id === activeGenre) ?? null;

  return (
    <section className="section-gap page-pad">
      <div className="container">
        <Reveal>
          <PageHeader
            eyebrow="[ SROVNÁNÍ ZVUKU ]"
            title="Sound Comparison"
            desc="Tři produkty, tři různé cíle. Pruhy 1–10 jsou orientační charakter z konstrukce a recenzí — ne laboratorní data."
          />
        </Reveal>

        <Reveal>
          <div style={{ marginBottom: "var(--space-3xl)" }}>
            {SOUND_DIMENSIONS.map((dim, i) => (
              <div key={dim.label} style={{ marginBottom: "var(--space-xl)" }}>
                <div className="flex justify-between items-center" style={{ marginBottom: "var(--space-sm)" }}>
                  <span className="text-label c-secondary">{dim.label}</span>
                </div>
                <p className="text-body-sm c-disabled mb-md">{dim.desc}</p>

                <div className="flex items-center gap-md" style={{ marginBottom: 6 }}>
                  <span className="text-label" style={{ width: 60, flexShrink: 0 }}>CMF</span>
                  <div className="seg-bar" style={{ flex: 1 }}>
                    {Array.from({ length: 10 }).map((_, j) => (
                      <div
                        key={j}
                        className={`seg-bar-segment ${j < dim.cmfScore ? "filled" : ""}`}
                        style={{ height: 10 }}
                      />
                    ))}
                  </div>
                  <span className="font-mono c-display" style={{ width: 32, textAlign: "right", fontSize: 14 }}>
                    {dim.cmfScore}
                  </span>
                </div>

                <div className="flex items-center gap-md" style={{ marginBottom: 8 }}>
                  <span className="text-label" style={{ color: "var(--interactive)", width: 60, flexShrink: 0 }}>
                    LIVE
                  </span>
                  <div className="seg-bar" style={{ flex: 1 }}>
                    {Array.from({ length: 10 }).map((_, j) => (
                      <div
                        key={j}
                        className="seg-bar-segment"
                        style={{
                          height: 10,
                          background: j < dim.samsungScore ? "var(--interactive)" : "var(--border)",
                          opacity: j < dim.samsungScore ? 0.7 : 1,
                        }}
                      />
                    ))}
                  </div>
                  <span className="font-mono c-display" style={{ width: 32, textAlign: "right", fontSize: 14 }}>
                    {dim.samsungScore}
                  </span>
                </div>

                <div className="flex items-center gap-md" style={{ marginBottom: 8 }}>
                  <span className="text-label" style={{ color: "var(--accent)", width: 60, flexShrink: 0 }}>
                    LOGI
                  </span>
                  <div className="seg-bar" style={{ flex: 1 }}>
                    {Array.from({ length: 10 }).map((_, j) => (
                      <div
                        key={j}
                        className="seg-bar-segment"
                        style={{
                          height: 10,
                          background: j < dim.logitechScore ? "var(--accent)" : "var(--border)",
                          opacity: j < dim.logitechScore ? 0.7 : 1,
                        }}
                      />
                    ))}
                  </div>
                  <span className="font-mono c-display" style={{ width: 32, textAlign: "right", fontSize: 14 }}>
                    {dim.logitechScore}
                  </span>
                </div>

                <div className="grid-3" style={{ gap: "var(--space-md)", marginTop: "var(--space-xs)" }}>
                  <p className="text-body-sm c-secondary">{dim.cmfNote}</p>
                  <p className="text-body-sm c-secondary">{dim.samsungNote}</p>
                  <p className="text-body-sm c-secondary">{dim.logitechNote}</p>
                </div>

                {i < SOUND_DIMENSIONS.length - 1 && (
                  <div style={{ height: 1, background: "var(--border)", marginTop: "var(--space-lg)" }} />
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <p className="section-eyebrow">[ ŽÁNRY ]</p>
          <h2 className="text-heading c-display mb-md">Jak se chová stejný žánr</h2>
          <p className="text-body-sm c-secondary mb-xl" style={{ maxWidth: 520 }}>
            Neexistuje jeden nejlepší zvuk. Vyber žánr — uvidíš, na co se u kterého modelu soustředit.
          </p>

          <div className="flex gap-sm mb-xl" style={{ flexWrap: "wrap" }}>
            {GENRES.map(g => (
              <button
                key={g.id}
                type="button"
                className={`tag ${activeGenre === g.id ? "tag-active" : ""}`}
                onClick={() => setActiveGenre(g.id)}
                aria-pressed={activeGenre === g.id}
                style={{ cursor: "pointer", background: "transparent" }}
              >
                {g.name}
              </button>
            ))}
          </div>

          {selectedGenre ? <GenreDetail genre={selectedGenre} /> : null}
        </Reveal>

        <Reveal>
          <div className="card mt-2xl">
            <p className="text-label c-secondary mb-sm">[ METODA ]</p>
            <p className="text-body-sm c-secondary">
              Čísla 1–10 jsou vizuální analogie charakteru (konstrukce, marketing, recenze třetích stran),
              ne laboratorní křivka. Dynamiku a oddělení nástrojů jsme neměřili. Subjektivní poslech
              závisí na uchu, sealu a zdroji. Logitech je gaming headset – hodnocení pro hudbu sekundární.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
