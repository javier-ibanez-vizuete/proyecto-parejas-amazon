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

	if (!data) return null; // SI NO HAY NADA EN LOCALSTORAGE RETURNA NULL

	try {
		const parsed = JSON.parse(data);
		if (typeof parsed === "object" && parsed !== null) {
			return parsed; // SI ES UN OBJETO/ARRAY RETURNA EL MISMO (OBJETO/ARRAY)
		}
		return data; // POR SI ACASO 'NO DEBERIA DE SER USADO'
	} catch (error) {
		return data; // SI ES UNA STRING RETORNA SOLO 'DATA'
	}
};

/**
 *
 * @param {*} key Clave (key) con la que se guardará en el localStorage
 * @param {*} data Admite arrays, objetos y convierte con stringify el objeto antes de guardarlo
 */
const saveDataInStorage = (key, data) => {
	if (typeof data === "string") {
		localStorage.setItem(key, data);
	}
	if (typeof data !== "string") {
		localStorage.setItem(key, JSON.stringify(data));
	}
};

/**
 *
 * @returns productos del carrito desde localStorage
 */
const getCartFromStorage = () => {
	return JSON.parse(localStorage.getItem("cart")) || [];
};

/**
 *
 * @param {*} cart guarda el carrito en localStorage
 */
const saveCartToStorage = (cart) => {
	localStorage.setItem("cart", JSON.stringify(cart));
};
