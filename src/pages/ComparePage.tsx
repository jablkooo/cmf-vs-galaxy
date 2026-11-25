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
            desc="Tři produkty, tři filosofie. Zelená značka = objektivní výhoda (výdrž, IP, verze, latence). Ne „lepší zvuk“ – to záleží na vás."
          />
        </Reveal>
        <Reveal>
          <div style={{ overflowX: "auto" }}>
            <table className="compare-table" style={{ minWidth: 800 }}>
              <thead>
                <tr>
                  <th>Parametr</th>
                  <th>CMF Buds Pro 2</th>
                  <th>Galaxy Buds Live</th>
                  <th>Logitech G Pro X Wireless</th>
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
                      {spec.samsungBetter === true ? <span className="winner">· </span> : null}
                      {spec.samsung}
                    </td>
                    <td>
                      {spec.logitechBetter === true ? <span className="winner">· </span> : null}
                      {spec.logitech}
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
