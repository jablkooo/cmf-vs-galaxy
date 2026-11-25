import { Reveal } from "../hooks";
import { ROUTES } from "../lib/routes";
import { Link } from "../components/Link";
import { CmfBudArt, LiveBudArt, LogitechArt } from "../components/ProductArt";

export function HomePage() {
  const chapters = ROUTES.filter(r => r.path !== "/");

  return (
    <>
      <section className="dot-grid-subtle" style={{ background: "var(--black)" }}>
        <div className="hero">
          <Reveal>
            <p className="hero-eyebrow">[ INTERAKTIVNÍ PRŮVODCE · TŘI MODELY ]</p>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="hero-headline font-doto">
              Three ways.
              <br />
              Three different
              <br />
              philosophies of
              <br />
              listening.
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="hero-sub">
              Discover what makes CMF Buds Pro 2, Galaxy Buds Live, and Logitech G Pro X Wireless different.
              Osobní průvodce pro hudbu, cestování, gaming i beaty ve FL Studiu — ne recenze studia.
            </p>
          </Reveal>

          <Reveal delay={2}>
            <div className="flex gap-md" style={{ flexWrap: "wrap" }}>
              <Link to="/cmf" className="btn btn-primary">
                Prozkoumat CMF
              </Link>
              <Link to="/samsung" className="btn btn-secondary">
                Galaxy Buds Live
              </Link>
              <Link to="/logitech" className="btn btn-secondary" style={{ background: "var(--accent)", color: "var(--black)" }}>
                Logitech G Pro X
              </Link>
              <Link to="/compare" className="btn btn-ghost">
                Rovnou k tabulce
              </Link>
            </div>
          </Reveal>

          <Reveal delay={3}>
            <div className="hero-art-row">
              <Link to="/cmf" className="hero-art-card">
                <CmfBudArt className="product-art product-art-sm" />
                <span className="text-label">CMF · dual driver</span>
              </Link>
              <Link to="/samsung" className="hero-art-card">
                <LiveBudArt className="product-art product-art-sm" />
                <span className="text-label" style={{ color: "var(--interactive)" }}>Live · open bean</span>
              </Link>
              <Link to="/logitech" className="hero-art-card">
                <LogitechArt className="product-art product-art-sm" />
                <span className="text-label" style={{ color: "var(--accent)" }}>Logi · LIGHTSPEED</span>
              </Link>
            </div>
          </Reveal>

          <Reveal delay={4}>
            <div className="hero-stat-strip">
              {[
                { val: "13", lbl: "Kapitol webu" },
                { val: "3", lbl: "Filozofie poslechu" },
                { val: "43 h", lbl: "CMF AAC, ANC off (výrobce)" },
                { val: "29 h", lbl: "Live ANC off (výrobce)" },
                { val: "21 h", lbl: "Logi LIGHTSPEED (test)" },
              ].map(item => (
                <div key={item.lbl}>
                  <div className="font-mono c-display hero-stat-val">{item.val}</div>
                  <div className="text-label c-secondary" style={{ marginTop: 4 }}>
                    {item.lbl}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-gap" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <Reveal>
            <div className="section-header">
              <p className="section-eyebrow">[ MAPA PRŮVODCE ]</p>
              <h2 className="section-title">Každá kapitola zvlášť.</h2>
              <p className="section-desc">
                Nic není naskládané do jedné stránky. Procházej postupně, nebo skoč přímo tam,
                co tě zajímá.
              </p>
            </div>
          </Reveal>

          <ol className="chapter-list">
            {chapters.map((ch, i) => (
              <li key={ch.path}>
                <Link to={ch.path} className="chapter-row">
                  <span className="chapter-num font-mono">{String(i + 2).padStart(2, "0")}</span>
                  <span className="chapter-body">
                    <span className="chapter-title">{ch.title}</span>
                    <span className="chapter-desc">{ch.desc}</span>
                  </span>
                  <span className="text-label c-disabled chapter-go">[ OPEN ]</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
