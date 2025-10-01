import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import dynamic from "next/dynamic";
import Link from "next/link";

// Dynamic imports za Leaflet (bez SSR bugova)
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Report() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReports() {
      const { data, error } = await supabase
        .from("reports")
        .select("*")
        .order("date_event", { ascending: false })
        .limit(50);

      if (error) {
        console.error("Error fetching reports:", error.message);
      } else {
        setReports(data || []);
      }
      setLoading(false);
    }

    fetchReports();
  }, []);

  return (
    <div className="min-h-screen bg-space-900 text-white p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Latest UFO Reports</h1>

        {loading ? (
          <p className="text-center text-gray-400">Loading reports...</p>
        ) : reports.length === 0 ? (
          <p className="text-center text-gray-400">No reports submitted yet.</p>
        ) : (
          <div className="space-y-6">
            {reports.map((report) => (
              <div
                key={report.id}
                className="bg-space-800 rounded-xl shadow-lg p-6 border border-gray-700"
              >
                {/* Klikabilan naslov vodi na detaljnu stranicu */}
                <Link href={`/report/${report.id}`}>
                  <h2 className="text-lg font-semibold text-blue-400 hover:underline cursor-pointer mb-2">
                    📅 {report.date_event || "Unknown date"} | 📍{" "}
                    {report.location || "Unknown location"}
                  </h2>
                </Link>

                {/* Kratki opis (preview) */}
                <p className="mb-3 text-sm text-gray-300 line-clamp-3">
                  {report.description || "No description available."}
                </p>

                {/* Media (thumbnail ili link) */}
                {report.media_url && (
                  <div className="mt-2">
                    {report.media_url.match(/\.(jpeg|jpg|png|gif)$/i) ? (
                      <img
                        src={report.media_url}
                        alt="UFO Report media"
                        className="rounded-lg shadow-md max-h-48 object-cover"
                      />
                    ) : (
                      <a
                        href={report.media_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                      >
                        View Media
                      </a>
                    )}
                  </div>
                )}

                {/* Mini mapa */}
                {report.latitude && report.longitude ? (
                  <div className="mt-4 h-48 rounded-lg overflow-hidden shadow">
                    <MapContainer
                      center={[report.latitude, report.longitude]}
                      zoom={6}
                      style={{ height: "100%", width: "100%" }}
                    >
                      <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <Marker position={[report.latitude, report.longitude]} />
                    </MapContainer>
                  </div>
                ) : (
                  <p className="text-xs text-gray-500 mt-2">
                    🗺 No coordinates available
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
