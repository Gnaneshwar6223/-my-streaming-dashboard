import MovieRow from "./components/MovieRow";
import HeroBanner from "./components/HeroBanner";
import { fetchAction, fetchAnimation, fetchDrama } from "../lib/tmdb";

export default async function HomePage() {
  const [action, animation, drama] = await Promise.all([
    fetchAction(),
    fetchAnimation(),
    fetchDrama(),
  ]);

  return (
    <div>
      <HeroBanner />

      <MovieRow title="Action Movies" movies={action} />
      <MovieRow title="Animation Movies" movies={animation} />
      <MovieRow title="Drama Movies" movies={drama} />
    </div>
  );
}
