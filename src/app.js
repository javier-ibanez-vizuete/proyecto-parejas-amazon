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

const calculateTotalPrice = () => {
	return productsOnTrolly.reduce((total, product) => total + product.price, 0);
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

	const spanFloatingTrolly = document.querySelector(".span-floating-products-on-trolly")
	spanFloatingTrolly.textContent = productsOnTrolly.length;
};

const recalculateProductsInTheWishList = () => {
	const spanForProductsOnWishList = document.querySelector(".span-products-on-wish-list");
	const numberOfProducts = productsOnWishList.length;
	spanForProductsOnWishList.textContent = numberOfProducts;
};

const removeProductFromTrolly = (product) => {
	const indexOfProduct = productsOnTrolly.findIndex((product) => product.id);
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
		renderWishList();
	});

	const addCartBtn = document.createElement("button");
	addCartBtn.classList.add("btn-add-to-trolly", "btn-style");

	addCartBtn.textContent = product.addcart ? "Eliminar del Carrito" : "Agregar al carrito";

	addCartBtn.addEventListener("click", () => {
		product.addcart = !product.addcart;
		if (product.addcart && !productsOnTrolly.some(({ id }) => id === product.id)) {
			productsOnTrolly.push(product);
		}
		if (!product.addcart) {
			removeProductFromTrolly(product);
		}
		addCartBtn.textContent = product.addcart ? "Eliminar del Carrito" : "Agregar al carrito";
		saveDataInStorage("trolly", productsOnTrolly);
		recalculateProductsInTheCar();
		saveDataInStorage("productsOnStorage", productsOnStorage);
		renderCatalog();
		renderTrolly();
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

const filterProductsByMonitors = (name) => {
	const filterByMonitors = productsOnStorage.filter((product) => {
		const categoryFilter = product.category.toLowerCase() === "monitor";
		const nameFilter = product.name.toLowerCase().includes(name.trim().toLowerCase());
		return categoryFilter && nameFilter;
	});
	if (filterByMonitors.length) {
		renderTitleCatalog(filterByMonitors);
		return filterByMonitors;
	}
	return productsOnStorage;
};

const filterProductsByTablets = (name) => {
	const filterByTablets = productsOnStorage.filter((product) => {
		const categoryFilter = product.category.toLowerCase() === "tablets";
		const nameFilter = product.name.toLowerCase().includes(name.trim().toLowerCase());
		return categoryFilter && nameFilter;
	});
	if (filterByTablets.length) {
		renderTitleCatalog(filterByTablets);
		return filterByTablets;
	}
	return productsOnStorage;
};

const filterProductsByStorages = (name) => {
	const filterByStorages = productsOnStorage.filter((product) => {
		const categoryFilter = product.category.toLowerCase() === "almacenamiento";
		const nameFilter = product.name.toLowerCase().includes(name.trim().toLowerCase());
		return categoryFilter && nameFilter;
	});
	if (filterByStorages.length) {
		renderTitleCatalog(filterByStorages);
		return filterByStorages;
	}
	return productsOnStorage;
};

const filterProductsByGaming = (name) => {
	const filterByGaming = productsOnStorage.filter((product) => {
		const categoryFilter = product.category.toLowerCase() === "gaming";
		const nameFilter = product.name.toLowerCase().includes(name.trim().toLowerCase());
		return categoryFilter && nameFilter;
	});
	if (filterByGaming.length) {
		renderTitleCatalog(filterByGaming);
		return filterByGaming;
	}
	return productsOnStorage;
};

const filterProductsByHeadphones = (name) => {
	const filterByHeadphones = productsOnStorage.filter((product) => {
		const categoryFilter = product.category.toLowerCase() === "auriculares";
		const nameFilter = product.name.toLowerCase().includes(name.trim().toLowerCase());
		return categoryFilter && nameFilter;
	});
	if (filterByHeadphones.length) {
		renderTitleCatalog(filterByHeadphones);
		return filterByHeadphones;
	}
	return productsOnStorage;
};

const removeFromTrollyCatalog = (product) => {
	const indexOfProduct = productsOnTrolly.findIndex((element) => element.id === product.id);
	productsOnTrolly.splice(indexOfProduct, 1);
	const productToRemoveFromTrolly = productsOnStorage.findIndex((productOnCloud) => productOnCloud.id === product.id);
	productsOnStorage[productToRemoveFromTrolly].addcart = false;

	renderCatalog();

	saveDataInStorage("productsOnStorage", productsOnStorage);
	saveDataInStorage("trolly", productsOnTrolly);
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
		renderCatalog();
		renderTrolly();
	});
	divInfoTrollyCardContainer.appendChild(btnForRemoveFromTrolly);

	divTrollyCard.append(divImageTrollyCardContainer, divInfoTrollyCardContainer);

	return divTrollyCard;
};
const createImageForWishedProduct = (image) => {
	const imageContainer = document.createElement("div");
	imageContainer.classList.add("wished-product-image-container");

	const imgWishedProduct = document.createElement("img");
	imgWishedProduct.src = image;
	imageContainer.append(imgWishedProduct);

	return imageContainer;
};

