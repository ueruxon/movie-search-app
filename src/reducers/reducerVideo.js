import { FETCH_VIDEO } from "../actions/actionTypes";

const initialState = {
    currentVideo: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_VIDEO: 
            return {
                currentVideo: action.payload.data.results
            }
        default:
            return state;
    }
}