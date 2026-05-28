import { projects } from "../data/projects";
import { AnimatedSection } from "../ui/AnimatedSection";
import { SectionHeading } from "../ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "../ui/Stagger";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <AnimatedSection id="projects">
      <SectionHeading index="03" title="Selected work" />

      <StaggerGroup className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <StaggerItem key={project.title} className="h-full">
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </AnimatedSection>
  );
}
