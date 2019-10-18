export const apiUrl = '';

export function getHeaders() {
    const headers = { 'Content-type': 'application/json' };
    if (localStorage.getItem('token')) {
        headers['X-Access-Token'] = localStorage.getItem('token');
    }
    return headers;
}

export function getHeadersFD() {
    const headers = { };
    if (localStorage.getItem('token')) {
        headers['X-Access-Token'] = localStorage.getItem('token');
    }
    return headers;
}

export function handleResponse(response) {
    return response.text().then((text) => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            let error = data.error;
            return Promise.reject(error);
        }
        return data;
    });
}
