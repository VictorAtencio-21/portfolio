"use client";

import { useTranslations } from "next-intl";

interface ProjectHighlight {
  id: string;
  name: string;
  tagline: string;
  description: string;
  highlights?: string[];
  url?: string | null;
}

const Projects = () => {
  const t = useTranslations("projects");
  const projectsRaw = t.raw("items");
  const projects = Array.isArray(projectsRaw)
    ? (projectsRaw as ProjectHighlight[])
    : [];

  return (
    <div className="w-full flex flex-col gap-8">
      <header className="flex flex-col gap-3 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white">
          {t("title")}
        </h2>
        <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto md:mx-0">
          {t("subtitle")}
        </p>
      </header>

      <div className="grid gap-6 lg:gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 dark:bg-white/5"
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
                {project.tagline}
              </span>
              <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {project.highlights?.length ? (
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="mt-auto pt-6">
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:border-sky-400 hover:text-sky-300"
                >
                  {t("visitProject")}
                  <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <span className="inline-flex items-center rounded-full border border-dashed border-white/10 px-4 py-2 text-sm font-medium text-gray-400">
                  {t("comingSoon")}
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
