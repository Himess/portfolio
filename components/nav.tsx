import Link from "next/link";
import { profile } from "@/lib/profile";

const items = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-mono text-sm tracking-tight text-[var(--foreground)] hover:text-[var(--muted)] transition-colors"
        >
          {profile.handle.toLowerCase()}
          <span className="text-[var(--muted)]">.dev</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
