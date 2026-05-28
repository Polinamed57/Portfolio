import { useState } from "react";
import { Menu, X, FileText } from "lucide-react";
import { navItems } from "../data/nav";
import { profile } from "../data/profile";
import { useActiveSection } from "../hooks/useActiveSection";

const sectionIds = navItems.map((item) => item.id);

export function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const activeId = useActiveSection(sectionIds);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/10 bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-content items-center justify-between px-6 md:px-10">
        <a href="#hero" className="font-mono text-lg font-bold text-gold">
          PK
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`font-mono text-sm transition-colors hover:text-gold-bright ${
                  activeId === item.id ? "text-gold" : "text-muted"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 font-mono text-sm text-gold transition-colors hover:bg-gold/10 md:flex"
        >
          <FileText size={15} />
          Resume
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-content md:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <ul className="flex flex-col gap-1 border-t border-gold/10 px-6 py-4 md:hidden">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className={`block py-2 font-mono text-sm ${
                  activeId === item.id ? "text-gold" : "text-muted"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="block py-2 font-mono text-sm text-gold"
            >
              Resume
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
