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
    if (typeof data === "string") {
        localStorage.setItem(key,data);
    }
    if (typeof data !== "string") {
        localStorage.setItem(key, JSON.stringify(data));
    }
};