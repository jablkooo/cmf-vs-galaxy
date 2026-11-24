import { Link } from "../components/Link";

export function NotFoundPage() {
  return (
    <section className="section-gap page-pad">
      <div className="container">
        <p className="text-label c-disabled mb-md">[ 404 ]</p>
        <h1 className="section-title mb-lg">Stránka tu není.</h1>
        <Link to="/" className="btn btn-primary">
          Zpět na úvod
        </Link>
      </div>
    </section>
  );
}
