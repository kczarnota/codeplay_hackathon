import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import "./lokaty.scss";
import Button from "react-bootstrap/Button";

const Lokaty = (props) => {
    const [operation, setOperation] = useState([
        {
            title: 'Lokata 3%',
            last: 60,
            description: 'Lokata przygotowan specjalnie dla Ciebie!',
            isPromo: true
        },
        {
        title: 'Lokata 0,8%',
        last: 3,
        description: 'Lokata 3 miesięczna bez ograniczeń',
        isPormo: false
    }]);
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <h1>Oferty lokat</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                        {operation.map(item => (
                            <div className="row justify-content-center">
                                <div className={"col-5 operation " + (item.isPromo ? "operation--promo" : "")}>
                                    <div className="operation__title">
                                        <strong>{item.title}</strong>
                                    </div>
                                    <div className="operation__description">
                                        <p>{item.description}</p>
                                        <p><strong>Okres trwania (miesięcy):</strong> {item.last}</p>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <Button variant="success">Załóż</Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        app: state.app
    }
};

export default connect(mapStateToProps)(Lokaty)
