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
            <div>
        <h1 className="Logo">
            Polski Bank
        </h1>
            </div>
        <div className="ClientContainer">
        Dane klienta:
        <div className="toLeft">
        <h2>
            {data.client.shortName}
        </h2>
        </div>
        <div className="toRight">
        <h2>
            {data.client.birthDate}
        </h2>
        </div>
        </div>
        </div>
    )
};

export default Client;
