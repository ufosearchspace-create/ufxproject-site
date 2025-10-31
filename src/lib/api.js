const BASE = import.meta.env.VITE_BACKEND_URL || '';

export async function post(path, body) {
  const res = await fetch(`${BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  return res.json();
}

export async function get(path) {
  const res = await fetch(`${BASE}${path}`);
  return res.json();
}
export default { get, post };
