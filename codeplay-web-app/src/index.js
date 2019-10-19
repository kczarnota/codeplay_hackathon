import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {store} from "./store/store";
import {BrowserRouter} from "react-router-dom";
import FloatingAvatar from "./components/floating-avatar/flaoting-avatar.component";
import Suggestions from "./components/suggestions/suggestions.component";
import {Router} from "./router";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Router />
            <Suggestions/>
        </BrowserRouter>
        <FloatingAvatar/>
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();
