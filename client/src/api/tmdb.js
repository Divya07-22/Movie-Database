import axios from 'axios';

const API_KEY = 'df0123...'; // You should use an environment variable in production
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdbClient = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: import.meta.env.VITE_TMDB_API_KEY,
    },
});

export const requests = {
    fetchTrending: `/trending/all/week?language=en-US`,
    fetchNetflixOriginals: `/discover/tv?with_networks=213`,
    fetchTopRated: `/movie/top_rated?language=en-US`,
    fetchActionMovies: `/discover/movie?with_genres=28`,
    fetchComedyMovies: `/discover/movie?with_genres=35`,
    fetchHorrorMovies: `/discover/movie?with_genres=27`,
    fetchRomanceMovies: `/discover/movie?with_genres=10749`,
    fetchDocumentaries: `/discover/movie?with_genres=99`,
};

export default tmdbClient;
