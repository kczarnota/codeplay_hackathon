import logo from "../../images/avatar.gif";
import logoOld from "../../images/avatar_old.gif";
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
                    <img src={!props.app.showSuggestions ? logo : logoOld}
                         alt="Obraz główny aststenta"
                         className={"assistant__image " + (props.app.showSuggestions ? "assistant__image--rotate" : "")}/>
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
