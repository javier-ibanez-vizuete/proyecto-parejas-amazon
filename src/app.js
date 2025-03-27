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

// const calculateTotalTrollyPrice = () => {
// 	return productsOnTrolly.reduce((total, product) => {
// 		console.log(`
// 			Total Acumulado => ${total}
// 			Precio del producto => ${product.price}
// 			Cantidad de Producto => ${product.quantity}
// 			precio total segun cantidad => ${product.price * product.quantity}
// 			TOTAL => ${total + (product.price * product.quantity)}
// 			`);
// 		return total + (product.price * product.quantity);
// 	}, 0);
// };

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
