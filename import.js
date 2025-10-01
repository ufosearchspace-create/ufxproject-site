import fs from "fs";
import csv from "csv-parser";
import { createClient } from "@supabase/supabase-js";
import "dotenv/config";

// Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY // koristimo service role za insert
);

// Path do CSV datoteke (preuzete s Kaggle-a)
const CSV_FILE = "./ufo-sightings.csv"; // promijeni ime ako se drugačije zove

async function importData() {
  const rows = [];
  
  // Čitamo CSV red po red
  fs.createReadStream(CSV_FILE)
    .pipe(csv())
    .on("data", (row) => {
      try {
        // Mapiramo polja iz dataset-a na našu tablicu
        rows.push({
          description: row.comments || "No description",
          location: `${row.city || ""}, ${row.country || ""}`.trim(),
          latitude: row.latitude ? parseFloat(row.latitude) : null,
          longitude: row.longitude ? parseFloat(row.longitude) : null,
          date_event: row.datetime || null,
          reporter_type: "dataset_import",
          source: "Kaggle-UFO",
          ai_verdict: "unknown",
          confidence_score: 0,
          status: "verified",
        });
      } catch (e) {
        console.error("Row parse error:", e);
      }
    })
    .on("end", async () => {
      console.log(`Parsed ${rows.length} rows, inserting into Supabase...`);

      // Batch insert (npr. po 500 redaka odjednom da se ne zaguši)
      const batchSize = 500;
      for (let i = 0; i < rows.length; i += batchSize) {
        const chunk = rows.slice(i, i + batchSize);
        const { error } = await supabase.from("reports").insert(chunk);
        if (error) {
          console.error("Insert error:", error.message);
          break;
        }
        console.log(`Inserted rows ${i + 1}–${i + chunk.length}`);
      }

      console.log("✅ Import finished!");
    });
}

importData();
