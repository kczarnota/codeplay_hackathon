import {apiUrl, getHeaders, getHeadersFD, handleResponse} from "../../service/api.config";

export function uniq(a, param){
    return a.filter(function(item, pos, array){
        return array.map(function(mapItem){ return mapItem[param]; }).indexOf(item[param]) === pos;
    })
}

export async function getTransferOfGivenGuy(clientId) {
        var x = []
        var response = await fetch(`${apiUrl}loans-deposits/cb/current-accounts/v1/current-accounts?customerId=${clientId}`, {
            method: 'get',
            headers: getHeaders()
        }
        )
        var j = await response.json()
        console.log(`Contaracts: ${j.content.length}`)
        var j = j.content[0]

        console.log(`ContractID: ${j.id}`)

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
        x.sort((a, b) => (a.id > b.id) ? 1 : -1)
        x = uniq(x, 'id');
        return x;
}

export async function getGuyAccountFounds(clientId) {
        var response = await fetch(`${apiUrl}loans-deposits/cb/current-accounts/v1/current-accounts?customerId=${clientId}`, {
            method: 'get',
            headers: getHeaders()
        }
        )
        var j = await response.json()
        var j = j.content[0]

        var response = await fetch(`${apiUrl}account-management/cb/v1/register-states/contract/${j.id}/accessible-assets?currency=EUR&stateDate=3000-01-01`, {
            method: 'get',
            headers: getHeaders()
        }
        )
        var j = await response.json()
        return j.amount
}
