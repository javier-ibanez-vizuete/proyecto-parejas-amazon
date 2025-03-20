let productsOnStorage = products;
saveDataInStorage("productsOnStorage", products);
if (getDataFromStorage("productsOnStorage")) {
	saveDataInStorage("productsOnStorage", productsOnStorage);
}

const clearContainer = () => {
	const productsContainer = document.querySelector(".products-container");
	productsContainer.innerHTML = "";
};

const createProductimage = (image) => {
	const divImageContainer = document.createElement("div");
	divImageContainer.classList.add("img-product-container");

	const imgProduct = document.createElement("img");
	imgProduct.src = image;
	divImageContainer.append(imgProduct);
	return divImageContainer;
};

const createButtonsContainer = (isOnWishList, isOnTrolly) => {
	const divButtonsContainer = document.createElement("div");
	divButtonsContainer.classList.add("buttons-card-container");

	const btnForWishLisst = document.createElement("button");
	btnForWishLisst.classList.add("btn-add-to-wish-list", "btn-style");
	btnForWishLisst.textContent = isOnWishList ? "Quitar de Deseados" : "Añadir a deseados";
	btnForWishLisst.addEventListener("click", () => {
		isOnWishList = !isOnWishList;
		btnForWishLisst.textContent = isOnWishList ? "Quitar de Deseados" : "Añadir a deseados";
		saveDataInStorage(productsOnStorage);
	});
	divButtonsContainer.append(btnForWishLisst);

	const btnForTrolly = document.createElement("button");
	btnForTrolly.classList.add("btn-add-to-trolly", "btn-style");
	btnForTrolly.textContent = isOnTrolly ? "Eliminar del Carrito" : "Agregar al carrito";
	btnForTrolly.addEventListener("click", () => {
		isOnTrolly = !isOnTrolly;
		btnForTrolly.textContent = isOnTrolly ? "Eliminar del Carrito" : "Agregar al carrito";
		saveDataInStorage(productsOnStorage);
	});
	divButtonsContainer.append(btnForTrolly);

	return divButtonsContainer;
};

// FUNCION PARA CREAR EL CONTENEDOR DE INFO DEL PRODUCTO
const createInfoProductContainer = (product) => {
	const divInfoContainer = document.createElement("div");
	divInfoContainer.classList.add("card-information-container");

	const h3ProductPrice = document.createElement("h3");
	h3ProductPrice.classList.add("product-price");
	h3ProductPrice.textContent = `${product.price} €`;
	divInfoContainer.append(h3ProductPrice);

	const paragraphProductName = document.createElement("p");
	paragraphProductName.classList.add("product-name");
	paragraphProductName.textContent = product.name;
	divInfoContainer.append(paragraphProductName);

	const { isOnWishList, isOnTrolly } = product;
	const divButtonsContainer = createButtonsContainer(isOnWishList, isOnTrolly);
	divInfoContainer.append(divButtonsContainer);

	return divInfoContainer;
};

const createProductCard = (product) => {
	const divCardContainer = document.createElement("div");
	divCardContainer.classList.add("product-card");

	const { image } = product;
	const divImageContainer = createProductimage(image);
	divCardContainer.append(divImageContainer);

	const divInfoProductContainer = createInfoProductContainer(product);
	divCardContainer.append(divInfoProductContainer);

	return divCardContainer;
};

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

const renderCatalog = (filtroTexto = "") => {
	// SELECCION DE ELEMENTOS
	// const spanForProductsNumber = document.querySelector(".number-of-products");
	const btnFullProducts = document.querySelector(".btn-full-informatica");
	const btnLaptopsProducts = document.querySelector(".btn-laptops-products");
	const btnMonitorsProducts = document.querySelector(".btn-monitors-products");
	const btnTabletsProducts = document.querySelector(".btn-tablets-products");
	const btnHeadphonesProducts = document.querySelector(".btn-headphones-products");
	const btnStoragesProducts = document.querySelector(".btn-storages-products");
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
// console.log(inputSearch.value);
// 	if (inputSearch.value.length) {
// 		inputSearch.value = getDataFromStorage("searchOnStorage");
// 	}
	// ADDEVENTLISTENER
	inputSearch.addEventListener("keyup", () => {
		saveDataInStorage("searchOnStorage", inputSearch.value);
		const currentSearch = getDataFromStorage("searchOnStorage");
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
		renderCatalog();
	});

	if (inputSearch.value) {
		renderCatalog(inputSearch.value);
	} else {
		renderCatalog();
	}

});
