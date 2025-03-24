/**
 * Guarda products en localStorage.
 */
let productsOnStorage = products;
saveDataInStorage("productsOnStorage", products);
if (getDataFromStorage("productsOnStorage")) {
	saveDataInStorage("productsOnStorage", productsOnStorage);
}

/**
 * Limpia el contenedor de los productos.
 */
const clearContainer = () => {
	const productsContainer = document.querySelector(".products-container");
	productsContainer.innerHTML = "";
};


/**
 * 
 * @param {*} image URL de la imagen que se va a mostrar.
 * @returns Un contenedor que contiene la imagen.
 */

const createProductimage = (image) => {
	const imageContainer = document.createElement("div");
	imageContainer.classList.add("img-product-container");

	const imgProduct = document.createElement("img");
	imgProduct.src = image;
	imageContainer.append(imgProduct);
	return imageContainer;
};


/**
 * 
 * @param {*} wishlist Añade o elimina un producto de la wishlist
 * @param {*} addcart Añade o elimina un producto del carrito de compra
 * @returns Un contenedor donde añade estos botones.
 */

const createButtonsContainer = (wishlist, addcart) => {
	const buttonsContainer = document.createElement("div");
	buttonsContainer.classList.add("buttons-card-container");

	const wishlistBtn = document.createElement("button");
	wishlistBtn.classList.add("btn-add-to-wish-list", "btn-style");

	wishlistBtn.textContent = wishlist ? "Quitar de Deseados" : "Añadir a deseados";

	wishlistBtn.addEventListener("click", () => {
		wishlist = !wishlist;
		wishlistBtn.textContent = wishlist ? "Quitar de Deseados" : "Añadir a deseados";
		saveDataInStorage(productsOnStorage);
	});


	const addCartBtn = document.createElement("button");
	addCartBtn.classList.add("btn-add-to-trolly", "btn-style");

	addCartBtn.textContent = addcart ? "Eliminar del Carrito" : "Agregar al carrito";

	addCartBtn.addEventListener("click", () => {
		addcart = !addcart;
		addCartBtn.textContent = addcart ? "Eliminar del Carrito" : "Agregar al carrito";
		saveDataInStorage(productsOnStorage);
	});

	buttonsContainer.append(wishlistBtn);
	buttonsContainer.append(addCartBtn);

	return buttonsContainer;
};


/**
 * Crea un elemento HTML para cada producto
 *
 * @param {*} product Objeto que contiene la información del producto.
 * @returns HTML Element con estructura del producto.
 */
const createInfoProductContainer = (product) => {
	const infoContainer = document.createElement("div");
	infoContainer.classList.add("card-information-container");

	const productPrice = document.createElement("h3");
	productPrice.classList.add("product-price");
	productPrice.textContent = `${product.price} €`;

	const productName = document.createElement("p");
	productName.classList.add("product-name");
	productName.textContent = product.name;

	const { wishlist, addcart } = product;
	const buttonsContainer = createButtonsContainer(wishlist, addcart);

	infoContainer.append(productPrice);
	infoContainer.append(productName);
	infoContainer.append(buttonsContainer);

	return infoContainer;
};

/**
 *
 * @param {*} product Objeto que contiene la información del producto.
 * @returns Un contenedor con la estructura de la tarjeta del producto.
 */
const createProductCard = (product) => {
	const cardContainer = document.createElement("div");
	cardContainer.classList.add("product-card");

	const { image } = product;
	const divImageContainer = createProductimage(image);

	const divInfoProductContainer = createInfoProductContainer(product);

	cardContainer.append(divImageContainer);
	cardContainer.append(divInfoProductContainer);

	return cardContainer;
};

/**
 *
 * @param {*} name Nombre de un producto que se usará para buscar coincidencias
 * @returns Devuelve un array con los productos que coincidan con el nombre.
 */
const filterProductsByName = (name) => {
	if (!name) {
		return productsOnStorage;
	}
	const filterByName = productsOnStorage.filter((product) =>
		product.name.toLowerCase().includes(name.trim().toLowerCase())
	);
	return filterByName;
};

const filterProductsByLaptops = () => {
	const filterByLaptops = productsOnStorage.filter(({ category }) => category.toLowerCase() === "laptops");
	if (filterByLaptops.length) {
		return filterByLaptops;
	}
	return productsOnStorage;
};

const filterProductsByMonitors = () => {
	const filterByMonitors = productsOnStorage.filter(({ category }) => category.toLowerCase() === "monitor");
	if (filterByMonitors.length) {
		return filterByMonitors;
	}
	return productsOnStorage;
};

const filterProductsByTablets = () => {
	const filterByTablets = productsOnStorage.filter(({ category }) => category.toLowerCase() === "tablets");
	if (filterByTablets.length) {
		return filterByTablets;
	}
	return productsOnStorage;
};

const filterProductsByStorages = () => {
	const filterByStorages = productsOnStorage.filter(({ category }) => category.toLowerCase() === "almacenamiento");
	if (filterByStorages.length) {
		return filterByStorages;
	}
	return productsOnStorage;
};

