import { useState } from "react";

export default function SubmitReport() {
  const [form, setForm] = useState({
    date_event: "",
    location: "",
    description: "",
    media_url: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch("/api/report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("✅ Report submitted successfully!");
        setForm({
          date_event: "",
          location: "",
          description: "",
          media_url: "",
        });
      } else {
        setMessage("❌ Error: " + (data.error || "Submission failed"));
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-space-900 text-white flex items-center justify-center p-6">
      <div className="bg-space-800 rounded-xl shadow-lg w-full max-w-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Submit UFO Report</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Date */}
          <div>
            <label className="block text-sm font-medium mb-1">Date of Event</label>
            <input
              type="datetime-local"
              value={form.date_event}
              onChange={(e) => setForm({ ...form, date_event: e.target.value })}
              className="w-full rounded-lg bg-space-900 border border-gray-600 px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <input
              type="text"
              placeholder="City, Country"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              className="w-full rounded-lg bg-space-900 border border-gray-600 px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              rows={4}
              placeholder="What did you see?"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full rounded-lg bg-space-900 border border-gray-600 px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            ></textarea>
          </div>

          {/* Media */}
          <div>
            <label className="block text-sm font-medium mb-1">Media URL (optional)</label>
            <input
              type="url"
              placeholder="https://example.com/photo.jpg"
              value={form.media_url}
              onChange={(e) => setForm({ ...form, media_url: e.target.value })}
              className="w-full rounded-lg bg-space-900 border border-gray-600 px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-2 px-4 rounded-lg shadow-md"
          >
            {loading ? "Submitting..." : "Submit Report"}
          </button>
        </form>

        {/* Feedback */}
        {message && (
          <p className="mt-4 text-center text-sm text-gray-300">{message}</p>
        )}
      </div>
    </div>
  );
}
