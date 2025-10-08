// pages/api/report.js
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY // server-only key
);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { date_event, location, description, media_url } = req.body;

    const { data, error } = await supabase
      .from("reports")
      .insert([{ date_event, location, description, media_url }])
      .select();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data[0]);
  }

  if (req.method === "GET") {
    const { data, error } = await supabase
      .from("reports")
      .select("*")
      .order("date_event", { ascending: false })
      .order("created_at", { ascending: false });

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  return res.status(405).json({ error: "Method not allowed" });
}
