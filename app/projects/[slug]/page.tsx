import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Trophy } from "lucide-react";
import Fade from "@/components/fade";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.summary,
    openGraph: {
      title: `${project.name} — ${project.tagline}`,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="mx-auto w-full max-w-4xl px-6 py-16 sm:py-20">
      <Fade>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
          All projects
        </Link>
      </Fade>

      <Fade delay={0.06}>
        <header className="mt-10 border-b border-[var(--border)] pb-10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)] border border-[var(--border)] px-1.5 py-0.5">
              {project.status}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
              {project.year}
            </span>
          </div>
          <h1 className="mt-4 text-3xl font-medium tracking-tight text-[var(--foreground)]">
            {project.name}
          </h1>
          <p className="mt-2 text-lg text-[var(--muted)]">{project.tagline}</p>

          {project.award &&
            (project.awardLink ? (
              <a
                href={project.awardLink}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 border border-amber-500/30 bg-amber-500/5 px-3 py-1.5 transition-colors hover:border-amber-500/60"
              >
                <Trophy className="h-3.5 w-3.5 text-amber-400" strokeWidth={1.5} />
                <span className="font-mono text-[11px] uppercase tracking-wider text-amber-300">
                  {project.award}
                </span>
                <ArrowUpRight className="h-3 w-3 text-amber-400" strokeWidth={1.5} />
              </a>
            ) : (
              <div className="mt-5 inline-flex items-center gap-2 border border-amber-500/30 bg-amber-500/5 px-3 py-1.5">
                <Trophy className="h-3.5 w-3.5 text-amber-400" strokeWidth={1.5} />
                <span className="font-mono text-[11px] uppercase tracking-wider text-amber-300">
                  {project.award}
                </span>
              </div>
            ))}

          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.site && (
              <a
                href={project.links.site}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--foreground)] hover:border-[var(--accent)] transition-colors"
              >
                Live site
                <ArrowUpRight className="h-3 w-3" strokeWidth={1.5} />
              </a>
            )}
            {project.links.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--foreground)] hover:border-[var(--accent)] transition-colors"
              >
                Repository
                <ArrowUpRight className="h-3 w-3" strokeWidth={1.5} />
              </a>
            )}
            {project.links.video && (
              <a
                href={project.links.video}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--foreground)] hover:border-[var(--accent)] transition-colors"
              >
                Demo video
                <ArrowUpRight className="h-3 w-3" strokeWidth={1.5} />
              </a>
            )}
            {project.links.docs && (
              <a
                href={project.links.docs}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--foreground)] hover:border-[var(--accent)] transition-colors"
              >
                {/deck|slides/.test(project.links.docs) ? "Deck" : "Docs"}
                <ArrowUpRight className="h-3 w-3" strokeWidth={1.5} />
              </a>
            )}
          </div>
        </header>
      </Fade>

      <Fade delay={0.12}>
        <section className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              Stack
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-[var(--foreground)]">
              {project.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div className="sm:col-span-2">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              Highlights
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-[var(--foreground)]">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="text-[var(--muted)]">·</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Fade>

      <Fade delay={0.18}>
        <section className="mt-14 space-y-10">
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              Problem
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--foreground)]">
              {project.problem}
            </p>
          </div>
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              Approach
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--foreground)]">
              {project.approach}
            </p>
          </div>
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              Outcome
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--foreground)]">
              {project.outcome}
            </p>
          </div>
        </section>
      </Fade>
    </article>
  );
}
