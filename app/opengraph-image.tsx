import { ImageResponse } from "next/og";

export const alt = "Makoy Cameña — Full-stack Developer";
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    alignItems: "center",
                    background:
                        "radial-gradient(circle at 80% 20%, #164e63 0%, #020617 45%, #020617 100%)",
                    color: "white",
                    display: "flex",
                    height: "100%",
                    justifyContent: "center",
                    padding: "80px",
                    width: "100%",
                }}
            >
                <div
                    style={{
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        borderRadius: "32px",
                        display: "flex",
                        flexDirection: "column",
                        padding: "64px",
                        width: "100%",
                    }}
                >
                    <div
                        style={{
                            color: "#67e8f9",
                            display: "flex",
                            fontSize: 24,
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                        }}
                    >
                        Portfolio
                    </div>
                    <div
                        style={{
                            display: "flex",
                            fontSize: 82,
                            fontWeight: 700,
                            letterSpacing: "-0.05em",
                            marginTop: 24,
                        }}
                    >
                        Makoy Cameña
                    </div>
                    <div
                        style={{
                            color: "#cbd5e1",
                            display: "flex",
                            fontSize: 34,
                            marginTop: 16,
                        }}
                    >
                        Full-stack Developer
                    </div>
                </div>
            </div>
        ),
        size,
    );
}
