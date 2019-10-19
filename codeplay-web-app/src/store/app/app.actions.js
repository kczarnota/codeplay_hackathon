import {appService} from "./app.service";

export const SET_CUSTOM_VARIABLE = 'SET_CUSTOM_VARIABLE';
export const SET_TAX_OFFICES = 'SET_TAX_OFFICES';

export const appActions = {
    setCustomVariable,
    setTaxOffices
};

export const setCustomVariableDispatcher = (value) => ({
    type: SET_CUSTOM_VARIABLE,
    payload: value
});

export const setTexOfficesDispatcher = (value) => ({
    type: SET_TAX_OFFICES,
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
