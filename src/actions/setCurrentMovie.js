import axios from "axios";

import { API_KEY, CURRENT_MOVIE } from "./actionTypes";

const ROOT_URL = `https://api.themoviedb.org/3/movie/`;

export const setCurrentMovie = id => {
    const request = axios.get(`${ROOT_URL}${id}/credits${API_KEY}`);

    return {
        type: CURRENT_MOVIE,
        payload: request,
    }
}

