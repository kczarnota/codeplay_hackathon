import React, { useState } from "react";
import {connect} from "react-redux";
import {Suggestions as data} from "../../mock/suggestions.data";

const Suggestions = (props) => {
    const [suggestions, setSuggestions] = useState(data);

    return(
        <div className={"suggestions " + (props.app.showSuggestions ? "suggestions--open" : "") }>
            <div className="suggestions__header">
                Sugestie
            </div>
            <div className="suggestions__content">
                {suggestions.map(item => (
                    <div className={"suggestion " + (item.type === 'OFFER' ? "suggestion--offer" : "suggestion--suggestion")}>
                        <p className="suggestion__header">{item.title}</p>
                        <p className="suggestion__description">{item.description}</p>
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