const filterProductsByGaming = () => {
	const filterByGaming = productsOnStorage.filter(({ category }) => category.toLowerCase() === "gaming");
	if (filterByGaming.length) {
		return filterByGaming;
	}
	return productsOnStorage;
};

const filterProductsByHeadphones = () => {
	const filterByHeadphones = productsOnStorage.filter(({ category }) => category.toLowerCase() === "auriculares");
	if (filterByHeadphones.length) {
		return filterByHeadphones;
	}
	return productsOnStorage;
};

/**
 *
 *  Renderiza el catálogo de productos en la interfaz según la categoría seleccionada o el texto de búsqueda.
 *
 * @param {*} filtroTexto Texto opcional para filtrar productos por nombre.
 */
const renderCatalog = (filtroTexto = "") => {
	// SELECCION DE ELEMENTOS
	// const spanForProductsNumber = document.querySelector(".number-of-products");
	const btnFullProducts = document.querySelector(".btn-full-informatica");
	const btnLaptopsProducts = document.querySelector(".btn-laptops-products");
	const btnMonitorsProducts = document.querySelector(".btn-monitors-products");
	const btnTabletsProducts = document.querySelector(".btn-tablets-products");
	const btnHeadphonesProducts = document.querySelector(".btn-headphones-products");
	const btnStoragesProducts = document.querySelector(".btn-storages-products");
	const btnGamingProducts = document.querySelector(".btn-gaming-products");
	const productsContainer = document.querySelector(".products-container");
	clearContainer();

	if (btnFullProducts.classList.contains("open-all-products")) {
		const productsByName = filterProductsByName(filtroTexto);
		productsByName.forEach((product) => {
			const productCard = createProductCard(product);
			productsContainer.append(productCard);
		});
	}

	if (btnLaptopsProducts.classList.contains("open-laptops-products")) {
		const onlyLaptopProducts = filterProductsByLaptops();
		onlyLaptopProducts.forEach((product) => {
			const productCard = createProductCard(product);
			productsContainer.append(productCard);
		});
	}

	if (btnMonitorsProducts.classList.contains("open-monitors-products")) {
		const onlyMonitorsProducts = filterProductsByMonitors();
		onlyMonitorsProducts.forEach((product) => {
			const productCard = createProductCard(product);
			productsContainer.append(productCard);
		});
	}

	if (btnTabletsProducts.classList.contains("open-tablets-products")) {
		const onlyTabletsProducts = filterProductsByTablets();
		onlyTabletsProducts.forEach((product) => {
			const productCard = createProductCard(product);
			productsContainer.append(productCard);
		});
	}

	if (btnStoragesProducts.classList.contains("open-storages-products")) {
		const onlyStoragesProducts = filterProductsByStorages();
		onlyStoragesProducts.forEach((product) => {
			const productCard = createProductCard(product);
			productsContainer.append(productCard);
		});
	}

	if (btnGamingProducts.classList.contains("open-gaming-products")) {
		const onlyGamingProducts = filterProductsByGaming();
		onlyGamingProducts.forEach((product) => {
			const productCard = createProductCard(product);
			productsContainer.append(productCard);
		});
	}

	if (btnHeadphonesProducts.classList.contains("open-headphones-products")) {
		const onlyHeadphonesProducts = filterProductsByHeadphones();
		onlyHeadphonesProducts.forEach((product) => {
			const productCard = createProductCard(product);
			productsContainer.append(productCard);
		});
	}
};

// const changepage = () => {
// 	const inputName = document.querySelector(".input-name");
// 	const btnLogin = document.querySelector(".continue-btn");
// 	btnLogin.addEventListener("click", (event) => {
// 		if (!inputName.value.trim()) {
// 			event.preventDefault();
// 			return alert("Por favor introduzca un nombre para iniciar sesion");
// 		}
// 		saveDataInStorage("userName", inputName.value);
// 		window.location.href = "http://127.0.0.1:5500/pages/informatica.html";
// 		// window.location.href = "https://project-reply-amazon.netlify.app/pages/informatica.html";
// 	});
// };

/**
 * /**
 * Ejecuta la inicialización de la página cuando el DOM ha cargado completamente.
 * Configura los eventos para el filtrado y navegación entre categorías del catálogo de productos.
 */
