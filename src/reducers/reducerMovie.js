import { FETCH_MOVIES } from "../actions/fetchAllMovies";
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
        default:
            return state;
    }
}