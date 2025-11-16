import Image from "next/image";
import Link from "next/link";

export default function HeroBanner({ movie }) {
  const backdrop =
    movie.image?.original ??
    movie.image?.medium ??
    "/fallback.jpg";

  return (
    <section className="relative h-[70vh] w-full">
      <Image
        src={backdrop}
        alt={movie.name}
        fill
        priority
        className="object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

      {/* Text */}
      <div className="absolute bottom-20 left-10 max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          {movie.name}
        </h1>

        <Link href={`/movie/${movie.id}`}>
          <button className="px-6 py-3 bg-white text-black rounded-lg font-medium shadow hover:bg-gray-300">
            View
          </button>
        </Link>
      </div>
    </section>
  );
}
