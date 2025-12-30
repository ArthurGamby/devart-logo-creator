"use client";

import { CheckCircle, XCircle, X } from "lucide-react";

interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

export default function Toast({ message, type, onClose }: ToastProps) {
  return (
    <div
      className="toast animate-slide-up"
      style={{
        padding: "12px 16px",
        gap: "10px",
        background: type === "success" ? "var(--color-success-bg)" : "var(--color-danger-bg)",
        borderColor: type === "success" ? "var(--color-success)" : "var(--color-danger)",
      }}
    >
      {type === "success" ? (
        <CheckCircle size={18} style={{ color: "var(--color-success)" }} />
      ) : (
        <XCircle size={18} style={{ color: "var(--color-danger)" }} />
      )}
      <span
        style={{
          fontSize: "14px",
          fontWeight: "500",
          color: type === "success" ? "var(--color-success)" : "var(--color-danger)",
        }}
      >
        {message}
      </span>
      <button
        className="btn btn-ghost"
        style={{ padding: "4px", marginLeft: "8px" }}
        onClick={onClose}
      >
        <X size={16} style={{ color: type === "success" ? "var(--color-success)" : "var(--color-danger)" }} />
      </button>
    </div>
  );
}

