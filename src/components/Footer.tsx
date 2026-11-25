import { ROUTES } from "../lib/routes";
import { Link } from "./Link";
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-label">[ CMF BUDS PRO 2 × SAMSUNG GALAXY BUDS LIVE ]</p>
        <p className="footer-note">
          Interaktivní průvodce. Data z veřejných specifikací a recenzí.
          Web není sponzorovaný žádnou značkou.
        </p>
        <div className="footer-map">
          {ROUTES.map(r => (
            <Link key={r.path} to={r.path} className="footer-map-link">
              {r.label}
            </Link>
          ))}
        </div>
        <div className="flex gap-lg" style={{ flexWrap: "wrap" }}>
          <a href="https://cmf.tech" target="_blank" rel="noopener noreferrer" className="footer-label" style={{ color: "var(--accent)" }}>
            cmf.tech ↗
          </a>
          <a
            href="https://www.smarty.cz/Samsung-Galaxy-Buds-Live-cerna-4p56456"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-label"
            style={{ color: "var(--interactive)" }}
          >
            smarty.cz / Galaxy Buds Live ↗
          </a>
        </div>
      </div>
    </footer>
  );
}