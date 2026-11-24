import { useEffect } from "react";
import "./styles.css";

import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Pager } from "./components/Pager";
import { usePath } from "./lib/router";
import { routeByPath } from "./lib/routes";

import { HomePage } from "./pages/HomePage";
import { CmfPage } from "./pages/CmfPage";
import { SamsungPage } from "./pages/SamsungPage";
import { SoundPage } from "./pages/SoundPage";
import { MusicPage } from "./pages/MusicPage";
import { FeaturesPage } from "./pages/FeaturesPage";
import { FactsPage } from "./pages/FactsPage";
import { DifferencePage } from "./pages/DifferencePage";
import { HearPage } from "./pages/HearPage";
import { ComparePage } from "./pages/ComparePage";
import { RecommendPage } from "./pages/RecommendPage";
import { VerdictPage } from "./pages/VerdictPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function Page() {
  const path = usePath();

  switch (path) {
    case "/":
      return <HomePage />;
    case "/cmf":
      return <CmfPage />;
    case "/samsung":
      return <SamsungPage />;
    case "/sound":
      return <SoundPage />;
    case "/music":
      return <MusicPage />;
    case "/features":
      return <FeaturesPage />;
    case "/facts":
      return <FactsPage />;
    case "/difference":
      return <DifferencePage />;
    case "/hear":
      return <HearPage />;
    case "/compare":
      return <ComparePage />;
    case "/recommend":
      return <RecommendPage />;
    case "/verdict":
      return <VerdictPage />;
    default:
      return <NotFoundPage />;
  }
}

export default function App() {
  const path = usePath();
  const meta = routeByPath(path);

  useEffect(() => {
    const base = "CMF Buds Pro 2 vs. Galaxy Buds Live";
    document.title = meta ? `${meta.title} · ${base}` : `404 · ${base}`;
  }, [meta]);

  return (
    <>
      <a className="skip-link" href="#main">
        Přeskočit na obsah
      </a>
      <Nav />
      <main id="main">
        <Page />
        {path !== "/" && routeByPath(path) ? <Pager path={path} /> : null}
      </main>
      <Footer />
    </>
  );
}
