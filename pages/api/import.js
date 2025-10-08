// pages/api/import.js
import { importNUFORC } from "../../lib/import/nuforc.js";
import path from "path";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    console.log("🚀 Import NUFORC started...");

    // Putanja do CSV-a (scrubbed.csv koji si uploadirao u projekt)
    const filePath = path.join(process.cwd(), "scrubbed.csv");

    await importNUFORC(filePath);

    res.status(200).json({ message: "NUFORC import complete" });
  } catch (err) {
    console.error("❌ Import error:", err);
    res.status(500).json({ error: err.message });
  }
}
