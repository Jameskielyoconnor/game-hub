import genres from "../Data/genres";

export interface Genres {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () =>  ({data: genres, isLoading: false, error: null});

export default useGenres;


// import useData from "./useData";

// export interface Genre {
//     id: number;
//     name: string;
// }


// const useGenres = () => useData<Genre>('/genres');



// export default useGenres;