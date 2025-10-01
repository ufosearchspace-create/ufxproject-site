import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function ReportPage() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadReports() {
      const { data, error } = await supabase
        .from("reports")
        .select("id, location, description, date_reported")
        .order("date_reported", { ascending: false })
        .limit(50);

      if (error) {
        console.error("Error loading reports:", error);
      } else {
        setReports(data || []);
      }
      setLoading(false);
    }

    loadReports();
  }, []);

  if (loading) return <p className="p-6 text-gray-400">Loading reports...</p>;

  return (
    <div className="min-h-screen bg-space-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Latest UFO Reports</h1>

      {reports.length === 0 ? (
        <p className="text-center text-gray-400">No reports found.</p>
      ) : (
        <div className="grid gap-6 max-w-3xl mx-auto">
          {reports.map((r) => (
            <div
              key={r.id}
              className="bg-space-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <p className="text-sm text-gray-400 mb-2">
                {r.date_reported
                  ? new Date(r.date_reported).toLocaleString()
                  : "No date"}
              </p>
              <p className="text-lg font-semibold">{r.location || "Unknown location"}</p>
              <p className="mt-2 text-gray-300">{r.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
