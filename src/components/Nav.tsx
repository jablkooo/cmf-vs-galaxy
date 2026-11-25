import { useEffect, useState } from "react";
import { useTheme, useScrollProgress } from "../hooks";
import { NAV_ROUTES, ROUTES } from "../lib/routes";
import { usePath } from "../lib/router";
import { Link } from "./Link";

export function Nav() {
  const { theme, toggle } = useTheme();
  const progress = useScrollProgress();
  const path = usePath();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [path]);

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress * 100}%` }} aria-hidden="true" />

      <nav className="nav" role="navigation" aria-label="Hlavní navigace">
        <div className="nav-inner">
          <Link to="/" className="nav-logo">
            CMF × Samsung × Logitech
          </Link>

          <ul className="nav-links" role="list">
            {NAV_ROUTES.map(link => (
              <li key={link.path}>
                <Link to={link.path} className={path === link.path ? "active" : ""}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button
              className="theme-toggle"
              onClick={toggle}
              aria-label={`Přepnout na ${theme === "dark" ? "světlý" : "tmavý"} režim`}
            >
              {theme === "dark" ? "Light" : "Dark"}
            </button>
            <button
              className="nav-hamburger"
              onClick={() => setMobileOpen(o => !o)}
              aria-label={mobileOpen ? "Zavřít menu" : "Otevřít menu"}
              aria-expanded={mobileOpen}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                {mobileOpen ? (
                  <>
                    <line x1="3" y1="3" x2="17" y2="17" />
                    <line x1="17" y1="3" x2="3" y2="17" />
                  </>
                ) : (
                  <>
                    <line x1="2" y1="5" x2="18" y2="5" />
                    <line x1="2" y1="10" x2="18" y2="10" />
                    <line x1="2" y1="15" x2="18" y2="15" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-nav ${mobileOpen ? "open" : ""}`} role="dialog" aria-label="Mobilní navigace">
        {ROUTES.map(link => (
          <Link key={link.path} to={link.path} onClick={() => setMobileOpen(false)}>
            {link.label}
          </Link>
        ))}
        <button className="theme-toggle" onClick={toggle} style={{ marginTop: "auto", alignSelf: "flex-start" }}>
          {theme === "dark" ? "Light mode" : "Dark mode"}
        </button>
      </div>
    </>
  );
}
