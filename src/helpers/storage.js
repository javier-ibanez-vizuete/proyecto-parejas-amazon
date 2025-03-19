const getDataFromStorage = (key) => {
    const data = localStorage.getItem(key);
    if (data && typeof data !== "string") {
        return JSON.parse(data);
    }
    if (data && typeof data === "string") {
        return data;
    }
    return null
};

const saveDataInStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};