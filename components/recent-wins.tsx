import Link from "next/link";
import { ArrowRight, ArrowUpRight, Trophy } from "lucide-react";
import { projects } from "@/lib/projects";

export default function RecentWins() {
  return (
    <section aria-labelledby="recent-wins-heading">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h2 id="recent-wins-heading" className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
          Recent wins
        </h2>
        <p className="text-xs text-[var(--muted)]">Privacy protocols. Thoughtful agents.</p>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {projects.filter((project) => project.recognition).map((project) => (
          <article key={project.slug} className="flex flex-col border border-amber-500/25 bg-amber-500/[0.035] p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-amber-300">
                <Trophy aria-hidden="true" className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                {project.recognition!.result}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
                {project.recognition!.date}
              </span>
            </div>
            <h3 className="mt-5 text-xl font-medium tracking-tight">
              <Link href={`/projects/${project.slug}`} className="link-underline">{project.name}</Link>
            </h3>
            <p className="mt-2 text-sm text-amber-200/80">{project.recognition!.note}</p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{project.tagline}.</p>
            <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-6 text-xs">
              <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-1.5 link-underline">
                Explore project <ArrowRight aria-hidden="true" className="h-3 w-3" />
              </Link>
              <a href={project.awardLink} target="_blank" rel="noreferrer" aria-label={`Winner announcement for ${project.name}`} className="inline-flex items-center gap-1.5 text-[var(--muted)] hover:text-amber-300 transition-colors">
                Winner announcement <ArrowUpRight aria-hidden="true" className="h-3 w-3" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
