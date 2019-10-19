import React, { useState, useEffect } from 'react';
import './Client.scss';
import {apiUrl, getHeaders, getHeadersFD, handleResponse} from "../../service/api.config";
import {getGuyAccountFounds, getTransferOfGivenGuy} from "./Util.js"
import {Button} from "react-bootstrap";


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
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className="client__header">Polski bank</h2>
                </div>
            </div>
            <div className="row client__box">
                    <div className="col-8">
                        <h4><strong>Dane klienta:</strong></h4>
                        <p><strong>Imię i nazwisko:</strong> {data.client.shortName}</p>
                        <p><strong>Data urodzenia:</strong> {data.client.birthDate}</p>
                    </div>
                    <div className="col-4">
                        {/*<img src={} alt="Zdjęcie profilowe" />*/}
                    </div>
            </div>
            <div className="row">
                <div className="col-12 client__box">
                    <h4><strong>Informacje o koncie:</strong></h4>
                    <p><strong>Kwota:</strong> {data.founds.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} EUR</p>
                </div>
            </div>
            <h2>
            Lista ostatnich transferów:
            </h2>
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
