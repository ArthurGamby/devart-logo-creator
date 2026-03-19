"use client";

import { useState } from "react";
import { X, ExternalLink, Sparkles } from "lucide-react";

export default function ReleaseCard() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="release-card">
      <div className="release-card-header">
        <span className="release-card-tag">
          <Sparkles size={11} />
          Nouveau
        </span>
        <button
          className="btn btn-ghost btn-icon"
          style={{ width: "28px", height: "28px" }}
          onClick={() => setVisible(false)}
          title="Fermer"
          aria-label="Fermer la carte"
        >
          <X size={14} />
        </button>
      </div>

      <p className="release-card-title">Prisma 6.19 est disponible</p>

      <p className="release-card-description">
        Nouvelles fonctionnalités de performance et améliorations du client.
      </p>

      <a
        href="https://www.prisma.io/blog/announcing-prisma-6-19-0"
        target="_blank"
        rel="noopener noreferrer"
        className="release-card-link"
      >
        Voir les nouveautés
        <ExternalLink size={12} />
      </a>
    </div>
  );
}
