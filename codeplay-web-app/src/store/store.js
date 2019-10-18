import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {appReducer} from "./app/app.reducer";

const createRootReducer = () => combineReducers({
    app: appReducer,
});

export const store = createStore(
    createRootReducer(),
    applyMiddleware(
        thunk
    )
);
