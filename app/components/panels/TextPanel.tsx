"use client";

import type { LogoConfig } from "../../page";

interface TextPanelProps {
  config: LogoConfig;
  setConfig: React.Dispatch<React.SetStateAction<LogoConfig>>;
}

const fonts = [
  "Sora", "Inter", "Poppins", "Montserrat", "Playfair Display", 
  "Space Grotesk", "DM Sans", "Outfit", "Plus Jakarta Sans"
];

const weights = [
  { value: "300", label: "Light" },
  { value: "400", label: "Regular" },
  { value: "500", label: "Medium" },
  { value: "600", label: "Semibold" },
  { value: "700", label: "Bold" },
];

const textColors = [
  "#e8eaed", "#ffffff", "#9ca3af", "#00d4aa", "#7c3aed",
  "#f59e0b", "#ef4444", "#22c55e", "#3b82f6", "#0a0b0f"
];

export default function TextPanel({ config, setConfig }: TextPanelProps) {
  return (
    <div className="flex flex-col" style={{ gap: "24px" }}>
      {/* Logo Text */}
      <div>
        <label className="label" style={{ marginBottom: "8px" }}>Logo Text</label>
        <input
          type="text"
          className="input"
          style={{ padding: "12px 16px" }}
          value={config.text}
          onChange={(e) => setConfig({ ...config, text: e.target.value })}
          placeholder="Enter your logo text..."
        />
      </div>

      {/* Font Family */}
      <div>
        <label className="label" style={{ marginBottom: "8px" }}>Font Family</label>
        <select
          className="select"
          style={{ padding: "12px 16px" }}
          value={config.fontFamily}
          onChange={(e) => setConfig({ ...config, fontFamily: e.target.value })}
        >
          {fonts.map((font) => (
            <option key={font} value={font}>{font}</option>
          ))}
        </select>
      </div>

      {/* Font Weight */}
      <div>
        <label className="label" style={{ marginBottom: "8px" }}>Font Weight</label>
        <select
          className="select"
          style={{ padding: "12px 16px" }}
          value={config.fontWeight}
          onChange={(e) => setConfig({ ...config, fontWeight: e.target.value })}
        >
          {weights.map((w) => (
            <option key={w.value} value={w.value}>{w.label}</option>
          ))}
        </select>
      </div>

      {/* Font Size */}
      <div>
        <div className="flex items-center justify-between" style={{ marginBottom: "8px" }}>
          <label className="label">Font Size</label>
          <span style={{ fontSize: "13px", color: "var(--color-foreground)" }}>{config.fontSize}px</span>
        </div>
        <input
          type="range"
          className="slider"
          min="16"
          max="120"
          value={config.fontSize}
          onChange={(e) => setConfig({ ...config, fontSize: parseInt(e.target.value) })}
        />
      </div>

      {/* Letter Spacing */}
      <div>
        <div className="flex items-center justify-between" style={{ marginBottom: "8px" }}>
          <label className="label">Letter Spacing</label>
          <span style={{ fontSize: "13px", color: "var(--color-foreground)" }}>{config.letterSpacing}px</span>
        </div>
        <input
          type="range"
          className="slider"
          min="-5"
          max="20"
          value={config.letterSpacing}
          onChange={(e) => setConfig({ ...config, letterSpacing: parseInt(e.target.value) })}
        />
      </div>

      {/* Text Color */}
      <div>
        <label className="label" style={{ marginBottom: "12px" }}>Text Color</label>
        <div className="flex flex-wrap" style={{ gap: "8px" }}>
          {textColors.map((color) => (
            <button
              key={color}
              className={`color-swatch ${config.textColor === color ? "active" : ""}`}
              style={{ backgroundColor: color }}
              onClick={() => setConfig({ ...config, textColor: color })}
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
              value={config.textColor}
              onChange={(e) => setConfig({ ...config, textColor: e.target.value })}
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
    </div>
  );
}

