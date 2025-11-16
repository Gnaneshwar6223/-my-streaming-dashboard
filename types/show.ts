// types/show.ts
export interface Show {
  id: number;
  name: string;
  summary?: string | null;
  premiered?: string | null;
  genres?: string[];
  image?: {
    medium?: string | null;
    original?: string | null;
  } | null;
  rating?: { average?: number | null };
}
