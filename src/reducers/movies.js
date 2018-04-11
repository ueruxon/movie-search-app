import { FETCH_MOVIES, RESET_ALL_MOVIES, RESET_CURRENT_MOVIE, FETCH_MOVIE} from "../actions/actionTypes";
import { genres } from "./genres";

const initialState = {
    movies: null,
    currentMovie: null,
    genres,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload.data,
            } 
        case FETCH_MOVIE: 
            return {
                ...state,
                currentMovie: action.payload.data,
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