// pages/api/ai_analysis.js
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { report_id, analysis } = req.body;

    if (!report_id || !analysis) {
      return res.status(400).json({ error: "report_id and analysis required" });
    }

    const { data, error } = await supabase
      .from("ai_analysis")
      .insert([{ report_id, analysis }])
      .select();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data[0]);
  }

  if (req.method === "GET") {
    const { report_id } = req.query;
    if (!report_id) {
      return res.status(400).json({ error: "report_id required" });
    }

    const { data, error } = await supabase
      .from("ai_analysis")
      .select("*")
      .eq("report_id", report_id)
      .order("created_at", { ascending: false });

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  return res.status(405).json({ error: "Method not allowed" });
}
