export interface Source {
  id: string;
  title: string;
  href: string;
  note: string;
}

export const SOURCES: Source[] = [
  {
    id: "cmf-bt",
    title: "CMF support — Bluetooth 5.3",
    href: "https://support.cmf.tech/hc/en-us/articles/26407536071185-Which-Bluetooth-version-do-the-CMF-Buds-Pro-2-use",
    note: "Oficiální podpora CMF. Bluetooth 5.3, ne 5.4.",
  },
  {
    id: "cmf-battery",
    title: "CMF support — výdrž baterie",
    href: "https://support.cmf.tech/hc/en-us/articles/26407541866001-How-long-is-the-battery-life-of-CMF-Buds-Pro-2",
    note: "AAC vs. LDAC, ANC on/off. Interní test Nothing při 50 % hlasitosti.",
  },
  {
    id: "cmf-nothing-us",
    title: "Nothing US — CMF Buds Pro 2",
    href: "https://us.nothing.tech/products/cmf-buds-pro-2",
    note: "Produktová stránka: dual driver, 50 dB hybrid ANC (deklarace výrobce), 6 mikrofonů.",
  },
  {
    id: "cmf-home",
    title: "cmf.tech",
    href: "https://cmf.tech/",
    note: "Oficiální značka CMF (Nothing).",
  },
  {
    id: "samsung-newsroom",
    title: "Samsung Newsroom — Galaxy Buds Live specifikace",
    href: "https://news.samsung.com/global/galaxy-watch3-and-galaxy-buds-live-now-available",
    note: "12 mm, BT 5.0, IPX2, 5,6 g, výdrž podle ANC/Bixby, kodeky včetně Samsung Scalable.",
  },
  {
    id: "smarty",
    title: "smarty.cz — Galaxy Buds Live",
    href: "https://www.smarty.cz/Samsung-Galaxy-Buds-Live-cerna-4p56456",
    note: "Referenční obchodní stránka ze zadání.",
  },
];
