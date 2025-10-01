import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import dynamic from "next/dynamic";

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

export default function ReportDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    async function fetchReport() {
      const { data, error } = await supabase
        .from("reports")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching report:", error.message);
      } else {
        setReport(data);
      }
      setLoading(false);
    }

    fetchReport();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-space-900 text-white flex items-center justify-center">
        <p>Loading report...</p>
      </div>
    );
  }

  if (!report) {
    return (
      <div className="min-h-screen bg-space-900 text-white flex items-center justify-center">
        <p>Report not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-space-900 text-white p-6">
      <div className="max-w-3xl mx-auto bg-space-800 rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-2">
          📅 {report.date_event || "Unknown date"} | 📍{" "}
          {report.location || "Unknown location"}
        </h1>

        {/* Description */}
        <p className="mb-6 whitespace-pre-line text-gray-200">
          {report.description || "No description available."}
        </p>

        {/* Media */}
        {report.media_url && (
          <div className="mb-6">
            {report.media_url.match(/\.(jpeg|jpg|png|gif)$/i) ? (
              <img
                src={report.media_url}
                alt="UFO Report media"
                className="rounded-lg shadow-md max-h-96 object-contain mx-auto"
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
        {report.latitude && report.longitude ? (
          <div className="h-96 rounded-lg overflow-hidden shadow">
            <MapContainer
              center={[report.latitude, report.longitude]}
              zoom={7}
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
          <p className="text-sm text-gray-400">🗺 No coordinates available.</p>
        )}
      </div>
    </div>
  );
}
