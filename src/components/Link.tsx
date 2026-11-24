import type { AnchorHTMLAttributes } from "react";
import { navigate } from "../lib/router";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

export function Link({ to, onClick, children, ...rest }: Props) {
  return (
    <a
      href={to}
      {...rest}
      onClick={e => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        e.preventDefault();
        onClick?.(e);
        navigate(to);
      }}
    >
      {children}
    </a>
  );
}
