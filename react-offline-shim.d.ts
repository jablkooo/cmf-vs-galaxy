// Pouze pro offline typecheck v prostředí bez @types/react (síť vypnutá).
// Na stroji s npm install se použije skutečné @types/react a tenhle soubor se ignoruje:
// tsconfig.offline.json ho zahrnuje, tsconfig.json ne.
declare module "react" {
  export type ReactNode = any;
  export type CSSProperties = Record<string, string | number | undefined>;
  export type ElementType = any;
  export type Ref<T> = any;
  export type PointerEvent<T = Element> = any;
  export type KeyboardEvent<T = Element> = any;
  export type ChangeEvent<T = Element> = any;
  export type MouseEvent<T = Element> = any;
  export function useState<S>(init: S | (() => S)): [S, (v: S | ((p: S) => S)) => void];
  export function useEffect(fn: () => void | (() => void), deps?: readonly unknown[]): void;
  export function useLayoutEffect(fn: () => void | (() => void), deps?: readonly unknown[]): void;
  export function useRef<T>(init: T | null): { current: T | null };
  export function useMemo<T>(fn: () => T, deps: readonly unknown[]): T;
  export function useCallback<T extends (...a: any[]) => any>(fn: T, deps: readonly unknown[]): T;
  export function useId(): string;
  export const Fragment: any;
  const React: any;
  export default React;
}
declare module "react/jsx-runtime" {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}
declare module "react-dom/client" {
  export function createRoot(el: Element | DocumentFragment): { render(node: any): void };
}
declare namespace JSX {
  interface IntrinsicElements {
    [name: string]: any;
  }
  type Element = any;
}