const removeFromWishList = (id) => {
	const indexOfProduct = productsOnWishList.findIndex((product) => product.id === id);
	productsOnWishList.splice(indexOfProduct, 1);

	const productToRemoveFromWishList = productsOnStorage.findIndex((element) => element.id === id);
	console.log("Que vale id", id);
	console.log("Que vale ProductToRemove", productToRemoveFromWishList);
	productsOnStorage[productToRemoveFromWishList].wishlist = false;

	saveDataInStorage("wishlist", productsOnWishList);
	saveDataInStorage("productsOnStorage", productsOnStorage);
};

const createButtonForWishedCard = (id) => {
	const btnForWishedCard = document.createElement("button");
	btnForWishedCard.classList.add("btn-style", "btn-remove-wish-list");
	btnForWishedCard.textContent = "Eliminar de Deseados";

	btnForWishedCard.addEventListener("click", () => {
		removeFromWishList(id);
		recalculateProductsInTheWishList();

		renderWishList();
	});

	return btnForWishedCard;
};

const createInfoWishedCard = (product) => {
	const divInfoContainer = document.createElement("div");
	divInfoContainer.classList.add("wished-product-info-container");

	const h3PriceContainer = document.createElement("h3");
	h3PriceContainer.textContent = `${product.price}€`;

	const paragraphWishedProductName = document.createElement("p");
	paragraphWishedProductName.textContent = product.name;

	const { id } = product;
	const btnWishedCard = createButtonForWishedCard(id);

	divInfoContainer.append(h3PriceContainer, paragraphWishedProductName, btnWishedCard);

	return divInfoContainer;
};

const createWishListCard = (product) => {
	const divWishedCard = document.createElement("div");
	divWishedCard.classList.add("wished-product-card");

	const { image } = product;
	const imageWishedProduct = createImageForWishedProduct(image);
	divWishedCard.append(imageWishedProduct);

	const infoCardContainer = createInfoWishedCard(product);
	divWishedCard.append(infoCardContainer);

	return divWishedCard;
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
	const catalogSection = document.querySelector(".catalog-section");
	const btnFullProducts = document.querySelector(".btn-full-informatica");
	const btnLaptopsProducts = document.querySelector(".btn-laptops-products");
	const btnMonitorsProducts = document.querySelector(".btn-monitors-products");
	const btnTabletsProducts = document.querySelector(".btn-tablets-products");
	const btnHeadphonesProducts = document.querySelector(".btn-headphones-products");
	const btnStoragesProducts = document.querySelector(".btn-storages-products");
	const btnGamingProducts = document.querySelector(".btn-gaming-products");
	const productsContainer = document.querySelector(".products-container");
	const trollyCatalog = document.querySelector(".trolly-container");
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
		const onlyMonitorsProducts = filterProductsByMonitors(filtroTexto);
		onlyMonitorsProducts.forEach((product, index) => {
			const productCard = createProductCard(product, index);
			productsContainer.append(productCard);
		});
	}

	if (btnTabletsProducts.classList.contains("open-tablets-products")) {
		const onlyTabletsProducts = filterProductsByTablets(filtroTexto);
		onlyTabletsProducts.forEach((product, index) => {
			const productCard = createProductCard(product, index);
			productsContainer.append(productCard);
		});
	}

	if (btnStoragesProducts.classList.contains("open-storages-products")) {
		const onlyStoragesProducts = filterProductsByStorages(filtroTexto);
		onlyStoragesProducts.forEach((product, index) => {
			const productCard = createProductCard(product, index);
			productsContainer.append(productCard);
		});
	}

	if (btnGamingProducts.classList.contains("open-gaming-products")) {
		const onlyGamingProducts = filterProductsByGaming(filtroTexto);
		onlyGamingProducts.forEach((product, index) => {
			const productCard = createProductCard(product, index);
			productsContainer.append(productCard);
		});
	}

	if (btnHeadphonesProducts.classList.contains("open-headphones-products")) {
		const onlyHeadphonesProducts = filterProductsByHeadphones(filtroTexto);
		onlyHeadphonesProducts.forEach((product, index) => {
			const productCard = createProductCard(product, index);
			productsContainer.append(productCard);
		});
	}

	if (!productsOnTrolly.length) {
		trollyCatalog.classList.add("dont-show");
		catalogSection.classList.remove("dont-show");
	}

	recalculateProductsInTheWishList();
	recalculateProductsInTheCar();
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

