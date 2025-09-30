import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Image from "next/image";
import Link from "next/link";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Submit() {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let fileUrl = null;
    if (file) {
      const fileName = `${Date.now()}_${file.name}`;
      const { error: uploadError } = await supabase.storage
        .from("reports")
        .upload(fileName, file);

      if (uploadError) {
        setMessage("❌ Upload error: " + uploadError.message);
        return;
      }

      const { data: publicUrl } = supabase.storage
        .from("reports")
        .getPublicUrl(fileName);

      fileUrl = publicUrl.publicUrl;
    }

    const { error: insertError } = await supabase.from("reports").insert([
      {
        description,
        location,
        reporter_type: "user",
        source: "web_form",
        ai_verdict: "unknown",
        confidence_score: 0,
        media_url: fileUrl,
      },
    ]);

    if (insertError) {
      setMessage("❌ Error: " + insertError.message);
    } else {
      setMessage("✅ Report submitted successfully!");
      setDescription("");
      setLocation("");
      setFile(null);
    }
  };

  return (
    <div className="container">
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <Image src="/ufxlogo.png" alt="UFX Logo" width={64} height={64} />
        <h1 style={{ marginLeft: "15px" }}>➕ Submit UFO Report</h1>
      </div>

      <p>
        <Link href="/">⬅ Back to Home</Link>
      </p>

      {/* Forma */}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "400px" }}>
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          rows={4}
        />
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit">Submit Report</button>
      </form>

      {message && <p style={{ marginTop: "15px" }}>{message}</p>}
    </div>
  );
}
