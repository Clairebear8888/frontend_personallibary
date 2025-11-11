export type Memory = {
  id: number;
  title: string;
  description: string;
  location?: string | null;
  countryId: number;
  createdAt: string;
  updatedAt: string;
};

export type Country = {
  id: number;
  name: string;
  favoriteCity?: string | null;
  visitedDate?: string | null;
  flagEmoji?: string | null;
  createdAt: string;
  updatedAt: string;
  memories: Memory[];
};

export type CountryInput = {
  name: string;
  favoriteCity?: string | null;
  visitedDate?: string | null;
  flagEmoji?: string | null;
};

export type MemoryInput = {
  title: string;
  description: string;
  location?: string | null;
  countryId: number;
};
