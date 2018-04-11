import { FETCH_RECOMMENDATIONS } from "../actions/actionTypes";

const initialState = {
    recommendations: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RECOMMENDATIONS:
            return {
                recommendations: action.payload.data.results
            }
        default:
            return state;
    }
}