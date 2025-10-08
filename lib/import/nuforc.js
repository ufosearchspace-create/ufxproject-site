import fs from "fs";
import csv from "csv-parser";
import { createClient } from "@supabase/supabase-js";
import { parse } from "date-fns";

// Spoji se na Supabase koristeći tvoje env varijable
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function importNUFORC(filePath) {
  return new Promise((resolve, reject) => {
    const rows = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (row) => {
        try {
          // ✅ Parse datetime iz CSV-a (npr. "1/1/1995 00:00")
          let eventDate = null;
          if (row.datetime) {
            try {
              eventDate = parse(row.datetime, "M/d/yyyy HH:mm", new Date());
            } catch (e) {
              console.error("❌ Neuspjelo parsiranje datuma:", row.datetime);
              eventDate = null;
            }
          }

          // ✅ Lokacija (City, State, Country)
          const location = [row.city, row.state, row.country]
            .filter(Boolean)
            .join(", ");

          // ✅ Hash za prepoznavanje duplikata
          const hash =
            (row.datetime || "") +
            "-" +
            (row.city || "") +
            "-" +
            (row.comments || "").slice(0, 20);

          rows.push({
            date_event: eventDate ? eventDate.toISOString() : null,
            location,
            description: row.comments || null,
            media_url: null,
            source: "NUFORC",
            hash,
          });
        } catch (err) {
          console.error("Row parse error:", err);
        }
      })
      .on("end", async () => {
        console.log(`📊 Parsed ${rows.length} NUFORC reports`);

        try {
          // ✅ Deduplicate po hash-u
          const unique = new Map();
          rows.forEach((r) => {
            if (!unique.has(r.hash)) {
              unique.set(r.hash, r);
            } else {
              // Ako već postoji isti hash, zadrži onaj s duljim opisom
              const existing = unique.get(r.hash);
              if (
                r.description &&
                (!existing.description ||
                  r.description.length > existing.description.length)
              ) {
                unique.set(r.hash, r);
              }
            }
          });

          const uniqueRows = Array.from(unique.values());
          console.log(`📊 Deduplicated: ${uniqueRows.length} unique reports`);

          // 🚀 Ubacujemo u batch-evima od 2000 redaka
          const chunkSize = 2000;
          for (let i = 0; i < uniqueRows.length; i += chunkSize) {
            const chunk = uniqueRows.slice(i, i + chunkSize);
            const { error } = await supabase.from("reports").upsert(chunk, {
              onConflict: ["hash"],
            });

            if (error) {
              console.error("❌ Import error:", error);
              return reject(error);
            }

            console.log(
              `✅ Imported batch ${i / chunkSize + 1} (${chunk.length} rows)`
            );
          }

          console.log("🎉 NUFORC import complete!");
          resolve();
        } catch (err) {
          reject(err);
        }
      });
  });
}
