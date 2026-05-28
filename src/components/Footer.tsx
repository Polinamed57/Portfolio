import { ArrowUp } from "lucide-react";
import { profile } from "../data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/10">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row md:px-10">
        <p className="font-mono text-xs text-muted">
          © {year} {profile.name}
        </p>

        <div className="flex items-center gap-6">
          {profile.socials.map((social) => (
            <a
              key={social.kind}
              href={social.href}
              target={social.kind === "email" ? undefined : "_blank"}
              rel="noreferrer"
              className="font-mono text-xs text-muted transition-colors hover:text-gold"
            >
              {social.label}
            </a>
          ))}
        </div>

        <a
          href="#hero"
          className="flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-gold"
        >
          Back to top
          <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
}
