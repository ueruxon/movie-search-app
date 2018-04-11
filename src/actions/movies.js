import axios from "axios";
import { FETCH_MOVIES, API_KEY, CURRENT_MOVIE, RESET_ALL_MOVIES, RESET_CURRENT_MOVIE } from "./actionTypes";

const ROOT_URL = `https://api.themoviedb.org/3/movie/`;

export const fetchMovies = page => {
    const request = axios.get(`${ROOT_URL}popular${API_KEY}&language=ru-RU&page=${page.id}`);

    return {
        type: FETCH_MOVIES,
        payload: request,
    }
}

export const currentMovie = id => {
    const request = axios.get(`${ROOT_URL}${id}/credits${API_KEY}`);

    return {
        type: CURRENT_MOVIE,
        payload: request,
    }
}

export const resetAllMovies = () => {
    return {
        type: RESET_ALL_MOVIES,
    }
}

export const resetCurrentMovie = () => {
    return {
        type: RESET_CURRENT_MOVIE,
    }
}