import { useState, useEffect, useRef, useCallback, type ReactNode, type JSX } from "react";

// ── Scroll reveal hook ────────────────────────────────────
export function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

// ── Theme hook ────────────────────────────────────────────
export function useTheme() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") return stored;
    } catch {}
    return "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch {}
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme(t => (t === "dark" ? "light" : "dark"));
  }, []);

  return { theme, toggle };
}

// ── Scroll progress hook ──────────────────────────────────
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      setProgress(scrollTop / (scrollHeight - clientHeight) || 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return progress;
}

// ── Active section hook ───────────────────────────────────
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

// ── Segmented bar component ───────────────────────────────
interface SegBarProps {
  value: number;   // 0–10
  max?: number;
  variant?: "default" | "accent" | "success" | "warning" | "blue";
  segments?: number;
}

export function SegBar({ value, max = 10, variant = "default", segments = 10 }: SegBarProps) {
  const filled = Math.round((value / max) * segments);
  const cls =
    variant === "accent" ? "filled-accent" :
    variant === "success" ? "filled-success" :
    variant === "warning" ? "filled-warning" :
    variant === "blue" ? "filled-blue" :
    "filled";

  return (
    <div className="seg-bar" role="meter" aria-valuenow={value} aria-valuemax={max}>
      {Array.from({ length: segments }).map((_, i) => (
        <div
          key={i}
          className={`seg-bar-segment ${i < filled ? cls : ""}`}
          style={variant === "blue" && i < filled ? { background: "var(--interactive)" } : undefined}
        />
      ))}
    </div>
  );
}

// ── Reveal wrapper ────────────────────────────────────────
interface RevealProps {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function Reveal({ children, delay = 0, className = "", as: Tag = "div" }: RevealProps) {
  const { ref, visible } = useReveal();
  const cls = [
    "reveal",
    visible ? "visible" : "",
    delay > 0 ? `reveal-delay-${delay}` : "",
    className,
  ].filter(Boolean).join(" ");

  return (
    // @ts-ignore dynamic tag
    <Tag ref={ref} className={cls}>
      {children}
    </Tag>
  );
}
