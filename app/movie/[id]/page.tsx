// app/movie/[id]/page.tsx
import { fetchShowById } from "../../../lib/tvmaze";
import { Show } from "../../../types/show";

export default async function MoviePage({ params }: any) {
  const { id } = await params;
  const show: Show = await fetchShowById(id);

  const rawSummary = typeof show.summary === "string" ? show.summary : "";
  const safeSummary = rawSummary.trim().length > 0 ? rawSummary : "<p>No description available.</p>";

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={show.image?.original ?? show.image?.medium ?? "/fallback.jpg"}
          alt={show.name}
          className="w-full md:w-1/3 rounded-lg shadow-lg"
          suppressHydrationWarning
        />

        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">{show.name}</h1>

          <div
            className="text-gray-300 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: safeSummary }}
            suppressHydrationWarning
          />

          <p className="mt-4 text-sm text-gray-400">Premiered: {show.premiered ?? "—"}</p>
          <p className="mt-3 text-sm">Genres: {show.genres?.length ? show.genres.join(", ") : "—"}</p>
        </div>
      </div>
    </main>
  );
}
