import "./globals.css";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-10">
  {/* Logo */}
  <img src="/logo.png" alt="UFX Logo" className="w-64 mb-8 drop-shadow-lg" />

  {/* Tagline */}
  <p className="mt-6 text-lg max-w-2xl text-cyan-400 font-semibold">
    Decentralized UFO Investigation Network
  </p>

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
      className="px-5 py-3 bg-white/10 text-cyan-400 rounded-xl font-semibold hover:bg-white/20 transition"
    >
      Read Whitepaper
    </a>

    <a
      href="https://x.com/ufxproject"
      target="_blank"
      className="px-5 py-3 bg-black/70 text-cyan-400 rounded-xl font-semibold hover:bg-black/90 transition"
    >
      Follow us on X
    </a>
  </div>
</main>

  );
}
