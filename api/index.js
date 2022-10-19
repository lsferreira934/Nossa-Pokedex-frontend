const apiUrl = 'http://localhost:3000';

async function post(url, body, message) {
    try {
        console.log(url, body, message)
        const response = await fetch(`${apiUrl}/-/v1/${url}`, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        return response
    } catch (error) {
        console.log(error)
    }
}
