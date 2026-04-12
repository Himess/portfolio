import type { Metadata } from "next";
import Fade from "@/components/fade";
import ProjectCard from "@/components/project-card";
import { allProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Every protocol, SDK, and production system I've shipped.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
      <Fade>
        <header>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
            All Projects
          </p>
          <h1 className="mt-3 text-2xl font-medium tracking-tight text-[var(--foreground)]">
            {allProjects.length} projects, one thesis.
          </h1>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[var(--muted)]">
            Privacy and payments belong in the same layer. These are the systems where I have pushed that idea into production.
          </p>
        </header>
      </Fade>

      <Fade delay={0.08} className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {allProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </Fade>
    </div>
  );
}
