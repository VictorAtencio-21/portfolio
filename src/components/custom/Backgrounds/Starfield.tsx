"use client";
import { useEffect, useRef } from "react";

const ACCENT = "#60a5fa";
// ponytail: density baked in (user prefers 3 → ~960 stars). Lift to a prop if it ever needs tuning per page.
const DENSITY = 3;
const PARALLAX = 0.25; // stars move up this fraction of the page scroll → depth
const CURSOR_R = 150; // px radius around the pointer that gathers stars to link
const LINK_DIST = 120; // max px between two gathered stars to draw a line

export default function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = window.devicePixelRatio || 1;

    const pts = Array.from({ length: Math.round(320 * DENSITY) }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 0.4 + Math.random() * 1.1,
      ph: Math.random() * Math.PI * 2,
      sp: 0.3 + Math.random() * 1.2,
      warm: Math.random() > 0.7,
      // drift velocity in screens/sec: gentle upward bias ("from the bottom") + slight horizontal wander
      dx: (Math.random() - 0.5) * 0.008,
      dy: -(0.012 + Math.random() * 0.03),
    }));

    // pointer state (device px). active = pointer currently over the window.
    let mx = 0;
    let my = 0;
    let active = false;
    const cursorR = CURSOR_R * dpr;
    const cursorR2 = cursorR * cursorR;
    const link = LINK_DIST * dpr;
    const link2 = link * link;

    function draw(t: number) {
      if (!canvas || !ctx) return;
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      const time = reduce ? 0 : t / 1000;
      const offY = reduce ? 0 : -window.scrollY * dpr * PARALLAX;
      const near: { x: number; y: number }[] = [];

      for (const p of pts) {
        // drift (time-based, normalized) + parallax (scroll-based, px), both wrapped so the field stays full
        const nx = ((p.x + time * p.dx) % 1 + 1) % 1;
        const ny = ((p.y + time * p.dy) % 1 + 1) % 1;
        const x = nx * W;
        const y = ((ny * H + offY) % H + H) % H;
        ctx.globalAlpha = reduce
          ? 0.4
          : 0.1 + 0.45 * (0.5 + 0.5 * Math.sin(p.ph + time * p.sp * 0.5));
        ctx.fillStyle = p.warm ? "#e7e5e4" : ACCENT;
        ctx.beginPath();
        ctx.arc(x, y, p.r * dpr, 0, Math.PI * 2);
        ctx.fill();

        if (active) {
          const dx = x - mx;
          const dy = y - my;
          if (dx * dx + dy * dy < cursorR2) near.push({ x, y });
        }
      }

      // constellation: link stars gathered near the cursor
      if (active && near.length > 1) {
        ctx.lineWidth = 0.6 * dpr;
        ctx.strokeStyle = ACCENT;
        for (let i = 0; i < near.length; i++) {
          for (let j = i + 1; j < near.length; j++) {
            const dx = near[i].x - near[j].x;
            const dy = near[i].y - near[j].y;
            const d2 = dx * dx + dy * dy;
            if (d2 < link2) {
              ctx.globalAlpha = (1 - Math.sqrt(d2) / link) * 0.5;
              ctx.beginPath();
              ctx.moveTo(near[i].x, near[i].y);
              ctx.lineTo(near[j].x, near[j].y);
              ctx.stroke();
            }
          }
        }
      }

      ctx.globalAlpha = 1;
      if (!reduce) raf = requestAnimationFrame(draw);
    }

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      if (reduce) draw(0); // no rAF loop in reduced-motion mode, so repaint on resize
    }

    const onMove = (e: MouseEvent) => {
      mx = e.clientX * dpr;
      my = e.clientY * dpr;
      active = true;
    };
    const onLeave = () => {
      active = false;
    };

    let raf = 0;
    resize();
    window.addEventListener("resize", resize);
    if (!reduce) {
      window.addEventListener("mousemove", onMove, { passive: true });
      document.addEventListener("mouseleave", onLeave);
    }
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  );
}
