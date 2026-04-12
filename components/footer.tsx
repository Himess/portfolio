import { profile } from "@/lib/profile";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-24">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-10 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="link-underline hover:text-[var(--foreground)] transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.links.twitter}
            target="_blank"
            rel="noreferrer"
            className="link-underline hover:text-[var(--foreground)] transition-colors"
          >
            X
          </a>
          <a
            href={profile.links.email}
            className="link-underline hover:text-[var(--foreground)] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
