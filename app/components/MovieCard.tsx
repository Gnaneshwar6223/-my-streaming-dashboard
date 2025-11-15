import Image from "next/image";
import { Movie } from "@/types/movie";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="w-[160px] flex-shrink-0">
      <Image
        src={movie.posterURL}
        alt={movie.title}
        width={160}
        height={230}
        className="rounded-lg object-cover shadow-md hover:scale-105 transition"
      />
      <p className="mt-2 text-sm font-medium opacity-90">{movie.title}</p>
    </div>
  );
}
