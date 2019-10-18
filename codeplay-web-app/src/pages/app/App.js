import React, { useEffect } from 'react';
import './App.scss';
import {connect} from "react-redux";
import {appActions} from "../../store/app/app.actions";

const App = (props) => {
    useEffect(() =>{
        _setCustomVariable();
    },[props.app.customVariable]);

    const _setCustomVariable = () => {
        props.dispatch(appActions.setCustomVariable(2))
    };
  return (
    <div className="App">
        {props.app.customVariable}
    </div>
  );
};
const mapStateToProps = (state) => {
    return {
        app: state.app
    }
};
export default connect(mapStateToProps)(App);
