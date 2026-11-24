import { Reveal } from "../hooks";
import { SPECS } from "../data/data";
import { PageHeader } from "../components/PageHeader";
import { SourcesList } from "../components/SourcesList";

export function ComparePage() {
  return (
    <section className="section-gap page-pad">
      <div className="container">
        <Reveal>
          <PageHeader
            eyebrow="[ PARAMETRY ]"
            title="Porovnávací tabulka"
            desc="Bez falešného celkového skóre. Zelená značka je jen tam, kde je údaj objektivně výhodnější (výdrž, IP, verze BT) — ne „lepší zvuk“."
          />
        </Reveal>
        <Reveal>
          <div style={{ overflowX: "auto" }}>
            <table className="compare-table" style={{ minWidth: 640 }}>
              <thead>
                <tr>
                  <th>Parametr</th>
                  <th>CMF Buds Pro 2</th>
                  <th>Galaxy Buds Live</th>
                  <th>Poznámka</th>
                </tr>
              </thead>
              <tbody>
                {SPECS.map(spec => (
                  <tr key={spec.label}>
                    <td className="row-label">{spec.label}</td>
                    <td>
                      {spec.cmfBetter === true ? <span className="winner">· </span> : null}
                      {spec.cmf}
                    </td>
                    <td>
                      {spec.cmfBetter === false ? <span className="winner">· </span> : null}
                      {spec.samsung}
                    </td>
                    <td className="shared">{spec.note ?? ""}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
        <SourcesList />
      </div>
    </section>
  );
}
