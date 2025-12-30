"use client";

import { ZoomIn, ZoomOut, Undo, Redo, Download, Copy, FileImage } from "lucide-react";

interface BottomBarProps {
  zoom: number;
  setZoom: (zoom: number) => void;
  onExport: (format: "png" | "svg") => void;
  onCopy: () => void;
}

export default function BottomBar({ zoom, setZoom, onExport, onCopy }: BottomBarProps) {
  return (
    <div className="bottombar" style={{ padding: "0 20px" }}>
      {/* Left - Undo/Redo */}
      <div className="flex items-center" style={{ gap: "4px" }}>
        <button className="btn btn-ghost btn-icon" title="Undo">
          <Undo size={18} />
        </button>
        <button className="btn btn-ghost btn-icon" title="Redo">
          <Redo size={18} />
        </button>
      </div>

      {/* Center - Zoom */}
      <div className="flex items-center" style={{ gap: "12px" }}>
        <button 
          className="btn btn-ghost btn-icon"
          onClick={() => setZoom(Math.max(25, zoom - 25))}
          disabled={zoom <= 25}
          title="Zoom Out"
        >
          <ZoomOut size={18} />
        </button>
        
        <div 
          className="flex items-center justify-center"
          style={{ 
            width: "80px",
            padding: "6px 12px",
            background: "var(--color-background-secondary)",
            borderRadius: "8px",
            fontSize: "13px",
            fontWeight: "500"
          }}
        >
          {zoom}%
        </div>
        
        <button 
          className="btn btn-ghost btn-icon"
          onClick={() => setZoom(Math.min(200, zoom + 25))}
          disabled={zoom >= 200}
          title="Zoom In"
        >
          <ZoomIn size={18} />
        </button>
      </div>

      {/* Right - Export */}
      <div className="flex items-center" style={{ gap: "8px" }}>
        <button 
          className="btn btn-secondary flex items-center"
          style={{ padding: "8px 14px", gap: "6px" }}
          onClick={onCopy}
          title="Copy to Clipboard"
        >
          <Copy size={16} />
          Copy
        </button>

        <button 
          className="btn btn-secondary flex items-center"
          style={{ padding: "8px 14px", gap: "6px" }}
          onClick={() => onExport("png")}
          title="Export as PNG"
        >
          <FileImage size={16} />
          PNG
        </button>

        <button 
          className="btn btn-primary flex items-center"
          style={{ padding: "8px 14px", gap: "6px" }}
          onClick={() => onExport("png")}
          title="Download"
        >
          <Download size={16} />
          Download
        </button>
      </div>
    </div>
  );
}

