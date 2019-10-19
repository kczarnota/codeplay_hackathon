import logo from "../../images/avatar.gif";
import React, {Fragment} from "react";
import {setShowSuggestionsDispatcher} from "../../store/app/app.actions";
import {connect} from "react-redux";

const FloatingAvatar = (props) => {

    const _showSuggestions = () => {
        props.dispatch(setShowSuggestionsDispatcher(true))
    };

    return (
        <Fragment>
            {/*{!props.app.showSuggestions && (*/}
                <div className="assistant" onClick={() => _showSuggestions()}>
                    <img src={logo} alt="Obraz główny aststenta" className="assistant__image"/>
                </div>
            {/*)}*/}
        </Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        app: state.app,
    }
};

export default connect(mapStateToProps)(FloatingAvatar);
