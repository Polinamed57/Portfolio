import { Github, Linkedin, Mail, FileText } from "lucide-react";
import type { SocialKind } from "../types";
import { profile } from "../data/profile";
import { AnimatedSection } from "../ui/AnimatedSection";
import { SectionHeading } from "../ui/SectionHeading";

const iconFor: Record<SocialKind, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
};

export function Contact() {
  return (
    <AnimatedSection id="contact" className="text-center">
      <SectionHeading index="05" title="Get in touch" />

      <p className="mx-auto max-w-xl text-balance text-lg leading-relaxed text-muted">
        I'm open to new opportunities and collaborations. If you'd like to work
        together or just say hi, my inbox is always open.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full bg-gold px-6 py-3 font-mono text-sm font-medium text-bg transition-colors hover:bg-gold-bright"
        >
          Say hello
        </a>
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 font-mono text-sm text-gold transition-colors hover:bg-gold/10"
        >
          <FileText size={16} />
          Download CV
        </a>
      </div>

      <div className="mt-12 flex items-center justify-center gap-8">
        {profile.socials.map((social) => {
          const Icon = iconFor[social.kind];
          return (
            <a
              key={social.kind}
              href={social.href}
              target={social.kind === "email" ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={social.label}
              className="text-muted transition-colors hover:text-gold"
            >
              <Icon size={22} />
            </a>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
