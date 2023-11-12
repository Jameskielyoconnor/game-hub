import useData from "../Hooks/useData";
import { Genres } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (
  selectedGenre: Genres | null,
  selectedPlatform: Platform | null
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGames;

// import useData from "./useData";

// export interface Platform {
//     id: number;
//     name: string;
//     slug: string;
// }

// export interface Game {
//     id: number;
//     name: string;
//     background_image: string;
//     parent_platforms: {platform : Platform} [];
//     metacritic: number;
// }

// const useGames = () => useData<Game>('/games');

// export default useGames
