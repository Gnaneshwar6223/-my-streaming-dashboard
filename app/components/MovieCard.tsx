import Image from "next/image";
import Link from "next/link";
import { Show } from "../../types/show";

export default function MovieCard({ movie }: { movie: Show }) {

  const poster =
    movie.image?.medium ??
    movie.image?.original ??
    "/fallback.jpg";

  return (
    <Link
      href={`/movie/${movie.id}`}
      className="group relative block w-[160px] shrink-0"
    >
      {/* Image with hover animation */}
      <div
        className="
          overflow-hidden rounded-lg
          transition-all duration-300
          group-hover:scale-110
          group-hover:-translate-y-2
          group-hover:shadow-2xl
        "
      >
        <Image
          src={poster}
          alt={movie.name}
          width={160}
          height={240}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Movie name */}
      <p className="mt-2 text-sm text-white group-hover:text-red-400 transition-colors">
        {movie.name}
      </p>
    </Link>
  );
}
