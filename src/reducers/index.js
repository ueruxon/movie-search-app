import { combineReducers } from 'redux';

import movieReducer from "./reducerMovie";

const rootReducer = combineReducers({
    allMovies: movieReducer,
});

export default rootReducer;

