import type { Metadata } from "next";
import Image from "next/image";
import Fade from "@/components/fade";
import { profile } from "@/lib/profile";

export const metadata: Metadata = {
  title: "About",
  description: profile.bio,
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-16 sm:py-20">
      <Fade as="section" className="flex items-start gap-6">
        <Image
          src={profile.avatar}
          alt={profile.name}
          width={80}
          height={80}
          className="h-20 w-20 rounded-full border border-[var(--border)]"
          unoptimized
        />
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
            About
          </p>
          <h1 className="mt-2 text-2xl font-medium tracking-tight text-[var(--foreground)]">
            {profile.name}
          </h1>
          <p className="mt-1 text-sm text-[var(--muted)]">{profile.role}</p>
        </div>
      </Fade>

      <Fade as="section" delay={0.08} className="mt-12 max-w-xl space-y-5 text-[15px] leading-relaxed text-[var(--foreground)]">
        <p>{profile.bio}</p>
        <p className="text-[var(--muted)]">{profile.longBio}</p>
        <p className="text-[var(--muted)]">
          I have shipped cross-chain privacy pools, FHE prediction markets, agent-payment protocols, and a treasury app on Canton. Most of that work lives on the Projects page — with the problem, the approach, and the outcome for each.
        </p>
      </Fade>

      <Fade as="section" delay={0.16} className="mt-16">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
          Skills
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {profile.skills.map((group) => (
            <div key={group.group}>
              <p className="text-sm font-medium text-[var(--foreground)]">
                {group.group}
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-[var(--muted)]">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Fade>

      <Fade as="section" delay={0.24} className="mt-16 border-t border-[var(--border)] pt-10">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
          Contact
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-[var(--foreground)] max-w-xl">
          The fastest way to reach me is email or X. I'm open to protocol design, cryptography engineering, and production-grade smart-contract work.
        </p>
        <div className="mt-6 flex flex-wrap gap-5 text-sm">
          <a
            href={profile.links.email}
            className="text-[var(--foreground)] link-underline"
          >
            {profile.email}
          </a>
          <a
            href={profile.links.twitter}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--foreground)] link-underline"
          >
            @Himess__
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--foreground)] link-underline"
          >
            github.com/Himess
          </a>
        </div>
      </Fade>
    </div>
  );
}
