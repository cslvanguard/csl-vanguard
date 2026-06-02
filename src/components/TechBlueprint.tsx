"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

/**
 * "Responsive devices" blueprint — a browser window with an overlapping phone,
 * drawn as cobalt line-art with marigold accents. Pure inline SVG.
 * Decorative; rendered behind hero content on ultra-wide screens only.
 */
const S = "rgba(37,54,212,0.8)";
const T = "rgba(37,54,212,0.5)";
const TT = "rgba(37,54,212,0.3)";
const F = "rgba(37,54,212,0.05)";
const FB = "rgba(37,54,212,0.1)";
const SIDE = "rgba(24,23,18,0.06)";
const MARK = "rgba(224,162,60,1)";

const rect = (
  x: number,
  y: number,
  w: number,
  h: number,
  rad: number,
  fill: string,
  stroke: string,
  sw = 1.4,
) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rad}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
const line = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  c: string,
  sw = 1,
) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${sw}"/>`;
const circ = (
  cx: number,
  cy: number,
  rad: number,
  fill: string,
  stroke: string,
  sw = 1,
) =>
  `<circle cx="${cx}" cy="${cy}" r="${rad}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
const poly = (pts: string, fill: string, stroke: string, sw = 1.2) =>
  `<polygon points="${pts}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;

function windowUI(x: number, y: number, w: number, h: number, bh: number) {
  const ex = 16;
  const ey = 11;
  let s = "";
  // 3D extrude faces (lower-right)
  s += poly(
    `${x + w},${y} ${x + w + ex},${y + ey} ${x + w + ex},${y + h + ey} ${x + w},${y + h}`,
    SIDE,
    S,
    1.2,
  );
  s += poly(
    `${x},${y + h} ${x + ex},${y + h + ey} ${x + w + ex},${y + h + ey} ${x + w},${y + h}`,
    SIDE,
    S,
    1.2,
  );
  // frame + title bar
  s += rect(x, y, w, h, 9, F, S, 1.6);
  s += line(x, y + bh, x + w, y + bh, T, 1);
  s += circ(x + 15, y + bh / 2, 3.4, MARK, "none", 0);
  s += circ(x + 27, y + bh / 2, 3.4, "none", T, 1.2);
  s += circ(x + 39, y + bh / 2, 3.4, "none", T, 1.2);
  s += rect(
    x + 54,
    y + bh / 2 - 7,
    Math.min(w * 0.46, 150),
    14,
    7,
    "none",
    T,
    1.1,
  );
  // content
  const px = 16;
  const cy = y + bh + 14;
  const cw = w - px * 2;
  const imgH = h * 0.34;
  s += rect(x + px, cy, cw, imgH, 5, FB, T, 1.1);
  const ix = x + px;
  const iy = cy;
  s += circ(ix + cw * 0.7, iy + imgH * 0.3, 5, "none", T, 1.1);
  s += poly(
    `${ix + 10},${iy + imgH - 6} ${ix + cw * 0.34},${iy + imgH * 0.42} ${ix + cw * 0.55},${iy + imgH - 6}`,
    "none",
    T,
    1.1,
  );
  s += poly(
    `${ix + cw * 0.4},${iy + imgH - 6} ${ix + cw * 0.62},${iy + imgH * 0.55} ${ix + cw * 0.86},${iy + imgH - 6}`,
    "none",
    T,
    1.1,
  );
  let ty = cy + imgH + 16;
  s += rect(x + px, ty, cw * 0.55, 8, 3, T, "none", 0);
  ty += 18;
  s += rect(x + px, ty, cw, 4, 2, TT, "none", 0);
  ty += 10;
  s += rect(x + px, ty, cw, 4, 2, TT, "none", 0);
  ty += 10;
  s += rect(x + px, ty, cw * 0.62, 4, 2, TT, "none", 0);
  ty += 18;
  const cardW = (cw - 12) / 2;
  const cardH = h - (ty - y) - 16;
  if (cardH > 14) {
    s += rect(x + px, ty, cardW, cardH, 5, F, T, 1.1);
    s += rect(x + px + cardW + 12, ty, cardW, cardH, 5, F, T, 1.1);
    s += rect(
      x + px + cardW + 12 + cardW - 44,
      ty + cardH - 16,
      36,
      9,
      4,
      MARK,
      "none",
      0,
    );
  }
  return s;
}

function phone(x: number, y: number, w: number, h: number) {
  const ex = 8;
  const ey = 6;
  let s = "";
  s += poly(
    `${x + w},${y + 10} ${x + w + ex},${y + 10 + ey} ${x + w + ex},${y + h + ey} ${x + w},${y + h}`,
    SIDE,
    S,
    1.1,
  );
  s += poly(
    `${x},${y + h} ${x + ex},${y + h + ey} ${x + w + ex},${y + h + ey} ${x + w},${y + h}`,
    SIDE,
    S,
    1.1,
  );
  s += rect(x, y, w, h, 14, "rgba(245,241,232,0.9)", S, 1.5);
  s += circ(x + w / 2, y + 9, 1.8, T, "none", 0);
  const px = 8;
  const cy = y + 18;
  const cw = w - px * 2;
  s += rect(x + px, cy, cw, h * 0.28, 4, FB, T, 1);
  let ty = cy + h * 0.28 + 10;
  s += rect(x + px, ty, cw * 0.7, 5, 2, T, "none", 0);
  ty += 12;
  s += rect(x + px, ty, cw, 3, 1.5, TT, "none", 0);
  ty += 8;
  s += rect(x + px, ty, cw, 3, 1.5, TT, "none", 0);
  ty += 8;
  s += rect(x + px, ty, cw * 0.6, 3, 1.5, TT, "none", 0);
  s += circ(x + w / 2 - 10, y + h - 9, 2, T, "none", 0);
  s += circ(x + w / 2, y + h - 9, 2, MARK, "none", 0);
  s += circ(x + w / 2 + 10, y + h - 9, 2, T, "none", 0);
  return s;
}

function buildSvg() {
  const body = windowUI(4, 20, 230, 175, 26) + phone(196, 118, 70, 132);
  return `<svg viewBox="0 0 360 260" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">${body}</svg>`;
}

export default function TechBlueprint() {
  const svg = useMemo(buildSvg, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 0.34, y: 0 }}
      transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden
      className="pointer-events-none absolute -left-6 top-[56%] hidden w-md -translate-y-1/2 min-[1600px]:block"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
