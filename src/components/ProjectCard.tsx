import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "../types";
import { Tag } from "../ui/Tag";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-gold/10 bg-surface transition-shadow hover:border-gold/30 hover:shadow-gold"
    >
      <div className="aspect-[4/3] overflow-hidden bg-bg">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-mono text-lg font-bold text-content">
            {project.title}
          </h3>
          <span className="font-mono text-xs text-muted">{project.year}</span>
        </div>

        <p className="mt-3 leading-relaxed text-muted">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-5 pt-5">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 font-mono text-sm text-gold transition-colors hover:text-gold-bright"
            >
              <ExternalLink size={15} />
              Live
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-gold"
            >
              <Github size={15} />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
