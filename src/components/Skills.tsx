import { skillGroups } from "../data/skills";
import { AnimatedSection } from "../ui/AnimatedSection";
import { SectionHeading } from "../ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "../ui/Stagger";
import { Tag } from "../ui/Tag";

export function Skills() {
  return (
    <AnimatedSection id="skills">
      <SectionHeading index="02" title="Skills" />

      <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <StaggerItem
            key={group.category}
            className="h-full rounded-lg border border-gold/10 bg-surface p-6"
          >
            <h3 className="mb-4 font-mono text-sm font-medium text-content">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </AnimatedSection>
  );
}
