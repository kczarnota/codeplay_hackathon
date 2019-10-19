import React, { useState, useEffect } from 'react';
import './Client.scss';
import {connect} from "react-redux";
import {apiService} from "../../service/api.service.js";
import {apiUrl, getHeaders, getHeadersFD, handleResponse} from "../../service/api.config";


function get(url, data) {
    return fetch(`${apiUrl}${url}`, {
        method: 'get',
        headers: getHeaders(),
        body: JSON.stringify(data)
    }).then(handleResponse);
}


const Client = (props) => {
  const [data, setData] = useState(
      {
          client: {},
      }
    )

    useEffect(() =>{
      const fetchData = async () => {
        const response = await fetch(`${apiUrl}customer-management/cb/v1/customers/${props.clientId}`, {
            method: 'get',
            headers: getHeaders()
        }
        )
        let j = await response.json()
        setData({client: j})
      }
    fetchData()
    },[]);

    return (
        <div className="Container">
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-3 center">Polski bank</h1>
                </div>
            </div>
            <div className="jumbotron">
                <h1 className="display-3">
                {data.client.shortName}
                </h1>
                <p className="lead">
                Dane klienta:
                </p>
                <hr className="my-2"></hr>
                <p>
                    {data.client.birthDate}
                </p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#!" role="button">Edytuj dane</a>
                </p>
            </div>
        </div>
    )
};

export default Client;