document.addEventListener("DOMContentLoaded", () => {
	// SELECCION DE ELEMENTOS

	// changepage();

	const h3CategoryTitle = document.querySelector(".category-title");
	const spanForProductsNumber = document.querySelector(".number-of-products");

	const inputSearch = document.querySelector("#input-search-product");
	const btnSearch = document.querySelector(".btnSearch");

	const btnFullProducts = document.querySelector(".btn-full-informatica");
	const btnLaptopsProducts = document.querySelector(".btn-laptops-products");
	const btnMonitorsProducts = document.querySelector(".btn-monitors-products");
	const btnTabletsProducts = document.querySelector(".btn-tablets-products");
	const btnHeadphonesProducts = document.querySelector(".btn-headphones-products");
	const btnStoragesProducts = document.querySelector(".btn-storages-products");
<<<<<<< HEAD
	
=======
	const btnGamingProducts = document.querySelector(".btn-gaming-products");

	// console.log(inputSearch.value);
	// 	if (inputSearch.value.length) {
	// 		inputSearch.value = getDataFromStorage("searchOnStorage");
	// 	}

>>>>>>> raquelruiz
	// ADDEVENTLISTENER

	inputSearch.addEventListener("keyup", () => {
		saveDataInStorage("searchOnStorage", inputSearch.value);
		renderCatalog(inputSearch.value);
	});

	btnSearch.addEventListener("click", (event) => {
		event.preventDefault();
		renderCatalog(inputSearch.value);
	});

	btnFullProducts.addEventListener("click", () => {
		h3CategoryTitle.textContent = "Informática";
		btnFullProducts.classList.add("open-all-products");
		btnLaptopsProducts.classList.remove("open-laptops-products");
		btnMonitorsProducts.classList.remove("open-monitors-products");
		btnTabletsProducts.classList.remove("open-tablets-products");
		btnHeadphonesProducts.classList.remove("open-headphones-products");
		btnStoragesProducts.classList.remove("open-storages-products");
		btnGamingProducts.classList.remove("open-storages-products");

		renderCatalog();
	});

	btnLaptopsProducts.addEventListener("click", () => {
		h3CategoryTitle.textContent = "Portátiles";
		btnLaptopsProducts.classList.add("open-laptops-products");
		btnFullProducts.classList.remove("open-all-products");
		btnMonitorsProducts.classList.remove("open-monitors-products");
		btnTabletsProducts.classList.remove("open-tablets-products");
		btnHeadphonesProducts.classList.remove("open-headphones-products");
		btnStoragesProducts.classList.remove("open-storages-products");
		btnGamingProducts.classList.remove("open-storages-products");

		renderCatalog();
	});

	btnMonitorsProducts.addEventListener("click", () => {
		h3CategoryTitle.textContent = "Monitores";
		btnMonitorsProducts.classList.add("open-monitors-products");
		btnFullProducts.classList.remove("open-all-products");
		btnLaptopsProducts.classList.remove("open-laptops-products");
		btnTabletsProducts.classList.remove("open-tablets-products");
		btnHeadphonesProducts.classList.remove("open-headphones-products");
		btnStoragesProducts.classList.remove("open-storages-products");
		btnGamingProducts.classList.remove("open-storages-products");

		renderCatalog();
	});

	btnTabletsProducts.addEventListener("click", () => {
		h3CategoryTitle.textContent = "Tablets";
		btnTabletsProducts.classList.add("open-tablets-products");
		btnFullProducts.classList.remove("open-all-products");
		btnLaptopsProducts.classList.remove("open-laptops-products");
		btnMonitorsProducts.classList.remove("open-monitors-products");
		btnHeadphonesProducts.classList.remove("open-headphones-products");
		btnStoragesProducts.classList.remove("open-storages-products");
		btnGamingProducts.classList.remove("open-storages-products");

		renderCatalog();
	});

	btnStoragesProducts.addEventListener("click", () => {
		h3CategoryTitle.textContent = "Almacenamiento";
		btnStoragesProducts.classList.add("open-storages-products");
		btnFullProducts.classList.remove("open-all-products");
		btnLaptopsProducts.classList.remove("open-laptops-products");
		btnMonitorsProducts.classList.remove("open-monitors-products");
		btnHeadphonesProducts.classList.remove("open-headphones-products");
		btnTabletsProducts.classList.remove("open-tablets-products");
		btnGamingProducts.classList.remove("open-storages-products");

		renderCatalog();
	});

	btnGamingProducts.addEventListener("click", () => {
		h3CategoryTitle.textContent = "Gaming";
		btnGamingProducts.classList.add("open-gaming-products");
		btnFullProducts.classList.remove("open-all-products");
		btnLaptopsProducts.classList.remove("open-laptops-products");
		btnMonitorsProducts.classList.remove("open-monitors-products");
		btnTabletsProducts.classList.remove("open-tablets-products");
		btnHeadphonesProducts.classList.remove("open-headphones-products");
		btnStoragesProducts.classList.remove("open-storages-products");

		renderCatalog();
	});

	btnHeadphonesProducts.addEventListener("click", () => {
		h3CategoryTitle.textContent = "Auriculares";
		btnHeadphonesProducts.classList.add("open-headphones-products");
		btnFullProducts.classList.remove("open-all-products");
		btnLaptopsProducts.classList.remove("open-laptops-products");
		btnMonitorsProducts.classList.remove("open-monitors-products");
		btnTabletsProducts.classList.remove("open-tablets-products");
		btnStoragesProducts.classList.remove("open-storages-products");
		btnGamingProducts.classList.remove("open-gaming-products");

		renderCatalog();
	});

	if (inputSearch.value) {
		renderCatalog(inputSearch.value);
	} else {
		renderCatalog();
	}
});
