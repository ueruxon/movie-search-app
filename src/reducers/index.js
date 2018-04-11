import { combineReducers } from 'redux';

import movieReducer from "./movies";
import videoReducer from "./video";

const rootReducer = combineReducers({
    allMovies: movieReducer,
    getVideo: videoReducer
});

export default rootReducer;

