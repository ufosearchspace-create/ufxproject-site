import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Reports() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

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
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      } finally {
        setLoading(false);
      }
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
                {/* Date & Location */}
                <p className="text-sm text-gray-400 mb-2">
                  📅{" "}
                  {report.date
                    ? new Date(report.date).toLocaleString()
                    : "Unknown date"}{" "}
                  | 📍 {report.location || "Unknown location"}
                </p>

                {/* Description */}
                <p className="mb-3 whitespace-pre-line">
                  {report.description || "No description provided."}
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
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
