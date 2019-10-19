import React, { useState } from "react";
import {connect} from "react-redux";
import {Suggestions as data} from "../../mock/suggestions.data";
import {setShowSuggestionsDispatcher} from "../../store/app/app.actions";
import { Button } from 'react-bootstrap';

const Suggestions = (props) => {
    const [suggestions, setSuggestions] = useState(data);

    const closeSuggestions = () => {
        props.dispatch(setShowSuggestionsDispatcher(false));
    };

    const removeSuggestion = (index) => {
        setTimeout(() => {
            suggestions.splice(index, 1);
        }, 2000);
        suggestions[index].archived = true;
    };

    return(
        <div className={"suggestions " + (props.app.showSuggestions ? "suggestions--open" : "") }>
            <div className="suggestions__header">
                Sugestie <span className="suggestions__close" onClick={() => closeSuggestions()}>X</span>
            </div>
            <div className="suggestions__content">
                {suggestions.map((item, index) => (
                    <div key={index} className={"suggestion " + (item.type === 'OFFER' ? "suggestion--offer " : "suggestion--suggestion ")
                    + (item.archived ? "suggestion--archived" : "")}>
                        <p className="suggestion__header">{item.title}
                        <span className="suggestion__close" onClick={() => removeSuggestion(index)}>X</span>
                        </p>
                        <p className="suggestion__description">{item.description}</p>
                        <Button variant="light" href="/lokaty">Idź</Button>
                    </div>
                ))}
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        app: state.app,
    }
};

export default connect(mapStateToProps)(Suggestions)
