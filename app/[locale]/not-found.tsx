import Link from "next/link";

/** Localized 404. Kept copy minimal and bilingual-neutral. */
export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm tracking-[0.2em] text-teal">404</p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-ink">
        Nie znaleziono strony / Page not found
      </h1>
      <div className="mt-6 flex gap-3">
        <Link href="/pl" className="btn-primary">
          Strona główna
        </Link>
        <Link href="/en" className="btn-secondary">
          Home
        </Link>
      </div>
    </div>
  );
}
