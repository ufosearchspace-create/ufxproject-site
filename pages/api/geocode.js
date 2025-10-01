// pages/api/geocode.js
import fetch from "node-fetch";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY; // ⚠️ server-only key

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { reportId, location } = req.body;
  if (!reportId || !location) {
    return res.status(400).json({ error: "Missing reportId or location" });
  }

  try {
    const q = encodeURIComponent(location);
    const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${q}`;
    const nomRes = await fetch(url, {
      headers: { "User-Agent": "UFXProject/1.0 (contact@example.com)" },
    });
    const data = await nomRes.json();

    if (data && data.length > 0) {
      const lat = parseFloat(data[0].lat);
      const lon = parseFloat(data[0].lon);

      const { error } = await supabase
        .from("reports")
        .update({ latitude: lat, longitude: lon })
        .eq("id", reportId);

      if (error) {
        console.error("Supabase update error:", error);
        return res.status(500).json({ error: "DB update failed" });
      }

      return res.status(200).json({ lat, lon });
    } else {
      return res.status(200).json({ lat: null, lon: null });
    }
  } catch (err) {
    console.error("Geocode error:", err);
    return res.status(500).json({ error: "Geocode failed" });
  }
}
