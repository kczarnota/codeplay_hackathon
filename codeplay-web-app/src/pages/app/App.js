import React, { useEffect } from 'react';
import './App.scss';
import Client from "./Client";

const App = (props) => {

  return (
    <div className="App">
        <Client clientId="105322"/>
        <Client clientId="105323"/>
        <Client clientId="105324"/>
    </div>
  );
};

export default App;
