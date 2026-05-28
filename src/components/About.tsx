import { profile } from "../data/profile";
import { AnimatedSection } from "../ui/AnimatedSection";
import { SectionHeading } from "../ui/SectionHeading";

export function About() {
  return (
    <AnimatedSection id="about">
      <SectionHeading index="01" title="About me" />

      <div className="grid gap-10 md:grid-cols-[1fr_280px] md:gap-16">
        <div className="space-y-4 text-lg leading-relaxed text-muted">
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        <div className="relative mx-auto aspect-[3/4] w-48 md:w-64">
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-lg border border-gold/40" />
          <img
            src={profile.photoUrl}
            alt={profile.name}
            className="relative h-full w-full rounded-lg object-cover object-top sepia transition-all duration-500 hover:sepia-0"
          />
        </div>
      </div>
    </AnimatedSection>
  );
}
