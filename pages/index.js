import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-space-900 text-white flex items-center justify-center p-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to UFX Project</h1>
        <p className="text-lg text-gray-300 mb-8">
          A community-driven platform to document and analyze UFO sightings.
          <br />
          Submit your reports, explore the latest sightings, and join the
          movement to bring clarity to the unexplained.
        </p>

        <div className="flex justify-center space-x-6">
          <Link
            href="/submit"
            className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 px-6 rounded-lg shadow-md"
          >
            Submit Report
          </Link>

          <Link
            href="/report"
            className="bg-space-800 border border-gray-600 hover:border-blue-500 transition text-white font-semibold py-3 px-6 rounded-lg shadow-md"
          >
            View Reports
          </Link>
        </div>
      </div>
    </div>
  );
}
