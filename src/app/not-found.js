import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "60vh", textAlign: "center", padding: "2rem" }}>
      <h1 style={{ fontSize: "5rem", fontWeight: 700, margin: 0, fontFamily: "SUSE Mono" }}>404</h1>
      <p style={{ fontSize: "1.2rem", color: "#888", margin: "1rem 0 2rem" }}>The page you are looking for does not exist.</p>
      <Link href="/" style={{ background: "#6de105", color: "#000", padding: "0.75rem 2rem", borderRadius: "8px", fontWeight: 600, textDecoration: "none" }}>
        Go back home
      </Link>
    </div>
  );
}
