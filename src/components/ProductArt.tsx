/** Produktové fotky (public/img). Názvy komponent zůstaly, aby se nemusely měnit stránky. */

export function CmfBudArt({ className = "" }: { className?: string }) {
  return (
    <img
      className={className}
      src="/img/cmf-buds-pro-2.png"
      alt="CMF Buds Pro 2 v otevřeném pouzdře"
      width={800}
      height={1297}
      loading="lazy"
      decoding="async"
    />
  );
}

export function LiveBudArt({ className = "" }: { className?: string }) {
  return (
    <img
      className={className}
      src="/img/galaxy-buds-live.webp"
      alt="Samsung Galaxy Buds Live v otevřeném pouzdře"
      width={440}
      height={600}
      loading="lazy"
      decoding="async"
    />
  );
}

export function LogitechArt({ className = "" }: { className?: string }) {
  return (
    <img
      className={className}
      src="/img/logitech-g-pro-x-wireless.webp"
      alt="Logitech G Pro X Wireless headset"
      width={800}
      height={800}
      loading="lazy"
      decoding="async"
    />
  );
}
