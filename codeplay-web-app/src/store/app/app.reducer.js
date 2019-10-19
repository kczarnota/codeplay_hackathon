import {SET_CUSTOM_VARIABLE, SET_TAX_OFFICES} from "./app.actions";

const initialState = {
    customVariable: 0,
    taxOffices: null,
};

export function appReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CUSTOM_VARIABLE: {
            return {
                ...state,
                customVariable: action.payload
            }
        }
        case SET_TAX_OFFICES: {
            return {
                ...state,
                taxOffices: action.payload
            }
        }
        default: {
            return state;
        }
    }
}
