import React, {Component} from "react";
import {connect} from "react-redux";
import {Suggestions as data} from "../../mock/suggestions.data";
import {setShowSuggestionsDispatcher} from "../../store/app/app.actions";
import { Button } from 'react-bootstrap';
import {Link} from "react-router-dom";

export class Suggestions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            suggestions: data,
        };
    }

    closeSuggestions = () => {
        this.props.dispatch(setShowSuggestionsDispatcher(false));
    };

    removeSuggestion = (index) => {
        const suggestions = this.state.suggestions;
        suggestions[index].archived = true;
        this.setState({suggestions: suggestions}, () => {
            setTimeout(() => {
                suggestions.splice(index, 1);
                this.setState({suggestions: suggestions});
            }, 2000);
        })

    };

    render() {
        return (
            <div className={"suggestions " + (this.props.app.showSuggestions ? "suggestions--open" : "")}>
                <div className="suggestions__header">
                    Sugestie <span className="suggestions__close" onClick={() => this.closeSuggestions()}>X</span>
                </div>
                <div className="suggestions__content">
                    {this.state.suggestions.map((item, index) => (
                        <div key={index}
                             className={"suggestion " + (item.type === 'OFFER' ? "suggestion--offer " : "suggestion--suggestion ")
                             + (item.archived ? "suggestion--archived" : "")}>
                            <p className="suggestion__header">{item.title}
                                <span className="suggestion__close" onClick={() => this.removeSuggestion(index)}>X</span>
                            </p>
                            <p className="suggestion__description">{item.description}</p>
                            <Link to={item.context}><Button variant="light">Idź</Button></Link>
                        </div>
                    ))}
                </div>
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        app: state.app,
    }
};

export default connect(mapStateToProps)(Suggestions)
