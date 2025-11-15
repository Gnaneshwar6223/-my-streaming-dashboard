import Image from "next/image";
import { fetchMovieById } from "../../../lib/tmdb";

export default async function MovieDetailPage(props: any) {
  const { id } = props.params;

  const movie = await fetchMovieById(Number(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold">{movie.title}</h1>

      <Image
        src={movie.posterURL}
        alt={movie.title}
        width={300}
        height={450}
        className="mx-auto mt-6 rounded-lg"
      />
    </div>
  );
}
