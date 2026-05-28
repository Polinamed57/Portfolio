import type { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
}

export function Tag({ children }: TagProps) {
  return (
    <span className="rounded-full border border-gold/20 bg-gold/5 px-3 py-1 font-mono text-xs text-gold">
      {children}
    </span>
  );
}
