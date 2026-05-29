import { ImageResponse } from "next/og";

export const alt = "RiceMe — terminal aesthetic for your GitHub README";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #181820 0%, #1a1a2e 50%, #1e1e36 100%)",
          fontFamily: '"JetBrains Mono", "SF Mono", "Fira Code", monospace',
          padding: "48px 64px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            border: "2px solid #363a4f",
            borderRadius: 16,
            padding: "40px 48px",
            background: "rgba(30, 30, 54, 0.6)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 32,
            }}
          >
            <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#ed8796" }} />
            <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#eed49f" }} />
            <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#a6da95" }} />
            <div
              style={{
                flex: 1,
                textAlign: "center",
                fontSize: 16,
                color: "#6e6a86",
                letterSpacing: 0.5,
              }}
            >
              riceme@github — bash
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  fontSize: 72,
                  fontWeight: 900,
                  color: "#a6da95",
                  letterSpacing: 2,
                }}
              >
                RiceMe
              </span>
              <span
                style={{
                  fontSize: 24,
                  color: "#6e6a86",
                  border: "1px solid #363a4f",
                  borderRadius: 8,
                  padding: "4px 12px",
                  marginTop: 12,
                }}
              >
                v1.0
              </span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                marginBottom: 32,
              }}
            >
              <div style={{ fontSize: 28, color: "#8aadf4", fontWeight: 700 }}>
                terminal aesthetic for your GitHub README
              </div>
              <div style={{ fontSize: 20, color: "#6e6a86" }}>
                ~ ❯ generate dynamic SVG cards with live stats
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: 24,
                fontSize: 16,
                color: "#a5adcb",
              }}
            >
              <span style={{ color: "#8bd5ca" }}>&gt; 23+ themes</span>
              <span style={{ color: "#f5bde6" }}>&gt; CRT effects</span>
              <span style={{ color: "#eed49f" }}>&gt; Live GitHub stats</span>
              <span style={{ color: "#f5a97f" }}>&gt; Customizable layout</span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: 14,
              color: "#494d64",
              paddingTop: 16,
              borderTop: "1px solid #363a4f",
            }}
          >
            github.com/Solenad/riceme-readme-generator
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
