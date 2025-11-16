// lib/tvmaze.ts
const BASE = "https://api.tvmaze.com";

export async function fetchPopular() {
  const res = await fetch(`${BASE}/shows`);
  if (!res.ok) throw new Error(`TVMaze fetch failed: ${res.status}`);
  return res.json();
}

export async function fetchTopRated() {
  const res = await fetch(`${BASE}/shows`);
  if (!res.ok) throw new Error(`TVMaze fetch failed: ${res.status}`);
  const data = await res.json();
  return data
    .filter((s:any) => s.rating?.average)
    .sort((a:any,b:any) => (b.rating.average || 0) - (a.rating.average || 0))
    .slice(0, 24);
}

export async function fetchNew() {
  const res = await fetch(`${BASE}/shows?page=1`);
  if (!res.ok) throw new Error(`TVMaze fetch failed: ${res.status}`);
  return res.json();
}

export async function fetchShowById(id: string) {
  const res = await fetch(`${BASE}/shows/${encodeURIComponent(id)}`);
  if (!res.ok) throw new Error(`TVMaze fetch failed: ${res.status}`);
  return res.json();
}
