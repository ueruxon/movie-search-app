import { combineReducers } from 'redux';

import movieReducer from "./reducerMovie";
import videoReducer from "./reducerVideo";

const rootReducer = combineReducers({
    allMovies: movieReducer,
    getVideo: videoReducer
});

export default rootReducer;

