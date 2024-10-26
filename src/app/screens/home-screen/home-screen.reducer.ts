import { SET_SEARCH_TERM } from "./home-screen.constant";
import { initialState } from './home-screen.init'

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.payload,
            };
        default:
            return state;
    }
};

export default homeReducer;
