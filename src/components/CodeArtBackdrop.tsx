"use client";

import { useEffect, useRef } from "react";

/* 5x7 bitmap font for the wordmark letters */
const FONT: Record<string, string[]> = {
  C: ["01110", "10001", "10000", "10000", "10000", "10001", "01110"],
  S: ["01111", "10000", "10000", "01110", "00001", "10001", "01110"],
  L: ["10000", "10000", "10000", "10000", "10000", "10000", "11111"],
  V: ["10001", "10001", "10001", "10001", "10001", "01010", "00100"],
  A: ["01110", "10001", "10001", "11111", "10001", "10001", "10001"],
  N: ["10001", "11001", "11001", "10101", "10011", "10011", "10001"],
  G: ["01110", "10001", "10000", "10111", "10001", "10001", "01111"],
  U: ["10001", "10001", "10001", "10001", "10001", "10001", "01110"],
  R: ["11110", "10001", "10001", "11110", "10100", "10010", "10001"],
  D: ["11100", "10010", "10001", "10001", "10001", "10010", "11100"],
  " ": ["00000", "00000", "00000", "00000", "00000", "00000", "00000"],
};
const HEX = "0123456789ABCDEF";
const GLYPH_ROWS = 7;

/** Build a centered, scaled boolean mask from two stacked words. */
function buildMask(lines: string[], scale: number) {
  const rendered = lines.map((word) => {
    const chars = word.split("");
    const rows: string[] = [];
    for (let r = 0; r < GLYPH_ROWS; r++) {
      let row = "";
      chars.forEach((ch, i) => {
        row += (FONT[ch] || FONT[" "])[r];
        if (i < chars.length - 1) row += "0";
      });
      rows.push(row);
    }
    return rows;
  });

  const wordW = Math.max(...rendered.map((r) => r[0].length));
  const padded = rendered.map((rows) =>
    rows.map((row) => {
      const total = wordW - row.length;
      const left = Math.floor(total / 2);
      return "0".repeat(left) + row + "0".repeat(total - left);
    }),
  );

  const stacked: string[] = [];
  padded.forEach((rows, wi) => {
    rows.forEach((row) => stacked.push(row));
    if (wi < padded.length - 1) stacked.push("0".repeat(wordW));
  });

  const maskH = stacked.length * scale;
  const maskW = wordW * scale;
  const mask: boolean[][] = [];
  for (let y = 0; y < maskH; y++) {
    const srcRow = stacked[Math.floor(y / scale)];
    const arr: boolean[] = [];
    for (let x = 0; x < maskW; x++) {
      arr.push(srcRow[Math.floor(x / scale)] === "1");
    }
    mask.push(arr);
  }
  return { mask, w: maskW, h: maskH };
}

export default function CodeArtBackdrop() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let raf = 0;
    let cleanupResize: (() => void) | null = null;

    const setup = () => {
      cancelAnimationFrame(raf);
      const W = wrap.clientWidth;
      const H = wrap.clientHeight;

      // Hide on small screens to keep the headline uncluttered.
      if (W < 640 || H < 200) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const fontSize = 15;
      const font = `${fontSize}px "JetBrains Mono", ui-monospace, monospace`;
      ctx.font = font;
      ctx.textBaseline = "top";
      const charW = ctx.measureText("0").width || fontSize * 0.6;
      const lineStep = Math.round(fontSize * 1.18);

      const cols = Math.ceil(W / charW);
      const rows = Math.ceil(H / lineStep);

      // Pick the largest scale whose mask comfortably fits the right side.
      let scale = 1;
      let mask = buildMask(["CSL", "VANGUARD"], 1);
      for (const s of [3, 2, 1]) {
        const m = buildMask(["CSL", "VANGUARD"], s);
        if (m.w <= cols * 0.64 && m.h <= rows * 0.82) {
          scale = s;
          mask = m;
          break;
        }
      }

      const offX = Math.max(1, cols - mask.w - 2); // anchor right
      const offY = Math.max(1, Math.floor(rows * 0.12)); // toward the top

      // Precompute per-cell final characters + lit flag + lock timing.
      const total = cols * rows;
      const finalChar = new Array<string>(total);
      const isLit = new Uint8Array(total);
      const lockAt = new Float32Array(total);
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const idx = y * cols + x;
          const my = y - offY;
          const mx = x - offX;
          const lit =
            my >= 0 &&
            my < mask.h &&
            mx >= 0 &&
            mx < mask.w &&
            mask.mask[my][mx];
          isLit[idx] = lit ? 1 : 0;
          finalChar[idx] =
            Math.random() > 0.78
              ? HEX[(Math.random() * 16) | 0]
              : Math.random() > 0.5
                ? "0"
                : "1";
          lockAt[idx] = Math.random() * 0.7;
        }
      }

      const litColor = (a: number) => `rgba(37,54,212,${a})`;
      const offColor = "rgba(24,23,18,0.045)";

      const draw = (progress: number) => {
        ctx.clearRect(0, 0, W, H);
        ctx.font = font;
        ctx.textBaseline = "top";
        for (let y = 0; y < rows; y++) {
          const py = y * lineStep;
          for (let x = 0; x < cols; x++) {
            const idx = y * cols + x;
            const locked = progress >= lockAt[idx];
            const ch = locked
              ? finalChar[idx]
              : Math.random() > 0.5
                ? "1"
                : "0";
            if (isLit[idx]) {
              const a = 0.2 * Math.min(progress * 1.4, 1);
              ctx.fillStyle = litColor(a);
            } else {
              ctx.fillStyle = offColor;
            }
            ctx.fillText(ch, x * charW, py);
          }
        }
      };

      if (reduceMotion) {
        draw(1);
        return;
      }

      const duration = 680;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        draw(p);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    // Run after fonts are ready so glyph metrics are correct.
    const run = () => setup();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(run);
    } else {
      run();
    }

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(setup, 180);
    };
    window.addEventListener("resize", onResize);
    cleanupResize = () => window.removeEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      cleanupResize?.();
    };
  }, []);

  return (
    <div ref={wrapRef} className="pointer-events-none absolute inset-0" aria-hidden>
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
