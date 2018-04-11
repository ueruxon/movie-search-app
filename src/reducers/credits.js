import { FETCH_CREDITS } from "../actions/actionTypes";

const initialState = {
    cast: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CREDITS:
            return {
                ...state,
                cast: action.payload.data.cast
            }
        default:
            return state;
    } 
}