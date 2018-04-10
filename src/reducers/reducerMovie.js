import { FETCH_MOVIES, CURRENT_MOVIE} from "../actions/actionTypes";
import { genres } from "./genres";

const initialState = {
    allMovies: null,
    currentMovie: null,
    genres,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return {
                ...state,
                allMovies: action.payload.data,
            } 
        case CURRENT_MOVIE: 
            return {
                currentMovie: state.allMovies.results.find(item => item.id === action.payload.data.id),
                genres: state.genres,
                cast: action.payload.data.cast
            }
        default:
            return state;
    }
}