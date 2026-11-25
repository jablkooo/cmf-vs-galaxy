export interface RouteDef {
  path: string;
  label: string;
  title: string;
  eyebrow: string;
  desc: string;
  nav?: boolean;
}
export const ROUTES: RouteDef[] = [
  {
    path: "/",
    label: "Úvod",
    title: "The Sound Experience",
    eyebrow: "01 · Hero",
    desc: "Tři modely, tři filozofie. Mapa celého průvodce.",
    nav: true,
  },
  {
    path: "/cmf",
    label: "CMF",
    title: "CMF Buds Pro 2",
    eyebrow: "02 · Produkt",
    desc: "Uzavřená konstrukce, dual driver, ANC a Smart Dial.",
    nav: true,
  },
  {
    path: "/samsung",
    label: "Samsung",
    title: "Galaxy Buds Live",
    eyebrow: "03 · Produkt",
    desc: "Bean design, otevřenější usazení a jiný pocit z hudby.",
    nav: true,
  },
  {
    path: "/logitech",
    label: "Logitech",
    title: "G Pro X Wireless",
    eyebrow: "04 · Produkt",
    desc: "Gaming headset: LIGHTSPEED, Blue VO!CE, DTS:X 2.0.",
    nav: true,
  },
  {
    path: "/sound",
    label: "Zvuk",
    title: "Sound Comparison",
    eyebrow: "05 · Poslech",
    desc: "Basy, vokály, výšky, žánry a gaming — bez falešného vítěze.",
    nav: true,
  },
  {
    path: "/music",
    label: "Hudba",
    title: "Made for Music Creators",
    eyebrow: "06 · FL Studio",
    desc: "Kick vs. bas, vokály a limity Bluetooth při tvorbě.",
    nav: true,
  },
  {
    path: "/features",
    label: "Funkce",
    title: "Hidden Features",
    eyebrow: "07 · CMF",
    desc: "Smart Dial, Dirac, LDAC a další — včetně toho, co má Samsung i Logitech.",
    nav: true,
  },
  {
    path: "/facts",
    label: "Fakta",
    title: "Did You Know?",
    eyebrow: "08 · Zajímavosti",
    desc: "Čísla s vysvětlením, ne jen technické údaje.",
    nav: false,
  },
  {
    path: "/difference",
    label: "Rozdíly",
    title: "What Makes Them Different?",
    eyebrow: "09 · Funkce vedle sebe",
    desc: "Co má CMF navíc, co nabízí Samsung, co Logitech, co je společné.",
    nav: false,
  },
  {
    path: "/hear",
    label: "Poslech",
    title: "What Will You Hear Differently?",
    eyebrow: "10 · Charakter",
    desc: "Proč stejná skladba na všech třech modelech zní jinak.",
    nav: false,
  },
  {
    path: "/compare",
    label: "Tabulka",
    title: "Porovnávací tabulka",
    eyebrow: "11 · Parametry",
    desc: "Konstrukce, kodeky, výdrž, ANC, latence — s poznámkami.",
    nav: true,
  },
  {
    path: "/recommend",
    label: "Pro koho?",
    title: "How do you listen?",
    eyebrow: "12 · Doporučení",
    desc: "Vyber priority. Doporučení se skládá z vlastností, ne z brandu.",
    nav: true,
  },
  {
    path: "/verdict",
    label: "Závěr",
    title: "The Final Call",
    eyebrow: "13 · Rozhodnutí",
    desc: "Pro koho který model, kompromisy a zdroje.",
    nav: false,
  },
];
export const NAV_ROUTES = ROUTES.filter(r => r.nav);
export function routeByPath(path: string): RouteDef | undefined {
  return ROUTES.find(r => r.path === path);
}
export function neighbors(path: string): { prev?: RouteDef; next?: RouteDef } {
  const i = ROUTES.findIndex(r => r.path === path);
  if (i < 0) return {};
  return { prev: ROUTES[i - 1], next: ROUTES[i + 1] };
}