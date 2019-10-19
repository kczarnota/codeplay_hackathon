import {appService} from "./app.service";

export const SET_CUSTOM_VARIABLE = 'SET_CUSTOM_VARIABLE';
export const SET_TAX_OFFICES = 'SET_TAX_OFFICES';
export const SET_SHOW_SUGGESTIONS = 'SET_SHOW_SUGGESTIONS';

export const appActions = {
    setCustomVariable,
    setTaxOffices,
    setShowSuggestions
};

export const setCustomVariableDispatcher = (value) => ({
    type: SET_CUSTOM_VARIABLE,
    payload: value
});

export const setTexOfficesDispatcher = (value) => ({
    type: SET_TAX_OFFICES,
    payload: value
});

export const setShowSuggestionsDispatcher = (value) => ({
    type: SET_SHOW_SUGGESTIONS,
    payload: value
});

function setCustomVariable(value) {
    return dispatch => {
        return appService.getTaxOffices().then(
            res => {
                dispatch(setCustomVariableDispatcher(value));
                return true;
            },
            () => {
                dispatch(setCustomVariableDispatcher(value));
                return false;
            }
        )
    }
}

function setTaxOffices() {
    return dispatch => {
        return appService.getTaxOffices().then(
            res => {
                dispatch(setTexOfficesDispatcher(res));
                return res;
            },
            (error) => {
                return error;
            }
        )
    }
}

function setShowSuggestions(value) {
    return dispatch => {
        dispatch(setShowSuggestionsDispatcher(value))
    }

}
