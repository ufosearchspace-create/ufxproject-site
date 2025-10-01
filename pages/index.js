import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-space-900 text-white flex items-center justify-center p-6">
      <div className="max-w-3xl text-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/ufxlogo.png"
            alt="UFX Logo"
            className="w-32 h-32 mx-auto drop-shadow-lg"
          />
        </div>

        {/* Title & Tagline */}
        <h1 className="text-4xl font-bold mb-4">Decentralized UFO Investigation Network</h1>
        <p className="text-lg text-gray-300 mb-8">
          Submit UFO reports, explore sightings, and verify them with blockchain anchoring & AI analysis.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://pump.fun/coin/Ch8rHHEwBBLczBwRpGqw6Yvzv4YpvPThGXcs2Z1Tpump" // 👉 ovdje stavi točan Pump.fun URL tvog tokena
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 px-6 rounded-lg shadow-md"
          >
            Buy on Pump.fun
          </a>

          <a
            href="/whitepaper.pdf" // 👉 PDF stavi u public/whitepaper.pdf
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 border border-gray-600 transition text-white font-semibold py-3 px-6 rounded-lg shadow-md"
          >
            Read Whitepaper
          </a>

          <a
            href="https://x.com/ufx_project"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-gray-900 transition text-white font-semibold py-3 px-6 rounded-lg shadow-md"
          >
            Follow us on X
          </a>
        </div>
      </div>
    </div>
  );
}
