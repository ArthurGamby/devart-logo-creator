"use client";

import type { LogoConfig } from "../../page";
import {
  Hexagon, Circle, Square, Triangle, Star, Heart, Zap, Flame,
  Diamond, Crown, Rocket, Globe, Shield, Target, Sparkles, Atom,
  Coffee, Music, Camera, Code, Lightbulb, Bolt
} from "lucide-react";

interface IconPanelProps {
  config: LogoConfig;
  setConfig: React.Dispatch<React.SetStateAction<LogoConfig>>;
}

const icons = [
  { name: "Hexagon", component: Hexagon },
  { name: "Circle", component: Circle },
  { name: "Square", component: Square },
  { name: "Triangle", component: Triangle },
  { name: "Star", component: Star },
  { name: "Heart", component: Heart },
  { name: "Zap", component: Zap },
  { name: "Flame", component: Flame },
  { name: "Diamond", component: Diamond },
  { name: "Crown", component: Crown },
  { name: "Rocket", component: Rocket },
  { name: "Globe", component: Globe },
  { name: "Shield", component: Shield },
  { name: "Target", component: Target },
  { name: "Sparkles", component: Sparkles },
  { name: "Atom", component: Atom },
  { name: "Coffee", component: Coffee },
  { name: "Music", component: Music },
  { name: "Camera", component: Camera },
  { name: "Code", component: Code },
  { name: "Lightbulb", component: Lightbulb },
  { name: "Bolt", component: Bolt },
];

const iconColors = [
  "#00d4aa", "#7c3aed", "#f59e0b", "#ef4444", "#22c55e",
  "#3b82f6", "#ec4899", "#06b6d4", "#e8eaed", "#ffffff"
];

const positions = [
  { value: "left", label: "Left" },
  { value: "top", label: "Top" },
  { value: "right", label: "Right" },
  { value: "none", label: "None" },
];

export default function IconPanel({ config, setConfig }: IconPanelProps) {
  return (
    <div className="flex flex-col" style={{ gap: "24px" }}>
      {/* Icon Grid */}
      <div>
        <label className="label" style={{ marginBottom: "12px" }}>Choose Icon</label>
        <div className="icon-grid" style={{ gap: "8px" }}>
          {icons.map(({ name, component: Icon }) => (
            <button
              key={name}
              className={`icon-item ${config.iconName === name ? "active" : ""}`}
              onClick={() => setConfig({ ...config, iconName: name })}
              title={name}
            >
              <Icon size={22} />
            </button>
          ))}
        </div>
      </div>

      {/* Icon Position */}
      <div>
        <label className="label" style={{ marginBottom: "8px" }}>Icon Position</label>
        <div className="flex" style={{ gap: "8px" }}>
          {positions.map((pos) => (
            <button
              key={pos.value}
              className={`btn flex-1 ${config.iconPosition === pos.value ? "btn-primary" : "btn-secondary"}`}
              style={{ padding: "10px" }}
              onClick={() => setConfig({ ...config, iconPosition: pos.value as LogoConfig["iconPosition"] })}
            >
              {pos.label}
            </button>
          ))}
        </div>
      </div>

      {/* Icon Size */}
      <div>
        <div className="flex items-center justify-between" style={{ marginBottom: "8px" }}>
          <label className="label">Icon Size</label>
          <span style={{ fontSize: "13px", color: "var(--color-foreground)" }}>{config.iconSize}px</span>
        </div>
        <input
          type="range"
          className="slider"
          min="16"
          max="120"
          value={config.iconSize}
          onChange={(e) => setConfig({ ...config, iconSize: parseInt(e.target.value) })}
        />
      </div>

      {/* Icon Color */}
      <div>
        <label className="label" style={{ marginBottom: "12px" }}>Icon Color</label>
        <div className="flex flex-wrap" style={{ gap: "8px" }}>
          {iconColors.map((color) => (
            <button
              key={color}
              className={`color-swatch ${config.iconColor === color ? "active" : ""}`}
              style={{ backgroundColor: color }}
              onClick={() => setConfig({ ...config, iconColor: color })}
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
              value={config.iconColor}
              onChange={(e) => setConfig({ ...config, iconColor: e.target.value })}
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

