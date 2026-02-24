import { useEffect } from "react";

const REDIRECT_URL = "https://artrushmn.org";

export default function App() {
  useEffect(() => {
    window.location.replace(REDIRECT_URL);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "sans-serif",
        color: "#333",
      }}
    >
      <p style={{ fontSize: "1.2rem" }}>
        Redirecting to{" "}
        <a href={REDIRECT_URL} style={{ color: "#555" }}>
          artrushmn.org
        </a>
        &hellip;
      </p>
    </div>
  );
}
