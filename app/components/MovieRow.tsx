"use client";

import MovieCard from "./MovieCard";

import { Show } from "../../types/show";

export default function MovieRow({
  title,
  movies,
}: {
  title: string;
  movies: Show[];
}) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>

      <div className="flex gap-4 overflow-x-scroll no-scrollbar">
        {movies.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </div>
    </section>
  );
}


