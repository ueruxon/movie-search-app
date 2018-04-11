import { combineReducers } from 'redux';

import movieReducer from "./movies";
import videoReducer from "./video";
import recReducer from "./recList";
import creditsReducer from "./credits";

const rootReducer = combineReducers({
    allMovies: movieReducer,
    getVideo: videoReducer,
    recList: recReducer,
    credits: creditsReducer,
});

export default rootReducer;

