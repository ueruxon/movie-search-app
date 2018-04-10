import axios from "axios";
import { FETCH_MOVIES, API_KEY } from "./actionTypes";

const ROOT_URL = `https://api.themoviedb.org/3/movie/popular`;

export const fetchAllMovies = page => {
    const request = axios.get(`${ROOT_URL}${API_KEY}&language=ru-RU&page=${page.id}`);

    return {
        type: FETCH_MOVIES,
        payload: request,
    }
}