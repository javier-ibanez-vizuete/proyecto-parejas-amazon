// EVITAR QUE SALTE EL LOGIN
if (getDataFromStorage("username")) {
	document.querySelector(".login-background-container").style.display = "none";
}

// RENAME THE TITLE OF DOCUMENT.
if (getDataFromStorage("document-title")) {
	document.title = getDataFromStorage("document-title");
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


const recalculateProductsInTheCar = () => {
	const spanForProductsOnTrolly = document.querySelector(".span-products-on-trolly");
	const numberOfProducts = productsOnTrolly.length;
	spanForProductsOnTrolly.textContent = numberOfProducts;

	const spanFloatingTrolly = document.querySelector(".span-floating-products-on-trolly");
	spanFloatingTrolly.textContent = productsOnTrolly.length;
};

const recalculateProductsInTheWishList = () => {
	const spanForProductsOnWishList = document.querySelector(".span-products-on-wish-list");
	const numberOfProducts = productsOnWishList.length;
	spanForProductsOnWishList.textContent = numberOfProducts;
};

const removeFromTrollyCatalog = (product) => {
	const indexOfProduct = productsOnTrolly.findIndex((element) => element.id === product.id);
	productsOnTrolly.splice(indexOfProduct, 1);
	const productToRemoveFromTrolly = productsOnStorage.findIndex((productOnCloud) => productOnCloud.id === product.id);
	productsOnStorage[productToRemoveFromTrolly].addcart = false;

if (!productsOnTrolly.length) {
	renderCatalog();
}
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
	productsOnStorage[productToRemoveFromWishList].wishlist = false;

	if (!productsOnWishList.length) {
		renderCatalog();
	}
	
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
	elementsCaller();

	const inputSearch = document.querySelector("#input-search-product");
	const btnSearch = document.querySelector(".btnSearch");

	const btnForTrollyCatalog = document.querySelector(".btn-trolly-catalog");
	const btnFloatingTrollyContainer = document.querySelector(".floating-trolly-button");
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
			catalogSection.classList.remove("dont-show");
			trollyCatalog.classList.add("dont-show");
			wishListCatalog.classList.add("dont-show");
			return;
		}
		if (productsOnTrolly.length && trollyCatalog.classList.contains("dont-show")) {
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
		window.scrollTo({ top: 0, behavior: "smooth" });

		if (productsOnTrolly.length && !trollyCatalog.classList.contains("dont-show")) {
			catalogSection.classList.remove("dont-show");
			trollyCatalog.classList.add("dont-show");
			wishListCatalog.classList.add("dont-show");
			return;
		}
		if (productsOnTrolly.length && trollyCatalog.classList.contains("dont-show")) {
			catalogSection.classList.add("dont-show");
			trollyCatalog.classList.remove("dont-show");
			wishListCatalog.classList.add("dont-show");
			return;
		}
		renderCatalog();
	});

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
		wishListCatalog.classList.add("dont-show");
		trollyCatalog.classList.add("dont-show");
		catalogSection.classList.remove("dont-show");

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
		wishListCatalog.classList.add("dont-show");
		trollyCatalog.classList.add("dont-show");
		catalogSection.classList.remove("dont-show");

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
		wishListCatalog.classList.add("dont-show");
		trollyCatalog.classList.add("dont-show");
		catalogSection.classList.remove("dont-show");

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
		wishListCatalog.classList.add("dont-show");
		trollyCatalog.classList.add("dont-show");
		catalogSection.classList.remove("dont-show");

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
		wishListCatalog.classList.add("dont-show");
		trollyCatalog.classList.add("dont-show");
		catalogSection.classList.remove("dont-show");

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
		wishListCatalog.classList.add("dont-show");
		trollyCatalog.classList.add("dont-show");
		catalogSection.classList.remove("dont-show");

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
		wishListCatalog.classList.add("dont-show");
		trollyCatalog.classList.add("dont-show");
		catalogSection.classList.remove("dont-show");

		renderCatalog(inputSearch.value);
	});

	window.addEventListener("load", () => {
		window.scrollTo(0, 0);
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
		window.scrollTo({ top: 0, behavior: "smooth" });
	});

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
