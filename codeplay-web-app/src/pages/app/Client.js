import React, { useState, useEffect } from 'react';
import './Client.scss';
import {apiUrl, getHeaders, getHeadersFD, handleResponse} from "../../service/api.config";
import {getGuyAccountFounds, getTransferOfGivenGuy} from "./Util.js"


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
          transfers: [],
          founds: 0,
      }
    )

    useEffect(() =>{
      const fetchData = async () => {
        const r = await getTransferOfGivenGuy(props.clientId)
        const founds = await getGuyAccountFounds(props.clientId)
        const response = await fetch(`${apiUrl}customer-management/cb/v1/customers/${props.clientId}`, {
            method: 'get',
            headers: getHeaders()
        }
        )
        let j = await response.json()
        setData({client: j, transfers: r, founds: founds})
      }
    fetchData()
    },[]);

    const renderTableData = () => {
      return data.transfers.map((transaction, index) => {
         const { id, documentPackId, sign, description, amount, dates } = transaction
         return (
            <tr key={id}>
               <td>{index+1}</td>
               <td>{id}</td>
               <td>{amount.requested.amount}</td>
               <td>{amount.requested.currency}</td>
               <td>{dates.bookingDate}</td>
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
                <h2>
                Kwota na koncie: {data.founds.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} EUR
                </h2>
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
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">ID</th>
                    <th scope="col">Kwota</th>
                    <th scope="col">Waluta</th>
                    <th scope="col">Data przelewu</th>
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
