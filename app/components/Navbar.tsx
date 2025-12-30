"use client";

import { useState } from "react";
import { 
  Hexagon, ChevronDown, Save, Share2, FolderOpen, 
  Settings, User, LogOut, Crown, Clock 
} from "lucide-react";

interface NavbarProps {
  onSave: () => void;
  onShare: () => void;
}

export default function Navbar({ onSave, onShare }: NavbarProps) {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showProjectsMenu, setShowProjectsMenu] = useState(false);

  return (
    <nav className="navbar" style={{ padding: "0 20px" }}>
      {/* Left section */}
      <div className="flex items-center" style={{ gap: "24px" }}>
        {/* Logo */}
        <div className="flex items-center" style={{ gap: "10px" }}>
          <div 
            className="flex items-center justify-center"
            style={{ 
              width: "36px", 
              height: "36px",
              background: "linear-gradient(135deg, #00d4aa 0%, #00b894 100%)",
              borderRadius: "10px",
            }}
          >
            <Hexagon size={20} color="#0a0b0f" strokeWidth={2.5} />
          </div>
          <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-0.5px" }}>
            Logomark
          </span>
        </div>

        {/* Divider */}
        <div className="divider-v" style={{ height: "28px" }} />

        {/* Projects dropdown */}
        <div className="relative">
          <button 
            className="btn btn-ghost flex items-center"
            style={{ padding: "8px 12px", gap: "8px" }}
            onClick={() => setShowProjectsMenu(!showProjectsMenu)}
          >
            <FolderOpen size={16} />
            <span>My Logos</span>
            <span 
              className="badge badge-free"
              style={{ padding: "2px 6px", marginLeft: "4px" }}
            >
              12
            </span>
            <ChevronDown size={14} />
          </button>

          {showProjectsMenu && (
            <>
              <div 
                className="fixed inset-0" 
                style={{ zIndex: 40 }} 
                onClick={() => setShowProjectsMenu(false)} 
              />
              <div 
                className="dropdown animate-slide-down"
                style={{ 
                  top: "calc(100% + 8px)", 
                  left: "0",
                  width: "220px",
                  padding: "8px"
                }}
              >
                {["Brand Logo v2", "App Icon Final", "Website Header"].map((name, i) => (
                  <button
                    key={i}
                    className="btn btn-ghost flex items-center justify-start"
                    style={{ width: "100%", padding: "10px 12px", gap: "10px" }}
                    onClick={() => setShowProjectsMenu(false)}
                  >
                    <div 
                      style={{ 
                        width: "32px", 
                        height: "32px", 
                        borderRadius: "8px",
                        background: `linear-gradient(135deg, ${["#00d4aa", "#7c3aed", "#f59e0b"][i]} 0%, #16181f 100%)`
                      }} 
                    />
                    <span style={{ fontSize: "14px" }}>{name}</span>
                  </button>
                ))}
                <div className="divider-h" style={{ margin: "8px 0" }} />
                <button
                  className="btn btn-ghost flex items-center justify-start"
                  style={{ width: "100%", padding: "10px 12px", gap: "10px", color: "var(--color-accent)" }}
                >
                  <span>+ New Logo</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Center - Last saved */}
      <div className="flex items-center" style={{ gap: "6px", color: "var(--color-muted)", fontSize: "13px" }}>
        <Clock size={14} />
        <span>Saved 2 min ago</span>
      </div>

      {/* Right section */}
      <div className="flex items-center" style={{ gap: "12px" }}>
        <button 
          className="btn btn-secondary flex items-center"
          style={{ padding: "8px 16px", gap: "8px" }}
          onClick={onSave}
        >
          <Save size={16} />
          Save
        </button>

        <button 
          className="btn btn-primary flex items-center"
          style={{ padding: "8px 16px", gap: "8px" }}
          onClick={onShare}
        >
          <Share2 size={16} />
          Share
        </button>

        <div className="divider-v" style={{ height: "28px" }} />

        {/* User menu */}
        <div className="relative">
          <button
            className="flex items-center cursor-pointer"
            style={{ gap: "10px" }}
            onClick={() => setShowUserMenu(!showUserMenu)}
          >
            <div className="avatar" style={{ width: "36px", height: "36px", fontSize: "14px" }}>
              AK
            </div>
            <ChevronDown size={14} style={{ color: "var(--color-muted)" }} />
          </button>

          {showUserMenu && (
            <>
              <div 
                className="fixed inset-0" 
                style={{ zIndex: 40 }} 
                onClick={() => setShowUserMenu(false)} 
              />
              <div 
                className="dropdown animate-slide-down"
                style={{ 
                  top: "calc(100% + 8px)", 
                  right: "0",
                  width: "240px",
                  padding: "8px"
                }}
              >
                {/* User info */}
                <div style={{ padding: "12px", borderBottom: "1px solid var(--color-border)" }}>
                  <div className="flex items-center" style={{ gap: "12px" }}>
                    <div className="avatar" style={{ width: "44px", height: "44px", fontSize: "16px" }}>
                      AK
                    </div>
                    <div>
                      <div style={{ fontWeight: "600", fontSize: "14px" }}>Arthur K.</div>
                      <div style={{ fontSize: "12px", color: "var(--color-muted)" }}>arthur@example.com</div>
                    </div>
                  </div>
                  <div 
                    className="badge badge-pro flex items-center"
                    style={{ marginTop: "12px", padding: "6px 10px", gap: "6px" }}
                  >
                    <Crown size={12} />
                    Pro Member
                  </div>
                </div>

                {/* Menu items */}
                <div style={{ padding: "8px 0" }}>
                  <button
                    className="btn btn-ghost flex items-center justify-start"
                    style={{ width: "100%", padding: "10px 12px", gap: "10px" }}
                  >
                    <User size={16} />
                    <span>Profile</span>
                  </button>
                  <button
                    className="btn btn-ghost flex items-center justify-start"
                    style={{ width: "100%", padding: "10px 12px", gap: "10px" }}
                  >
                    <Settings size={16} />
                    <span>Settings</span>
                  </button>
                </div>

                <div className="divider-h" />

                <div style={{ padding: "8px 0" }}>
                  <button
                    className="btn btn-ghost flex items-center justify-start"
                    style={{ width: "100%", padding: "10px 12px", gap: "10px", color: "var(--color-danger)" }}
                  >
                    <LogOut size={16} />
                    <span>Log out</span>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

