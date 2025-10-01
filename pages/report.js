import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import dynamic from "next/dynamic";

// Dinamički import Leaflet komponenata (da radi na Next.js, bez SSR problema)
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
  const [coords, setCoords] = useState({}); // spremamo geokodirane koordinate za lokacije

  useEffect(() => {
    async function fetchReports() {
      try {
        const { data, error } = await supabase
          .from("reports")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Error fetching reports:", error.message);
        } else {
          setReports(data || []);

          // odmah geokodiramo lokacije
          data.forEach((report) => {
            if (report.location) {
              geocodeLocation(report.id, report.location);
            }
          });
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchReports();
  }, []);

  // Funkcija za geokodiranje lokacije
  async function geocodeLocation(reportId, location) {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          location
        )}`
      );
      const data = await res.json();
      if (data && data.length > 0) {
        const { lat, lon } = data[0];
        setCoords((prev) => ({
          ...prev,
          [reportId]: { lat: parseFloat(lat), lon: parseFloat(lon) },
        }));
      }
    } catch (err) {
      console.error("Geocode error:", err);
    }
  }

  return (
    <div className="min-h-screen bg-space-900 text-white p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Latest UFO Reports</h1>
        <h2 className="text-center text-red-400">TEST BUILD</h2>

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
                {/* Date & Location */}
                <p className="text-sm text-gray-400 mb-2">
                  📅{" "}
                  {report.date && !isNaN(Date.parse(report.date))
                    ? new Date(report.date).toLocaleString()
                    : report.date || "Unknown date"}{" "}
                  | 📍 {report.location || "Unknown location"}
                </p>

                {/* Description */}
                <p className="mb-3 whitespace-pre-line">
                  {report.description || "No description available."}
                </p>

                {/* Media Preview */}
                {report.media_url && (
                  <div className="mt-3">
                    {report.media_url.match(/\.(jpeg|jpg|png|gif)$/i) ? (
                      <img
                        src={report.media_url}
                        alt="UFO Report media"
                        className="rounded-lg shadow-md max-h-64 object-cover"
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

                {/* Map */}
                {coords[report.id] && (
                  <div className="mt-4 h-64 rounded-lg overflow-hidden shadow">
                    <MapContainer
                      center={[coords[report.id].lat, coords[report.id].lon]}
                      zoom={6}
                      style={{ height: "100%", width: "100%" }}
                    >
                      <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <Marker position={[coords[report.id].lat, coords[report.id].lon]} />
                    </MapContainer>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
