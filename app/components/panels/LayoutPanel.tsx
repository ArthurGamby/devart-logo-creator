"use client";

import type { LogoConfig } from "../../page";

interface LayoutPanelProps {
  config: LogoConfig;
  setConfig: React.Dispatch<React.SetStateAction<LogoConfig>>;
}

export default function LayoutPanel({ config, setConfig }: LayoutPanelProps) {
  return (
    <div className="flex flex-col" style={{ gap: "24px" }}>
      {/* Border Radius */}
      <div>
        <div className="flex items-center justify-between" style={{ marginBottom: "8px" }}>
          <label className="label">Border Radius</label>
          <span style={{ fontSize: "13px", color: "var(--color-foreground)" }}>{config.borderRadius}px</span>
        </div>
        <input
          type="range"
          className="slider"
          min="0"
          max="100"
          value={config.borderRadius}
          onChange={(e) => setConfig({ ...config, borderRadius: parseInt(e.target.value) })}
        />
        
        {/* Quick presets */}
        <div className="flex" style={{ gap: "8px", marginTop: "12px" }}>
          {[0, 12, 24, 48, 100].map((value) => (
            <button
              key={value}
              className={`btn flex-1 ${config.borderRadius === value ? "btn-primary" : "btn-secondary"}`}
              style={{ padding: "8px", fontSize: "12px" }}
              onClick={() => setConfig({ ...config, borderRadius: value })}
            >
              {value === 0 ? "Sharp" : value === 100 ? "Round" : `${value}px`}
            </button>
          ))}
        </div>
      </div>

      {/* Padding */}
      <div>
        <div className="flex items-center justify-between" style={{ marginBottom: "8px" }}>
          <label className="label">Padding</label>
          <span style={{ fontSize: "13px", color: "var(--color-foreground)" }}>{config.padding}px</span>
        </div>
        <input
          type="range"
          className="slider"
          min="0"
          max="100"
          value={config.padding}
          onChange={(e) => setConfig({ ...config, padding: parseInt(e.target.value) })}
        />
        
        {/* Quick presets */}
        <div className="flex" style={{ gap: "8px", marginTop: "12px" }}>
          {[16, 32, 48, 64, 80].map((value) => (
            <button
              key={value}
              className={`btn flex-1 ${config.padding === value ? "btn-primary" : "btn-secondary"}`}
              style={{ padding: "8px", fontSize: "12px" }}
              onClick={() => setConfig({ ...config, padding: value })}
            >
              {value}px
            </button>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="divider-h" />

      {/* Preview Size Guide */}
      <div>
        <label className="label" style={{ marginBottom: "12px" }}>Export Size Guide</label>
        <div className="card" style={{ padding: "16px" }}>
          <div className="flex flex-col" style={{ gap: "12px" }}>
            {[
              { name: "Favicon", size: "32×32" },
              { name: "App Icon", size: "512×512" },
              { name: "Social Media", size: "1200×630" },
              { name: "High Res", size: "2000×2000" },
            ].map((preset) => (
              <div 
                key={preset.name}
                className="flex items-center justify-between"
                style={{ fontSize: "13px" }}
              >
                <span style={{ color: "var(--color-foreground-muted)" }}>{preset.name}</span>
                <span style={{ color: "var(--color-foreground)", fontWeight: "500" }}>{preset.size}</span>
              </div>
            ))}
          </div>
        </div>
        <p style={{ fontSize: "12px", color: "var(--color-muted)", marginTop: "8px" }}>
          Your logo will export at the highest resolution for crisp scaling.
        </p>
      </div>
    </div>
  );
}

