import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import Fade from "@/components/fade";
import ProjectCard from "@/components/project-card";
import { featuredProjects } from "@/lib/projects";
import { profile } from "@/lib/profile";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-24">
      <Fade as="section" className="flex items-start gap-6">
        <Image
          src={profile.avatar}
          alt={profile.name}
          width={72}
          height={72}
          className="h-16 w-16 rounded-full border border-[var(--border)]"
          priority
          unoptimized
        />
        <div className="flex-1">
          <h1 className="text-xl font-medium text-[var(--foreground)]">
            {profile.name}
          </h1>
          <p className="mt-1 text-sm text-[var(--muted)]">
            {profile.role}. Based in {profile.location}.
          </p>
        </div>
      </Fade>

      <Fade as="section" delay={0.08} className="mt-10 max-w-xl">
        <p className="text-[15px] leading-relaxed text-[var(--foreground)]">
          {profile.bio}
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-[var(--muted)]">
          {profile.longBio}
        </p>
      </Fade>

      <Fade as="section" delay={0.16} className="mt-6 flex flex-wrap gap-4 text-sm">
        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
        >
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.77 1.06.77 2.14v3.17c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
          </svg>
          <span className="link-underline">GitHub</span>
        </a>
        <a
          href={profile.links.twitter}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
        >
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span className="link-underline">@Himess__</span>
        </a>
        <a
          href={profile.links.email}
          className="inline-flex items-center gap-1.5 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
        >
          <Mail className="h-3.5 w-3.5" strokeWidth={1.5} />
          <span className="link-underline">{profile.email}</span>
        </a>
      </Fade>

      <Fade as="section" delay={0.24} className="mt-20">
        <div className="flex items-baseline justify-between">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
            Featured Work
          </h2>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            All projects
            <ArrowRight className="h-3 w-3" strokeWidth={1.5} />
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <Fade key={project.slug} delay={0.28 + i * 0.04}>
              <ProjectCard project={project} />
            </Fade>
          ))}
        </div>
      </Fade>
    </div>
  );
}
