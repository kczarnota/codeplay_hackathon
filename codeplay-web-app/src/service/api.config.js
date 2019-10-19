export const apiUrl = 'https://developer.banking.asseco.pl/api/market-data/cb/v1';

export function getHeaders() {
    const headers = { 'Content-type': 'application/json' };
    headers['Authorization'] = 'Bearer ebe0caaf-874e-32ec-b9b0-55c4cf5b4a4c';
    return headers;
}

export function getHeadersFD() {
    const headers = { };
    headers['Authorization'] = 'Bearer ebe0caaf-874e-32ec-b9b0-55c4cf5b4a4c';
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
