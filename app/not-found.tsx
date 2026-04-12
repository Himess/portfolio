import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-32 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
        404
      </p>
      <h1 className="mt-3 text-2xl font-medium text-[var(--foreground)]">
        Page not found.
      </h1>
      <Link
        href="/"
        className="mt-6 inline-block text-sm text-[var(--muted)] hover:text-[var(--foreground)] link-underline"
      >
        Back home
      </Link>
    </div>
  );
}
