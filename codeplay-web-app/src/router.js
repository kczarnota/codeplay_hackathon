import { Route } from 'react-router-dom';
import App from "./pages/app/App";
import React, { Fragment } from "react";
import Lokaty from "./pages/lokaty/lokaty.component";
import {Navigation} from "./components/navigation/navigation";

export const Router = () => (
    <Fragment>
        <Navigation/>
        <Route exact path='/' render={()=> (<App />)} />
        <Route exact path='/lokaty' render={()=> (<Lokaty />)} />
    </Fragment>
);
