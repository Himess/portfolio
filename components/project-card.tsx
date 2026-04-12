import Link from "next/link";
import { ArrowUpRight, Trophy } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block border border-[var(--border)] p-6 transition-colors hover:border-[var(--accent)] hover:bg-white/[0.02]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3">
            <h3 className="text-base font-medium text-[var(--foreground)]">
              {project.name}
            </h3>
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)] border border-[var(--border)] px-1.5 py-0.5">
              {project.status}
            </span>
          </div>
          <p className="mt-1 text-sm text-[var(--muted)]">{project.tagline}</p>
        </div>
        <ArrowUpRight
          className="h-4 w-4 text-[var(--muted)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--foreground)]"
          strokeWidth={1.5}
        />
      </div>
      {project.award && (
        <div className="mt-3 inline-flex items-center gap-1.5 border border-amber-500/30 bg-amber-500/5 px-2 py-1">
          <Trophy className="h-3 w-3 text-amber-400" strokeWidth={1.5} />
          <span className="font-mono text-[10px] uppercase tracking-wider text-amber-300">
            {project.award}
          </span>
        </div>
      )}
      <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
        {project.summary}
      </p>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 4).map((s) => (
          <span
            key={s}
            className="font-mono text-[10px] text-[var(--muted)] border border-[var(--border)] px-1.5 py-0.5"
          >
            {s}
          </span>
        ))}
      </div>
    </Link>
  );
}
