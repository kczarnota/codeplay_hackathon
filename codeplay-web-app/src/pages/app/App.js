import React, { useEffect } from 'react';
import './App.scss';
import {connect} from "react-redux";
import {appActions} from "../../store/app/app.actions";
import FloatingAvatar from "../../components/floating-avatar/flaoting-avatar.component";
import Suggestions from "../../components/suggestions/suggestions.component";

import Client from "./Client.js"

const App = (props) => {
    useEffect(() =>{
    },[]);
  return (
    <div className="App">
        <FloatingAvatar/>
        <Suggestions/>
        <Client clientId="105322"/>
        <Client clientId="105323"/>
    </div>
  );
};

export default App;
