import { createClient } from "@supabase/supabase-js";
import * as cheerio from "cheerio";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  try {
    // 1. Fetch NUFORC HTML
    const response = await fetch("https://nuforc.org/subndx/?id=all");
    const html = await response.text();

    // 2. Parse HTML tablice
    const $ = cheerio.load(html);
    const allRows = [];

    $("table tr").each((i, row) => {
      const cells = $(row).find("td");
      if (cells.length >= 5) {
        const date_event = $(cells[0]).text().trim();
        const city = $(cells[1]).text().trim();
        const state = $(cells[2]).text().trim();
        const shape = $(cells[3]).text().trim();
        const summary = $(cells[4]).text().trim();

        allRows.push({
          external_id: `${date_event}_${city}_${state}_${i}`,
          description: `${shape ? `[${shape}] ` : ""}${summary}`,
          location: `${city}, ${state}`,
          latitude: null,
          longitude: null,
          date_event: date_event || null,
          reporter_type: "dataset_import",
          source: "NUFORC_HTML",
          ai_verdict: "unknown",
          confidence_score: 0,
          status: "verified",
        });
      }
    });

    // 3. Uzmi samo zadnjih 100 prijava
    const rows = allRows.slice(0, 100);

    // 4. Ubaci u Supabase (deduplikacija po external_id)
    const { error } = await supabase.from("reports").upsert(rows, {
      onConflict: "external_id",
    });

    if (error) throw error;

    return res.status(200).json({ success: true, inserted: rows.length });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, error: err.message });
  }
}
