import { ImageResponse } from "next/og";

export const alt = "CSL Vanguard — Big-agency craft, small-business budgets";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#15130F",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 28,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#B9B4A7",
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              backgroundColor: "#2F6BFF",
              borderRadius: 8,
            }}
          />
          CSL Vanguard
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 76,
            lineHeight: 1.05,
            fontWeight: 300,
            color: "#F3F0E8",
            maxWidth: 900,
          }}
        >
          Websites with big-studio craft, built for real budgets.
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#8A857A",
          }}
        >
          Custom builds · rescues · components · marketing · hosting
        </div>
      </div>
    ),
    { ...size },
  );
}
