import express from "express";
import multer from "multer";
import { createClient } from "@supabase/supabase-js";
import "dotenv/config";
import fs from "fs";

const app = express();
const upload = multer({ dest: "uploads/" });

// Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY // koristimo service_role jer upload ide sa servera
);

// Endpoint: upload prijave
app.post("/report", upload.single("image"), async (req, res) => {
  try {
    const { description, location } = req.body;
    const file = req.file;

    // Upload slike u Supabase storage
    const fileName = `${Date.now()}_${file.originalname}`;
    const fileBuffer = fs.readFileSync(file.path);

    const { data: storageData, error: storageError } = await supabase.storage
      .from("reports")
      .upload(fileName, fileBuffer, {
        contentType: file.mimetype,
        upsert: true,
      });

    if (storageError) throw storageError;

    // Generiraj public URL slike
    const { data: publicUrlData } = supabase.storage
      .from("reports")
      .getPublicUrl(fileName);

    // Insert u tablicu reports
    const { data: reportData, error: reportError } = await supabase
      .from("reports")
      .insert([
        {
          description,
          location,
          reporter_type: "user",
          source: "web_form",
          ai_verdict: "unknown",
          confidence_score: 0,
          media_url: publicUrlData.publicUrl,
        },
      ])
      .select();

    if (reportError) throw reportError;

    res.json({ success: true, report: reportData });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Pokreni server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
