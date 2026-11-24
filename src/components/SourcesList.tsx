import { SOURCES } from "../data/sources";

export function SourcesList({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "" : "mt-2xl"} style={{ borderTop: "1px solid var(--border)", paddingTop: "var(--space-lg)" }}>
      <p className="text-label c-disabled mb-sm">[ ZDROJE ]</p>
      <ul className="source-list">
        {SOURCES.map(s => (
          <li key={s.id}>
            <a href={s.href} target="_blank" rel="noopener noreferrer">
              {s.title}
            </a>
            <span className="c-disabled"> — {s.note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
