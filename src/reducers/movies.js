import { FETCH_MOVIES, 
    RESET_ALL_MOVIES, 
    RESET_CURRENT_MOVIE, 
    FETCH_MOVIE, 
    SEARCH_MOVIE, 
    ADD_FAVORITES,
    DELETE_FAVORITES} from "../actions/actionTypes";

import { genres } from "./genres";

const initialState = {
    movies: null,
    currentMovie: null,
    favorites: [],
    genres,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload.data.results,
            } 
        case FETCH_MOVIE: 
            return {
                ...state,
                currentMovie: action.payload.data,
            } 
        case SEARCH_MOVIE: 
            return {
                ...state,
                movies: action.payload.data.results,
            }
        case ADD_FAVORITES: 
            const movie = state.movies.find(m => m.id === action.payload);

            return {
                ...state,
                favorites: [...state.favorites, movie || state.currentMovie],
            } 
        case DELETE_FAVORITES: 
            return {
                ...state,
                favorites: state.favorites.filter(movie => movie.id !== action.payload)
            }        
        case RESET_ALL_MOVIES:
            return {
                ...state,
                movies: null,
            }
        case RESET_CURRENT_MOVIE: 
            return {
                ...state,
                currentMovie: null,
            } 
        default:
            return state;
    }
}