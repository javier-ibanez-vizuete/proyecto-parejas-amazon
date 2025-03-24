// EVITAR QUE SALTE EL LOGIN
if (getDataFromStorage("username")) {
	document.querySelector(".login-background-container").style.display = "none";
}

/**
 * Guarda products en localStorage.
 */
let productsOnStorage = products;
// saveDataInStorage("productsOnStorage", products);
if (getDataFromStorage("productsOnStorage")) {
	productsOnStorage = JSON.parse(localStorage.getItem("productsOnStorage"));
	// saveDataInStorage("productsOnStorage", productsOnStorage);
}

// Array para productos en el carrito
let productsOnTrolly = productsOnStorage.filter(({ addcart }) => addcart);
if (getDataFromStorage("trolly")) {
	productsOnTrolly = JSON.parse(localStorage.getItem("trolly"));
}

// Array para productos en la WishList
let productsOnWishList = productsOnStorage.filter(({ wishlist }) => wishlist);
if (getDataFromStorage("wishlist")) {
	productsOnWishList = JSON.parse(localStorage.getItem("wishlist"));
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

const recalculateProductsInTheCar = () => {
	const spanForProductsOnTrolly = document.querySelector(".span-products-on-trolly");
	const numberOfProducts = productsOnTrolly.length;
	spanForProductsOnTrolly.textContent = numberOfProducts;
};

const recalculateProductsInTheWishList = () => {
	const spanForProductsOnWishList = document.querySelector(".span-products-on-wish-list");
	const numberOfProducts = productsOnWishList.length;
	spanForProductsOnWishList.textContent = numberOfProducts;
};

const removeProductFromTrolly = (product) => {
	const indexOfProduct = productsOnTrolly.findIndex((product) => product.id);
	console.log(indexOfProduct);
	productsOnTrolly.splice(indexOfProduct, 1);
};

const removeProductFromWishList = (product) => {
	const indexOfProduct = productsOnWishList.findIndex((product) => product.id);
	productsOnWishList.splice(indexOfProduct, 1);
};

const createButtonsContainer = (product, index) => {
	const buttonsContainer = document.createElement("div");
	buttonsContainer.classList.add("buttons-card-container");

	const wishlistBtn = document.createElement("button");
	wishlistBtn.classList.add("btn-add-to-wish-list", "btn-style");

	wishlistBtn.textContent = product.wishlist ? "Quitar de Deseados" : "Añadir a deseados";
	wishlistBtn.addEventListener("click", () => {
		product.wishlist = !product.wishlist;
		if (product.wishlist && !productsOnWishList.some(({ id }) => id === product.id)) {
			productsOnWishList.push(product);
		}
		if (!product.wishlist) {
			removeProductFromWishList(product);
		}
		wishlistBtn.textContent = product.wishlist ? "Quitar de Deseados" : "Añadir a deseados";
		saveDataInStorage("wishlist", productsOnWishList);
		recalculateProductsInTheWishList();
		saveDataInStorage("productsOnStorage", productsOnStorage);
		renderCatalog();
	});

	const addCartBtn = document.createElement("button");
	addCartBtn.classList.add("btn-add-to-trolly", "btn-style");

	addCartBtn.textContent = product.addcart ? "Eliminar del Carrito" : "Agregar al carrito";

	addCartBtn.addEventListener("click", () => {
		product.addcart = !product.addcart;
		if (product.addcart && !productsOnTrolly.some(({ id }) => id === product.id)) {
			productsOnTrolly.push(product);
			console.log("HE entrado en el push");
			console.log(productsOnTrolly.length);
		}
		if (!product.addcart) {
			removeProductFromTrolly(product);
		}
		addCartBtn.textContent = product.addcart ? "Eliminar del Carrito" : "Agregar al carrito";
		saveDataInStorage("trolly", productsOnTrolly);
		recalculateProductsInTheCar();
		saveDataInStorage("productsOnStorage", productsOnStorage);
		renderCatalog();
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
const createInfoProductContainer = (product, index) => {
	const infoContainer = document.createElement("div");
	infoContainer.classList.add("card-information-container");

	const productPrice = document.createElement("h3");
	productPrice.classList.add("product-price");
	productPrice.textContent = `${product.price} €`;

	const productName = document.createElement("p");
	productName.classList.add("product-name");
	productName.textContent = product.name;

	const buttonsContainer = createButtonsContainer(product, index);

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
const createProductCard = (product, index) => {
	const cardContainer = document.createElement("div");
	cardContainer.classList.add("product-card");

	const { image } = product;
	const divImageContainer = createProductimage(image);

	const divInfoProductContainer = createInfoProductContainer(product, index);

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
		renderTitleCatalog(productsOnStorage);
		return productsOnStorage;
	}
	const filterByName = productsOnStorage.filter((product) =>
		product.name.toLowerCase().includes(name.trim().toLowerCase())
	);
	renderTitleCatalog(filterByName);
	return filterByName;
};

const filterProductsByLaptops = (name) => {
	const filterByLaptops = productsOnStorage.filter((product) => {
		const categoryFilter = product.category.toLowerCase() === "laptops";
		const nameFilter = product.name.toLowerCase().includes(name.trim().toLowerCase());
		return categoryFilter && nameFilter;
	});
	if (filterByLaptops.length) {
		renderTitleCatalog(filterByLaptops);
		return filterByLaptops;
	}
	return productsOnStorage;
};

const filterProductsByMonitors = () => {
	const filterByMonitors = productsOnStorage.filter(({ category }) => category.toLowerCase() === "monitor");
	if (filterByMonitors.length) {
		renderTitleCatalog(filterByMonitors);
		return filterByMonitors;
	}
	return productsOnStorage;
};

const filterProductsByTablets = () => {
	const filterByTablets = productsOnStorage.filter(({ category }) => category.toLowerCase() === "tablets");
	if (filterByTablets.length) {
		renderTitleCatalog(filterByTablets);
		return filterByTablets;
	}
	return productsOnStorage;
};

const filterProductsByStorages = () => {
	const filterByStorages = productsOnStorage.filter(({ category }) => category.toLowerCase() === "almacenamiento");
	if (filterByStorages.length) {
		renderTitleCatalog(filterByStorages);
		return filterByStorages;
	}
	return productsOnStorage;
};

const filterProductsByGaming = () => {
	const filterByGaming = productsOnStorage.filter(({ category }) => category.toLowerCase() === "gaming");
	if (filterByGaming.length) {
		renderTitleCatalog(filterByGaming);
		return filterByGaming;
	}
	return productsOnStorage;
};

const filterProductsByHeadphones = () => {
	const filterByHeadphones = productsOnStorage.filter(({ category }) => category.toLowerCase() === "auriculares");
	if (filterByHeadphones.length) {
		renderTitleCatalog(filterByHeadphones);
		return filterByHeadphones;
	}
	return productsOnStorage;
};

const removeFromTrollyCatalog = (product) => {
	const indexOfProduct = productsOnTrolly.findIndex(({ id }) => id === product);
	productsOnTrolly.splice(indexOfProduct, 1);
	saveDataInStorage("trolly", productsOnTrolly);
	console.log(indexOfProduct);
};

const createTrollyCard = (product) => {
	const divTrollyCard = document.createElement("div");
	divTrollyCard.classList.add("trolly-card");

	const divImageTrollyCardContainer = document.createElement("div");
	divImageTrollyCardContainer.classList.add("card-trolly-image-container");

	const imageTrollyCard = document.createElement("img");
	imageTrollyCard.src = product.image;
	divImageTrollyCardContainer.append(imageTrollyCard);

	const divInfoTrollyCardContainer = document.createElement("div");
	divInfoTrollyCardContainer.classList.add("card-info-trolly-container");

	const h3PriceTrollyCard = document.createElement("h3");
	h3PriceTrollyCard.textContent = `${product.price}€`;
	divInfoTrollyCardContainer.appendChild(h3PriceTrollyCard);

	const productTrollyName = document.createElement("p");
	productTrollyName.classList.add("product-trolly-name");
	productTrollyName.textContent = product.name;
	divInfoTrollyCardContainer.appendChild(productTrollyName);

	const btnForRemoveFromTrolly = document.createElement("button");
	btnForRemoveFromTrolly.classList.add("btn-remove-from-trolly", "btn-style");
	btnForRemoveFromTrolly.textContent = "Eliminar del carrito";
	btnForRemoveFromTrolly.addEventListener("click", () => {
		removeFromTrollyCatalog(product);
		recalculateProductsInTheCar();
		renderTrolly();
	});
	divInfoTrollyCardContainer.appendChild(btnForRemoveFromTrolly);

	divTrollyCard.append(divImageTrollyCardContainer, divInfoTrollyCardContainer);

	return divTrollyCard;
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
		productsByName.forEach((product, index) => {
			const productCard = createProductCard(product, index);
			productsContainer.append(productCard);
		});
	}

	if (btnLaptopsProducts.classList.contains("open-laptops-products")) {
		const onlyLaptopProducts = filterProductsByLaptops(filtroTexto);
		onlyLaptopProducts.forEach((product, index) => {
			const productCard = createProductCard(product, index);
			productsContainer.append(productCard);
		});
	}

	if (btnMonitorsProducts.classList.contains("open-monitors-products")) {
		const onlyMonitorsProducts = filterProductsByMonitors();
		onlyMonitorsProducts.forEach((product, index) => {
			const productCard = createProductCard(product, index);
			productsContainer.append(productCard);
		});
	}

	if (btnTabletsProducts.classList.contains("open-tablets-products")) {
		const onlyTabletsProducts = filterProductsByTablets();
		onlyTabletsProducts.forEach((product, index) => {
			const productCard = createProductCard(product, index);
			productsContainer.append(productCard);
		});
	}

	if (btnStoragesProducts.classList.contains("open-storages-products")) {
		const onlyStoragesProducts = filterProductsByStorages();
		onlyStoragesProducts.forEach((product, index) => {
			const productCard = createProductCard(product, index);
			productsContainer.append(productCard);
		});
	}

	if (btnGamingProducts.classList.contains("open-gaming-products")) {
		const onlyGamingProducts = filterProductsByGaming();
		onlyGamingProducts.forEach((product, index) => {
			const productCard = createProductCard(product, index);
			productsContainer.append(productCard);
		});
	}

	if (btnHeadphonesProducts.classList.contains("open-headphones-products")) {
		const onlyHeadphonesProducts = filterProductsByHeadphones();
		onlyHeadphonesProducts.forEach((product, index) => {
			const productCard = createProductCard(product, index);
			productsContainer.append(productCard);
		});
	}
};

const renderTitleCatalog = (catalog) => {
	const divTitleCatalogContainer = document.querySelector(".title-catalog-container");
	divTitleCatalogContainer.innerHTML = "";

	const H3titleForCatalog = document.createElement("h3");
	H3titleForCatalog.classList.add("number-of-products");
	H3titleForCatalog.textContent = `(${catalog.length})`;
	divTitleCatalogContainer.append(H3titleForCatalog);

	return divTitleCatalogContainer;
};

const renderTrolly = () => {
	const divTrollySectionContainer = document.querySelector(".trolly-container");
	divTrollySectionContainer.innerHTML = "";

	const titleForTrolly = document.createElement("h3");
	titleForTrolly.classList.add("title-of-trolly");
	titleForTrolly.textContent = "Productos en Carrito";
	divTrollySectionContainer.append(titleForTrolly);

	const trollyCardsContainer = document.createElement("div");
	trollyCardsContainer.classList.add("product-on-trolly-container");
	if (!productsOnTrolly.length) {
		// alert("No hay elementos en el carrito!");
	}
	productsOnTrolly.forEach((product) => {
		const productOnTrollyCard = createTrollyCard(product);

		trollyCardsContainer.append(productOnTrollyCard);
	});

	divTrollySectionContainer.append(trollyCardsContainer);
};
renderTrolly();
/**
 * /**
 * Ejecuta la inicialización de la página cuando el DOM ha cargado completamente.
 * Configura los eventos para el filtrado y navegación entre categorías del catálogo de productos.
 */
document.addEventListener("DOMContentLoaded", () => {
	// SELECCION DE ELEMENTOS

	const inputLogin = document.querySelector("#loginInput");
	const btnContinue = document.querySelector(".continue-btn");

	const inputSearch = document.querySelector("#input-search-product");
	const btnSearch = document.querySelector(".btnSearch");

	const spanForUserName = document.querySelector(".span-for-user-name");
	const btnForTrollyCatalog = document.querySelector(".btn-trolly-catalog")
	const h3CategoryTitle = document.querySelector(".category-title");

	const catalogSection = document.querySelector(".catalog-section")
	const btnFullProducts = document.querySelector(".btn-full-informatica");
	const btnLaptopsProducts = document.querySelector(".btn-laptops-products");
	const btnMonitorsProducts = document.querySelector(".btn-monitors-products");
	const btnTabletsProducts = document.querySelector(".btn-tablets-products");
	const btnHeadphonesProducts = document.querySelector(".btn-headphones-products");
	const btnStoragesProducts = document.querySelector(".btn-storages-products");
	const btnGamingProducts = document.querySelector(".btn-gaming-products");

	const trollyCatalog = document.querySelector(".trolly-container")

	// ADDEVENTLISTENER
	btnContinue.addEventListener("click", (event) => {
		event.preventDefault();
		if (!inputLogin.value) {
			window.location.reload();
		}
		const divLoginContainer = document.querySelector(".login-background-container");
		divLoginContainer.style.display = "none";
		saveDataInStorage("username", inputLogin.value);
		spanForUserName.textContent = getDataFromStorage("username");
		window.scrollTo(0, 0);
	});

	inputSearch.addEventListener("keyup", () => {
		saveDataInStorage("searchOnStorage", inputSearch.value);
		renderCatalog(inputSearch.value);
	});

	btnSearch.addEventListener("click", (event) => {
		event.preventDefault();
		renderCatalog(inputSearch.value);
	});

	btnForTrollyCatalog.addEventListener("click", () => {
		if (!productsOnTrolly.length) {
			alert("Tu Carrito esta vacio");
		}
		if (productsOnTrolly.length) {
			catalogSection.classList.toggle("dont-show");
			trollyCatalog.classList.toggle("dont-show");
		}
		renderCatalog();
	})

	btnFullProducts.addEventListener("click", () => {
		h3CategoryTitle.textContent = "Informática";
		btnFullProducts.classList.add("open-all-products");
		btnLaptopsProducts.classList.remove("open-laptops-products");
		btnMonitorsProducts.classList.remove("open-monitors-products");
		btnTabletsProducts.classList.remove("open-tablets-products");
		btnHeadphonesProducts.classList.remove("open-headphones-products");
		btnStoragesProducts.classList.remove("open-storages-products");
		btnGamingProducts.classList.remove("open-storages-products");

		renderCatalog(inputSearch.value);
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

		renderCatalog(inputSearch.value);
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

		renderCatalog(inputSearch.value);
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

		renderCatalog(inputSearch.value);
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

		renderCatalog(inputSearch.value);
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

		renderCatalog(inputSearch.value);
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

		renderCatalog(inputSearch.value);
	});

	spanForUserName.textContent = getDataFromStorage("username");

	if (inputSearch.value) {
		renderCatalog(inputSearch.value);
	} else {
		renderCatalog();
	}

	recalculateProductsInTheWishList();
	recalculateProductsInTheCar();
});