const renderWishList = () => {
	const divWishListSectionContainer = document.querySelector(".wishlist-container-section");
	divWishListSectionContainer.innerHTML = "";

	const titleForWishList = document.createElement("h3");
	titleForWishList.classList.add("title-of-wish-list");
	titleForWishList.textContent = "Productos Deseados";
	divWishListSectionContainer.append(titleForWishList);

	const wishListProductsContainer = document.createElement("div");
	wishListProductsContainer.classList.add("products-on-wish-list-container");

	productsOnWishList.forEach((product) => {
		const wishListProductCard = createWishListCard(product);
		wishListProductsContainer.append(wishListProductCard);
	});

	divWishListSectionContainer.append(wishListProductsContainer);

	const wishlistBtnsContainer = document.createElement("div");
	wishlistBtnsContainer.classList.add("wislist-buttons-container");

	const moveToCartBtn = document.createElement("button");
	moveToCartBtn.classList.add("move-to-cart-btn");
	moveToCartBtn.textContent = "Mover al carrito";

	const resetWishlist = document.createElement("button");
	resetWishlist.classList.add("reset-wishlist");
	resetWishlist.textContent = "Vaciar lista de deseos";

	divWishListSectionContainer.appendChild(wishlistBtnsContainer);
	wishlistBtnsContainer.appendChild(moveToCartBtn);
	wishlistBtnsContainer.appendChild(resetWishlist);
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

	productsOnTrolly.forEach((product) => {
		const productOnTrollyCard = createTrollyCard(product);

		trollyCardsContainer.append(productOnTrollyCard);
	});

	divTrollySectionContainer.append(trollyCardsContainer);

	const totalPriceContainer = document.createElement("div");
	totalPriceContainer.classList.add("total-price-container");

	const totalPriceLabel = document.createElement("h3");
	totalPriceLabel.textContent = `Total: ${calculateTotalPrice()}€`;
	totalPriceContainer.append(totalPriceLabel);

	const payButton = document.createElement("button");
	payButton.classList.add("btn-pay");
	payButton.textContent = "Pagar";
	payButton.addEventListener("click", () => {
		alert("Redirigiendo al pago...");
	});

	totalPriceContainer.append(payButton);
	divTrollySectionContainer.append(totalPriceContainer);
};

/**
 * /**
 * Ejecuta la inicialización de la página cuando el DOM ha cargado completamente.
 * Configura los eventos para el filtrado y navegación entre categorías del catálogo de productos.
 */
