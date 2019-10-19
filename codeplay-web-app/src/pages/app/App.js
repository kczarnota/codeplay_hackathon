import React, { useEffect } from 'react';
import './App.scss';
import {connect} from "react-redux";
import {appActions} from "../../store/app/app.actions";

const App = (props) => {
    useEffect(() =>{
        _setTaxOffices();
    },[]);

    const _setTaxOffices = () => {
        props.dispatch(appActions.setTaxOffices())
    };
  return (
    <div className="App">
        {props.app.taxOffices && props.app.taxOffices.content.map((item) => (
            <p key={item.id}>{item.address} {item.description}</p>
        ))}
    </div>
  );
};
const mapStateToProps = (state) => {
    return {
        app: state.app
    }
};
export default connect(mapStateToProps)(App);
