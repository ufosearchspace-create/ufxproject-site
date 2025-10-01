import { createClient } from "@supabase/supabase-js";

// Kreiramo Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { date_event, location, description, media_url } = req.body;

    if (!description) {
      return res.status(400).json({ error: "Description is required" });
    }

    // Spremaj u Supabase tablicu reports
    const { data, error } = await supabase
      .from("reports")
      .insert([
        {
          date_event,
          location,
          description,
          media_url,
          source: "user",
          status: "pending"
        }
      ])
      .select();

    if (error) {
      console.error("Supabase insert error:", error);
      return res.status(500).json({ error: error.message });
    }

    res.status(200).json({ success: true, report: data[0] });
  } catch (err) {
    console.error("API error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}
