import {SET_CUSTOM_VARIABLE} from "./app.actions";

const initialState = {
    customVariable: 0,
};

export function appReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CUSTOM_VARIABLE: {
            return {
                ...state,
                customVariable: action.payload
            }
        }
        default: {
            return state;
        }
    }
}
