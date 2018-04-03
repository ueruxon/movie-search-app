import axios from "axios";

export const FETCH_MOVIES = 'FETCH_MOVIES';


const ROOT_URL = `https://api.themoviedb.org/3/movie/popular`;
const API_KEY = `?api_key=e72a523c89eb32aacfe939b60152e8be`;

export const fetchAllMovies = (page) => {
    const request = axios.get(`${ROOT_URL}${API_KEY}&language=ru-RU&page=${page.id}`);

    return {
        type: FETCH_MOVIES,
        payload: request,
    }
}