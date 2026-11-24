import { Link } from "./Link";
import { neighbors } from "../lib/routes";

export function Pager({ path }: { path: string }) {
  const { prev, next } = neighbors(path);
  if (!prev && !next) return null;

  return (
    <nav className="pager" aria-label="Další kapitoly">
      {prev ? (
        <Link to={prev.path} className="pager-link pager-link-prev">
          <span className="section-eyebrow">← {prev.eyebrow}</span>
          <span className="pager-title">{prev.title}</span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link to={next.path} className="pager-link pager-link-next">
          <span className="section-eyebrow">{next.eyebrow} →</span>
          <span className="pager-title">{next.title}</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
