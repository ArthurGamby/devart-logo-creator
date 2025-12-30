/**
 * Logomark — AI-Powered Logo Creator Demo
 * Theme: Midnight Aurora — Deep space blacks with vibrant cyan/teal accents
 * 
 * This is a demo mockup. Features are simulated for presentation purposes.
 */

"use client";

import { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import LogoCanvas from "./components/LogoCanvas";
import BottomBar from "./components/BottomBar";
import Toast from "./components/Toast";
import ShareModal from "./components/ShareModal";
import type { LogoCanvasRef } from "./components/LogoCanvas";

export interface LogoConfig {
  text: string;
  fontSize: number;
  fontFamily: string;
  fontWeight: string;
  textColor: string;
  iconName: string;
  iconColor: string;
  iconSize: number;
  iconPosition: "left" | "top" | "right" | "none";
  backgroundColor: string;
  backgroundType: "solid" | "gradient" | "transparent";
  gradientFrom: string;
  gradientTo: string;
  gradientAngle: number;
  borderRadius: number;
  padding: number;
  letterSpacing: number;
}

export default function Home() {
  const canvasRef = useRef<LogoCanvasRef>(null);
  const [showShareModal, setShowShareModal] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const [zoom, setZoom] = useState(100);
  
  const [config, setConfig] = useState<LogoConfig>({
    text: "Logomark",
    fontSize: 48,
    fontFamily: "Sora",
    fontWeight: "600",
    textColor: "#e8eaed",
    iconName: "Hexagon",
    iconColor: "#00d4aa",
    iconSize: 56,
    iconPosition: "left",
    backgroundColor: "#16181f",
    backgroundType: "gradient",
    gradientFrom: "#16181f",
    gradientTo: "#0a0b0f",
    gradientAngle: 135,
    borderRadius: 24,
    padding: 48,
    letterSpacing: -1,
  });

  const showToast = (message: string, type: "success" | "error" = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleSave = () => {
    showToast("Logo saved to your collection!");
  };

  const handleExport = (format: "png" | "svg") => {
    if (canvasRef.current) {
      const dataUrl = canvasRef.current.exportImage();
      const link = document.createElement("a");
      link.download = `logo.${format}`;
      link.href = dataUrl;
      link.click();
      showToast(`Logo exported as ${format.toUpperCase()}!`);
    }
  };

  const handleCopyToClipboard = async () => {
    if (canvasRef.current) {
      try {
        const dataUrl = canvasRef.current.exportImage();
        const response = await fetch(dataUrl);
        const blob = await response.blob();
        await navigator.clipboard.write([
          new ClipboardItem({ [blob.type]: blob })
        ]);
        showToast("Logo copied to clipboard!");
      } catch {
        showToast("Failed to copy to clipboard", "error");
      }
    }
  };

  return (
    <div className="flex flex-col" style={{ height: "100vh" }}>
      <Navbar 
        onSave={handleSave} 
        onShare={() => setShowShareModal(true)} 
      />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar config={config} setConfig={setConfig} />
        
        <main className="flex-1 flex flex-col overflow-hidden">
          <LogoCanvas 
            ref={canvasRef}
            config={config} 
            zoom={zoom}
          />
          
          <BottomBar 
            zoom={zoom}
            setZoom={setZoom}
            onExport={handleExport}
            onCopy={handleCopyToClipboard}
          />
        </main>
      </div>

      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast(null)} 
        />
      )}

      {showShareModal && (
        <ShareModal 
          onClose={() => setShowShareModal(false)}
          onCopyLink={() => showToast("Link copied to clipboard!")}
        />
      )}
    </div>
  );
}
