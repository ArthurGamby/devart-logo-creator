"use client";

import { useState } from "react";
import type { LogoConfig } from "../page";
import TextPanel from "./panels/TextPanel";
import IconPanel from "./panels/IconPanel";
import BackgroundPanel from "./panels/BackgroundPanel";
import LayoutPanel from "./panels/LayoutPanel";
import { Type, Shapes, Palette, Layout } from "lucide-react";

interface SidebarProps {
  config: LogoConfig;
  setConfig: React.Dispatch<React.SetStateAction<LogoConfig>>;
}

const tabs = [
  { id: "text", label: "Text", icon: Type },
  { id: "icon", label: "Icon", icon: Shapes },
  { id: "background", label: "Background", icon: Palette },
  { id: "layout", label: "Layout", icon: Layout },
];

export default function Sidebar({ config, setConfig }: SidebarProps) {
  const [activeTab, setActiveTab] = useState("text");

  return (
    <aside className="sidebar">
      {/* Tabs */}
      <div 
        className="flex"
        style={{ 
          borderBottom: "1px solid var(--color-border)",
          padding: "0 16px"
        }}
      >
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              className={`tab flex items-center ${activeTab === tab.id ? "active" : ""}`}
              style={{ 
                padding: "16px 12px", 
                gap: "8px",
                flex: 1,
                justifyContent: "center"
              }}
              onClick={() => setActiveTab(tab.id)}
            >
              <Icon size={16} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Panel content */}
      <div className="flex-1 overflow-y-auto" style={{ padding: "20px" }}>
        {activeTab === "text" && <TextPanel config={config} setConfig={setConfig} />}
        {activeTab === "icon" && <IconPanel config={config} setConfig={setConfig} />}
        {activeTab === "background" && <BackgroundPanel config={config} setConfig={setConfig} />}
        {activeTab === "layout" && <LayoutPanel config={config} setConfig={setConfig} />}
      </div>
    </aside>
  );
}

