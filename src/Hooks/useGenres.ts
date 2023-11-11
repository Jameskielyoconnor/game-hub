import useData from "./useData";


export interface Genres {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () =>  useData<Genres>('/genres');

export default useGenres;


// import useData from "./useData";

// export interface Genre {
//     id: number;
//     name: string;
// }


// const useGenres = () => useData<Genre>('/genres');



// export default useGenres;