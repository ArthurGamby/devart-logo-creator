"use client";

import { useState } from "react";

export default function ReleaseCard() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className="
        fixed bottom-4 left-4 z-50 w-72
        bg-[#1a1a2e] border border-white/10 rounded-xl p-4
        shadow-lg
        transition-all duration-200 hover:border-white/25 hover:shadow-xl hover:-translate-y-0.5
      "
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
          Nouveau
        </span>
        <button
          onClick={() => setVisible(false)}
          aria-label="Fermer"
          className="text-white/30 hover:text-white/70 transition-colors text-lg leading-none -mt-0.5"
        >
          ×
        </button>
      </div>

      {/* Content */}
      <p className="text-sm font-medium text-white/90 mb-1">
        Prisma 6.19 est disponible
      </p>
      <p className="text-xs text-white/50 mb-3 leading-relaxed">
        Découvrez les dernières améliorations de performances et nouvelles fonctionnalités.
      </p>

      {/* Link */}
      <a
        href="https://www.prisma.io/blog/announcing-prisma-6-19-0"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2"
      >
        Voir la release →
      </a>
    </div>
  );
}
