// app/page.tsx
import HeroBanner from "./components/HeroBanner";
import MovieRow from "./components/MovieRow";
import { fetchPopular, fetchTopRated, fetchNew } from "../lib/tvmaze";
import { Show } from "../types/show";

export default async function Page() {
  const popular: Show[] = await fetchPopular();
  const top: Show[] = await fetchTopRated();
  const latest: Show[] = await fetchNew();

  const hero = popular.length > 0 ? popular[0] : null;

  return (
    <main className="max-w-6xl mx-auto px-6 py-8">
      {hero && <HeroBanner movie={hero} />}

      <div className="mt-12 space-y-10">
        <MovieRow title="Popular" movies={popular.slice(0, 24)} />
        <MovieRow title="Top Rated" movies={top} />
        <MovieRow title="New Releases" movies={latest.slice(0, 24)} />
      </div>
    </main>
  );
}
