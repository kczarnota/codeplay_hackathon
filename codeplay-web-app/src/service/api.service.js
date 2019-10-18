import {apiUrl, getHeaders, getHeadersFD, handleResponse} from "./api.config";

export const apiService = {
    get,
    post,
    put,
    postFD
};

function get(url, data) {
    return fetch(`${apiUrl}${url}`, {
        method: 'get',
        headers: getHeaders(),
        body: JSON.stringify(data)
    }).then(handleResponse);
}

function post(url, data) {
    return fetch(`${apiUrl}${url}`, {
        method: 'post',
        headers: getHeaders(),
        body: JSON.stringify(data)
    }).then(handleResponse);
}

function put(url, data) {
    return fetch(`${apiUrl}${url}`, {
        method: 'put',
        headers: getHeaders(),
        body: JSON.stringify(data)
    }).then(handleResponse);
}

function postFD (url, data, dataTitle) {
    let fd = new FormData();
    fd.append('avatar', data[0]);
    return fetch(`${apiUrl}${url}`, {
        method: 'POST',
        headers: getHeadersFD(),
        body: fd
    }).then(handleResponse);
}

