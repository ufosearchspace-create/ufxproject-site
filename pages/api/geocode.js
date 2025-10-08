import fetch from "node-fetch";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const openCageKey = process.env.OPENCAGE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
  // ✅ Allow GET (cron) and POST (manual run)
  if (req.method !== "GET" && req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  console.log("🚀 [Cron/API] Geocode triggered at:", new Date().toISOString());

  try {
    // 🧩 1️⃣ Ako ručno šalješ body s lokacijom → koristi to
    const { reportId, location } = req.body || {};

    if (location) {
      console.log(`🌍 Manual geocode request for: ${location}`);
      const geoData = await geocodeLocation(location);
      return res.status(200).json(geoData);
    }

    // 🧩 2️⃣ Ako nema ništa u body → radi batch (cron)
    const { data: reports, error } = await supabase
      .from("reports")
      .select("id, location")
      .is("latitude", null)
      .limit(50);

    if (error) throw error;

    if (!reports || reports.length === 0) {
      console.log("✅ Nema novih zapisa za geokodiranje.");
      return res.status(200).json({ message: "No new reports to geocode." });
    }

    let updatedCount = 0;

    for (const report of reports) {
      if (!report.location) continue;

      try {
        const { lat, lng } = await geocodeLocation(report.location);

        await supabase
          .from("reports")
          .update({ latitude: lat, longitude: lng })
          .eq("id", report.id); 

        updatedCount++;
      } catch (err) {
        console.warn(`⚠️  Greška kod ${report.location}`, err.message);
      }
    }

    console.log(`✅ Geokodirano ${updatedCount} zapisa.`);
    return res.status(200).json({
      success: true,
      processed: updatedCount,
      total: reports.length,
    });
  } catch (err) {
    console.error("❌ [Cron/API] Greška:", err);
    return res.status(500).json({ success: false, error: err.message });
  }
}

// 🔹 Pomoćna funkcija
async function geocodeLocation(location) {
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
    location
  )}&key=${openCageKey}&limit=1`;

  const geoRes = await fetch(url);
  const geoData = await geoRes.json();

  if (
    geoData.results &&
    geoData.results[0] &&
    geoData.results[0].geometry
  ) {
    const { lat, lng } = geoData.results[0].geometry;
    console.log(`📍 ${location} → ${lat}, ${lng}`);
    return { lat, lng };
  } else {
    throw new Error(`No coordinates found for: ${location}`);
  }
}
