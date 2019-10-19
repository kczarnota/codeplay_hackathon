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

async function getTransferOfGivenGuy(clientId) {
        var x = []
        var response = await fetch(`${apiUrl}loans-deposits/cb/current-accounts/v1/current-accounts?customerId=${clientId}`, {
            method: 'get',
            headers: getHeaders()
        }
        )
        var j = await response.json()
        var j = j.content[0]

        var response = await fetch(`${apiUrl}payments/cb/v1/documents/entries/contract?contractId=${j.id}`, {
            method: 'get',
            headers: getHeaders()
        }
        )
        var j = await response.json()
        for (var i = 0; i < j.content.length; i++) {
            var k = j.content[i]
            var response = await fetch(`${apiUrl}payments/cb/v1/documents/${k.documentId}`, {
                method: 'get',
                headers: getHeaders()
            }
            )
            var m = await response.json()
            x.push(m)
        }
        return x;
}

const Client = (props) => {
  const [data, setData] = useState(
      {
          client: {},
          transfers: [],
      }
    )

    useEffect(() =>{
      const fetchData = async () => {
        const r = await getTransferOfGivenGuy(props.clientId)
        const response = await fetch(`${apiUrl}customer-management/cb/v1/customers/${props.clientId}`, {
            method: 'get',
            headers: getHeaders()
        }
        )
        let j = await response.json()
        setData({client: j, transfers: r})
      }
    fetchData()
    },[]);

    const renderTableData = () => {
      return data.transfers.map((transaction, index) => {
         const { id, sign, description, amount } = transaction
         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{sign}</td>
               <td>{amount.requested.amount}</td>
               <td>{amount.requested.currency}</td>
               <td>{description}</td>
            </tr>
         )
      })
   }

    return (
        <div className="Container">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-3 center">Polski bank</h1>
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
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Kwota</th>
      <th scope="col">Waluta</th>
      <th scope="col">Opis</th>
    </tr>
  </thead>
  <tbody>
        {renderTableData()}
  </tbody>
</table>
        </div>
    )
};

export default Client;
