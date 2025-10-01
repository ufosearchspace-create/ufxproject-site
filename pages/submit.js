import { useState } from "react";

export default function SubmitReport() {
  const [form, setForm] = useState({
    date_event: "",
    location: "",
    description: "",
    media_url: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Submitting...");

    try {
      const res = await fetch("/api/report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (data.success) {
        setMessage("✅ Report submitted successfully!");
        setForm({ date_event: "", location: "", description: "", media_url: "" });
      } else {
        setMessage("❌ Error: " + data.error);
      }
    } catch (err) {
      setMessage("❌ Failed to connect to server.");
    }
  };

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
              name="date_event"
              value={form.date_event}
              onChange={handleChange}
              className="w-full rounded-lg bg-space-900 border border-gray-600 px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="City, Country"
              className="w-full rounded-lg bg-space-900 border border-gray-600 px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={4}
              placeholder="What did you see?"
              className="w-full rounded-lg bg-space-900 border border-gray-600 px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Media */}
          <div>
            <label className="block text-sm font-medium mb-1">Media URL (optional)</label>
            <input
              type="url"
              name="media_url"
              value={form.media_url}
              onChange={handleChange}
              placeholder="https://example.com/photo.jpg"
              className="w-full rounded-lg bg-space-900 border border-gray-600 px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-2 px-4 rounded-lg shadow-md"
          >
            Submit Report
          </button>
        </form>

        {message && <p className="mt-4 text-center text-sm">{message}</p>}
      </div>
    </div>
  );
}
