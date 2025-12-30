"use client";

import { X, Copy, Link, Twitter, Linkedin } from "lucide-react";
import { useState } from "react";

interface ShareModalProps {
  onClose: () => void;
  onCopyLink: () => void;
}

export default function ShareModal({ onClose, onCopyLink }: ShareModalProps) {
  const [copied, setCopied] = useState(false);
  const shareLink = "https://logomark.app/share/abc123xyz";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shareLink);
    setCopied(true);
    onCopyLink();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal animate-scale-in"
        style={{ width: "440px", padding: "24px" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between" style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "18px", fontWeight: "600" }}>Share Logo</h2>
          <button className="btn btn-ghost btn-icon" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Share Link */}
        <div style={{ marginBottom: "24px" }}>
          <label className="label" style={{ marginBottom: "8px" }}>Share Link</label>
          <div className="flex" style={{ gap: "8px" }}>
            <div 
              className="input flex items-center"
              style={{ 
                padding: "12px 16px",
                flex: 1,
                color: "var(--color-muted)",
                fontSize: "13px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
              }}
            >
              <Link size={16} style={{ marginRight: "10px", flexShrink: 0 }} />
              {shareLink}
            </div>
            <button 
              className="btn btn-primary flex items-center"
              style={{ padding: "12px 16px", gap: "6px" }}
              onClick={handleCopy}
            >
              <Copy size={16} />
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* Social Share */}
        <div>
          <label className="label" style={{ marginBottom: "12px" }}>Share to Social</label>
          <div className="flex" style={{ gap: "8px" }}>
            <button 
              className="btn btn-secondary flex items-center justify-center"
              style={{ flex: 1, padding: "12px", gap: "8px" }}
            >
              <Twitter size={18} />
              Twitter
            </button>
            <button 
              className="btn btn-secondary flex items-center justify-center"
              style={{ flex: 1, padding: "12px", gap: "8px" }}
            >
              <Linkedin size={18} />
              LinkedIn
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-h" style={{ margin: "24px 0" }} />

        {/* Permissions */}
        <div 
          className="card"
          style={{ 
            padding: "16px",
            background: "var(--color-accent-light)",
            border: "1px solid var(--color-accent)"
          }}
        >
          <p style={{ fontSize: "13px", color: "var(--color-accent)", lineHeight: "1.5" }}>
            Anyone with this link can view your logo. They won&apos;t be able to edit it unless you give them access.
          </p>
        </div>
      </div>
    </div>
  );
}

