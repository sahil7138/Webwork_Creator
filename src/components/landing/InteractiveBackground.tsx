"use client";

import React, { useEffect, useRef } from "react";

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -1000,
    y: -1000,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };

    window.addEventListener("resize", handleResize);

    // Track mouse
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    // Initialize node grid
    interface Node {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      vx: number;
      vy: number;
      size: number;
    }

    let nodes: Node[] = [];

    const initNodes = () => {
      nodes = [];
      const density = Math.max(12, Math.floor(Math.sqrt((width * height) / 16000)));
      for (let i = 0; i < density; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        nodes.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 1.5 + 1,
        });
      }
    };

    initNodes();

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      time += 0.01;

      // Draw subtle ambient glow near mouse
      if (mouse.active && !prefersReducedMotion) {
        const gradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          380
        );
        gradient.addColorStop(0, "rgba(0, 255, 102, 0.07)");
        gradient.addColorStop(0.5, "rgba(0, 255, 102, 0.02)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        if (!prefersReducedMotion) {
          node.x += node.vx;
          node.y += node.vy;

          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;

          // Mouse interaction (repel gently)
          if (mouse.active) {
            const dx = mouse.x - node.x;
            const dy = mouse.y - node.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 180 && dist > 0) {
              const force = (180 - dist) / 180;
              node.x -= (dx / dist) * force * 1.8;
              node.y -= (dy / dist) * force * 1.8;
            }
          }
        }

        // Draw connections between close nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.15;
            
            // Check if near mouse
            let isNearMouse = false;
            if (mouse.active) {
              const midX = (node.x + other.x) / 2;
              const midY = (node.y + other.y) / 2;
              const mouseDist = Math.hypot(mouse.x - midX, mouse.y - midY);
              if (mouseDist < 200) isNearMouse = true;
            }

            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = isNearMouse
              ? `rgba(0, 255, 102, ${Math.min(0.6, alpha * 2.5)})`
              : `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = isNearMouse ? 1 : 0.6;
            ctx.stroke();
          }
        }

        // Draw node dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        
        let nodeNearMouse = false;
        if (mouse.active) {
          const mDist = Math.hypot(mouse.x - node.x, mouse.y - node.y);
          if (mDist < 160) nodeNearMouse = true;
        }

        ctx.fillStyle = nodeNearMouse
          ? "rgba(0, 255, 102, 0.9)"
          : "rgba(255, 255, 255, 0.25)";
        ctx.fill();

        if (nodeNearMouse) {
          ctx.shadowColor = "#00ff66";
          ctx.shadowBlur = 8;
        } else {
          ctx.shadowBlur = 0;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-35" />
      {/* Ambient static radial glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-[radial-gradient(ellipse_at_top,rgba(0,255,102,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[650px] h-[650px] bg-[radial-gradient(circle,rgba(0,255,102,0.04),transparent_65%)] pointer-events-none" />
      {/* Dynamic Interactive Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
      />
      {/* Subtle Grain Overlay */}
      <div className="grain-overlay" />
    </div>
  );
}