document.addEventListener("DOMContentLoaded", () => {
	// SELECCION DE ELEMENTOS
	createBackToTopButton();
	createFloatingTrollyButton();
	const inputLogin = document.querySelector("#loginInput");
	const btnContinue = document.querySelector(".continue-btn");

	const inputSearch = document.querySelector("#input-search-product");
	const btnSearch = document.querySelector(".btnSearch");

	const spanForUserName = document.querySelector(".span-for-user-name");
	const btnForTrollyCatalog = document.querySelector(".btn-trolly-catalog");
	const btnFloatingTrollyContainer = document.querySelector(".floating-trolly-button")
	const btnForWishList = document.querySelector(".wishlist-container");
	const h3CategoryTitle = document.querySelector(".category-title");

	const catalogSection = document.querySelector(".catalog-section");
	const btnFullProducts = document.querySelector(".btn-full-informatica");
	const btnLaptopsProducts = document.querySelector(".btn-laptops-products");
	const btnMonitorsProducts = document.querySelector(".btn-monitors-products");
	const btnTabletsProducts = document.querySelector(".btn-tablets-products");
	const btnHeadphonesProducts = document.querySelector(".btn-headphones-products");
	const btnStoragesProducts = document.querySelector(".btn-storages-products");
	const btnGamingProducts = document.querySelector(".btn-gaming-products");
	
	const btnGoToTop = document.querySelector(".btn-back-to-top");
	
	const wishListCatalog = document.querySelector(".wishlist-container-section");
	const trollyCatalog = document.querySelector(".trolly-container");
	if (!productsOnTrolly.length) {
		trollyCatalog.classList.add("dont-show");
	}

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
			catalogSection.classList.remove("dont-show");
		}

		if (productsOnTrolly.length && !trollyCatalog.classList.contains("dont-show")) {
			console.log("NO TIENE LA CLASE DONT SHOW");
			catalogSection.classList.remove("dont-show");
			trollyCatalog.classList.add("dont-show");
			wishListCatalog.classList.add("dont-show");
			return;
		}
		if (productsOnTrolly.length && trollyCatalog.classList.contains("dont-show")) {
			console.log("SI TIENE LA CLASE");
			catalogSection.classList.add("dont-show");
			trollyCatalog.classList.remove("dont-show");
			wishListCatalog.classList.add("dont-show");
			return;
		}
		renderCatalog();
	});

	btnFloatingTrollyContainer.addEventListener("click", () => {
		if (!productsOnTrolly.length) {
			alert("Tu Carrito esta vacio");
			catalogSection.classList.remove("dont-show");
		}
		window.scrollTo({top: 0, behavior: "smooth"});
		
		if (productsOnTrolly.length && !trollyCatalog.classList.contains("dont-show")) {
			console.log("NO TIENE LA CLASE DONT SHOW");
			catalogSection.classList.remove("dont-show");
			trollyCatalog.classList.add("dont-show");
			wishListCatalog.classList.add("dont-show");
			return;
		}
		if (productsOnTrolly.length && trollyCatalog.classList.contains("dont-show")) {
			console.log("SI TIENE LA CLASE");
			catalogSection.classList.add("dont-show");
			trollyCatalog.classList.remove("dont-show");
			wishListCatalog.classList.add("dont-show");
			return;
		}
		renderCatalog();
	})

	btnForWishList.addEventListener("click", () => {
		if (!productsOnWishList.length) {
			alert("Tu Lista de Deseados esta Vacia");
			catalogSection.classList.remove("dont-show");
			trollyCatalog.classList.add("dont-show");
			wishListCatalog.classList.add("dont-show");
		}
		if (productsOnWishList.length && !wishListCatalog.classList.contains("dont-show")) {
			catalogSection.classList.remove("dont-show");
			wishListCatalog.classList.add("dont-show");
			trollyCatalog.classList.add("dont-show");
			return;
		}
		if (productsOnWishList.length && wishListCatalog.classList.contains("dont-show")) {
			catalogSection.classList.add("dont-show");
			wishListCatalog.classList.remove("dont-show");
			trollyCatalog.classList.add("dont-show");
			return;
		}
		renderCatalog();
		renderWishList();
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

	window.addEventListener("scroll", () => {
		if (window.scrollY > 500) {
			btnFloatingTrollyContainer.style.top = "40px";
			btnGoToTop.style.bottom = "40px";
		} else {
			btnFloatingTrollyContainer.style.top = "-70px";
			btnGoToTop.style.bottom = "-70px";
		}
	});

	btnGoToTop.addEventListener("click", () => {
		window.scrollTo({top: 0, behavior: "smooth"})
	})

	spanForUserName.textContent = getDataFromStorage("username");

	if (inputSearch.value) {
		renderCatalog(inputSearch.value);
	} else {
		renderCatalog();
	}

	renderTrolly();
	renderWishList();
	recalculateProductsInTheWishList();
	recalculateProductsInTheCar();
});
