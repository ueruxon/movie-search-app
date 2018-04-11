import { FETCH_MOVIES, CURRENT_MOVIE, RESET_ALL_MOVIES, RESET_CURRENT_MOVIE} from "../actions/actionTypes";
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
        case CURRENT_MOVIE: 
            return {
                currentMovie: state.movies.results.find(item => item.id === action.payload.data.id),
                genres: state.genres,
                cast: action.payload.data.cast
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