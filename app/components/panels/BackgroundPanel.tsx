"use client";

import type { LogoConfig } from "../../page";
import { Check } from "lucide-react";

interface BackgroundPanelProps {
  config: LogoConfig;
  setConfig: React.Dispatch<React.SetStateAction<LogoConfig>>;
}

const bgColors = [
  "#16181f", "#0a0b0f", "#1e293b", "#1f2937", "#0f172a",
  "#18181b", "#ffffff", "#f8fafc", "#fef3c7", "#fce7f3"
];

const presetGradients = [
  { from: "#16181f", to: "#0a0b0f", label: "Midnight" },
  { from: "#1e3a5f", to: "#0a0b0f", label: "Ocean" },
  { from: "#2d1b4e", to: "#0a0b0f", label: "Cosmic" },
  { from: "#1a3332", to: "#0a0b0f", label: "Forest" },
  { from: "#3b1c32", to: "#0a0b0f", label: "Berry" },
  { from: "#3d2914", to: "#0a0b0f", label: "Ember" },
];

export default function BackgroundPanel({ config, setConfig }: BackgroundPanelProps) {
  return (
    <div className="flex flex-col" style={{ gap: "24px" }}>
      {/* Background Type */}
      <div>
        <label className="label" style={{ marginBottom: "8px" }}>Background Type</label>
        <div className="flex" style={{ gap: "8px" }}>
          {["solid", "gradient", "transparent"].map((type) => (
            <button
              key={type}
              className={`btn flex-1 ${config.backgroundType === type ? "btn-primary" : "btn-secondary"}`}
              style={{ padding: "10px", textTransform: "capitalize" }}
              onClick={() => setConfig({ ...config, backgroundType: type as LogoConfig["backgroundType"] })}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Solid Color */}
      {config.backgroundType === "solid" && (
        <div>
          <label className="label" style={{ marginBottom: "12px" }}>Background Color</label>
          <div className="flex flex-wrap" style={{ gap: "8px" }}>
            {bgColors.map((color) => (
              <button
                key={color}
                className={`color-swatch ${config.backgroundColor === color ? "active" : ""}`}
                style={{ backgroundColor: color, border: color === "#ffffff" ? "1px solid var(--color-border)" : "none" }}
                onClick={() => setConfig({ ...config, backgroundColor: color })}
              />
            ))}
            <label
              className="color-swatch flex items-center justify-center cursor-pointer"
              style={{ 
                background: "conic-gradient(red, yellow, lime, aqua, blue, magenta, red)",
                position: "relative"
              }}
            >
              <input
                type="color"
                value={config.backgroundColor}
                onChange={(e) => setConfig({ ...config, backgroundColor: e.target.value })}
                style={{ 
                  position: "absolute",
                  opacity: 0,
                  width: "100%",
                  height: "100%",
                  cursor: "pointer"
                }}
              />
            </label>
          </div>
        </div>
      )}

      {/* Gradient */}
      {config.backgroundType === "gradient" && (
        <>
          <div>
            <label className="label" style={{ marginBottom: "12px" }}>Preset Gradients</label>
            <div 
              style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(3, 1fr)", 
                gap: "8px" 
              }}
            >
              {presetGradients.map((gradient) => (
                <button
                  key={gradient.label}
                  className="relative"
                  style={{ 
                    height: "48px",
                    borderRadius: "10px",
                    background: `linear-gradient(135deg, ${gradient.from} 0%, ${gradient.to} 100%)`,
                    border: config.gradientFrom === gradient.from && config.gradientTo === gradient.to 
                      ? "2px solid var(--color-accent)" 
                      : "2px solid transparent",
                    cursor: "pointer",
                    transition: "all 0.2s"
                  }}
                  onClick={() => setConfig({ 
                    ...config, 
                    gradientFrom: gradient.from, 
                    gradientTo: gradient.to 
                  })}
                >
                  {config.gradientFrom === gradient.from && config.gradientTo === gradient.to && (
                    <div 
                      className="absolute flex items-center justify-center"
                      style={{ 
                        top: "4px", 
                        right: "4px",
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        background: "var(--color-accent)"
                      }}
                    >
                      <Check size={12} color="#0a0b0f" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Custom gradient colors */}
          <div className="flex" style={{ gap: "12px" }}>
            <div style={{ flex: 1 }}>
              <label className="label" style={{ marginBottom: "8px" }}>From</label>
              <div className="flex items-center" style={{ gap: "8px" }}>
                <input
                  type="color"
                  value={config.gradientFrom}
                  onChange={(e) => setConfig({ ...config, gradientFrom: e.target.value })}
                  style={{ 
                    width: "40px", 
                    height: "40px", 
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer"
                  }}
                />
                <input
                  type="text"
                  className="input"
                  style={{ padding: "10px 12px" }}
                  value={config.gradientFrom}
                  onChange={(e) => setConfig({ ...config, gradientFrom: e.target.value })}
                />
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <label className="label" style={{ marginBottom: "8px" }}>To</label>
              <div className="flex items-center" style={{ gap: "8px" }}>
                <input
                  type="color"
                  value={config.gradientTo}
                  onChange={(e) => setConfig({ ...config, gradientTo: e.target.value })}
                  style={{ 
                    width: "40px", 
                    height: "40px", 
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer"
                  }}
                />
                <input
                  type="text"
                  className="input"
                  style={{ padding: "10px 12px" }}
                  value={config.gradientTo}
                  onChange={(e) => setConfig({ ...config, gradientTo: e.target.value })}
                />
              </div>
            </div>
          </div>

          {/* Gradient Angle */}
          <div>
            <div className="flex items-center justify-between" style={{ marginBottom: "8px" }}>
              <label className="label">Gradient Angle</label>
              <span style={{ fontSize: "13px", color: "var(--color-foreground)" }}>{config.gradientAngle}°</span>
            </div>
            <input
              type="range"
              className="slider"
              min="0"
              max="360"
              value={config.gradientAngle}
              onChange={(e) => setConfig({ ...config, gradientAngle: parseInt(e.target.value) })}
            />
          </div>
        </>
      )}

      {/* Transparent info */}
      {config.backgroundType === "transparent" && (
        <div 
          className="card"
          style={{ 
            padding: "16px",
            background: "var(--color-accent-light)",
            border: "1px solid var(--color-accent)"
          }}
        >
          <p style={{ fontSize: "13px", color: "var(--color-accent)", lineHeight: "1.5" }}>
            Transparent background will export as PNG with alpha channel. Perfect for placing your logo on any background.
          </p>
        </div>
      )}
    </div>
  );
}

