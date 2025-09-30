import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        background: "#0a0a0a",
        color: "#fff",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      {/* Logo */}
      <div style={{ marginBottom: "20px" }}>
        <Image
          src="/ufxlogo.png" // stavi svoju verziju loga (npr. UFX_X_512.png)
          alt="UFX Logo"
          width={128}
          height={128}
        />
      </div>

      {/* Naslov */}
      <h1>🛸 UFX Project</h1>
      <p>
        Welcome to the <b>UFX Project</b> – a global UFO reporting and AI
        verification platform powered by the community.
      </p>

      {/* Navigacija */}
      <nav style={{ marginTop: "30px" }}>
        <ul style={{ listStyle: "none", padding: 0, lineHeight: "2em" }}>
          <li>
            <Link href="/reports">🌍 View Reports</Link>
          </li>
          <li>
            <Link href="/submit">➕ Submit a Report</Link>
          </li>
          <li>
            <a href="https://pump.fun/" target="_blank" rel="noreferrer">
              💰 Buy $UFX
            </a>
          </li>
          <li>
            <a href="/whitepaper.pdf" target="_blank" rel="noreferrer">
              📄 Whitepaper
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
