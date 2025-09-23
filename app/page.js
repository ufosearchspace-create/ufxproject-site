import "./globals.css";

export default function Home() {
  return (
    <main
      className="min-h-screen w-full flex flex-col items-center justify-center text-center p-6"
      style={{
        backgroundColor: "#0a0f1c", // ista boja kao pozadina loga
      }}
    >
      {/* Logo */}
      <img
        src="/logo.png"
        alt="UFX Logo"
        className="w-48 md:w-64 mb-6 drop-shadow-[0_0_20px_rgba(0,255,255,0.8)]"
      />

      {/* Tagline */}
      <h1 className="text-2xl md:text-3xl font-bold text-cyan-300 drop-shadow-md">
        Decentralized UFO Investigation Network
      </h1>

      {/* Buttons */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href="https://pump.fun"
          target="_blank"
          className="px-5 py-3 bg-cyan-400 text-black rounded-xl font-semibold hover:bg-cyan-300 transition"
        >
          Buy on Pump.fun
        </a>

        <a
          href="/whitepaper.pdf"
          className="px-5 py-3 bg-white/10 text-cyan-300 rounded-xl font-semibold hover:bg-white/20 transition"
        >
          Read Whitepaper
        </a>

        <a
          href="https://x.com/ufx_project"
          target="_blank"
          className="px-5 py-3 bg-black/70 text-cyan-300 rounded-xl font-semibold hover:bg-black/90 transition"
        >
          Follow us on X
        </a>
      </div>
    </main>
  );
}
