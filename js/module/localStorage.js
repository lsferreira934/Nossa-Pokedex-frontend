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

export { setLocalStorage, getLocalStorage, removeLocalStorage }