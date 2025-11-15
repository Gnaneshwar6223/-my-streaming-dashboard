import MovieCard from "./MovieCard";
import type { Movie } from "@/types/movie";

export default function MovieRow({
  title,
  movies,
}: {
  title: string;
  movies: Movie[];
}) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-3">{title}</h2>

      {/* 👇 Horizontal Scroll */}
      <div className="flex gap-5 overflow-x-auto pb-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
