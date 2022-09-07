const apiUrl = 'http://localhost:3000';

async function post(url, body) {
    const response = await fetch(`${apiUrl}/-/v1/${url}`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        }
    })

    if (response.status != 200) {
        throw new Error(alert(response.status + ': ' + response.statusText));
    }

    return response.json();
}