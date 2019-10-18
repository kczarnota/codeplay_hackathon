import {appService} from "./app.service";

export const SET_CUSTOM_VARIABLE = 'SET_CUSTOM_VARIABLE';

export const appActions = {
    setCustomVariable
};

export const setCustomVariableDispatcher = (value) => ({
    type: SET_CUSTOM_VARIABLE,
    payload: value
});

function setCustomVariable(value) {
    return dispatch => {
        return appService.getSth().then(
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
