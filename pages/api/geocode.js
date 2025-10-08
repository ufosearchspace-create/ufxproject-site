@"
export default function handler(req, res) {
  const now = new Date().toISOString();
  console.log("✅ Cron ran at:", now);

  res.status(200).json({
    message: "✅ Cron ran",
    timestamp: now
  });
}
"@ | Out-File -Encoding utf8 pages\api\geocode.js
