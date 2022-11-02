const apiUrl = 'http://localhost:3000';

async function get(url) {
    try {
        const response = await fetch(`${apiUrl}/-/v1/${url}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': getLocalStorage('user').accessToken
            }
        });
        return response;
    } catch (error) {
        console.log(error);
    };
};

async function post(url, body = {}, headers = {}) {
    try {
        if (!(url === 'login') && !headers) headers['x-access-token'] = getLocalStorage('user').accessToken;

        const response = await fetch(`${apiUrl}/-/v1/${url}`, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                ...headers
            }
        });
        return response;
    } catch (error) {
        console.log(error);
    };
};

function setLocalStorage(data) {
    const stringify = JSON.stringify(data);
    localStorage.setItem('user', stringify);
};

function getLocalStorage(data) {
    return JSON.parse(localStorage.getItem(data));
};

function removeLocalStorage(data) {
    return localStorage.removeItem(data);
};