import { useEffect, useState } from "react";

function normalize(pathname: string): string {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "") || "/";
}

export function currentPath(): string {
  return normalize(window.location.pathname);
}

export function navigate(to: string) {
  const path = normalize(to);
  if (path === currentPath()) {
    window.scrollTo(0, 0);
    return;
  }
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo(0, 0);
}

export function usePath(): string {
  const [path, setPath] = useState(currentPath);
  useEffect(() => {
    const sync = () => setPath(currentPath());
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, []);
  return path;
}
