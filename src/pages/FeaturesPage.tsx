import { useState } from "react";
import { Reveal } from "../hooks";
import { CMF_FEATURES, LOGITECH_FEATURES, type Feature, type LogitechFeature } from "../data/data";
import { PageHeader } from "../components/PageHeader";

function FeatureCard({ feature, index, accentColor, brand }: { feature: Feature | LogitechFeature; index: number; accentColor: string; brand: string }) {
  const [expanded, setExpanded] = useState(index === 0);

  const samsungComparison = "samsungComparison" in feature ? feature.samsungComparison : "";
  const logitechComparison = "logitechComparison" in feature ? feature.logitechComparison : "";
  const cmfComparison = "cmfComparison" in feature ? feature.cmfComparison : "";

  return (
    <div
      className={`feature-card ${expanded ? "expanded" : ""}`}
      onClick={() => setExpanded(e => !e)}
      role="button"
      tabIndex={0}
      aria-expanded={expanded}
      onKeyDown={e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setExpanded(o => !o);
        }
      }}
    >
      <div className="feature-card-header">
        <span className="feature-card-num">[ {String(index + 1).padStart(2, "0")} ]</span>
        <span className="feature-card-toggle">{expanded ? "[ − ]" : "[ + ]"}</span>
      </div>
      <div className="feature-card-title">{feature.title}</div>
      <div className="feature-card-subtitle">{feature.subtitle}</div>
      <div className="feature-card-body">
        <p className="text-label c-disabled mb-sm">Co to je</p>
        <p>{feature.what}</p>
        <p className="text-label c-disabled mb-sm mt-md">Jak funguje</p>
        <p>{feature.how}</p>
        <p className="text-label c-disabled mb-sm mt-md">K čemu</p>
        <p>{feature.practical}</p>

        {brand === "CMF" && (
          <>
            <p className="text-label mb-sm mt-md" style={{ color: "var(--interactive)" }}>
              Galaxy Buds Live
            </p>
            <p>{feature.samsungComparison}</p>
            <p className="text-label mb-sm mt-md" style={{ color: "var(--accent)" }}>
              Logitech G Pro X Wireless
            </p>
            <p>{feature.logitechComparison}</p>
          </>
        )}

        {brand === "Logitech" && (
          <>
            <p className="text-label mb-sm mt-md" style={{ color: "var(--text-display)" }}>
              CMF Buds Pro 2
            </p>
            <p>{feature.cmfComparison}</p>
            <p className="text-label mb-sm mt-md" style={{ color: "var(--interactive)" }}>
              Galaxy Buds Live
            </p>
            <p>{feature.samsungComparison}</p>
          </>
        )}

        <div
          className="mt-md"
          style={{
            padding: "var(--space-md)",
            background: "var(--surface-raised)",
            borderRadius: 8,
            borderLeft: `2px solid ${feature.isUnique ? accentColor : "var(--border-visible)"}`,
          }}
        >
          <p className="text-label mb-sm" style={{ color: feature.isUnique ? accentColor : "var(--text-secondary)" }}>
            {feature.isUnique ? "[ NEOBVYKLÉ ]" : "[ BĚŽNĚJŠÍ ]"}
          </p>
          <p>{feature.uniqueNote}</p>
        </div>
      </div>
    </div>
  );
}

export function FeaturesPage() {
  return (
    <section className="section-gap page-pad">
      <div className="container">
        <Reveal>
          <PageHeader
            eyebrow="[ HIDDEN FEATURES ]"
            title="Co je na jednotlivých modelech zajímavého"
            desc="Klikni kartu. U každé funkce: co to je, jak to běží, k čemu to je, co umí konkurence, a jestli je to vzácné nebo marketingové jméno."
          />
        </Reveal>

        <div style={{ marginBottom: "var(--space-3xl)" }}>
          <Reveal>
            <h2 className="text-heading c-display mb-lg" style={{ color: "var(--text-display)" }}>CMF Buds Pro 2</h2>
          </Reveal>
          <div className="grid-auto" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
            {CMF_FEATURES.map((feature, i) => (
              <Reveal key={feature.id} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <FeatureCard feature={feature} index={i} accentColor="var(--accent)" brand="CMF" />
              </Reveal>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "var(--space-3xl)" }}>
          <Reveal>
            <h2 className="text-heading c-display mb-lg" style={{ color: "var(--accent)" }}>Logitech G Pro X Wireless</h2>
          </Reveal>
          <div className="grid-auto" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
            {LOGITECH_FEATURES.map((feature, i) => (
              <Reveal key={feature.id} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <FeatureCard feature={feature} index={i} accentColor="var(--accent)" brand="Logitech" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
