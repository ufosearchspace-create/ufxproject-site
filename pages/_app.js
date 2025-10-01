import "../styles/globals.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-space-900 text-white">
      {/* Navbar */}
      <nav className="bg-space-800 shadow-md">
        <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-lg font-bold">UFX Project</h1>
          <div className="space-x-6">
            <Link href="/" className="hover:text-blue-400 transition">
              Home
            </Link>
            <Link href="/submit" className="hover:text-blue-400 transition">
              Submit
            </Link>
            <Link href="/report" className="hover:text-blue-400 transition">
              Reports
            </Link>
          </div>
        </div>
      </nav>

      {/* Page content */}
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
