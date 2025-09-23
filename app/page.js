import "./globals.css";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-10">
      <h1 className="text-5xl font-extrabold text-space-accent">UFX Project</h1>
      <p className="mt-6 text-lg max-w-2xl text-gray-300">
        Exploring the Unknown, Together on the Blockchain.
      </p>
      <div className="mt-8 flex gap-4">
        <a href="#" className="px-5 py-3 bg-space-neon rounded-xl font-semibold">Buy on Pump.fun</a>
        <a href="/whitepaper.pdf" className="px-5 py-3 bg-space-accent text-black rounded-xl font-semibold">Read Whitepaper</a>
      </div>
    </main>
  );
}
