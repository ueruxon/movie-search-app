import axios from "axios";
import { API_KEY, FETCH_VIDEO } from "./actionTypes";

const ROOT_URL = 'https://api.themoviedb.org/3/movie/';

export const fetchVideo = id => {
    const request = axios.get(`${ROOT_URL}${id}/videos${API_KEY}&language=en-US`);

    return {
        type: FETCH_VIDEO,
        payload: request
    }
}