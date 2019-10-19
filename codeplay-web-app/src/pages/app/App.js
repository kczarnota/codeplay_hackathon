import React, { useEffect } from 'react';
import './App.scss';
import {connect} from "react-redux";
import {appActions} from "../../store/app/app.actions";
import FloatingAvatar from "../../components/floating-avatar/flaoting-avatar.component";
import Suggestions from "../../components/suggestions/suggestions.component";

const App = (props) => {
    useEffect(() =>{
        _setTaxOffices();
    },[props.app.taxOffices]);

    const _setTaxOffices = () => {
        props.dispatch(appActions.setTaxOffices())
    };
  return (
    <div className="App">
        {props.app.taxOffices && props.app.taxOffices.content.map((item) => (
            <p key={item.id}>{item.address} {item.description}</p>
        ))}
        <FloatingAvatar/>
        <Suggestions/>
    </div>
  );
};
const mapStateToProps = (state) => {
    return {
        app: state.app
    }
};
export default connect(mapStateToProps)(App);
