import axios from "axios";
import { FETCH_MOVIES, 
    API_KEY, 
    FETCH_CREDITS, 
    RESET_ALL_MOVIES, 
    RESET_CURRENT_MOVIE, 
    FETCH_RECOMMENDATIONS,
    ADD_FAVORITES,
    FETCH_MOVIE, 
    SEARCH_MOVIE,
    DELETE_FAVORITES } from "./actionTypes";

const ROOT_URL = `https://api.themoviedb.org/3/movie/`;
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie';

export const fetchMovies = page => {
    const request = axios.get(`${ROOT_URL}popular${API_KEY}&language=ru-RU&page=${page.id}`);

    return {
        type: FETCH_MOVIES,
        payload: request,
    }
}

export const fetchCredits = id => {
    const request = axios.get(`${ROOT_URL}${id}/credits${API_KEY}`);

    return {
        type: FETCH_CREDITS,
        payload: request,
    }
}

export const fetchMovie = id => {
    const request = axios.get(`${ROOT_URL}${id}${API_KEY}&language=ru-RU`);

    return {
        type: FETCH_MOVIE,
        payload: request,
    }
}

export const fetchRecommendations = id => {
    const request = axios.get(`${ROOT_URL}${id}/recommendations${API_KEY}&language=ru-RU`);

    return {
        type: FETCH_RECOMMENDATIONS,
        payload: request,
    }
}

export const searchMovie = query => {
    const request = axios.get(`${SEARCH_URL}${API_KEY}&language=ru-RU&query=${query}`);

    return {
        type: SEARCH_MOVIE,
        payload: request,
    }
}

export const addFavorites = id => {
    return {
        type: ADD_FAVORITES,
        payload: id,
    }
}

export const deleteFavorites = id => {
    return {
        type: DELETE_FAVORITES,
        payload: id,
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