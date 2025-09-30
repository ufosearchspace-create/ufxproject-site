import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import L from "leaflet";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

const ufoIcon = new L.Icon({
  iconUrl: "/ufxlogo.png",
  iconSize: [32, 32],
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Reports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      const { data, error } = await supabase
        .from("reports")
        .select("*")
        .order("date_event", { ascending: false })
        .limit(50);

      if (!error) {
        // Geokodiranje fallback
        const withCoords = await Promise.all(
          data.map(async (r) => {
            if (!r.latitude && r.location) {
              try {
                const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
                  r.location
                )}`;
                const geoRes = await fetch(url, {
                  headers: { "User-Agent": "UFX-Project" },
                });
                const geoJson = await geoRes.json();

                if (geoJson && geoJson.length > 0) {
                  const lat = parseFloat(geoJson[0].lat);
                  const lon = parseFloat(geoJson[0].lon);

                  // Spremi u Supabase za ubuduće
                  await supabase
                    .from("reports")
                    .update({ latitude: lat, longitude: lon })
                    .eq("id", r.id);

                  return { ...r, latitude: lat, longitude: lon };
                }
              } catch (err) {
                console.error("Geocoding error:", err);
              }
            }
            return r;
          })
        );
        setReports(withCoords);
      }
    };

    fetchReports();

    const channel = supabase
      .channel("reports-feed")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "reports" },
        async (payload) => {
          let r = payload.new;
          if (!r.latitude && r.location) {
            try {
              const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
                r.location
              )}`;
              const geoRes = await fetch(url, {
                headers: { "User-Agent": "UFX-Project" },
              });
              const geoJson = await geoRes.json();
              if (geoJson && geoJson.length > 0) {
                r.latitude = parseFloat(geoJson[0].lat);
                r.longitude = parseFloat(geoJson[0].lon);

                // Update u Supabase
                await supabase
                  .from("reports")
                  .update({
                    latitude: r.latitude,
                    longitude: r.longitude,
                  })
                  .eq("id", r.id);
              }
            } catch (err) {
              console.error("Geocoding error:", err);
            }
          }
          setReports((prev) => [r, ...prev]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div className="container">
      <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <Image src="/ufxlogo.png" alt="UFX Logo" width={64} height={64} />
        <h1 style={{ marginLeft: "15px" }}>🌍 Latest UFO Reports</h1>
      </div>

      <p>
        <Link href="/">⬅ Back to Home</Link>
      </p>

      <div style={{ height: "500px", width: "100%", marginBottom: "30px" }}>
        <MapContainer center={[45.1, 15.2]} zoom={3} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          {reports
            .filter((r) => r.latitude && r.longitude)
            .map((r) => (
              <Marker key={r.id} position={[r.latitude, r.longitude]} icon={ufoIcon}>
                <Popup>
                  <b>{r.location || "Unknown location"}</b>
                  <br />
                  {r.description}
                  <br />
                  {r.date_event
                    ? new Date(r.date_event).toLocaleDateString()
                    : ""}
                </Popup>
              </Marker>
            ))}
        </MapContainer>
      </div>

      {reports.length === 0 && <p>No reports yet...</p>}
      {reports.map((r) => (
        <div key={r.id} className="card">
          <h3>
            {r.location || "Unknown location"} –{" "}
            {new Date(r.date_event || r.date_reported).toLocaleDateString()}
          </h3>
          <p>{r.description}</p>
          {r.media_url && (
            <img
              src={r.media_url}
              alt="UFO"
              width="300"
              style={{ borderRadius: "6px", marginTop: "10px" }}
            />
          )}
          <p>
            Source: {r.source || "user"} | Status: {r.ai_verdict} (score:{" "}
            {r.confidence_score})
          </p>
        </div>
      ))}
    </div>
  );
}
