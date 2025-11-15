import type { Movie } from "@/types/movie";

// Action Movies
export async function fetchAction(): Promise<Movie[]> {
  return [
    {
      id: 1,
      title: "The Dark Knight",
      posterURL: "/dark-knight.jpg",
    },
    {
      id: 2,
      title: "Inception",
      posterURL: "/inception.jpg",
    },
  ];
}

// Animation Movies
export async function fetchAnimation(): Promise<Movie[]> {
  return [
    {
      id: 3,
      title: "Finding Nemo",
      posterURL: "/nemo.jpg",
    },
    {
      id: 4,
      title: "Toy Story",
      posterURL: "/toy-story.jpg",
    },
  ];
}

// Drama Movies
export async function fetchDrama(): Promise<Movie[]> {
  return [
    {
      id: 5,
      title: "Interstellar",
      posterURL: "/interstellar.jpg",
    },
    {
      id: 6,
      title: "Shawshank Redemption",
      posterURL: "/shawshank.jpg",
    },
  ];
}

// Fetch by ID (optional for detail page)
export async function fetchMovieById(id: number): Promise<Movie | undefined> {
  const allMovies = [
    ...(await fetchAction()),
    ...(await fetchAnimation()),
    ...(await fetchDrama()),
  ];

  return allMovies.find((movie) => movie.id === id);
}
