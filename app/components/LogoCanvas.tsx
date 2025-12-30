"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";
import type { LogoConfig } from "../page";
import {
  Hexagon, Circle, Square, Triangle, Star, Heart, Zap, Flame,
  Diamond, Crown, Rocket, Globe, Shield, Target, Sparkles, Atom,
  Coffee, Music, Camera, Code, Lightbulb, Bolt
} from "lucide-react";

export interface LogoCanvasRef {
  exportImage: () => string;
}

interface LogoCanvasProps {
  config: LogoConfig;
  zoom: number;
}

const iconMap: Record<string, React.ComponentType<{ size: number; color: string }>> = {
  Hexagon, Circle, Square, Triangle, Star, Heart, Zap, Flame,
  Diamond, Crown, Rocket, Globe, Shield, Target, Sparkles, Atom,
  Coffee, Music, Camera, Code, Lightbulb, Bolt
};

const LogoCanvas = forwardRef<LogoCanvasRef, LogoCanvasProps>(({ config, zoom }, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    exportImage: () => {
      const canvas = canvasRef.current;
      if (!canvas || !previewRef.current) return "";

      const ctx = canvas.getContext("2d");
      if (!ctx) return "";

      // Set canvas size (high resolution)
      const size = 1024;
      canvas.width = size;
      canvas.height = size;

      // Clear canvas
      ctx.clearRect(0, 0, size, size);

      // Draw background
      if (config.backgroundType === "solid") {
        ctx.fillStyle = config.backgroundColor;
        ctx.beginPath();
        ctx.roundRect(0, 0, size, size, (config.borderRadius / 100) * (size / 2));
        ctx.fill();
      } else if (config.backgroundType === "gradient") {
        const gradient = ctx.createLinearGradient(
          0, 0,
          size * Math.cos((config.gradientAngle * Math.PI) / 180),
          size * Math.sin((config.gradientAngle * Math.PI) / 180)
        );
        gradient.addColorStop(0, config.gradientFrom);
        gradient.addColorStop(1, config.gradientTo);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.roundRect(0, 0, size, size, (config.borderRadius / 100) * (size / 2));
        ctx.fill();
      }

      // Get text metrics
      ctx.font = `${config.fontWeight} ${(config.fontSize / 48) * 100}px ${config.fontFamily}, sans-serif`;
      ctx.letterSpacing = `${config.letterSpacing}px`;
      const textMetrics = ctx.measureText(config.text);
      const textWidth = textMetrics.width;
      const textHeight = (config.fontSize / 48) * 100;
      const iconSize = (config.iconSize / 48) * 100;
      const gap = 24;

      // Calculate total content dimensions
      let totalWidth = textWidth;
      let totalHeight = textHeight;

      if (config.iconPosition === "left" || config.iconPosition === "right") {
        totalWidth += iconSize + gap;
        totalHeight = Math.max(textHeight, iconSize);
      } else if (config.iconPosition === "top") {
        totalWidth = Math.max(textWidth, iconSize);
        totalHeight = textHeight + iconSize + gap;
      }

      // Calculate starting position
      const startX = (size - totalWidth) / 2;
      const startY = (size - totalHeight) / 2;

      // Draw text
      ctx.fillStyle = config.textColor;
      ctx.textBaseline = "middle";
      
      let textX = startX;
      let textY = startY + totalHeight / 2;

      if (config.iconPosition === "left") {
        textX = startX + iconSize + gap;
      } else if (config.iconPosition === "top") {
        textX = (size - textWidth) / 2;
        textY = startY + iconSize + gap + textHeight / 2;
      } else if (config.iconPosition === "right") {
        textX = startX;
      } else {
        textX = (size - textWidth) / 2;
      }

      ctx.fillText(config.text, textX, textY);

      // Note: Icon drawing would need SVG conversion - for demo we'll use simpler shapes
      if (config.iconPosition !== "none") {
        ctx.fillStyle = config.iconColor;
        let iconX = startX + iconSize / 2;
        let iconY = startY + totalHeight / 2;

        if (config.iconPosition === "right") {
          iconX = startX + textWidth + gap + iconSize / 2;
        } else if (config.iconPosition === "top") {
          iconX = size / 2;
          iconY = startY + iconSize / 2;
        }

        // Draw a simple hexagon as placeholder
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (i * Math.PI) / 3 - Math.PI / 2;
          const x = iconX + (iconSize / 2) * Math.cos(angle);
          const y = iconY + (iconSize / 2) * Math.sin(angle);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.strokeStyle = config.iconColor;
        ctx.lineWidth = 4;
        ctx.stroke();
      }

      return canvas.toDataURL("image/png");
    },
  }));

  // Get the icon component
  const IconComponent = iconMap[config.iconName] || Hexagon;

  // Calculate background style
  const getBackgroundStyle = () => {
    if (config.backgroundType === "transparent") {
      return {};
    }
    if (config.backgroundType === "gradient") {
      return {
        background: `linear-gradient(${config.gradientAngle}deg, ${config.gradientFrom} 0%, ${config.gradientTo} 100%)`,
      };
    }
    return {
      background: config.backgroundColor,
    };
  };

  return (
    <div 
      className="canvas-container flex-1 flex items-center justify-center"
      style={{ 
        padding: "40px",
        minHeight: 0 
      }}
    >
      {/* Hidden canvas for export */}
      <canvas ref={canvasRef} style={{ display: "none" }} />

      {/* Visual preview */}
      <div
        className={config.backgroundType === "transparent" ? "checkerboard glow-accent" : "glow-accent"}
        style={{
          ...getBackgroundStyle(),
          borderRadius: `${config.borderRadius}px`,
          padding: `${config.padding}px`,
          transform: `scale(${zoom / 100})`,
          transition: "transform 0.2s, padding 0.2s, border-radius 0.2s",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: config.iconPosition === "top" ? "column" : "row",
          gap: config.iconPosition !== "none" ? "16px" : "0",
        }}
        ref={previewRef}
      >
        {/* Icon - Left or Top */}
        {(config.iconPosition === "left" || config.iconPosition === "top") && (
          <IconComponent size={config.iconSize} color={config.iconColor} />
        )}

        {/* Text */}
        <span
          style={{
            fontSize: `${config.fontSize}px`,
            fontWeight: config.fontWeight,
            fontFamily: `${config.fontFamily}, sans-serif`,
            color: config.textColor,
            letterSpacing: `${config.letterSpacing}px`,
            lineHeight: 1,
            whiteSpace: "nowrap",
          }}
        >
          {config.text}
        </span>

        {/* Icon - Right */}
        {config.iconPosition === "right" && (
          <IconComponent size={config.iconSize} color={config.iconColor} />
        )}
      </div>
    </div>
  );
});

LogoCanvas.displayName = "LogoCanvas";

export default LogoCanvas;

