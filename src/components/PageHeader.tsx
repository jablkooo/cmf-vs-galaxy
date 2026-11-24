import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: ReactNode;
  desc?: ReactNode;
}) {
  return (
    <header className="section-header">
      <p className="section-eyebrow">{eyebrow}</p>
      <h1 className="section-title">{title}</h1>
      {desc ? <p className="section-desc">{desc}</p> : null}
    </header>
  );
}
