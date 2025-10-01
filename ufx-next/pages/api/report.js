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
      <h1 className="text-2xl font-bold mb-6">Latest UFO Reports</h1>
      {reports.length === 0 ? (
        <p>No reports found.</p>
      ) : (
        <ul className="space-y-4">
          {reports.map((r) => (
            <li key={r.id} className="p-4 bg-space-800 rounded-lg shadow">
              <p className="text-sm text-gray-400">
                {new Date(r.date_reported).toLocaleString()}
              </p>
              <p className="font-semibold">{r.location}</p>
              <p className="text-gray-300">{r.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
