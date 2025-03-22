/**
 * Obtiene un valor almacenado en `localStorage` a partir de una clave dada.
 * 
 * @param {string} key Clave con la que se buscará en el localStorage.
 * @returns {any} Devuelve el valor almacenado.
** Si es un objeto, devuelve objeto parseado. Si es una cadena, devuelve igual que está.
 * Si no se encuentra el valor, devuelve null. 
*/
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

/**
 * 
 * @param {*} key Clave (key) con la que se guardará en el localStorage
 * @param {*} data Admite arrays, objetos y convierte con stringify el objeto antes de guardarlo
 */
const saveDataInStorage = (key, data) => {
    if (typeof data === "string") {
        localStorage.setItem(key,data);
    }
    if (typeof data !== "string") {
        localStorage.setItem(key, JSON.stringify(data));
    }
};